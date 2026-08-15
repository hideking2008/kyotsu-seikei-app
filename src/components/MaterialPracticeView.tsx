import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RawQuestionData } from '../data/types';
import { MaterialViewer } from './MaterialViewer';
import {
  CheckCircle2,
  XCircle,
  Bookmark,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Info,
  HelpCircle,
  FileText,
  ChevronRight,
  BookOpen,
  Check,
  X
} from 'lucide-react';

interface MaterialPracticeViewProps {
  queue: RawQuestionData[];
  currentIndex: number;
  isBookmarked: boolean;
  onAnswer: (isCorrect: boolean) => void;
  onNextQuestion: () => void;
  onToggleBookmark: () => void;
  onQuit: () => void;
}

export const MaterialPracticeView: React.FC<MaterialPracticeViewProps> = ({
  queue,
  currentIndex,
  isBookmarked,
  onAnswer,
  onNextQuestion,
  onToggleBookmark,
  onQuit,
}) => {
  const currentQ = queue[currentIndex];
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // 問題切り替え時にステート初期化
  useEffect(() => {
    setSelectedChoice(null);
    setHasAnswered(false);
    setIsCorrect(null);
    window.scrollTo(0, 0);
  }, [currentIndex, currentQ?.id]);

  if (!currentQ) return null;

  // 選択肢の番号抽出ヘルパー（①〜⑥）
  const getChoiceNumber = (choiceStr: string): string => {
    const match = choiceStr.match(/^[①②③④⑤⑥⑦⑧]/);
    return match ? match[0] : '';
  };

  const handleSelectChoice = (choice: string) => {
    if (hasAnswered) return;

    const choiceNum = getChoiceNumber(choice);
    // 正答判定：currentQ.answer（例: "②" や "①"）と一致するか
    const correct =
      choiceNum === currentQ.answer ||
      choice.startsWith(currentQ.answer) ||
      choice.includes(currentQ.answer);

    setSelectedChoice(choice);
    setHasAnswered(true);
    setIsCorrect(correct);
    onAnswer(correct);
  };

  const progressPercent = Math.round(((currentIndex + 1) / queue.length) * 100);

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-5 space-y-4 pb-24">
      {/* 1. 上部コントロールバー */}
      <div className="flex items-center justify-between gap-2">
        <button
          id="btn-quit-material-quiz"
          onClick={onQuit}
          className="text-xs font-bold text-stone-500 hover:text-stone-800 bg-white border border-stone-200/90 px-3 py-1.5 rounded-xl shadow-2xs hover:bg-stone-50 transition-all active:scale-95"
        >
          中断する
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300/80 px-2.5 py-1 rounded-lg">
            {currentQ.category} • {currentQ.unit}
          </span>
          <button
            id="btn-toggle-bookmark-material"
            onClick={onToggleBookmark}
            className={`p-2 rounded-xl border transition-all active:scale-95 ${
              isBookmarked
                ? 'bg-amber-100 border-amber-300 text-amber-700 shadow-2xs'
                : 'bg-white border-stone-200/90 text-stone-400 hover:text-stone-600'
            }`}
            title="ブックマーク"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. 進捗バー & カウンター */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-stone-700">
            問題 <strong className="text-amber-800 font-mono text-sm">{currentIndex + 1}</strong> / {queue.length}
          </span>
          <span className="text-stone-400 font-mono text-[11px]">
            {progressPercent}% 完了
          </span>
        </div>
        <div className="w-full bg-stone-200/70 h-2 rounded-full overflow-hidden p-0.5">
          <motion.div
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
          />
        </div>
      </div>

      {/* 3. メイン問題カード */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-amber-200/90 space-y-4 text-left relative overflow-hidden">
        {/* 資料・図表がある場合、最上部に大きく表示 */}
        {currentQ.has_material && (
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>提示資料・図表・統計</span>
            </div>
            <div className="mt-1">
              <MaterialViewer question={currentQ} />
            </div>
          </div>
        )}

        {/* 設問文 */}
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base font-bold text-stone-900 leading-relaxed whitespace-pre-wrap">
            {currentQ.question_text}
          </h2>
        </div>

        {/* 選択肢ボタン群 */}
        <div className="space-y-2 pt-2">
          {currentQ.choices.map((choice, idx) => {
            const choiceNum = getChoiceNumber(choice);
            const isThisChoiceCorrect =
              choiceNum === currentQ.answer ||
              choice.startsWith(currentQ.answer) ||
              choice.includes(currentQ.answer);
            const isThisChoiceSelected = selectedChoice === choice;

            let btnStyle = 'bg-stone-50/80 hover:bg-stone-100/90 border-stone-200/90 text-stone-800';

            if (hasAnswered) {
              if (isThisChoiceCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
              } else if (isThisChoiceSelected) {
                btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
              } else {
                btnStyle = 'bg-stone-50/40 border-stone-200/60 text-stone-400 opacity-60';
              }
            }

            return (
              <motion.button
                key={idx}
                id={`btn-material-choice-${idx}`}
                whileTap={!hasAnswered ? { scale: 0.99 } : {}}
                onClick={() => handleSelectChoice(choice)}
                disabled={hasAnswered}
                className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm leading-relaxed transition-all flex items-start justify-between gap-3 ${btnStyle}`}
              >
                <div className="flex-1 whitespace-pre-wrap">{choice}</div>
                {hasAnswered && (
                  <div className="shrink-0 pt-0.5">
                    {isThisChoiceCorrect && (
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                    {!isThisChoiceCorrect && isThisChoiceSelected && (
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* 回答後の判定＆解説領域 */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 pt-2"
            >
              {/* 正誤判定バナー */}
              <div
                className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                  isCorrect
                    ? 'bg-emerald-500/10 border-emerald-400 text-emerald-950'
                    : 'bg-rose-500/10 border-rose-400 text-rose-950'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${
                    isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                  }`}
                >
                  {isCorrect ? <Check className="w-5 h-5 stroke-[3]" /> : <X className="w-5 h-5 stroke-[3]" />}
                </div>
                <div>
                  <div className="text-sm font-bold">
                    {isCorrect ? '正解！素晴らしい理解です！' : `不正解... 正答は【 ${currentQ.answer} 】です`}
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    下記の解説と資料をよく確認して知識を定着させましょう。
                  </div>
                </div>
              </div>

              {/* 詳しい解説 */}
              <div className="bg-amber-50/70 p-4 sm:p-5 rounded-xl border border-amber-200 space-y-2.5 text-xs text-stone-800">
                <div className="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm border-b border-amber-200/80 pb-1.5">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>解答のポイント・解説</span>
                </div>
                <div className="leading-relaxed whitespace-pre-wrap text-stone-800 text-xs sm:text-sm">
                  {currentQ.explanation}
                </div>

                {currentQ.source && (
                  <div className="pt-2 border-t border-amber-200/70 text-[11px] text-stone-500 flex items-center justify-between">
                    <span>出典: {currentQ.source.file}</span>
                    <span>問P.{currentQ.source.question_pages.join(',')} / 解P.{currentQ.source.answer_pages.join(',')}</span>
                  </div>
                )}
              </div>

              {/* 次へ進むボタン */}
              <button
                id="btn-next-material-question"
                onClick={onNextQuestion}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-600/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>{currentIndex + 1 >= queue.length ? '演習結果を確認する' : '次の問題へ進む'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
