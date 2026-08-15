import React, { useState, useMemo } from 'react';
import { Question, UserProgressState, DifficultyRank } from '../types';
import {
  Search,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Play,
  Flame,
} from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';

interface QuestionListViewProps {
  questions: Question[];
  userState: UserProgressState;
  onToggleBookmark: (id: number) => void;
  onStartSingleQuestion: (index: number) => void;
  onClose: () => void;
}

type StatusFilter = 'all' | 'correct' | 'incorrect' | 'unlearned' | 'bookmarked';
type DifficultyFilter = 'all' | DifficultyRank;

export const QuestionListView: React.FC<QuestionListViewProps> = ({
  questions,
  userState,
  onToggleBookmark,
  onStartSingleQuestion,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  // フィルタリング
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const record = userState.records[q.id];
      const isBookmarked = userState.bookmarks.includes(q.id);

      // 難易度・頻出度フィルター
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false;

      // 状態フィルター
      if (statusFilter === 'correct' && (!record || record.lastStatus !== true)) return false;
      if (statusFilter === 'incorrect' && (!record || record.lastStatus !== false)) return false;
      if (statusFilter === 'unlearned' && record !== undefined) return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      // 検索チェック
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchQ = q.q.toLowerCase().includes(query);
        const matchA = q.a.toLowerCase().includes(query);
        const matchCat = q.categoryName ? q.categoryName.toLowerCase().includes(query) : false;
        const matchId = `no.${q.id}`.includes(query) || `${q.id}` === query;
        return matchQ || matchA || matchCat || matchId;
      }

      return true;
    });
  }, [questions, userState, statusFilter, difficultyFilter, searchQuery]);

  // アコーディオン開閉
  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 全解答一括表示/非表示
  const handleToggleAllAnswers = () => {
    const nextState = !showAllAnswers;
    setShowAllAnswers(nextState);
    const nextExpanded: Record<number, boolean> = {};
    if (nextState) {
      filteredQuestions.forEach((q) => {
        nextExpanded[q.id] = true;
      });
    }
    setExpandedIds(nextExpanded);
  };

  // 各難易度の問題数
  const diffCounts = useMemo(() => {
    const counts: Record<DifficultyRank, number> = { S: 0, A: 0, B: 0, C: 0 };
    questions.forEach((q) => {
      if (q.difficulty && counts[q.difficulty] !== undefined) {
        counts[q.difficulty]++;
      }
    });
    return counts;
  }, [questions]);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-3 pb-16">
      {/* 上部ヘッダー */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <h2 className="text-base font-bold text-stone-900">全{questions.length}問 問題リスト</h2>
          <p className="text-xs text-stone-500">共通テスト頻出度・難易度ランク別一覧</p>
        </div>
        <button
          id="btn-close-list-view"
          onClick={onClose}
          className="text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white py-1.5 px-3 rounded-lg active:scale-95 transition-all shadow-xs"
        >
          閉じる
        </button>
      </div>

      {/* 検索バー */}
      <div className="relative">
        <Search className="w-4 h-4 text-amber-600/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          id="question-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="用語・人名・単元名・問題文で検索..."
          className="w-full bg-white border border-amber-200/90 rounded-xl pl-10 pr-8 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-amber-800 p-1"
          >
            ✕
          </button>
        )}
      </div>

      {/* 難易度・頻出度フィルター（理系優先対策） */}
      <div className="bg-white p-2.5 rounded-xl border border-amber-200/90 shadow-xs space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-stone-700 px-0.5">
          <span className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-500" /> 共テ頻出度・難易度
          </span>
          <span className="text-[10px] text-amber-900/80 font-medium">理系最優先: S / A</span>
        </div>
        <div className="grid grid-cols-5 gap-1 text-xs">
          <button
            onClick={() => setDifficultyFilter('all')}
            className={`py-1.5 rounded-lg font-bold text-center transition-all ${
              difficultyFilter === 'all'
                ? 'bg-stone-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70'
            }`}
          >
            全ランク
          </button>
          <button
            onClick={() => setDifficultyFilter('S')}
            className={`py-1.5 rounded-lg font-bold text-center transition-all border ${
              difficultyFilter === 'S'
                ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100/60'
            }`}
          >
            S ({diffCounts.S})
          </button>
          <button
            onClick={() => setDifficultyFilter('A')}
            className={`py-1.5 rounded-lg font-bold text-center transition-all border ${
              difficultyFilter === 'A'
                ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100/60'
            }`}
          >
            A ({diffCounts.A})
          </button>
          <button
            onClick={() => setDifficultyFilter('B')}
            className={`py-1.5 rounded-lg font-bold text-center transition-all border ${
              difficultyFilter === 'B'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/60'
            }`}
          >
            B ({diffCounts.B})
          </button>
          <button
            onClick={() => setDifficultyFilter('C')}
            className={`py-1.5 rounded-lg font-bold text-center transition-all border ${
              difficultyFilter === 'C'
                ? 'bg-stone-600 text-white border-stone-600 shadow-xs'
                : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200/60'
            }`}
          >
            C ({diffCounts.C})
          </button>
        </div>
      </div>

      {/* 学習状態フィルタータブ */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs">
        <button
          onClick={() => setStatusFilter('all')}
          className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all ${
            statusFilter === 'all'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
              : 'bg-white text-stone-600 border border-amber-200/80 hover:bg-amber-50/60'
          }`}
        >
          全状態
        </button>
        <button
          onClick={() => setStatusFilter('correct')}
          className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
            statusFilter === 'correct'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
              : 'bg-white text-amber-800 border border-amber-200/90 hover:bg-amber-50/70'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" />
          覚えた
        </button>
        <button
          onClick={() => setStatusFilter('incorrect')}
          className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
            statusFilter === 'incorrect'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
          }`}
        >
          <XCircle className="w-3 h-3" />
          要復習
        </button>
        <button
          onClick={() => setStatusFilter('bookmarked')}
          className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
            statusFilter === 'bookmarked'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-white text-orange-800 border border-orange-200 hover:bg-orange-50'
          }`}
        >
          <Bookmark className="w-3 h-3 fill-current" />
          マーク
        </button>
        <button
          onClick={() => setStatusFilter('unlearned')}
          className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
            statusFilter === 'unlearned'
              ? 'bg-stone-700 text-white shadow-xs'
              : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          <HelpCircle className="w-3 h-3" />
          未学習
        </button>
      </div>

      {/* 一括開閉操作 */}
      <div className="flex items-center justify-between text-[11px] text-stone-500 px-1">
        <span>該当 {filteredQuestions.length} 問</span>
        <button
          onClick={handleToggleAllAnswers}
          className="flex items-center gap-1 hover:text-amber-900 font-semibold transition-colors"
        >
          {showAllAnswers ? (
            <>
              <EyeOff className="w-3 h-3" /> 全ての解答を隠す
            </>
          ) : (
            <>
              <Eye className="w-3 h-3" /> 全ての解答を表示
            </>
          )}
        </button>
      </div>

      {/* リスト表示 */}
      <div className="space-y-2.5">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-amber-200/80 space-y-2">
            <div className="text-stone-400 text-xs">該当する問題が見つかりませんでした</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
                setDifficultyFilter('all');
              }}
              className="text-xs text-amber-800 font-bold underline"
            >
              条件をリセット
            </button>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const record = userState.records[q.id];
            const isBookmarked = userState.bookmarks.includes(q.id);
            const isExpanded = showAllAnswers || expandedIds[q.id];
            const origIndex = questions.findIndex((item) => item.id === q.id);

            return (
              <div
                key={q.id}
                id={`list-item-${q.id}`}
                className="bg-white rounded-xl p-4 border border-amber-200/80 shadow-[0_2px_10px_rgba(217,119,6,0.04)] space-y-2.5 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono text-[11px] font-bold bg-amber-100/80 text-amber-900 px-2 py-0.5 rounded-md border border-amber-200/60">
                      No. {q.id}
                    </span>
                    <DifficultyBadge difficulty={q.difficulty} size="sm" />
                    {q.categoryName && (
                      <span className="text-[10px] bg-amber-50 text-amber-900 font-bold px-1.5 py-0.5 rounded border border-amber-200 truncate max-w-[120px]">
                        {q.categoryName}
                      </span>
                    )}
                    {record ? (
                      record.lastStatus ? (
                        <span className="inline-flex items-center gap-0.5 text-[10px] bg-amber-50 text-amber-800 font-semibold px-1.5 py-0.5 rounded border border-amber-200">
                          <CheckCircle2 className="w-3 h-3 text-amber-600" /> 覚えた
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-0.5 text-[10px] bg-rose-50 text-rose-800 font-semibold px-1.5 py-0.5 rounded border border-rose-200">
                          <XCircle className="w-3 h-3 text-rose-600" /> 要復習
                        </span>
                      )
                    ) : (
                      <span className="text-[10px] bg-stone-50 text-stone-400 px-1.5 py-0.5 rounded border border-stone-200/60">
                        未回答
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    {/* この問題から解く */}
                    <button
                      onClick={() => onStartSingleQuestion(origIndex)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-amber-900 hover:bg-amber-50 transition active:scale-95"
                      title="この問題から演習開始"
                    >
                      <Play className="w-3.5 h-3.5" />
                    </button>

                    {/* ブックマーク */}
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`p-1.5 rounded-lg transition active:scale-95 ${
                        isBookmarked
                          ? 'text-amber-600 bg-amber-50'
                          : 'text-stone-300 hover:text-amber-700 hover:bg-amber-50'
                      }`}
                      title={isBookmarked ? 'ブックマーク解除' : 'ブックマークに追加'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-600' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* 問題文 */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="text-xs sm:text-sm font-medium text-stone-900 leading-relaxed cursor-pointer"
                >
                  {q.q}
                </div>

                {/* 解答開閉 */}
                <div>
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="flex items-center gap-1 text-[11px] font-bold text-amber-800 hover:text-orange-800 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-3 h-3" /> 解答を閉じる
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3 h-3" /> 解答を見る
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 p-3 bg-gradient-to-br from-amber-50/60 to-orange-50/30 rounded-xl border border-amber-200/80 animate-in fade-in">
                      <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">解答</div>
                      <div className="text-sm font-bold text-stone-950 mt-0.5">{q.a}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
