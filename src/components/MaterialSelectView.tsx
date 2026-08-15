import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RawQuestionData } from '../data/types';
import { ALL_DB_QUESTIONS, DB_STATS } from '../data/allDbQuestions';
import { MaterialProgressState } from '../utils/materialStorage';
import { MaterialViewer } from './MaterialViewer';
import {
  FileText,
  Sparkles,
  Layers,
  Shuffle,
  RotateCcw,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  ArrowLeft,
  Search,
  Filter,
  BarChart3,
  BookOpen,
  Info,
  Check,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export type MaterialCategoryFilter = 'all' | '政治' | '経済' | '国際';
export type MaterialQuizMode = 'materials_only' | 'all' | 'random10' | 'incorrect' | 'bookmarked';

interface MaterialSelectViewProps {
  progress: MaterialProgressState;
  onStartMaterialQuiz: (category: MaterialCategoryFilter, mode: MaterialQuizMode) => void;
  onBack: () => void;
  onResetProgress: () => void;
}

export const MaterialSelectView: React.FC<MaterialSelectViewProps> = ({
  progress,
  onStartMaterialQuiz,
  onBack,
  onResetProgress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategoryFilter>('all');
  const [activeTab, setActiveTab] = useState<'practice' | 'gallery'>('practice');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  // カテゴリで絞り込んだ問題一覧
  const filteredQuestions = useMemo(() => {
    let list = ALL_DB_QUESTIONS;
    if (selectedCategory !== 'all') {
      list = list.filter((q) => q.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.question_text.toLowerCase().includes(q) ||
          item.unit.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  // 進捗統計
  const stats = useMemo(() => {
    const total = filteredQuestions.length;
    const materialsOnlyCount = filteredQuestions.filter((q) => q.has_material).length;
    const answeredCount = filteredQuestions.filter((q) => progress.records[q.id] !== undefined).length;
    const correctCount = filteredQuestions.filter((q) => progress.records[q.id]?.lastStatus === true).length;
    const incorrectCount = filteredQuestions.filter((q) => progress.records[q.id]?.lastStatus === false).length;
    const bookmarkedCount = filteredQuestions.filter((q) => progress.bookmarks.includes(q.id)).length;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    return {
      total,
      materialsOnlyCount,
      answeredCount,
      correctCount,
      incorrectCount,
      bookmarkedCount,
      accuracy,
    };
  }, [filteredQuestions, progress]);

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-5 space-y-5 pb-16">
      {/* ナビゲーションバー */}
      <div className="flex items-center justify-between">
        <button
          id="btn-material-back-home"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 bg-white/80 border border-stone-200/80 px-3 py-1.5 rounded-xl shadow-2xs hover:bg-stone-50 active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ホームに戻る</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300/80 px-2.5 py-1 rounded-lg">
            新機能 ・ 過去問資料データベース
          </span>
        </div>
      </div>

      {/* ヒーローカード */}
      <div className="bg-gradient-to-br from-[#2D241E] via-[#3D322A] to-[#251E19] rounded-2xl p-5 sm:p-6 text-white shadow-lg border border-amber-500/30 relative overflow-hidden space-y-4">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-2 right-4 text-amber-400/10 font-mono text-7xl font-black select-none pointer-events-none">
          DATA
        </div>

        <div className="flex items-start justify-between relative">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
              <FileText className="w-3 h-3 text-amber-300" />
              <span>図表・グラフ・古典抜粋・条約データ特訓</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              資料問題 演習モード
            </h1>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              共通テストで頻出する「グラフ読み取り」「古典原典の読解」「制度比較表」「年代整序」などの実戦資料問題を即座に特訓できます。
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-md shadow-amber-500/30 shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
        </div>

        {/* 統計バッジ */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10 text-center">
          <div className="bg-white/5 rounded-xl p-2 border border-white/5">
            <div className="text-[10px] text-stone-400">総収録</div>
            <div className="text-sm sm:text-base font-bold text-amber-300 font-mono">{DB_STATS.total}問</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2 border border-white/5">
            <div className="text-[10px] text-stone-400">資料付き</div>
            <div className="text-sm sm:text-base font-bold text-amber-400 font-mono">{DB_STATS.withMaterialCount}問</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2 border border-white/5">
            <div className="text-[10px] text-stone-400">正解数</div>
            <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">{stats.correctCount}問</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2 border border-white/5">
            <div className="text-[10px] text-stone-400">正答率</div>
            <div className="text-sm sm:text-base font-bold text-white font-mono">{stats.accuracy}%</div>
          </div>
        </div>
      </div>

      {/* タブ切り替え（演習メニュー / 問題一覧ギャラリー） */}
      <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-bold">
        <button
          id="tab-practice-mode"
          onClick={() => setActiveTab('practice')}
          className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'practice'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>演習スタート</span>
        </button>
        <button
          id="tab-gallery-mode"
          onClick={() => setActiveTab('gallery')}
          className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'gallery'
              ? 'bg-white text-amber-950 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>問題・資料一覧（全{filteredQuestions.length}問）</span>
        </button>
      </div>

      {/* 分野フィルタータブ */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>対象分野を選択</span>
          </label>
          <span className="text-[11px] text-stone-500">
            選択中: <strong className="text-stone-800">{selectedCategory === 'all' ? '全分野' : `${selectedCategory}分野`}</strong> ({stats.total}問)
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {(
            [
              { id: 'all', name: 'すべて', count: DB_STATS.total },
              { id: '政治', name: '政治', count: DB_STATS.politicalCount },
              { id: '経済', name: '経済', count: DB_STATS.economicsCount },
              { id: '国際', name: '国際', count: DB_STATS.internationalCount },
            ] as const
          ).map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as MaterialCategoryFilter)}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-amber-600 border-amber-700 text-white font-bold shadow-xs'
                    : 'bg-white border-stone-200/90 text-stone-700 hover:bg-stone-50 font-medium'
                }`}
              >
                <div className="text-xs">{cat.name}</div>
                <div className={`text-[10px] mt-0.5 font-mono ${isSelected ? 'text-amber-100' : 'text-stone-400'}`}>
                  {cat.count}問
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: 演習メニュー */}
      {activeTab === 'practice' && (
        <div className="space-y-3 pt-1">
          {/* 1. 資料・図表付き問題 集中特訓（最優先おすすめ） */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-4 sm:p-5 border-2 border-amber-400 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded-md inline-flex items-center gap-1 mb-1 border border-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-800" />
                  <span>おすすめ ・ 資料問題マスター</span>
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  【図表・資料付き問題】集中特訓
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  グラフ・古典抜粋・比較図・年代整序など、資料が提示される良問のみを抽出して演習します。
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-amber-600 text-white px-2.5 py-1 rounded-lg shrink-0">
                {stats.materialsOnlyCount}問
              </span>
            </div>

            <button
              id="btn-start-materials-only"
              onClick={() => onStartMaterialQuiz(selectedCategory, 'materials_only')}
              disabled={stats.materialsOnlyCount === 0}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs group"
            >
              <span>資料付き問題を演習する</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 2. その他の出題モードグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* スピード演習（ランダム10問） */}
            <button
              id="btn-start-random10"
              onClick={() => onStartMaterialQuiz(selectedCategory, 'random10')}
              disabled={stats.total === 0}
              className="bg-white hover:bg-stone-50 active:scale-[0.99] p-4 rounded-xl border border-stone-200 shadow-2xs text-left transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Shuffle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    ランダム10問
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 pt-1 group-hover:text-amber-800 transition-colors">
                  スピード演習 (10問)
                </h4>
                <p className="text-[11px] text-stone-500">
                  スキマ時間の確認テストに最適
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-amber-700">
                <span>演習開始</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* 分野別全問マスター */}
            <button
              id="btn-start-all-questions"
              onClick={() => onStartMaterialQuiz(selectedCategory, 'all')}
              disabled={stats.total === 0}
              className="bg-white hover:bg-stone-50 active:scale-[0.99] p-4 rounded-xl border border-stone-200 shadow-2xs text-left transition-all flex flex-col justify-between group"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    全{stats.total}問
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 pt-1 group-hover:text-amber-800 transition-colors">
                  全問マスター演習
                </h4>
                <p className="text-[11px] text-stone-500">
                  選択分野の全問を順番に完全制覇
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-amber-700">
                <span>演習開始</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* 間違えた問題のみ（要復習） */}
            <button
              id="btn-start-incorrect"
              onClick={() => onStartMaterialQuiz(selectedCategory, 'incorrect')}
              disabled={stats.incorrectCount === 0}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                stats.incorrectCount > 0
                  ? 'bg-rose-50/50 hover:bg-rose-50 border-rose-200 shadow-2xs active:scale-[0.99]'
                  : 'bg-stone-50 border-stone-200 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded border border-rose-200">
                    要復習: {stats.incorrectCount}問
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 pt-1 group-hover:text-rose-800 transition-colors">
                  間違えた問題の復習
                </h4>
                <p className="text-[11px] text-stone-500">
                  弱点を集中的に克服して定着
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-rose-700">
                <span>{stats.incorrectCount > 0 ? '復習スタート' : '誤答なし'}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

            {/* ブックマーク問題 */}
            <button
              id="btn-start-bookmarked"
              onClick={() => onStartMaterialQuiz(selectedCategory, 'bookmarked')}
              disabled={stats.bookmarkedCount === 0}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                stats.bookmarkedCount > 0
                  ? 'bg-amber-50/50 hover:bg-amber-50 border-amber-200 shadow-2xs active:scale-[0.99]'
                  : 'bg-stone-50 border-stone-200 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Bookmark className="w-4 h-4 fill-amber-700" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                    マーク中: {stats.bookmarkedCount}問
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 pt-1 group-hover:text-amber-800 transition-colors">
                  ブックマーク演習
                </h4>
                <p className="text-[11px] text-stone-500">
                  保存した注目問題だけを特訓
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-amber-700">
                <span>{stats.bookmarkedCount > 0 ? '演習開始' : '登録なし'}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: 問題・資料一覧ギャラリー */}
      {activeTab === 'gallery' && (
        <div className="space-y-3 pt-1">
          {/* 検索入力 */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="問題文・単元・キーワードで検索..."
              className="w-full bg-white border border-stone-200 rounded-xl pl-9 pr-4 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                クリア
              </button>
            )}
          </div>

          {/* 問題リスト */}
          <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-stone-200 text-center text-xs text-stone-500">
                該当する問題が見つかりませんでした。
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isExpanded = expandedQuestionId === q.id;
                const record = progress.records[q.id];
                const isBookmarked = progress.bookmarks.includes(q.id);

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-xl border border-stone-200/90 shadow-2xs overflow-hidden transition-all"
                  >
                    <div
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="p-3.5 cursor-pointer hover:bg-stone-50 flex items-start justify-between gap-3 text-left"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                            {q.id.toUpperCase()}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            {q.category}
                          </span>
                          {q.has_material && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 flex items-center gap-1">
                              <FileText className="w-2.5 h-2.5" />
                              資料あり
                            </span>
                          )}
                          {record && (
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 ${
                                record.lastStatus
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {record.lastStatus ? '正解済' : '要復習'}
                            </span>
                          )}
                          {isBookmarked && (
                            <Bookmark className="w-3 h-3 fill-amber-500 text-amber-600" />
                          )}
                        </div>
                        <p className="text-xs font-bold text-stone-900 line-clamp-2">
                          {q.question_text}
                        </p>
                        <p className="text-[10px] text-stone-400">
                          {q.unit} • 正答: {q.answer}
                        </p>
                      </div>

                      <div className="text-stone-400 p-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>

                    {/* 展開時：資料プレビュー・選択肢・詳細解説 */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-stone-100 bg-stone-50/50 p-4 space-y-3 text-xs"
                        >
                          {/* 資料プレビュー */}
                          {q.has_material && (
                            <div className="space-y-1">
                              <div className="text-[11px] font-bold text-stone-700 flex items-center gap-1">
                                <FileText className="w-3.5 h-3.5 text-blue-600" />
                                <span>提示資料・図表プレビュー</span>
                              </div>
                              <MaterialViewer question={q} />
                            </div>
                          )}

                          {/* 選択肢 */}
                          <div className="space-y-1.5 pt-1">
                            <div className="text-[11px] font-bold text-stone-700">選択肢</div>
                            <div className="space-y-1">
                              {q.choices.map((choice, cIdx) => {
                                const isCorrectChoice = choice.startsWith(q.answer) || choice.includes(q.answer);
                                return (
                                  <div
                                    key={cIdx}
                                    className={`p-2 rounded-lg text-[11px] leading-relaxed ${
                                      isCorrectChoice
                                        ? 'bg-emerald-100/80 text-emerald-900 font-bold border border-emerald-300'
                                        : 'bg-white text-stone-700 border border-stone-200'
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
                            <div className="font-bold text-amber-900 text-[11px] flex items-center gap-1">
                              <Info className="w-3.5 h-3.5 text-amber-700" />
                              <span>解説（正答: {q.answer}）</span>
                            </div>
                            <p className="text-stone-800 text-xs leading-relaxed whitespace-pre-wrap">
                              {q.explanation}
                            </p>
                            {q.source && (
                              <div className="text-[10px] text-stone-500 pt-1 border-t border-amber-200/60 flex items-center gap-1">
                                <span>出典: {q.source.file} (問P.{q.source.question_pages.join(',')} / 解P.{q.source.answer_pages.join(',')})</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* データリセット案内 */}
      <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-400">
        <span>資料問題の演習データは自動保存されます</span>
        <button
          onClick={onResetProgress}
          className="text-stone-500 hover:text-rose-600 underline transition-colors"
        >
          演習進捗をリセット
        </button>
      </div>
    </div>
  );
};
