import React from 'react';
import { QuizSessionResult } from '../types';
import { Award, RotateCcw, Home, Sparkles, XCircle, CheckCircle2 } from 'lucide-react';

interface ResultViewProps {
  result: QuizSessionResult;
  onRetryAll: () => void;
  onRetryIncorrect: () => void;
  onGoHome: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetryAll,
  onRetryIncorrect,
  onGoHome,
}) => {
  const percent = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;
  const isPerfect = percent === 100 && result.total > 0;

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4 pb-12">
      <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(217,119,6,0.06)] border border-amber-200/90 text-center space-y-5 relative overflow-hidden">
        {/* アイコンバッジ */}
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-md shadow-amber-500/20">
          {isPerfect ? (
            <Sparkles className="w-8 h-8 text-white" />
          ) : (
            <Award className="w-8 h-8 text-white" />
          )}
        </div>

        <div>
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1">
            SESSION COMPLETED
          </div>
          <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
            {isPerfect ? '全問正解！パーフェクト' : '演習おつかれさまでした'}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {isPerfect
              ? '完璧な理解度です！この調子で本番得点力を固めましょう。'
              : '間違えた問題をしっかり見直して知識を定着させましょう。'}
          </p>
        </div>

        {/* スコアサークル・数値 */}
        <div className="py-2">
          <div className="text-4xl sm:text-5xl font-extrabold text-amber-900 tracking-tight tabular-nums font-mono">
            {percent}
            <span className="text-xl sm:text-2xl font-semibold text-amber-600 font-sans ml-1">%</span>
          </div>
          <div className="text-xs font-medium text-stone-500 mt-1">
            正解率（{result.correct} / {result.total} 問）
          </div>
        </div>

        {/* 内訳カード */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-amber-50/80 border border-amber-200/90 p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-amber-800 font-medium">覚えた！</div>
              <div className="text-base font-bold text-amber-900 tabular-nums font-mono">
                {result.correct} <span className="text-xs font-normal font-sans">問</span>
              </div>
            </div>
          </div>

          <div className="bg-rose-50/80 border border-rose-200/80 p-3.5 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
              <XCircle className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-rose-700 font-medium">要復習</div>
              <div className="text-base font-bold text-rose-900 tabular-nums font-mono">
                {result.incorrect} <span className="text-xs font-normal font-sans">問</span>
              </div>
            </div>
          </div>
        </div>

        {/* ボタン群 */}
        <div className="space-y-2.5 pt-3 border-t border-amber-100">
          {result.incorrectIds.length > 0 && (
            <button
              id="btn-retry-incorrect-only"
              onClick={onRetryIncorrect}
              className="w-full bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>間違えた{result.incorrectIds.length}問だけを今すぐ再復習</span>
            </button>
          )}

          <button
            id="btn-retry-all-session"
            onClick={onRetryAll}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>同じ条件でもう一度挑戦</span>
          </button>

          <button
            id="btn-return-home-from-result"
            onClick={onGoHome}
            className="w-full bg-white hover:bg-amber-50/50 active:scale-[0.99] text-stone-700 hover:text-amber-900 font-semibold py-3 px-4 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Home className="w-4 h-4 text-amber-600/70" />
            <span>ホームへ戻る</span>
          </button>
        </div>
      </div>
    </div>
  );
};
