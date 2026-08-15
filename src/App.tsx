/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS_DATA, QUESTION_CATEGORIES } from './data/questions';
import { ALL_EXAMS } from './data/exams';
import { Question, QuizMode, QuizSessionResult, UserProgressState, ExamData, ExamResultSummary, ExamField } from './types';
import { loadUserProgress, saveUserProgress, clearUserProgress } from './utils/storage';
import { saveExamResult } from './utils/examStorage';
import { gradeExam } from './utils/examScorer';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizCard } from './components/QuizCard';
import { ResultView } from './components/ResultView';
import { QuestionListView } from './components/QuestionListView';
import { CategorySelectView } from './components/CategorySelectView';
import { ExamSelectView } from './components/ExamSelectView';
import { ExamPracticeView } from './components/ExamPracticeView';
import { ExamResultView } from './components/ExamResultView';
import { AlertCircle } from 'lucide-react';

type ViewMode =
  | 'home'
  | 'quiz'
  | 'result'
  | 'list'
  | 'category_select'
  | 'exam_select'
  | 'exam_practice'
  | 'exam_result';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [userState, setUserState] = useState<UserProgressState>(() => loadUserProgress());
  const [showQuitConfirm, setShowQuitConfirm] = useState<boolean>(false);
  const [quitTarget, setQuitTarget] = useState<'home' | 'exam_select' | 'category_select'>('home');

  // クイズ実行時のステート
  const [currentQueue, setCurrentQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentMode, setCurrentMode] = useState<QuizMode>('all');
  const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(null);
  const [sessionResults, setSessionResults] = useState<QuizSessionResult>({
    total: 0,
    correct: 0,
    incorrect: 0,
    incorrectIds: [],
  });

  // 共通テスト演習時のステート
  const [selectedExam, setSelectedExam] = useState<ExamData | null>(null);
  const [examUserAnswers, setExamUserAnswers] = useState<Record<string, number | string>>({});
  const [examResult, setExamResult] = useState<ExamResultSummary | null>(null);

  // 状態変更時に保存
  const updateUserState = useCallback((updater: (prev: UserProgressState) => UserProgressState) => {
    setUserState((prev) => {
      const next = updater(prev);
      saveUserProgress(next);
      return next;
    });
  }, []);

  // ブックマーク切り替え
  const handleToggleBookmark = useCallback(
    (id: number) => {
      updateUserState((prev) => {
        const exists = prev.bookmarks.includes(id);
        const newBookmarks = exists
          ? prev.bookmarks.filter((bId) => bId !== id)
          : [...prev.bookmarks, id];
        return {
          ...prev,
          bookmarks: newBookmarks,
        };
      });
    },
    [updateUserState]
  );

  // シャッフル用ヘルパー (Fisher-Yates)
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // クイズ開始
  const handleStartQuiz = useCallback(
    (mode: QuizMode) => {
      let queue: Question[] = [];

      switch (mode) {
        case 'all':
          // ユーザー要望: 最初から全問学習において完全ランダムで出題
          queue = shuffleArray(QUESTIONS_DATA);
          break;
        case 'random10':
          queue = shuffleArray(QUESTIONS_DATA).slice(0, 10);
          break;
        case 'random20':
          queue = shuffleArray(QUESTIONS_DATA).slice(0, 20);
          break;
        case 'bookmarked':
          queue = shuffleArray(QUESTIONS_DATA.filter((item) => userState.bookmarks.includes(item.id)));
          break;
        case 'incorrect':
          queue = shuffleArray(
            QUESTIONS_DATA.filter((item) => {
              const record = userState.records[item.id];
              return record && record.lastStatus === false;
            })
          );
          break;
        case 'unlearned':
          queue = shuffleArray(
            QUESTIONS_DATA.filter((item) => userState.records[item.id] === undefined)
          );
          break;
        case 'difficulty_s':
          queue = shuffleArray(QUESTIONS_DATA.filter((item) => item.difficulty === 'S'));
          break;
        case 'difficulty_a':
          queue = shuffleArray(QUESTIONS_DATA.filter((item) => item.difficulty === 'A'));
          break;
        case 'difficulty_b':
          queue = shuffleArray(QUESTIONS_DATA.filter((item) => item.difficulty === 'B'));
          break;
        case 'difficulty_c':
          queue = shuffleArray(QUESTIONS_DATA.filter((item) => item.difficulty === 'C'));
          break;
      }

      if (queue.length === 0) return;

      setCurrentMode(mode);
      setCurrentCategoryId(null);
      setCurrentQueue(queue);
      setCurrentIndex(0);
      setSessionResults({
        total: queue.length,
        correct: 0,
        incorrect: 0,
        incorrectIds: [],
      });
      setView('quiz');
      window.scrollTo(0, 0);
    },
    [userState]
  );

  // 分野別クイズ開始
  const handleStartCategoryQuiz = useCallback(
    (categoryId: string, subMode: 'all_random' | 'random10' | 'incorrect') => {
      const catQuestions = QUESTIONS_DATA.filter((q) => q.category === categoryId);
      let queue: Question[] = [];

      if (subMode === 'all_random') {
        queue = shuffleArray(catQuestions);
      } else if (subMode === 'random10') {
        queue = shuffleArray(catQuestions).slice(0, 10);
      } else if (subMode === 'incorrect') {
        queue = shuffleArray(
          catQuestions.filter((q) => userState.records[q.id]?.lastStatus === false)
        );
      }

      if (queue.length === 0) return;

      setCurrentMode('category');
      setCurrentCategoryId(categoryId);
      setCurrentQueue(queue);
      setCurrentIndex(0);
      setSessionResults({
        total: queue.length,
        correct: 0,
        incorrect: 0,
        incorrectIds: [],
      });
      setView('quiz');
      window.scrollTo(0, 0);
    },
    [userState]
  );

  // 範囲指定（教科書の章など）からクイズ開始
  const handleStartQuizByRange = useCallback(
    (startId: number, endId: number, categoryName: string) => {
      const queue = shuffleArray(
        QUESTIONS_DATA.filter((q) => q.id >= startId && q.id <= endId)
      );
      if (queue.length === 0) return;

      setCurrentMode('all');
      setCurrentCategoryId(null);
      setCurrentQueue(queue);
      setCurrentIndex(0);
      setSessionResults({
        total: queue.length,
        correct: 0,
        incorrect: 0,
        incorrectIds: [],
      });
      setView('quiz');
      window.scrollTo(0, 0);
    },
    []
  );

  // 特定のインデックスから開始（リスト画面から）
  const handleStartSingleQuestion = useCallback((index: number) => {
    const queue = QUESTIONS_DATA.slice(index);
    if (queue.length === 0) return;

    setCurrentMode('all');
    setCurrentCategoryId(null);
    setCurrentQueue(queue);
    setCurrentIndex(0);
    setSessionResults({
      total: queue.length,
      correct: 0,
      incorrect: 0,
      incorrectIds: [],
    });
    setView('quiz');
    window.scrollTo(0, 0);
  }, []);

  // 回答処理
  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      const currentQ = currentQueue[currentIndex];
      if (!currentQ) return;

      // ユーザーの進捗記録を更新
      updateUserState((prev) => {
        const existing = prev.records[currentQ.id] || {
          correctCount: 0,
          incorrectCount: 0,
          lastStatus: isCorrect,
        };

        return {
          ...prev,
          records: {
            ...prev.records,
            [currentQ.id]: {
              correctCount: existing.correctCount + (isCorrect ? 1 : 0),
              incorrectCount: existing.incorrectCount + (isCorrect ? 0 : 1),
              lastStatus: isCorrect,
              lastAnsweredAt: Date.now(),
            },
          },
        };
      });

      // 今回のセッション結果を更新
      setSessionResults((prev) => ({
        ...prev,
        correct: prev.correct + (isCorrect ? 1 : 0),
        incorrect: prev.incorrect + (isCorrect ? 0 : 1),
        incorrectIds: isCorrect ? prev.incorrectIds : [...prev.incorrectIds, currentQ.id],
      }));

      // 次の問題へ、または終了
      const nextIndex = currentIndex + 1;
      if (nextIndex < currentQueue.length) {
        setCurrentIndex(nextIndex);
      } else {
        setView('result');
        window.scrollTo(0, 0);
      }
    },
    [currentQueue, currentIndex, updateUserState]
  );

  // 間違えた問題だけを再復習（一問一答）
  const handleRetryIncorrect = useCallback(() => {
    const incorrectQuestions = QUESTIONS_DATA.filter((q) =>
      sessionResults.incorrectIds.includes(q.id)
    );
    if (incorrectQuestions.length === 0) return;

    setCurrentQueue(incorrectQuestions);
    setCurrentIndex(0);
    setSessionResults({
      total: incorrectQuestions.length,
      correct: 0,
      incorrect: 0,
      incorrectIds: [],
    });
    setView('quiz');
    window.scrollTo(0, 0);
  }, [sessionResults.incorrectIds]);

  // 共通テストの開始
  const handleStartExam = useCallback((exam: ExamData) => {
    setSelectedExam(exam);
    setExamUserAnswers({});
    setExamResult(null);
    setView('exam_practice');
    window.scrollTo(0, 0);
  }, []);

  // 共通テストの採点
  const handleFinishExam = useCallback(
    (answers: Record<string, number | string>) => {
      if (!selectedExam) return;
      setExamUserAnswers(answers);
      const graded = gradeExam(selectedExam, answers);
      setExamResult(graded);
      saveExamResult(graded, answers);
      setView('exam_result');
      window.scrollTo(0, 0);
    },
    [selectedExam]
  );

  // 共通テストの間違えた問題のみを復習
  const handleRetryExamIncorrect = useCallback(
    (incorrectQuestionIds: string[]) => {
      if (!selectedExam) return;
      const filteredQuestions = selectedExam.questions.filter((q) =>
        incorrectQuestionIds.includes(q.question_id)
      );
      if (filteredQuestions.length === 0) return;

      const subExam: ExamData = {
        metadata: {
          ...selectedExam.metadata,
          totalQuestions: filteredQuestions.length,
          notes: ['ミス問題の集中解き直しモード'],
        },
        questions: filteredQuestions,
      };
      setSelectedExam(subExam);
      setExamUserAnswers({});
      setExamResult(null);
      setView('exam_practice');
      window.scrollTo(0, 0);
    },
    [selectedExam]
  );

  // 共通テスト成績・弱点分野からの復習遷移
  const handleReviewField = useCallback((field: ExamField) => {
    // 分野（政治/経済/国際/公共/社会）に合致するカテゴリIDを特定
    const matchedCategories = QUESTION_CATEGORIES.filter((c) => c.tag === field);
    const catIds = matchedCategories.map((c) => c.id);
    const fieldQuestions = QUESTIONS_DATA.filter((q) => q.category && catIds.includes(q.category));

    if (fieldQuestions.length > 0) {
      setCurrentMode('category');
      setCurrentCategoryId(catIds[0] || null);
      setCurrentQueue(shuffleArray(fieldQuestions));
      setCurrentIndex(0);
      setSessionResults({
        total: fieldQuestions.length,
        correct: 0,
        incorrect: 0,
        incorrectIds: [],
      });
      setView('quiz');
      window.scrollTo(0, 0);
    } else {
      setView('category_select');
      window.scrollTo(0, 0);
    }
  }, []);

  // データ初期化
  const handleResetData = useCallback(() => {
    clearUserProgress();
    setUserState({ records: {}, bookmarks: [] });
  }, []);

  // 中断・戻る処理
  const handleGoHome = useCallback(() => {
    if (view === 'quiz' || view === 'exam_practice') {
      let target: 'home' | 'exam_select' | 'category_select' = 'home';
      if (view === 'exam_practice') {
        target = 'exam_select';
      } else if (currentMode === 'category') {
        target = 'category_select';
      }
      setQuitTarget(target);
      setShowQuitConfirm(true);
    } else {
      setView('home');
      window.scrollTo(0, 0);
    }
  }, [view, currentMode]);

  // 中断の確定処理
  const handleConfirmQuit = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setShowQuitConfirm(false);
    setView(quitTarget);
    window.scrollTo(0, 0);
  }, [quitTarget]);

  // 現在の問題のブックマーク状態
  const currentQuestion = currentQueue[currentIndex];
  const isCurrentBookmarked = currentQuestion
    ? userState.bookmarks.includes(currentQuestion.id)
    : false;

  // 習得済み数（正解ステータス）
  const recordList = Object.values(userState.records) as (typeof userState.records)[number][];
  const correctCount = recordList.filter((r) => r?.lastStatus === true).length;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 flex flex-col justify-between selection:bg-neutral-200 relative">
      {/* 共通ヘッダー（演習中は専用上部バーを使用） */}
      {view !== 'exam_practice' && (
        <Header
          view={
            view === 'exam_select' ||
            view === 'exam_result' ||
            view === 'category_select'
              ? 'home'
              : (view as any)
          }
          onGoHome={handleGoHome}
          onOpenList={() => setView(view === 'list' ? 'home' : 'list')}
          learnedCount={correctCount}
          totalCount={QUESTIONS_DATA.length}
          quizProgress={
            view === 'quiz'
              ? { current: currentIndex + 1, total: currentQueue.length }
              : undefined
          }
          isBookmarked={isCurrentBookmarked}
          onToggleBookmark={
            currentQuestion ? () => handleToggleBookmark(currentQuestion.id) : undefined
          }
        />
      )}

      {/* メインビュー */}
      <main className="flex-1 flex flex-col justify-start">
        {view === 'home' && (
          <HomeView
            totalCount={QUESTIONS_DATA.length}
            userState={userState}
            onStartQuiz={handleStartQuiz}
            onOpenCategorySelect={() => {
              setView('category_select');
              window.scrollTo(0, 0);
            }}
            onOpenList={() => setView('list')}
            onOpenExamSelect={() => {
              setView('exam_select');
              window.scrollTo(0, 0);
            }}
            onResetData={handleResetData}
          />
        )}

        {view === 'category_select' && (
          <CategorySelectView
            categories={QUESTION_CATEGORIES}
            userState={userState}
            onSelectCategoryQuiz={handleStartCategoryQuiz}
            onBackToHome={() => {
              setView('home');
              window.scrollTo(0, 0);
            }}
          />
        )}

        {view === 'exam_select' && (
          <ExamSelectView
            onSelectExam={handleStartExam}
            onBack={() => {
              setView('home');
              window.scrollTo(0, 0);
            }}
            onReviewField={handleReviewField}
            onResetExamData={handleResetData}
          />
        )}

        {view === 'exam_practice' && selectedExam && (
          <ExamPracticeView
            exam={selectedExam}
            onFinishExam={handleFinishExam}
            onQuitExam={handleGoHome}
          />
        )}

        {view === 'exam_result' && selectedExam && examResult && (
          <ExamResultView
            exam={selectedExam}
            result={examResult}
            userAnswers={examUserAnswers}
            onRetryAll={() => handleStartExam(selectedExam)}
            onRetryIncorrect={handleRetryExamIncorrect}
            onGoToSelect={() => {
              setView('exam_select');
              window.scrollTo(0, 0);
            }}
            onGoHome={() => {
              setView('home');
              window.scrollTo(0, 0);
            }}
            onOpenAnalytics={() => {
              setView('exam_select');
              window.scrollTo(0, 0);
            }}
          />
        )}

        {view === 'quiz' && currentQuestion && (
          <QuizCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={currentQueue.length}
            isBookmarked={isCurrentBookmarked}
            onAnswer={handleAnswer}
            onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
          />
        )}

        {view === 'result' && (
          <ResultView
            result={sessionResults}
            onRetryAll={() => {
              if (currentMode === 'category' && currentCategoryId) {
                handleStartCategoryQuiz(currentCategoryId, 'all_random');
              } else {
                handleStartQuiz(currentMode);
              }
            }}
            onRetryIncorrect={handleRetryIncorrect}
            onGoHome={() => {
              if (currentMode === 'category') {
                setView('category_select');
              } else {
                setView('home');
              }
              window.scrollTo(0, 0);
            }}
          />
        )}

        {view === 'list' && (
          <QuestionListView
            questions={QUESTIONS_DATA}
            userState={userState}
            onToggleBookmark={handleToggleBookmark}
            onStartSingleQuestion={handleStartSingleQuestion}
            onClose={() => {
              setView('home');
              window.scrollTo(0, 0);
            }}
          />
        )}
      </main>

      {/* フッター */}
      {view !== 'quiz' && view !== 'exam_practice' && (
        <footer className="border-t border-amber-900/10 bg-[#FAF8F5]/80 py-3.5 text-center text-[11px] text-stone-400">
          <div className="max-w-md mx-auto px-4 flex items-center justify-between font-medium">
            <span className="text-amber-900/70">共通テスト 政治・経済 対策アプリ</span>
            <span className="text-stone-400">2024-2026年 過去問＋一問一答</span>
          </div>
        </footer>
      )}

      {/* 中断確認モーダルダイアログ */}
      <AnimatePresence>
        {showQuitConfirm && (
          <div
            id="quit-confirm-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs"
            onClick={() => setShowQuitConfirm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl border border-amber-200/90 space-y-4 text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 tracking-tight">
                    演習を中断しますか？
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    いつでもホームや試験選択画面に戻ることができます。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  id="btn-cancel-quit"
                  onClick={() => setShowQuitConfirm(false)}
                  className="w-full bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-700 font-bold py-2.5 px-3 rounded-xl text-xs transition-all text-center"
                >
                  演習を続ける
                </button>
                <button
                  id="btn-confirm-quit"
                  onClick={handleConfirmQuit}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-95 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all text-center shadow-xs"
                >
                  中断して戻る
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

