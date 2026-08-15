import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RawQuestionData } from '../data/types';
import { MaterialViewer } from './MaterialViewer';
import {
  Trophy,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  FileText,
  Bookmark,
  Layers,
  Award
} from 'lucide-react';

export interface MaterialSessionResult {
  total: number;
  correct: number;
  incorrect: number;
  incorrectQuestions: RawQuestionData[];
  answeredQuestions: { question: RawQuestionData; isCorrect: boolean }[];
}

interface MaterialResultViewProps {
  result: MaterialSessionResult;
  onRetryAll: () => void;
  onRetryIncorrect: () => void;
  onBackToSelect: () => void;
  onGoHome: () => void;
}

export const MaterialResultView: React.FC<MaterialResultViewProps> = ({
  result,
  onRetryAll,
  onRetryIncorrect,
  onBackToSelect,
  onGoHome,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const accuracy = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;

  // 評価メッセージ
  const getFeedback = () => {
    if (accuracy === 100) {
      return {
        title: '完璧！全問正解！',
        desc: '資料・図表の読み取り力が完璧にマスターされています！本番でも自信を持って臨みましょう。',
        badge: 'MASTER',
        color: 'text-amber-500',
      };
    }
    if (accuracy >= 80) {
      return {
        title: '素晴らしい実戦力！',
        desc: '高得点ペースです！間違えた問題の解説と資料を復習して完全制覇を目指しましょう。',
        badge: 'EXCELLENT',
        color: 'text-emerald-500',
      };
    }
    if (accuracy >= 60) {
      return {
        title: '合格ライン到達！',
        desc: '資料問題の要点をつかめています。図表の軸や注釈、古典のキーワードを再確認しましょう。',
        badge: 'GOOD',
        color: 'text-blue-500',
      };
    }
    return {
      title: 'ここから伸びる！',
      desc: '資料問題はパターンを掴めば一気に得点源になります。間違えた問題を復習して再挑戦しましょう！',
      badge: 'KEEP IT UP',
      color: 'text-orange-500',
    };
  };

  const feedback = getFeedback();

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-5 space-y-5 pb-20 text-left">
      {/* 1. スコアサマリーカード */}
      <div className="bg-gradient-to-br from-[#2D241E] via-[#3B3028] to-[#251E19] rounded-2xl p-6 text-white shadow-lg border border-amber-500/30 text-center relative overflow-hidden space-y-4">
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
          <Award className="w-3.5 h-3.5" />
          <span>演習完了スコア</span>
        </div>

        <div>
          <div className="flex items-baseline justify-center gap-1.5 font-mono">
            <span className="text-5xl sm:text-6xl font-black text-amber-400">
              {result.correct}
            </span>
            <span className="text-xl sm:text-2xl text-stone-400 font-bold">
              / {result.total}
            </span>
          </div>
          <div className="text-xs text-stone-300 mt-1 font-mono">
            正答率: <strong className="text-white text-sm">{accuracy}%</strong>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 max-w-sm mx-auto">
          <h3 className={`text-base font-bold ${feedback.color}`}>{feedback.title}</h3>
          <p className="text-xs text-stone-300 mt-1 leading-relaxed">{feedback.desc}</p>
        </div>
      </div>

      {/* 2. アクションボタン群 */}
      <div className="grid grid-cols-2 gap-2.5">
        {result.incorrectQuestions.length > 0 ? (
          <button
            id="btn-retry-incorrect-materials"
            onClick={onRetryIncorrect}
            className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 active:scale-[0.99] text-white font-bold py-3 px-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs text-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>ミスした{result.incorrectQuestions.length}問を再演習</span>
          </button>
        ) : (
          <button
            id="btn-retry-all-materials"
            onClick={onRetryAll}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-[0.99] text-white font-bold py-3 px-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs text-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>もう一度全問演習</span>
          </button>
        )}

        <button
          id="btn-back-to-material-select"
          onClick={onBackToSelect}
          className="w-full bg-white hover:bg-stone-50 border border-stone-200/90 text-stone-800 font-bold py-3 px-3 rounded-xl shadow-2xs transition-all active:scale-[0.99] flex items-center justify-center gap-1.5 text-xs text-center"
        >
          <Layers className="w-3.5 h-3.5 text-amber-700" />
          <span>分野・モード選択へ</span>
        </button>
      </div>

      {/* 3. 今回解いた問題の振り返りリスト */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
          <h3 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-700" />
            <span>今回の出題一覧・詳細解説</span>
          </h3>
          <span className="text-[11px] text-stone-500 font-mono">
            正解: <strong className="text-emerald-600">{result.correct}</strong> / 誤答: <strong className="text-rose-600">{result.incorrect}</strong>
          </span>
        </div>

        <div className="space-y-2">
          {result.answeredQuestions.map(({ question: q, isCorrect }, idx) => {
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="border border-stone-200/80 rounded-xl overflow-hidden bg-stone-50/40"
              >
                <div
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="p-3 cursor-pointer hover:bg-stone-100/70 flex items-start justify-between gap-3 text-left transition-colors"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                        {isCorrect ? '正解' : '不正解'}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                        {q.category}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {q.unit}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-stone-900 line-clamp-1">
                      {q.question_text}
                    </p>
                  </div>

                  <div className="text-stone-400 pt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-stone-200 bg-white p-4 space-y-3 text-xs text-stone-800"
                    >
                      {/* 資料 */}
                      {q.has_material && (
                        <div>
                          <div className="text-[11px] font-bold text-stone-700 mb-1">提示資料</div>
                          <MaterialViewer question={q} />
                        </div>
                      )}

                      {/* 正答・選択肢 */}
                      <div className="space-y-1">
                        <div className="font-bold text-stone-700">選択肢と正解</div>
                        <div className="space-y-1">
                          {q.choices.map((choice, cIdx) => {
                            const isCorrectChoice =
                              choice.startsWith(q.answer) || choice.includes(q.answer);
                            return (
                              <div
                                key={cIdx}
                                className={`p-2 rounded-lg text-[11px] ${
                                  isCorrectChoice
                                    ? 'bg-emerald-100 text-emerald-950 font-bold border border-emerald-300'
                                    : 'bg-stone-50 text-stone-600 border border-stone-200'
                                }`}
                              >
                                {choice}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 解説 */}
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 space-y-1">
                        <div className="font-bold text-amber-900 text-[11px]">解説</div>
                        <p className="text-stone-800 leading-relaxed whitespace-pre-wrap">
                          {q.explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ホームへ戻るボタン */}
      <button
        id="btn-material-result-go-home"
        onClick={onGoHome}
        className="w-full text-center text-xs font-bold text-stone-500 hover:text-stone-800 py-2.5 transition-colors"
      >
        ホーム画面へ戻る
      </button>
    </div>
  );
};
