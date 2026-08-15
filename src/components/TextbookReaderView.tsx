import React, { useState, useEffect, useMemo } from 'react';
import {
  TEXTBOOK_CHAPTERS,
  TextbookChapter,
} from '../data/textbookData';
import {
  BookOpen,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  CheckCircle,
  Sparkles,
  Layers,
  Flame,
  RotateCcw,
  Sliders,
  Play,
  Share2,
  HelpCircle,
} from 'lucide-react';

interface TextbookReaderViewProps {
  onClose: () => void;
  onStartQuizByRange?: (startId: number, endId: number, categoryName: string) => void;
  initialChapterId?: number;
}

const STORAGE_KEY_READ_CHAPTERS = 'pol_eco_textbook_read_chapters';

export const TextbookReaderView: React.FC<TextbookReaderViewProps> = ({
  onClose,
  onStartQuizByRange,
  initialChapterId,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(
    initialChapterId || null
  );
  const [isRedSheetOn, setIsRedSheetOn] = useState(true);
  const [revealedKeywords, setRevealedKeywords] = useState<Record<number, boolean>>({});
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [activeTab, setActiveTab] = useState<'all' | '政治' | '経済' | '国際' | '社会' | '公共'>('all');
  
  // 読了した章のIDリスト
  const [readChapterIds, setReadChapterIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_READ_CHAPTERS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleReadStatus = (chapterId: number) => {
    setReadChapterIds((prev) => {
      const next = prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId];
      try {
        localStorage.setItem(STORAGE_KEY_READ_CHAPTERS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // 章を切り替えたら開示キーワードをリセット
  useEffect(() => {
    setRevealedKeywords({});
  }, [selectedChapterId]);

  const currentChapter = useMemo(() => {
    if (selectedChapterId === null) return null;
    return TEXTBOOK_CHAPTERS.find((c) => c.id === selectedChapterId) || null;
  }, [selectedChapterId]);

  // 本文中のキーワードパース処理
  const parsedContent = useMemo(() => {
    if (!currentChapter) return [];
    
    // {{keyword}} をパース
    const regex = /\{\{([^}]+)\}\}/g;
    const paragraphs = currentChapter.content.split('\n\n');
    
    let keywordIndex = 0;
    return paragraphs.map((para, pIdx) => {
      const parts: Array<{ text: string; isKeyword: boolean; kwIndex?: number }> = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(para)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            text: para.substring(lastIndex, match.index),
            isKeyword: false,
          });
        }
        parts.push({
          text: match[1],
          isKeyword: true,
          kwIndex: keywordIndex++,
        });
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < para.length) {
        parts.push({
          text: para.substring(lastIndex),
          isKeyword: false,
        });
      }

      return { pIdx, parts };
    });
  }, [currentChapter]);

  // 現在の章のキーワード総数
  const totalKeywordsInChapter = useMemo(() => {
    if (!parsedContent) return 0;
    let count = 0;
    parsedContent.forEach((p) => {
      p.parts.forEach((part) => {
        if (part.isKeyword) count++;
      });
    });
    return count;
  }, [parsedContent]);

  // キーワードの開示トグル
  const toggleKeywordReveal = (kwIndex: number) => {
    setRevealedKeywords((prev) => ({
      ...prev,
      [kwIndex]: !prev[kwIndex],
    }));
  };

  // 全開示 / 全非表示
  const revealAllKeywords = () => {
    const next: Record<number, boolean> = {};
    for (let i = 0; i < totalKeywordsInChapter; i++) {
      next[i] = true;
    }
    setRevealedKeywords(next);
  };

  const hideAllKeywords = () => {
    setRevealedKeywords({});
  };

  // 現在開示されている個数
  const revealedCount = useMemo(() => {
    return Object.values(revealedKeywords).filter(Boolean).length;
  }, [revealedKeywords]);

  // 一問一答への遷移
  const handleLaunchQuiz = (chapter: TextbookChapter) => {
    if (!onStartQuizByRange) return;
    // targetRange: 'No.1〜20' から抽出
    const match = chapter.targetRange.match(/No\.(\d+)〜(\d+)/);
    if (match) {
      const startId = parseInt(match[1], 10);
      const endId = parseInt(match[2], 10);
      onStartQuizByRange(startId, endId, `第${chapter.chapterNumber}章 ${chapter.title}`);
    }
  };

  // フィルターした章リスト
  const filteredChapters = useMemo(() => {
    if (activeTab === 'all') return TEXTBOOK_CHAPTERS;
    return TEXTBOOK_CHAPTERS.filter((c) => c.tag === activeTab);
  }, [activeTab]);

  return (
    <div className="w-full max-w-md mx-auto min-h-screen pb-20 flex flex-col bg-amber-50/40 text-stone-800">
      {/* 画面ヘッダー */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-amber-200/80 px-4 py-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (selectedChapterId !== null) {
                  setSelectedChapterId(null);
                } else {
                  onClose();
                }
              }}
              className="p-1.5 -ml-1 text-stone-600 hover:text-stone-900 hover:bg-amber-100/50 rounded-lg transition-colors"
              title={selectedChapterId !== null ? '章一覧へ戻る' : 'ホームへ戻る'}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm font-bold text-stone-900 leading-none">
                  {selectedChapterId !== null ? `第${selectedChapterId}章` : '体系マスター教科書'}
                </h1>
                <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-1.5 py-0.2 rounded border border-rose-200 flex items-center gap-0.5">
                  <Flame className="w-2.5 h-2.5 text-rose-500" /> 赤シート暗記
                </span>
              </div>
              <p className="text-[10px] text-stone-500 mt-0.5 truncate max-w-[210px]">
                {currentChapter ? currentChapter.title : `全${TEXTBOOK_CHAPTERS.length}章 体系的長文インプット・復習`}
              </p>
            </div>
          </div>

          {/* 読書時ツールバー (章表示中のみ) */}
          {selectedChapterId !== null && (
            <div className="flex items-center gap-1.5">
              {/* 赤シートON/OFF */}
              <button
                onClick={() => setIsRedSheetOn(!isRedSheetOn)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                  isRedSheetOn
                    ? 'bg-rose-600 hover:bg-rose-700 text-white ring-2 ring-rose-300'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
                title={isRedSheetOn ? '赤シートを外す' : '赤シートを被せる'}
              >
                {isRedSheetOn ? <EyeOff className="w-3.5 h-3.5 text-white" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{isRedSheetOn ? '赤シート中' : '通常表示'}</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ============================================================
          1. 詳細読書・演習ビュー (章選択時)
         ============================================================ */}
      {selectedChapterId !== null && currentChapter ? (
        <div className="p-4 space-y-4">
          {/* 章タイトルバナー */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-300/80">
                {currentChapter.targetRange}
              </span>
              <button
                onClick={() => toggleReadStatus(currentChapter.id)}
                className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg transition-all border ${
                  readChapterIds.includes(currentChapter.id)
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{readChapterIds.includes(currentChapter.id) ? '読了済み' : '未読了'}</span>
              </button>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
              第{currentChapter.chapterNumber}章　{currentChapter.title}
            </h2>

            {/* この分野の見取り図 */}
            <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200/80 text-xs space-y-1">
              <div className="font-bold text-amber-950 flex items-center gap-1 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> この分野の見取り図
              </div>
              <p className="text-stone-700 leading-relaxed text-[11px] sm:text-xs">
                {currentChapter.overview}
              </p>
            </div>
          </div>

          {/* 赤シート操作パネル */}
          {isRedSheetOn && (
            <div className="bg-gradient-to-r from-rose-50 to-red-50 p-3 rounded-xl border border-rose-200 flex items-center justify-between text-xs shadow-xs">
              <div className="flex items-center gap-1.5 text-rose-900 font-bold text-[11px]">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>暗記進捗: {revealedCount}/{totalKeywordsInChapter}語 確認</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={revealAllKeywords}
                  className="bg-white hover:bg-rose-100/60 text-rose-800 text-[10px] font-bold px-2 py-1 rounded-md border border-rose-200 transition-colors"
                >
                  全表示
                </button>
                <button
                  onClick={hideAllKeywords}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs transition-colors"
                >
                  全隠す
                </button>
              </div>
            </div>
          )}

          {/* 本文エリア（教科書風） */}
          <div className="bg-white rounded-2xl p-5 border border-amber-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-amber-100 pb-2.5">
              <span className="text-xs font-bold text-stone-500 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" /> 教科書本文（全{totalKeywordsInChapter}キーワード）
              </span>
              <div className="flex items-center gap-1 text-[10px]">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-1.5 py-0.5 rounded font-bold ${
                    fontSize === 'normal' ? 'bg-amber-500 text-white' : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  小
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-1.5 py-0.5 rounded font-bold ${
                    fontSize === 'large' ? 'bg-amber-500 text-white' : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  中
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-1.5 py-0.5 rounded font-bold ${
                    fontSize === 'xlarge' ? 'bg-amber-500 text-white' : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  大
                </button>
              </div>
            </div>

            <div
              className={`space-y-4 leading-loose text-stone-800 font-serif tracking-wide select-none ${
                fontSize === 'normal' ? 'text-xs sm:text-sm' : fontSize === 'large' ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
              }`}
            >
              {parsedContent.map((paragraph) => (
                <p key={paragraph.pIdx} className="leading-relaxed sm:leading-loose">
                  {paragraph.parts.map((part, idx) => {
                    if (!part.isKeyword) {
                      return <span key={idx}>{part.text}</span>;
                    }

                    const kwIdx = part.kwIndex ?? 0;
                    const isRevealed = revealedKeywords[kwIdx];

                    // 赤シートモードOFFの時：通常の赤太字
                    if (!isRedSheetOn) {
                      return (
                        <strong
                          key={idx}
                          className="font-bold text-rose-600 bg-rose-50/50 px-1 py-0.2 rounded border-b-2 border-rose-400"
                        >
                          {part.text}
                        </strong>
                      );
                    }

                    // 赤シートモードONの時
                    return (
                      <span
                        key={idx}
                        onClick={() => toggleKeywordReveal(kwIdx)}
                        className={`inline-block mx-0.5 px-1.5 py-0.5 rounded-md cursor-pointer transition-all duration-150 text-center ${
                          isRevealed
                            ? 'bg-rose-50 text-rose-800 font-bold border border-rose-200 shadow-2xs'
                            : 'bg-[#f4728d] hover:bg-[#eb5b79] text-transparent select-none shadow-xs border border-[#e85372] min-w-[3.5em]'
                        }`}
                        title="タップしてキーワードを確認/隠す"
                      >
                        {isRevealed ? part.text : part.text}
                      </span>
                    );
                  })}
                </p>
              ))}
            </div>

            {/* 復習のコツ */}
            <div className="mt-6 pt-3 border-t border-dashed border-amber-200/90 text-xs text-stone-600 bg-amber-50/40 p-3 rounded-xl">
              <span className="font-bold text-amber-900 mr-1">💡 復習のコツ：</span>
              {currentChapter.reviewTips}
            </div>
          </div>

          {/* この章の一問一答へジャンプ */}
          {onStartQuizByRange && (
            <button
              id="btn-textbook-launch-quiz"
              onClick={() => handleLaunchQuiz(currentChapter)}
              className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 active:scale-[0.99] text-white font-bold p-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>この分野（{currentChapter.targetRange}）の一問一答を解く</span>
            </button>
          )}

          {/* 前の章 / 次の章 ナビゲーション */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              disabled={currentChapter.id <= 1}
              onClick={() => setSelectedChapterId(currentChapter.id - 1)}
              className="flex-1 bg-white hover:bg-amber-50/60 disabled:opacity-40 disabled:hover:bg-white text-stone-700 font-bold text-xs p-2.5 rounded-xl border border-amber-200 flex items-center justify-center gap-1 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>前の章へ</span>
            </button>

            <button
              onClick={() => setSelectedChapterId(null)}
              className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs px-3 py-2.5 rounded-xl transition-all"
            >
              章一覧
            </button>

            <button
              disabled={currentChapter.id >= TEXTBOOK_CHAPTERS.length}
              onClick={() => setSelectedChapterId(currentChapter.id + 1)}
              className="flex-1 bg-white hover:bg-amber-50/60 disabled:opacity-40 disabled:hover:bg-white text-stone-700 font-bold text-xs p-2.5 rounded-xl border border-amber-200 flex items-center justify-center gap-1 transition-all"
            >
              <span>次の章へ</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* ============================================================
            2. 章一覧・選択ビュー (全19章＋総合復習)
           ============================================================ */
        <div className="p-4 space-y-4">
          {/* 説明バナー */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200/90 shadow-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-md inline-flex border border-amber-200">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>全500問のキーワードを長文の流れで完全体系化</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-stone-900">
              体系マスター教科書（赤シート講義）
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              単語だけの丸暗記ではなく、前後の知識や因果関係を長文で体系的にインプットできます。赤文字のキーワードは赤シート機能で隠して即座にアウトプット演習が可能です。
            </p>

            {/* 全体進捗 */}
            <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-xs">
              <span className="text-stone-500 font-medium">読了進捗</span>
              <span className="font-mono font-bold text-amber-900">
                {readChapterIds.length} / {TEXTBOOK_CHAPTERS.length} 章 完了 (
                {Math.round((readChapterIds.length / TEXTBOOK_CHAPTERS.length) * 100)}%)
              </span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(readChapterIds.length / TEXTBOOK_CHAPTERS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* 分野フィルタータブ */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 text-xs">
            {(['all', '政治', '経済', '国際', '社会', '公共'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-amber-200/80 hover:bg-amber-50/60'
                }`}
              >
                {tab === 'all' ? `全${TEXTBOOK_CHAPTERS.length}章` : tab}
              </button>
            ))}
          </div>

          {/* 章カード一覧 */}
          <div className="space-y-2.5">
              {filteredChapters.map((chapter) => {
                const isRead = readChapterIds.includes(chapter.id);
                return (
                  <div
                    key={chapter.id}
                    onClick={() => setSelectedChapterId(chapter.id)}
                    className="bg-white hover:bg-amber-50/40 active:scale-[0.99] rounded-xl p-3.5 border border-amber-200/90 shadow-xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.2 rounded border border-amber-200">
                          {chapter.targetRange}
                        </span>
                        <span className="text-[10px] bg-stone-100 text-stone-600 font-bold px-1.5 py-0.2 rounded">
                          {chapter.tag}
                        </span>
                        {isRead && (
                          <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-600" /> 読了
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                        第{chapter.chapterNumber}章　{chapter.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {chapter.overview}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-amber-600 group-hover:translate-x-0.5 transition-transform">
                      <span className="text-xs font-bold hidden sm:inline">読む</span>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600" />
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      )}
    </div>
  );
};
