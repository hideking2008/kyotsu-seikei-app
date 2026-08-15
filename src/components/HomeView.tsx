import React, { useState, useMemo } from 'react';
import { QuizMode, UserProgressState, DifficultyRank } from '../types';
import { QUESTIONS_DATA } from '../data/questions';
import { TEXTBOOK_CHAPTERS } from '../data/textbookData';
import {
  Play,
  Shuffle,
  Bookmark,
  RotateCcw,
  Sparkles,
  ListFilter,
  CheckCircle2,
  Trash2,
  TrendingUp,
  ChevronRight,
  Layers,
  Flame,
  Award,
  BookOpen,
  Eye,
  HelpCircle,
} from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { AppFooterCredits } from './AppFooterCredits';
import { AppGuideModal } from './AppGuideModal';
import { FileText, BarChart3 } from 'lucide-react';
import { DB_STATS } from '../data/allDbQuestions';

interface HomeViewProps {
  totalCount: number;
  userState: UserProgressState;
  onStartQuiz: (mode: QuizMode) => void;
  onOpenCategorySelect: () => void;
  onOpenList: () => void;
  onOpenExamSelect: () => void;
  onResetData: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  totalCount,
  userState,
  onStartQuiz,
  onOpenCategorySelect,
  onOpenList,
  onOpenExamSelect,
  onResetData,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // 統計計算
  const recordList = Object.values(userState.records) as (typeof userState.records)[number][];
  const learnedIds = Object.keys(userState.records);
  const correctCount = recordList.filter((r) => r?.lastStatus === true).length;
  const incorrectCount = recordList.filter((r) => r?.lastStatus === false).length;
  const unlearnedCount = totalCount - learnedIds.length;
  const bookmarkCount = userState.bookmarks.length;
  const progressPercent = Math.round((correctCount / totalCount) * 100);

  // 難易度別統計
  const diffStats = useMemo(() => {
    const ranks: DifficultyRank[] = ['S', 'A', 'B', 'C'];
    const stats: Record<
      DifficultyRank,
      { total: number; correct: number; incorrect: number; unlearned: number }
    > = {
      S: { total: 0, correct: 0, incorrect: 0, unlearned: 0 },
      A: { total: 0, correct: 0, incorrect: 0, unlearned: 0 },
      B: { total: 0, correct: 0, incorrect: 0, unlearned: 0 },
      C: { total: 0, correct: 0, incorrect: 0, unlearned: 0 },
    };

    QUESTIONS_DATA.forEach((q) => {
      const rank = q.difficulty || 'B';
      stats[rank].total++;
      const rec = userState.records[q.id];
      if (!rec) {
        stats[rank].unlearned++;
      } else if (rec.lastStatus === true) {
        stats[rank].correct++;
      } else {
        stats[rank].incorrect++;
      }
    });

    return stats;
  }, [userState]);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4 pb-12">
      {/* 最上部：アプリの使い方・機能一覧 横長ボタン */}
      <button
        id="btn-open-app-guide"
        onClick={() => setIsGuideOpen(true)}
        className="w-full bg-gradient-to-r from-[#241F1C] via-[#352D26] to-[#241F1C] hover:from-[#2E2824] hover:to-[#2E2824] text-white p-3.5 sm:p-4 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-amber-500/30 flex items-center justify-between group transition-all active:scale-[0.99] relative overflow-hidden text-left"
      >
        <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-amber-500/15 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center gap-3 relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-xs shadow-amber-500/30">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-amber-100 group-hover:text-white tracking-tight">
                アプリの使い方・機能一覧
              </span>
              <span className="text-[9px] bg-amber-500/25 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-400/30">
                GUIDE
              </span>
            </div>
            <p className="text-[11px] text-stone-400 mt-0.5">
              4大機能の特徴・おすすめの合格ステップをチェック
            </p>
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0">
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>

