import React from 'react';
import { BookOpen, Bookmark, ListFilter, RotateCcw } from 'lucide-react';

interface HeaderProps {
  view: string;
  onGoHome: () => void;
  onOpenList: () => void;
  learnedCount: number;
  totalCount: number;
  // クイズ中の追加Props
  quizProgress?: { current: number; total: number };
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  view,
  onGoHome,
  onOpenList,
  learnedCount,
  totalCount,
  quizProgress,
  isBookmarked,
  onToggleBookmark,
}) => {
  const percent = Math.round((learnedCount / totalCount) * 100);

  return (
    <header id="app-header" className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-amber-900/10 shadow-[0_1px_3px_rgba(217,119,6,0.04)]">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        {view === 'quiz' ? (
          <div className="w-full flex items-center justify-between">
            <button
              id="header-back-btn"
              onClick={onGoHome}
              className="flex items-center gap-1.5 py-1.5 px-2.5 -ml-1 rounded-xl text-stone-600 hover:text-amber-900 hover:bg-amber-100/60 active:scale-95 transition-all text-xs font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-700" />
              <span>中断</span>
            </button>

            {quizProgress && (
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold tracking-widest text-amber-700/80 uppercase">
                  PROGRESS
                </span>
                <span className="text-sm font-bold text-stone-900 tabular-nums font-mono">
                  {quizProgress.current} <span className="text-amber-700/50 font-normal text-xs font-sans">/ {quizProgress.total}</span>
                </span>
              </div>
            )}

            {onToggleBookmark && (
              <button
                id="header-bookmark-btn"
                onClick={onToggleBookmark}
                className={`p-2 rounded-xl border transition-all active:scale-90 ${
                  isBookmarked
                    ? 'bg-amber-100 border-amber-400 text-amber-700 shadow-xs'
                    : 'bg-white/80 border-amber-200/80 text-stone-400 hover:text-amber-700 hover:bg-amber-50'
                }`}
                title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
                aria-label="ブックマーク"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-700' : ''}`} />
              </button>
            )}
          </div>
        ) : (
          <div className="w-full flex items-center justify-between">
            <button
              id="header-logo-btn"
              onClick={onGoHome}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-xs shadow-amber-500/20">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight text-stone-900 flex items-center gap-1.5">
                  <span>公共政経 一問一答</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-md font-semibold border border-amber-300/80">
                    共テ
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 font-medium">全{totalCount}問 厳選収録</div>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <button
                id="header-list-toggle-btn"
                onClick={onOpenList}
                className={`p-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all active:scale-95 ${
                  view === 'list'
                    ? 'bg-stone-900 text-amber-400 border-stone-900 shadow-xs'
                    : 'bg-white text-stone-700 border-amber-200/80 hover:bg-amber-50/60 hover:text-amber-900'
                }`}
                title="問題一覧・検索"
              >
                <ListFilter className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs">一覧</span>
              </button>

              <div className="hidden sm:flex flex-col items-end pl-1">
                <span className="text-[10px] text-amber-800/70 font-medium">習得率</span>
                <span className="text-xs font-bold text-stone-900 tabular-nums">{percent}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
