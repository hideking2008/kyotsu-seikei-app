import React, { useState } from 'react';
import { ExamData, ExamResultSummary } from '../types';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  List,
  ChevronDown,
  ChevronUp,
  BarChart2,
} from 'lucide-react';

interface ExamResultViewProps {
  exam: ExamData;
  result: ExamResultSummary;
  userAnswers: Record<string, number | string>;
  onRetryAll: () => void;
  onRetryIncorrect: (incorrectQuestionIds: string[]) => void;
  onGoToSelect: () => void;
  onGoHome: () => void;
  onOpenAnalytics?: () => void;
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  exam,
  result,
  userAnswers,
  onRetryAll,
  onRetryIncorrect,
  onGoToSelect,
  onGoHome,
  onOpenAnalytics,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [expandedQId, setExpandedQId] = useState<string | null>(null);

  const incorrectIds = result.questionResults.filter((q) => !q.isCorrect).map((q) => q.questionId);

  const filteredQuestions = result.questionResults.filter((q) => {
    if (filterMode === 'incorrect') return !q.isCorrect;
    if (filterMode === 'correct') return q.isCorrect;
    return true;
  });

  const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];

  return (
    <div className="w-full max-w-xl mx-auto p-4 space-y-4 pb-16">
      {/* 上部スコアカード */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 text-center space-y-4 relative overflow-hidden">
        <div className="text-[11px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-md inline-block border border-amber-300">
          {result.year}年 {result.session} 採点結果
        </div>

        <div>
          <div className="text-4xl sm:text-5xl font-black text-amber-950 tracking-tight font-mono">
            {result.score}{' '}
            <span className="text-xl sm:text-2xl text-stone-400 font-normal">
              / {result.totalPoints} 点
            </span>
          </div>
          <div className="text-xs font-bold text-amber-800/80 mt-1">
            得点率 {result.percentage}% （正解 {result.correctCount} 問 / 全 {result.totalQuestions} 問）
          </div>
        </div>

        {/* 大問別得点一覧 */}
        <div className="pt-3 border-t border-amber-100">
          <div className="text-[11px] font-bold text-amber-900/70 uppercase tracking-wider mb-2 text-left">
            大問別得点内訳
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {result.sectionScores.map((sec) => {
              const secPercentage =
                sec.totalPoints > 0 ? Math.round((sec.score / sec.totalPoints) * 100) : 0;
              return (
                <div
                  key={sec.section}
                  className="bg-amber-50/60 border border-amber-200/80 p-2 rounded-xl text-center"
                >
                  <div className="text-[10px] font-bold text-stone-700">第{sec.section}問</div>
                  <div className="text-xs font-bold text-amber-900 font-mono mt-0.5">
                    {sec.score}
                    <span className="text-[10px] text-stone-400 font-normal">/{sec.totalPoints}</span>
                  </div>
                  <div className="text-[9px] text-amber-700/80 font-mono mt-0.5">{secPercentage}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* アクションボタン */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <button
            id="btn-retry-all-exam"
            onClick={onRetryAll}
            className="w-full bg-white hover:bg-amber-50/50 text-stone-800 font-bold py-3 px-3 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
            <span>もう一度解く</span>
          </button>

          <button
            id="btn-retry-incorrect-exam"
            disabled={incorrectIds.length === 0}
            onClick={() => onRetryIncorrect(incorrectIds)}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:hover:from-amber-500 disabled:hover:to-orange-500 text-white font-bold py-3 px-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed text-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>ミス問のみ復習 ({incorrectIds.length})</span>
          </button>
        </div>

        {/* 成績詳細・弱点分析画面への誘導ボタン */}
        {onOpenAnalytics && (
          <button
            id="btn-view-detailed-analytics"
            onClick={onOpenAnalytics}
            className="w-full py-2.5 px-3 bg-amber-100/70 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <BarChart2 className="w-4 h-4 text-amber-700" />
            <span>詳細成績・弱点分野TOP3を確認する</span>
          </button>
        )}
      </div>

      {/* 解答・解説一覧フィルター */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
            <List className="w-4 h-4 text-amber-600" />
            全問解答・解説一覧
          </span>

          <div className="flex items-center gap-1 bg-white border border-amber-200/80 p-0.5 rounded-lg text-[11px] font-bold shadow-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-0.5 rounded-md transition-all ${
                filterMode === 'all'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                  : 'text-stone-600 hover:text-amber-900'
              }`}
            >
              全問 ({result.totalQuestions})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-2.5 py-0.5 rounded-md transition-all ${
                filterMode === 'incorrect'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-rose-700'
              }`}
            >
              不正解 ({incorrectIds.length})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-2.5 py-0.5 rounded-md transition-all ${
                filterMode === 'correct'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-amber-800'
              }`}
            >
              正解 ({result.correctCount})
            </button>
          </div>
        </div>

        {/* 問題一覧カード */}
        <div className="space-y-2.5">
          {filteredQuestions.map((qRes) => {
            const rawQ = exam.questions.find((q) => q.question_id === qRes.questionId);
            if (!rawQ) return null;

            const isExpanded = expandedQId === qRes.questionId;
            const userAns = userAnswers[qRes.questionId];

            return (
              <div
                key={qRes.questionId}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  qRes.isCorrect ? 'border-amber-200/80 shadow-[0_2px_10px_rgba(217,119,6,0.04)]' : 'border-rose-200 bg-rose-50/15'
                }`}
              >
                {/* ヘッダー行（クリックで展開） */}
                <button
                  id={`btn-expand-q-${qRes.questionId}`}
                  onClick={() => setExpandedQId(isExpanded ? null : qRes.questionId)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-amber-50/40 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 shrink-0">
                      {qRes.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-amber-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-900 font-mono">
                          第{qRes.section}問 問{qRes.questionNo}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">
                          [解答番号 {rawQ.answer_numbers.join('・')}]
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                            qRes.isCorrect
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-rose-100 text-rose-800 border border-rose-200'
                          }`}
                        >
                          {qRes.earnedPoints} / {qRes.maxPoints} 点
                        </span>
                      </div>
                      <div className="text-xs text-stone-600 line-clamp-1 mt-1 font-normal">
                        {rawQ.question_text.slice(0, 70)}...
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 text-amber-700/60 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* 展開時の詳細表示 */}
                {isExpanded && (
                  <div className="p-4 pt-0 space-y-3 border-t border-amber-100 mt-1">
                    {/* 全文 */}
                    <div className="text-xs text-stone-800 whitespace-pre-wrap leading-relaxed bg-amber-50/40 p-3 rounded-xl border border-amber-200/70">
                      {rawQ.question_text}
                    </div>

                    {/* 正解情報 */}
                    <div className="bg-amber-50/90 border border-amber-200/90 p-3 rounded-xl text-xs space-y-1.5 text-stone-900">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-800">正解:</span>
                        <span className="font-bold text-amber-950">
                          {rawQ.answer.map((a) => {
                            const choiceNum = typeof a.correct_choice === 'number' ? a.correct_choice : 0;
                            const symbol = choiceNum > 0 ? circleNumbers[choiceNum - 1] : String(a.correct_choice);
                            return `[解答${a.answer_number}] ${symbol} ${a.correct_option_text || ''}`;
                          }).join(' / ')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-amber-200/80 text-stone-600">
                        <span className="font-medium">あなたの回答:</span>
                        <span className={qRes.isCorrect ? 'text-amber-900 font-bold' : 'text-rose-700 font-bold'}>
                          {userAns !== undefined
                            ? typeof userAns === 'number'
                              ? circleNumbers[userAns - 1] || userAns
                              : String(userAns)
                            : '（無回答）'}
                        </span>
                      </div>
                    </div>

                    {/* 選択肢一覧 */}
                    {rawQ.options && rawQ.options.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <div className="text-[10px] font-bold text-amber-900/80 uppercase">選択肢一覧</div>
                        {rawQ.options.map((opt) => {
                          const isCorrectOpt = rawQ.answer.some((a) => a.correct_choice === opt.choice);
                          const isUserSelected = userAns === opt.choice;
                          const symbol = circleNumbers[opt.choice - 1] || `${opt.choice}`;

                          return (
                            <div
                              key={opt.choice}
                              className={`p-2 rounded-lg text-xs flex items-start gap-2 border ${
                                isCorrectOpt
                                  ? 'bg-amber-50 border-amber-300 text-amber-950 font-semibold'
                                  : isUserSelected
                                  ? 'bg-rose-50 border-rose-200 text-rose-950'
                                  : 'bg-white border-stone-100 text-stone-700'
                              }`}
                            >
                              <span className="font-bold shrink-0">{symbol}</span>
                              <span className="leading-relaxed">{opt.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* フッターナビゲーション */}
      <div className="grid grid-cols-2 gap-2.5 pt-2">
        <button
          id="btn-back-to-exam-select"
          onClick={onGoToSelect}
          className="w-full bg-white hover:bg-amber-50/50 text-stone-700 font-bold py-3 px-3 rounded-xl border border-amber-200/80 text-xs transition-all"
        >
          年度・試験種別を選び直す
        </button>
        <button
          id="btn-back-to-home"
          onClick={onGoHome}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-3 px-3 rounded-xl text-xs transition-all shadow-xs"
        >
          ホーム画面へ戻る
        </button>
      </div>
    </div>
  );
};