      {/* 1. 体系マスター教科書（赤シート講義）バナー */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-3.5 relative overflow-hidden">
        {/* 背景グラデーションアクセント */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-100/60 to-transparent pointer-events-none rounded-bl-full" />

        <div className="flex items-start justify-between relative">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-rose-900 bg-rose-100/90 px-2 py-0.5 rounded-md inline-flex items-center gap-1 mb-1 border border-rose-300/80">
              <BookOpen className="w-3 h-3 text-rose-600" />
              <span>新登場 ・ 体系インプット講義</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 tracking-tight">
              体系マスター教科書
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              教科書長文 × 赤シート暗記で因果関係を一気に体系インプット
            </p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-rose-500/20">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* 特徴チップ */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-amber-100">
          <div className="bg-rose-50/80 border border-rose-200/80 p-2 sm:p-2.5 rounded-xl flex flex-col justify-center">
            <div className="text-[10px] text-rose-800 font-medium whitespace-nowrap">全{totalCount}語</div>
            <div className="font-bold text-rose-900 text-xs sm:text-sm mt-0.5 whitespace-nowrap">完全体系化</div>
          </div>
          <div className="bg-rose-50/80 border border-rose-200/80 p-2 sm:p-2.5 rounded-xl flex flex-col justify-center">
            <div className="text-[10px] text-rose-800 font-medium whitespace-nowrap">赤シート機能</div>
            <div className="font-bold text-rose-900 text-xs sm:text-sm mt-0.5 whitespace-nowrap">即アウトプット</div>
          </div>
          <div className="bg-amber-50/80 border border-amber-200/90 p-2 sm:p-2.5 rounded-xl flex flex-col justify-center">
            <div className="text-[10px] text-amber-800 font-medium whitespace-nowrap">分野別</div>
            <div className="font-bold text-amber-900 text-xs sm:text-sm mt-0.5 whitespace-nowrap">全{TEXTBOOK_CHAPTERS.length}章収録</div>
          </div>
        </div>
      </div>

      {/* 2. 一問一答 演習（ヒーロー＆学習サマリーカード） */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-4 relative overflow-hidden">
        {/* 上品なゴールドの装飾アクセント */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/60 to-transparent pointer-events-none rounded-bl-full" />

        <div className="flex items-start justify-between relative">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md inline-block mb-1 border border-amber-300/80">
              理系特化 ・ 共通テスト 政治・経済
            </div>
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">一問一答 演習</h2>
            <p className="text-xs text-stone-500 mt-0.5">全{totalCount}問 頻出度ランク別スピードマスター</p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-amber-500/20">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* 進捗バー */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-stone-500">全体習得率</span>
            <span className="text-amber-800 font-bold tabular-nums font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full bg-amber-100/70 h-2 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>
        </div>

        {/* 4分割ステータスグリッド */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-amber-100">
          <div className="bg-amber-50/80 border border-amber-200/90 p-2.5 rounded-xl text-center">
            <div className="text-[10px] text-amber-800 font-medium">覚えた</div>
            <div className="text-base font-bold text-amber-900 tabular-nums font-mono">{correctCount}</div>
          </div>
          <div className="bg-rose-50/80 border border-rose-200/80 p-2.5 rounded-xl text-center">
            <div className="text-[10px] text-rose-800 font-medium">要復習</div>
            <div className="text-base font-bold text-rose-900 tabular-nums font-mono">{incorrectCount}</div>
          </div>
          <div className="bg-amber-50/80 border border-amber-200/90 p-2.5 rounded-xl text-center">
            <div className="text-[10px] text-amber-800 font-medium">マーク</div>
            <div className="text-base font-bold text-amber-900 tabular-nums font-mono">{bookmarkCount}</div>
          </div>
          <div className="bg-stone-50/80 border border-stone-200/80 p-2.5 rounded-xl text-center">
            <div className="text-[10px] text-stone-500 font-medium">未学習</div>
            <div className="text-base font-bold text-stone-700 tabular-nums font-mono">{unlearnedCount}</div>
          </div>
        </div>

        {/* 分野別演習ボタン */}
        <button
          id="btn-goto-category-select-hero"
          onClick={onOpenCategorySelect}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-xs group"
        >
          <Layers className="w-4 h-4 text-amber-100" />
          <span>分野を選択して一問一答を演習する</span>
          <ChevronRight className="w-4 h-4 text-amber-100 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 3. 共通テスト過去問演習（年度・本追試験）バナー */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-4 relative overflow-hidden">
        {/* 上品なゴールドの装飾アクセント */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100/60 to-transparent pointer-events-none rounded-bl-full" />

        <div className="flex items-start justify-between relative">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md inline-block mb-1 border border-amber-300/80">
              実戦力完成 ・ 本試/追試
            </div>
            <h3 className="text-xl font-bold text-stone-900 tracking-tight">
              共通テスト 過去問演習
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              2026年・2025年（本試・追試）／2024年（本試）収録
            </p>
          </div>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-sm shadow-amber-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-amber-100">
          <div className="bg-amber-50/80 border border-amber-200/90 p-2.5 rounded-xl">
            <div className="text-[10px] text-amber-800 font-medium">最新課程</div>
            <div className="font-bold text-amber-900 font-mono text-sm mt-0.5">2026年</div>
          </div>
          <div className="bg-amber-50/80 border border-amber-200/90 p-2.5 rounded-xl">
            <div className="text-[10px] text-amber-800 font-medium">本試・追試</div>
            <div className="font-bold text-amber-900 font-mono text-sm mt-0.5">全5回分</div>
          </div>
          <div className="bg-stone-50/80 border border-stone-200/80 p-2.5 rounded-xl">
            <div className="text-[10px] text-stone-500 font-medium">配点</div>
            <div className="font-bold text-stone-800 font-mono text-sm mt-0.5">100点満点</div>
          </div>
        </div>

        <button
          id="btn-goto-exam-practice"
          onClick={onOpenExamSelect}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-xs group"
        >
          <span>年度・試験種別を選んで演習する</span>
          <ChevronRight className="w-4 h-4 text-amber-100 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 4. 理系最優先！共テ頻出度・難易度別 優先学習パネル */}
      <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">共テ頻出度・難易度別 優先演習</h3>
              <p className="text-[10px] text-stone-500">理系受験生がコスパ最強で得点を伸ばす特訓</p>
            </div>
          </div>
          <span className="text-[10px] bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded-full border border-rose-200">
            S〜Cランク
          </span>
        </div>

        {/* Sランク・Aランク特訓ボタン */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Sランク最頻出 */}
          <button
            id="btn-mode-difficulty-s"
            onClick={() => onStartQuiz('difficulty_s')}
            className="bg-gradient-to-br from-rose-50 to-red-50 hover:from-rose-100/80 hover:to-red-100/80 active:scale-[0.99] border-2 border-rose-300 p-3.5 rounded-xl text-left transition-all shadow-xs group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-xs bg-rose-600 text-white px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <Flame className="w-3 h-3" /> S 最頻出
              </span>
              <span className="font-mono font-bold text-xs text-rose-700">{diffStats.S.total}問</span>
            </div>
            <div className="text-[11px] font-bold text-stone-900 group-hover:text-rose-900 transition-colors">
              共テ必修・最重要
            </div>
            <div className="text-[10px] text-stone-500 mt-1 flex justify-between">
              <span>習得: {diffStats.S.correct}/{diffStats.S.total}</span>
              <span className="font-bold text-rose-700 font-mono">
                {Math.round((diffStats.S.correct / Math.max(diffStats.S.total, 1)) * 100)}%
              </span>
            </div>
          </button>

          {/* Aランク頻出 */}
          <button
            id="btn-mode-difficulty-a"
            onClick={() => onStartQuiz('difficulty_a')}
            className="bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100/80 hover:to-orange-100/80 active:scale-[0.99] border-2 border-amber-300 p-3.5 rounded-xl text-left transition-all shadow-xs group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-xs bg-amber-500 text-white px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> A 頻出
              </span>
              <span className="font-mono font-bold text-xs text-amber-800">{diffStats.A.total}問</span>
            </div>
            <div className="text-[11px] font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
              得点源・頻出重要
            </div>
            <div className="text-[10px] text-stone-500 mt-1 flex justify-between">
              <span>習得: {diffStats.A.correct}/{diffStats.A.total}</span>
              <span className="font-bold text-amber-800 font-mono">
                {Math.round((diffStats.A.correct / Math.max(diffStats.A.total, 1)) * 100)}%
              </span>
            </div>
          </button>
        </div>

        {/* Bランク（標準）＆ Cランク（発展） */}
        <div className="grid grid-cols-2 gap-2">
          <button
            id="btn-mode-difficulty-b"
            onClick={() => onStartQuiz('difficulty_b')}
            className="bg-emerald-50/60 hover:bg-emerald-100/60 active:scale-[0.99] border border-emerald-200 p-2.5 rounded-xl text-left transition-all flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-900">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> B 標準 ({diffStats.B.total}問)
              </div>
              <div className="text-[10px] text-stone-500">差がつく標準問題</div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          </button>

          <button
            id="btn-mode-difficulty-c"
            onClick={() => onStartQuiz('difficulty_c')}
            className="bg-stone-100/70 hover:bg-stone-200/70 active:scale-[0.99] border border-stone-200 p-2.5 rounded-xl text-left transition-all flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-stone-800">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" /> C 発展 ({diffStats.C.total}問)
              </div>
              <div className="text-[10px] text-stone-500">高得点狙いの細部</div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          </button>
        </div>
      </div>

      {/* 5. 出題モード選択 */}
      <div className="space-y-2.5">
        <div className="text-[11px] font-bold text-amber-900/70 uppercase tracking-wider px-1">
          その他の出題モード
        </div>

        {/* メイン: 最初から全問学習（完全ランダム） */}
        <button
          id="btn-mode-all"
          onClick={() => onStartQuiz('all')}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-white font-semibold p-4 rounded-xl shadow-sm shadow-amber-500/20 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white">
              <Shuffle className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>全問ランダム学習</span>
                <span className="text-[10px] bg-black/15 text-amber-50 font-normal px-1.5 py-0.2 rounded border border-white/20">
                  全{totalCount}問
                </span>
              </div>
              <div className="text-[11px] text-amber-50 font-normal">
                全問を毎回ランダムにシャッフルして演習
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-100 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* ランダム10問 / ランダム20問 */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            id="btn-mode-random10"
            onClick={() => onStartQuiz('random10')}
            className="bg-white hover:bg-amber-50/50 active:scale-[0.99] text-stone-800 font-semibold p-3.5 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Shuffle className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-stone-900 group-hover:text-amber-900 transition-colors">ランダム10問</div>
              <div className="text-[10px] text-stone-500 font-normal">スキマ時間に演習</div>
            </div>
          </button>

          <button
            id="btn-mode-random20"
            onClick={() => onStartQuiz('random20')}
            className="bg-white hover:bg-amber-50/50 active:scale-[0.99] text-stone-800 font-semibold p-3.5 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-stone-900 group-hover:text-amber-900 transition-colors">ランダム20問</div>
              <div className="text-[10px] text-stone-500 font-normal">しっかりチェック</div>
            </div>
          </button>
        </div>

        {/* 間違えた問題のみ復習 */}
        <button
          id="btn-mode-incorrect"
          onClick={() => onStartQuiz('incorrect')}
          disabled={incorrectCount === 0}
          className="w-full bg-white hover:bg-rose-50/40 disabled:hover:bg-white active:scale-[0.99] text-stone-800 font-semibold p-3.5 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-between disabled:opacity-40 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-100/80 text-rose-700 flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <span>要復習のみ集中演習</span>
                {incorrectCount > 0 && (
                  <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded font-semibold border border-rose-200">
                    {incorrectCount}問
                  </span>
                )}
              </div>
              <div className="text-[10px] text-stone-500 font-normal">
                過去に「間違えた」と回答した問題
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-colors" />
        </button>

        {/* ブックマークのみ復習 */}
        <button
          id="btn-mode-bookmarked"
          onClick={() => onStartQuiz('bookmarked')}
          disabled={bookmarkCount === 0}
          className="w-full bg-white hover:bg-amber-50/60 disabled:hover:bg-white active:scale-[0.99] text-stone-800 font-semibold p-3.5 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-between disabled:opacity-40 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-amber-500 text-amber-700" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <span>ブックマーク問題</span>
                {bookmarkCount > 0 && (
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold border border-amber-300">
                    {bookmarkCount}問
                  </span>
                )}
              </div>
              <div className="text-[10px] text-stone-500 font-normal">
                保存した重要項目
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-800 transition-colors" />
        </button>

        {/* 未学習のみ */}
        <button
          id="btn-mode-unlearned"
          onClick={() => onStartQuiz('unlearned')}
          disabled={unlearnedCount === 0}
          className="w-full bg-white hover:bg-amber-50/40 active:scale-[0.99] text-stone-800 font-semibold p-3.5 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-between disabled:opacity-40 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100/60 text-amber-800 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                <span>未学習の問題</span>
                {unlearnedCount > 0 && (
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold border border-amber-200">
                    残り{unlearnedCount}問
                  </span>
                )}
              </div>
              <div className="text-[10px] text-stone-500 font-normal">
                まだ一度も解いていない問題
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-colors" />
        </button>
      </div>

      {/* サブメニュー: 全問一覧・検索 */}
      <div className="pt-1">
        <button
          id="btn-open-question-list"
          onClick={onOpenList}
          className="w-full bg-white hover:bg-amber-50/50 active:scale-[0.99] text-stone-700 hover:text-amber-950 font-semibold py-3 px-4 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-center gap-2 text-xs"
        >
          <ListFilter className="w-3.5 h-3.5 text-amber-600" />
          <span>全{totalCount}問のリスト閲覧・ランク別検索</span>
        </button>
      </div>

      {/* データ初期化リンク */}
      <div className="text-center pt-2">
        {!showResetConfirm ? (
          <button
            id="btn-reset-data-init"
            onClick={() => setShowResetConfirm(true)}
            className="text-[11px] text-stone-400 hover:text-rose-700 transition-colors inline-flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            <span>すべての学習履歴を初期化（完全リセット）</span>
          </button>
        ) : (
          <div className="bg-rose-50 border border-rose-200/90 p-3.5 rounded-xl space-y-2 text-left animate-in fade-in">
            <p className="text-xs text-rose-900 font-semibold leading-relaxed">
              一問一答の学習記録・ブックマークに加え、共通テスト過去問の受験経歴・得点推移グラフ・目標得点設定を含むすべてのデータを完全初期化しますか？
            </p>
            <div className="flex gap-2">
              <button
                id="btn-reset-data-confirm"
                onClick={() => {
                  onResetData();
                  setShowResetConfirm(false);
                }}
                className="bg-rose-700 text-white font-semibold text-xs py-1.5 px-3 rounded-lg hover:bg-rose-800 transition-colors"
              >
                完全初期化を実行する
              </button>
              <button
                id="btn-reset-data-cancel"
                onClick={() => setShowResetConfirm(false)}
                className="bg-white border border-stone-200 text-stone-700 text-xs py-1.5 px-3 rounded-lg hover:bg-stone-50 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>

      {/* アプリフッター：使用AI＆出典・参考文献 */}
      <AppFooterCredits />

      {/* アプリの使い方・機能紹介モーダル（App Store風プレビュー） */}
      <AppGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onNavigateToQuiz={() => onStartQuiz('normal')}
        onNavigateToExam={onOpenExamSelect}
      />
    </div>
  );
};
