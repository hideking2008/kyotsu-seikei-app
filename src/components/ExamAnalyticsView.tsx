import React, { useState, useMemo } from 'react';
import {
  ExamHistoryRecord,
  getAllExamHistoriesFlat,
  loadExamHistories,
  getExamTargetScore,
  saveExamTargetScore,
  clearAllExamHistories,
} from '../utils/examStorage';
import { ALL_EXAMS } from '../data/exams';
import { ExamField, ExamQuestion } from '../types';
import {
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Check,
  RotateCcw,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  HelpCircle,
  Eye,
  BarChart3,
  Trash2,
} from 'lucide-react';

interface ExamAnalyticsViewProps {
  onGoToPractice: () => void;
  onReviewField: (field: ExamField) => void;
  onResetExamData?: () => void;
}

export const ExamAnalyticsView: React.FC<ExamAnalyticsViewProps> = ({
  onGoToPractice,
  onReviewField,
  onResetExamData,
}) => {
  // 全履歴
  const [allHistories, setAllHistories] = useState<ExamHistoryRecord[]>(() =>
    getAllExamHistoriesFlat()
  );
  // 初期化確認モーダル表示フラグ
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  // 選択中のレコード（詳細表示用）
  const [selectedRecordIndex, setSelectedRecordIndex] = useState<number | null>(null);

  // 選択中の過去問ID（履歴グループ）
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  // 目標点編集モーダル・インライン状態
  const [editingTarget, setEditingTarget] = useState<boolean>(false);
  const [targetInput, setTargetInput] = useState<string>('80');

  // 間違えた問題の解説モーダル用
  const [activeQuestionModal, setActiveQuestionModal] = useState<ExamQuestion | null>(null);
  const [activeUserAnswer, setActiveUserAnswer] = useState<number | string | null>(null);

  // 履歴更新ヘルパー
  const refreshHistories = () => {
    setAllHistories(getAllExamHistoriesFlat());
  };

  // 選択された詳細レコード
  const currentRecord = useMemo(() => {
    if (selectedRecordIndex !== null && allHistories[selectedRecordIndex]) {
      return allHistories[selectedRecordIndex];
    }
    return null;
  }, [selectedRecordIndex, allHistories]);

  // 選択されたレコードの試験データ（問題データ参照用）
  const currentExamData = useMemo(() => {
    if (!currentRecord) return null;
    return ALL_EXAMS[currentRecord.examId] || null;
  }, [currentRecord]);

  // 同じ試験の全履歴（時系列昇順: 古い順）
  const sameExamHistoriesAsc = useMemo(() => {
    if (!currentRecord) return [];
    const grouped = loadExamHistories()[currentRecord.examId] || [];
    return [...grouped].sort((a, b) => a.completedAt - b.completedAt);
  }, [currentRecord]);

  // 今回の受験が何回目か
  const currentAttemptNumber = useMemo(() => {
    if (!currentRecord || sameExamHistoriesAsc.length === 0) return 1;
    const idx = sameExamHistoriesAsc.findIndex(
      (r) => r.completedAt === currentRecord.completedAt
    );
    return idx >= 0 ? idx + 1 : sameExamHistoriesAsc.length;
  }, [currentRecord, sameExamHistoriesAsc]);

  // 前回比（前回受験との得点差）
  const scoreDiffWithPrevious = useMemo(() => {
    if (!currentRecord || sameExamHistoriesAsc.length <= 1) return null;
    const currentIdx = sameExamHistoriesAsc.findIndex(
      (r) => r.completedAt === currentRecord.completedAt
    );
    if (currentIdx <= 0) return null; // 初回
    const prevRecord = sameExamHistoriesAsc[currentIdx - 1];
    return currentRecord.score - prevRecord.score;
  }, [currentRecord, sameExamHistoriesAsc]);

  // 現在の目標点
  const currentTargetScore = useMemo(() => {
    if (!currentRecord) return 80;
    const saved = getExamTargetScore(currentRecord.examId);
    return saved !== null ? saved : 80; // デフォルト80点
  }, [currentRecord]);

  // 目標点保存
  const handleSaveTarget = () => {
    if (!currentRecord) return;
    const val = parseInt(targetInput, 10);
    if (!isNaN(val) && val >= 0 && val <= currentRecord.totalPoints) {
      saveExamTargetScore(currentRecord.examId, val);
      setEditingTarget(false);
    }
  };

  // 弱点分野TOP3の算出
  const weakFieldsTop3 = useMemo(() => {
    if (!currentRecord || !currentRecord.fieldScores) return [];
    const scores = [...currentRecord.fieldScores];
    // 正答率の低い順、同率なら問題数が多い順
    scores.sort((a, b) => {
      if (a.percentage !== b.percentage) return a.percentage - b.percentage;
      return b.totalQuestions - a.totalQuestions;
    });
    return scores.slice(0, 3);
  }, [currentRecord]);

  // 間違えた問題リストの抽出
  const incorrectQuestionsList = useMemo(() => {
    if (!currentRecord || !currentExamData) return [];
    const qResults = currentRecord.questionResults || [];
    const incorrectMap = new Map<string, typeof qResults[0]>();
    qResults.forEach((qr) => {
      if (!qr.isCorrect) incorrectMap.set(qr.questionId, qr);
    });

    return currentExamData.questions
      .filter((q) => incorrectMap.has(q.question_id))
      .map((q) => ({
        question: q,
        result: incorrectMap.get(q.question_id)!,
      }));
  }, [currentRecord, currentExamData]);

  // 日時フォーマット関数
  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const date = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${y}/${m}/${date} ${hours}:${minutes}`;
  };

  // --- 詳細ビュー ---
  if (currentRecord) {
    const targetDiff = currentRecord.score - currentTargetScore;

    return (
      <div className="w-full max-w-xl mx-auto space-y-4 pb-12">
        {/* 上部戻るバー */}
        <div className="flex items-center justify-between">
          <button
            id="btn-back-to-analytics-list"
            onClick={() => setSelectedRecordIndex(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-900/90 hover:text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-3 py-1.5 rounded-xl transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4 text-amber-700" />
            <span>成績一覧に戻る</span>
          </button>
          <div className="text-[11px] font-bold text-stone-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{formatDate(currentRecord.completedAt)}</span>
          </div>
        </div>

        {/* 1. 総合成績サマリーカード */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                {currentRecord.year}年 {currentRecord.session}
              </span>
              <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                第{currentAttemptNumber}回目受験
              </span>
            </div>

            {/* 前回比バッジ */}
            {scoreDiffWithPrevious !== null ? (
              <div
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                  scoreDiffWithPrevious > 0
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : scoreDiffWithPrevious < 0
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : 'bg-stone-50 text-stone-700 border-stone-200'
                }`}
              >
                {scoreDiffWithPrevious > 0 ? (
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                ) : scoreDiffWithPrevious < 0 ? (
                  <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                ) : null}
                <span>
                  前回比 {scoreDiffWithPrevious > 0 ? `+${scoreDiffWithPrevious}` : scoreDiffWithPrevious}点
                </span>
              </div>
            ) : (
              <span className="text-[10px] font-bold text-amber-800/80 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                初回受験
              </span>
            )}
          </div>

          {/* メイン得点表示 */}
          <div className="text-center py-1">
            <div className="text-4xl sm:text-5xl font-black text-amber-950 tracking-tight font-mono">
              {currentRecord.score}{' '}
              <span className="text-xl sm:text-2xl text-stone-400 font-normal">
                / {currentRecord.totalPoints} 点
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 mt-2 text-xs text-stone-600 font-medium">
              <span className="font-bold text-amber-900">正答率 {currentRecord.percentage}%</span>
              <span className="text-stone-300">|</span>
              <span>
                正解 <strong className="text-stone-900 font-bold">{currentRecord.correctCount}</strong> /{' '}
                {currentRecord.totalQuestions} 問
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-rose-600">
                誤答 {currentRecord.incorrectCount} 問
              </span>
            </div>
          </div>

          {/* 目標点セクション */}
          <div className="bg-gradient-to-r from-amber-50/70 via-orange-50/40 to-amber-50/70 rounded-xl p-3 border border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-amber-900/70">設定目標点</div>
                <div className="font-bold text-stone-900">
                  {currentTargetScore} 点満点中
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {editingTarget ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={0}
                    max={currentRecord.totalPoints}
                    value={targetInput}
                    onChange={(e) => setTargetInput(e.target.value)}
                    className="w-16 px-2 py-1 text-xs border border-amber-400 rounded-lg bg-white font-bold text-stone-900 text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    onClick={handleSaveTarget}
                    className="bg-amber-500 hover:bg-amber-600 text-white p-1 rounded-lg text-xs"
                    title="保存"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setEditingTarget(false)}
                    className="bg-stone-200 hover:bg-stone-300 text-stone-700 p-1 rounded-lg text-xs"
                    title="キャンセル"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className={`font-bold px-2 py-0.5 rounded-md text-xs ${
                      targetDiff >= 0
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {targetDiff >= 0 ? `目標達成！ (+${targetDiff}点)` : `目標まであと ${Math.abs(targetDiff)}点`}
                  </div>
                  <button
                    onClick={() => {
                      setTargetInput(String(currentTargetScore));
                      setEditingTarget(true);
                    }}
                    className="text-stone-400 hover:text-amber-800 p-1 rounded-md transition-colors"
                    title="目標点を変更"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. 弱点分野TOP3ランキング（要件5） */}
        {weakFieldsTop3.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                  弱点分野 TOP3
                </h3>
              </div>
              <span className="text-[10px] text-stone-500">正答率の低い要注意分野</span>
            </div>

            <div className="space-y-2.5">
              {weakFieldsTop3.map((item, idx) => {
                const rankLabels = ['1位', '2位', '3位'];
                const rankColors = [
                  'bg-rose-500 text-white',
                  'bg-amber-500 text-white',
                  'bg-stone-500 text-white',
                ];

                return (
                  <div
                    key={item.field}
                    className="bg-stone-50/80 hover:bg-amber-50/40 rounded-xl p-3 border border-stone-200/80 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md font-mono shrink-0 ${rankColors[idx]}`}
                      >
                        {rankLabels[idx]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-stone-900 truncate">
                            {item.field}
                          </span>
                          <span className="text-xs font-bold font-mono text-rose-700">
                            {item.percentage}%{' '}
                            <span className="text-[10px] text-stone-400 font-normal">
                              ({item.correctCount}/{item.totalQuestions})
                            </span>
                          </span>
                        </div>
                        {/* ミニプログレスバー */}
                        <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              item.percentage >= 80
                                ? 'bg-emerald-500'
                                : item.percentage >= 60
                                ? 'bg-amber-500'
                                : 'bg-rose-500'
                            }`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* 復習ボタン */}
                    <button
                      onClick={() => onReviewField(item.field)}
                      className="shrink-0 text-xs font-bold bg-amber-500 hover:bg-amber-600 active:scale-95 text-white px-3 py-2 rounded-xl transition-all shadow-xs shadow-amber-500/20 flex items-center gap-1"
                    >
                      <span>復習する</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. 分野別正答率（要件4） */}
        {currentRecord.fieldScores && currentRecord.fieldScores.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                  分野別正答率
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-stone-500">
                <span className="text-emerald-700 font-bold">80%~ 得意</span>
                <span>•</span>
                <span className="text-amber-700 font-bold">60~79% 要確認</span>
                <span>•</span>
                <span className="text-rose-700 font-bold">~59% 要強化</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {currentRecord.fieldScores.map((fs) => {
                const statusBadge =
                  fs.status === '得意'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                    : fs.status === '要確認'
                    ? 'bg-amber-100 text-amber-800 border-amber-200'
                    : 'bg-rose-100 text-rose-800 border-rose-200';

                return (
                  <div
                    key={fs.field}
                    className="p-3 rounded-xl bg-stone-50/60 border border-stone-200/80 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900">{fs.field}</span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${statusBadge}`}
                        >
                          {fs.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-stone-500 text-[11px]">
                          {fs.correctCount} / {fs.totalQuestions}問
                        </span>
                        <span className="font-bold text-stone-900 text-sm">
                          {fs.percentage}%
                        </span>
                      </div>
                    </div>

                    {/* プログレスバー */}
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          fs.percentage >= 80
                            ? 'bg-emerald-500'
                            : fs.percentage >= 60
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${fs.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. 大問別成績（要件6） */}
        {currentRecord.sectionScores && currentRecord.sectionScores.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                  大問別成績
                </h3>
              </div>
              <span className="text-[10px] text-stone-500">配点・正答率内訳</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {currentRecord.sectionScores.map((sec) => {
                const secPercentage =
                  sec.totalPoints > 0 ? Math.round((sec.score / sec.totalPoints) * 100) : 0;
                return (
                  <div
                    key={sec.section}
                    className="bg-amber-50/50 border border-amber-200/80 p-3 rounded-xl space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800">第{sec.section}問</span>
                      <span className="font-bold text-amber-900 font-mono">
                        {secPercentage}%
                      </span>
                    </div>
                    <div className="text-[10px] text-stone-600 font-mono flex items-center justify-between">
                      <span>
                        {sec.score}/{sec.totalPoints}点
                      </span>
                      <span>
                        ({sec.correctCount}/{sec.totalQuestions}問)
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                        style={{ width: `${secPercentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. 間違えた問題一覧（要件7） */}
        <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                <XCircle className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                間違えた問題 ({incorrectQuestionsList.length}問)
              </h3>
            </div>
            <span className="text-[10px] text-stone-500">タップで問題と解説を確認</span>
          </div>

          {incorrectQuestionsList.length === 0 ? (
            <div className="text-center py-6 bg-emerald-50/50 rounded-xl border border-emerald-200 text-emerald-800 space-y-1">
              <Award className="w-7 h-7 mx-auto text-emerald-600" />
              <div className="text-xs font-bold">全問正解です！お見事！</div>
            </div>
          ) : (
            <div className="space-y-2">
              {incorrectQuestionsList.map(({ question, result }) => {
                const userChoiceDisplay =
                  result.userChoice === null || result.userChoice === ''
                    ? '無回答'
                    : String(result.userChoice);

                return (
                  <button
                    key={question.question_id}
                    onClick={() => {
                      setActiveQuestionModal(question);
                      setActiveUserAnswer(result.userChoice);
                    }}
                    className="w-full text-left p-3 rounded-xl bg-stone-50 hover:bg-amber-50/50 border border-stone-200/80 hover:border-amber-300 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-900">
                          第{question.section}問 問{question.question_no}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">
                          (配点: {question.points}点)
                        </span>
                        {result.field && (
                          <span className="text-[9px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.2 rounded border border-amber-200">
                            {result.field}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-600 line-clamp-1">
                        {question.question_text.replace(/^第\d+問.*?\n+/g, '')}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-1 rounded-lg flex items-center gap-1 group-hover:bg-rose-100 transition-colors">
                        <Eye className="w-3 h-3" />
                        <span>解説を見る</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 6. この過去問の全受験履歴リスト（要件8） */}
        {sameExamHistoriesAsc.length > 1 && (
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <RotateCcw className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                  この試験の受験履歴 ({sameExamHistoriesAsc.length}回)
                </h3>
              </div>
              <span className="text-[10px] text-stone-500">過去の回を選択可能</span>
            </div>

            <div className="space-y-1.5">
              {sameExamHistoriesAsc.map((rec, idx) => {
                const isSelected = rec.completedAt === currentRecord.completedAt;
                return (
                  <button
                    key={rec.completedAt}
                    onClick={() => {
                      const foundIdx = allHistories.findIndex(
                        (h) => h.completedAt === rec.completedAt
                      );
                      if (foundIdx >= 0) setSelectedRecordIndex(foundIdx);
                    }}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all text-xs ${
                      isSelected
                        ? 'bg-amber-100/70 border-amber-400 font-bold text-amber-950 shadow-xs'
                        : 'bg-stone-50 hover:bg-amber-50/50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-stone-500 font-mono">
                        第{idx + 1}回
                      </span>
                      <span>{formatDate(rec.completedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="font-bold text-stone-900">{rec.score}点</span>
                      <span className="text-[11px] text-stone-500">({rec.percentage}%)</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-700 ml-1" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 問題解説モーダル */}
        {activeQuestionModal && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg max-h-[85vh] rounded-2xl p-5 shadow-2xl border border-stone-200 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                    第{activeQuestionModal.section}問 問{activeQuestionModal.question_no}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    配点: {activeQuestionModal.points}点
                  </span>
                </div>
                <button
                  onClick={() => setActiveQuestionModal(null)}
                  className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              {/* 問題文 */}
              <div className="text-xs leading-relaxed text-stone-800 whitespace-pre-wrap bg-stone-50 p-3 rounded-xl border border-stone-200">
                {activeQuestionModal.question_text}
              </div>

              {/* 選択肢 */}
              {activeQuestionModal.options.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-stone-700">選択肢</div>
                  {activeQuestionModal.options.map((opt) => {
                    const isCorrect = activeQuestionModal.answer.some(
                      (a) => String(a.correct_choice) === String(opt.choice)
                    );
                    const isUserSelected = String(activeUserAnswer) === String(opt.choice);

                    return (
                      <div
                        key={opt.choice}
                        className={`p-2.5 rounded-xl border text-xs leading-normal flex items-start gap-2 ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                            : isUserSelected
                            ? 'bg-rose-50 border-rose-300 text-rose-950'
                            : 'bg-white border-stone-200 text-stone-700'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isCorrect
                              ? 'bg-emerald-600 text-white'
                              : isUserSelected
                              ? 'bg-rose-600 text-white'
                              : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {opt.choice}
                        </span>
                        <div className="flex-1">
                          {opt.text}
                          {isCorrect && (
                            <span className="ml-2 text-[10px] font-bold text-emerald-700">
                              (正解)
                            </span>
                          )}
                          {isUserSelected && !isCorrect && (
                            <span className="ml-2 text-[10px] font-bold text-rose-600">
                              (あなたの回答)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 正解と解説 */}
              <div className="bg-amber-50/80 border border-amber-200 p-3.5 rounded-xl space-y-1.5 text-xs text-amber-950">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700" />
                  <span>正解・解説</span>
                </div>
                <div className="font-bold text-stone-900">
                  正解:{' '}
                  {activeQuestionModal.answer
                    .map((a) => `${a.correct_choice}${a.correct_option_text ? ` (${a.correct_option_text})` : ''}`)
                    .join(', ')}
                </div>
                {activeQuestionModal.explanation ? (
                  <p className="text-stone-700 leading-relaxed pt-1 border-t border-amber-200/60">
                    {activeQuestionModal.explanation}
                  </p>
                ) : (
                  <p className="text-stone-500 italic pt-1">解説準備中</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveQuestionModal(null)}
                  className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-xs transition-colors"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 一覧ビュー ---
  return (
    <div className="w-full max-w-xl mx-auto space-y-4 pb-12">
      {/* 上部ヘッダーカード */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md inline-block mb-1 border border-amber-300/80">
              共通テスト 成績確認
            </div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              過去問 受験結果・分析
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              受験履歴、分野別正答率、弱点分野TOP3、大問別成績を詳細分析
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shrink-0 shadow-xs shadow-amber-500/20">
            <Award className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {allHistories.length === 0 ? (
        /* 受験履歴が0件の場合 */
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-stone-900">
              まだ過去問の受験記録がありません
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
              共通テストの過去問演習を解くと、ここに得点・正答率・弱点分野ランキング・得点推移グラフが自動で集計されます。
            </p>
          </div>

          <button
            id="btn-go-to-exam-from-empty-analytics"
            onClick={onGoToPractice}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-amber-500/20 text-xs transition-all active:scale-98"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>過去問演習に挑戦する</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      ) : (
        <>
          {/* 7. 点数推移グラフ（2件以上の場合表示・要件9） */}
          {allHistories.length >= 2 && (
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 tracking-tight">
                    得点推移グラフ
                  </h3>
                </div>
                <span className="text-[10px] text-stone-500">直近の受験履歴 ({allHistories.length}回)</span>
              </div>

              {/* シンプルかつ見やすいSVGラインチャート */}
              <div className="bg-amber-50/30 p-3 rounded-xl border border-amber-100">
                <ScoreTrendChart histories={[...allHistories].reverse()} />
              </div>
            </div>
          )}

          {/* 受験履歴一覧 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                受験履歴一覧 ({allHistories.length}件)
              </span>
              <span className="text-[10px] text-stone-500">タップして詳細成績を確認</span>
            </div>

            {allHistories.map((record, index) => {
              return (
                <button
                  key={`${record.examId}-${record.completedAt}`}
                  id={`btn-exam-history-record-${index}`}
                  onClick={() => setSelectedRecordIndex(index)}
                  className="w-full text-left bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(217,119,6,0.05)] hover:shadow-md border border-amber-200/80 hover:border-amber-400 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-900">
                        {record.year}年度 {record.session}
                      </span>
                      <span className="text-[10px] text-stone-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {formatDate(record.completedAt)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-600 font-mono">
                      <span>
                        正答 <strong className="text-stone-900 font-bold">{record.correctCount}</strong> /{' '}
                        {record.totalQuestions} 問
                      </span>
                      <span>
                        正答率 <strong className="text-amber-900 font-bold">{record.percentage}%</strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xl font-black text-amber-950 font-mono">
                        {record.score}
                        <span className="text-xs font-normal text-stone-400">/{record.totalPoints}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 group-hover:bg-amber-500 group-hover:text-white text-amber-700 flex items-center justify-center transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 過去問データの初期化ボタン */}
          <div className="text-center pt-3 pb-2">
            {!showResetConfirm ? (
              <button
                id="btn-reset-exam-history"
                onClick={() => setShowResetConfirm(true)}
                className="text-[11px] text-stone-400 hover:text-rose-700 transition-colors inline-flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>過去問の受験記録・得点推移を初期化</span>
              </button>
            ) : (
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl space-y-2 text-left animate-in fade-in">
                <p className="text-xs text-rose-900 font-semibold leading-relaxed">
                  これまで受験したすべての過去問記録、得点推移データ、および設定した目標点数を削除して初期化しますか？
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    id="btn-confirm-reset-exam-history"
                    onClick={() => {
                      clearAllExamHistories();
                      setAllHistories([]);
                      setSelectedRecordIndex(null);
                      setShowResetConfirm(false);
                      if (onResetExamData) {
                        onResetExamData();
                      }
                    }}
                    className="bg-rose-700 text-white font-semibold text-xs py-1.5 px-3.5 rounded-lg hover:bg-rose-800 transition-colors"
                  >
                    過去問記録を初期化する
                  </button>
                  <button
                    id="btn-cancel-reset-exam-history"
                    onClick={() => setShowResetConfirm(false)}
                    className="bg-white border border-stone-200 text-stone-700 text-xs py-1.5 px-3 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

/**
 * 得点推移を描画するSVGチャートコンポーネント
 */
const ScoreTrendChart: React.FC<{ histories: ExamHistoryRecord[] }> = ({ histories }) => {
  if (histories.length < 2) return null;

  const width = 360;
  const height = 140;
  const padLeft = 32;
  const padRight = 24;
  const padTop = 18;
  const padBottom = 26;

  const innerW = width - padLeft - padRight;
  const innerH = height - padTop - padBottom;

  const maxPoint = 100;
  const minPoint = 0;

  const points = histories.map((h, i) => {
    const x = padLeft + (i / (histories.length - 1)) * innerW;
    const y = padTop + (1 - (h.score - minPoint) / (maxPoint - minPoint)) * innerH;
    return { x, y, score: h.score, year: h.year, date: new Date(h.completedAt) };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto max-h-40"
        style={{ minWidth: '280px' }}
      >
        {/* 背景グリッド線 (0, 50, 100点) */}
        {[0, 50, 100].map((val) => {
          const y = padTop + (1 - val / 100) * innerH;
          return (
            <g key={val}>
              <line
                x1={padLeft}
                y1={y}
                x2={width - padRight}
                y2={y}
                stroke="#e7e5e4"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <text
                x={padLeft - 6}
                y={y + 3}
                fontSize="9"
                fill="#78716c"
                textAnchor="end"
                fontFamily="monospace"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* 塗りつぶしグラデーション */}
        <defs>
          <linearGradient id="scoreAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <path
          d={`${pathD} L ${points[points.length - 1].x} ${padTop + innerH} L ${points[0].x} ${padTop + innerH} Z`}
          fill="url(#scoreAreaGradient)"
        />

        {/* スコアライン */}
        <path d={pathD} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />

        {/* 各回の点とラベル */}
        {points.map((p, idx) => (
          <g key={idx}>
            <circle cx={p.x} cy={p.y} r="4" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
            <text
              x={p.x}
              y={p.y - 7}
              fontSize="10"
              fontWeight="bold"
              fill="#78350f"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {p.score}点
            </text>
            <text
              x={p.x}
              y={height - 8}
              fontSize="8"
              fill="#78716c"
              textAnchor="middle"
            >
              {idx + 1}回目
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
