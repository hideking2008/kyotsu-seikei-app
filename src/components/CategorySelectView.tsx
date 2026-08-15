import React, { useState } from 'react';
import { QuestionCategory, UserProgressState } from '../types';
import { QUESTIONS_DATA, QUESTION_CATEGORIES } from '../data/questions';
import {
  ChevronLeft,
  Play,
  Shuffle,
  RotateCcw,
  Sparkles,
  Layers,
  BookOpen,
  Award,
} from 'lucide-react';

interface CategorySelectViewProps {
  categories: QuestionCategory[];
  userState: UserProgressState;
  onSelectCategoryQuiz: (categoryId: string, subMode: 'all_random' | 'random10' | 'incorrect') => void;
  onBackToHome: () => void;
}

export const CategorySelectView: React.FC<CategorySelectViewProps> = ({
  categories,
  userState,
  onSelectCategoryQuiz,
  onBackToHome,
}) => {
  const [selectedTag, setSelectedTag] = useState<'all' | '政治' | '経済' | '国際' | '社会' | '公共'>('all');

  const filteredCategories = categories.filter((cat) => {
    if (selectedTag === 'all') return true;
    return cat.tag === selectedTag;
  });

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4 pb-16">
      {/* 上部ヘッダーバー */}
      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 flex items-center justify-between">
        <button
          id="btn-back-home-from-cat"
          onClick={onBackToHome}
          className="flex items-center gap-1 text-xs font-bold text-stone-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/70 py-2 px-3 rounded-xl transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>ホームへ</span>
        </button>

        <div className="text-right">
          <div className="text-[10px] font-bold text-amber-900/70">一問一答 分野別</div>
          <div className="text-xs font-bold text-stone-900">分野を選んで演習</div>
        </div>
      </div>

      {/* ガイド＆サマリーカード */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-amber-100/50 to-transparent pointer-events-none rounded-bl-full" />
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-xs">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-stone-900">分野別 一問一答演習</h2>
            <p className="text-xs text-stone-500">公共・政治・経済の重点単元をピンポイントで徹底攻略</p>
          </div>
        </div>

        {/* タブ切り替え（すべて / 政治 / 経済 / 国際 / 社会 / 公共） */}
        <div className="grid grid-cols-6 gap-1 pt-2 border-t border-amber-100">
          {(['all', '政治', '経済', '国際', '社会', '公共'] as const).map((tag) => {
            const isSelected = selectedTag === tag;
            const label = tag === 'all' ? '全分野' : tag;
            return (
              <button
                key={tag}
                id={`tab-cat-filter-${tag}`}
                onClick={() => setSelectedTag(tag)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border text-center whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-xs'
                    : 'bg-white text-stone-600 border-amber-200/80 hover:bg-amber-50/60'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 分野カード一覧 */}
      <div className="space-y-3">
        {filteredCategories.map((cat, idx) => {
          const catQuestions = QUESTIONS_DATA.filter((q) => q.category === cat.id);
          const totalQ = catQuestions.length;

          // 進捗計算
          const correctQ = catQuestions.filter((q) => userState.records[q.id]?.lastStatus === true).length;
          const incorrectQ = catQuestions.filter((q) => userState.records[q.id]?.lastStatus === false).length;
          const percent = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;
          const isMastered = totalQ > 0 && correctQ === totalQ;

          const tagColor =
            cat.tag === '政治'
              ? 'bg-amber-100/90 text-amber-900 border-amber-300'
              : cat.tag === '経済'
              ? 'bg-amber-100/80 text-amber-900 border-amber-300'
              : 'bg-stone-100 text-stone-800 border-stone-300';

          return (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_2px_14px_rgba(217,119,6,0.05)] border border-amber-200/85 space-y-3 relative overflow-hidden transition-all hover:border-amber-400"
            >
              {/* 分野ヘッダー */}
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 px-1.5 py-0.2 rounded border border-amber-200">
                      第{idx + 1}分野
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${tagColor}`}>
                      {cat.tag}
                    </span>
                    {isMastered && (
                      <span className="text-[10px] font-bold bg-amber-500 text-white px-1.5 py-0.2 rounded flex items-center gap-0.5">
                        <Award className="w-3 h-3" />
                        マスター
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">{cat.name}</h3>
                  <p className="text-[11px] text-stone-500 leading-snug">{cat.description}</p>
                  {/* 難易度内訳 */}
                  <div className="flex items-center gap-1.5 pt-0.5">
                    {(() => {
                      const sCount = catQuestions.filter((q) => q.difficulty === 'S').length;
                      const aCount = catQuestions.filter((q) => q.difficulty === 'A').length;
                      const bCount = catQuestions.filter((q) => q.difficulty === 'B').length;
                      const cCount = catQuestions.filter((q) => q.difficulty === 'C').length;
                      return (
                        <div className="flex items-center gap-1 text-[10px] flex-wrap">
                          {sCount > 0 && (
                            <span className="bg-rose-50 text-rose-700 font-bold px-1.5 py-0.2 rounded border border-rose-200">
                              S:{sCount}
                            </span>
                          )}
                          {aCount > 0 && (
                            <span className="bg-amber-50 text-amber-800 font-bold px-1.5 py-0.2 rounded border border-amber-200">
                              A:{aCount}
                            </span>
                          )}
                          {bCount > 0 && (
                            <span className="bg-emerald-50 text-emerald-800 font-medium px-1.5 py-0.2 rounded border border-emerald-200">
                              B:{bCount}
                            </span>
                          )}
                          {cCount > 0 && (
                            <span className="bg-stone-100 text-stone-600 font-medium px-1.5 py-0.2 rounded border border-stone-200">
                              C:{cCount}
                            </span>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-amber-900 font-mono">
                    {correctQ}<span className="text-xs text-stone-400 font-normal">/{totalQ}</span>
                  </div>
                  <div className="text-[10px] text-amber-700/80 font-mono font-bold">{percent}% 習得</div>
                </div>
              </div>

              {/* 進捗バー */}
              <div className="w-full bg-amber-100/60 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* アクションボタン群 */}
              <div className="grid grid-cols-3 gap-2 pt-1 border-t border-amber-100">
                {/* 全問ランダム演習 */}
                <button
                  id={`btn-cat-${cat.id}-all`}
                  onClick={() => onSelectCategoryQuiz(cat.id, 'all_random')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-2 px-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all shadow-xs active:scale-95"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>全問({totalQ})</span>
                </button>

                {/* ランダム10問 */}
                <button
                  id={`btn-cat-${cat.id}-r10`}
                  onClick={() => onSelectCategoryQuiz(cat.id, 'random10')}
                  className="bg-white hover:bg-amber-50 text-stone-800 font-bold py-2 px-2 rounded-xl text-xs border border-amber-200/80 flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <Shuffle className="w-3 h-3 text-amber-600" />
                  <span>10問</span>
                </button>

                {/* 要復習のみ */}
                <button
                  id={`btn-cat-${cat.id}-incorrect`}
                  disabled={incorrectQ === 0}
                  onClick={() => onSelectCategoryQuiz(cat.id, 'incorrect')}
                  className="bg-white hover:bg-rose-50 disabled:hover:bg-white text-rose-800 disabled:text-stone-300 font-bold py-2 px-2 rounded-xl text-xs border border-amber-200/80 disabled:border-stone-100 flex items-center justify-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                >
                  <RotateCcw className="w-3 h-3 text-rose-600" />
                  <span>要復習({incorrectQ})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
