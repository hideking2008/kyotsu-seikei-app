import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import { Check, X, Eye, Volume2, Type, Sparkles } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  isBookmarked: boolean;
  onAnswer: (isCorrect: boolean) => void;
  onToggleBookmark: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}) => {
  const [isAnswerShown, setIsAnswerShown] = useState<boolean>(false);
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // 新しい問題に切り替わったら解答非表示に戻す
  useEffect(() => {
    setIsAnswerShown(false);
  }, [question.id]);

  // キーボードショートカット (Space: 解答表示, 1: 間違えた, 2: 覚えた)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isAnswerShown) {
        e.preventDefault();
        setIsAnswerShown(true);
      } else if (isAnswerShown) {
        if (e.key === '1' || e.key === 'ArrowLeft') {
          onAnswer(false);
        } else if (e.key === '2' || e.key === 'ArrowRight' || e.key === 'Enter') {
          onAnswer(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswerShown, onAnswer]);

  // 音声読み上げ
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const textToSpeak = isAnswerShown ? `${question.q}。解答、${question.a}` : question.q;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ja-JP';
    utterance.rate = 1.05;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-between min-h-[calc(100vh-4.5rem)] p-4 pb-6 space-y-4 select-none">
      {/* 上部プログレスバー */}
      <div className="w-full space-y-1.5 pt-1">
        <div className="w-full bg-amber-200/50 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* メイン問題カード */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18 }}
        id={`quiz-card-${question.id}`}
        className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(217,119,6,0.06)] border border-amber-200/90 flex flex-col justify-between relative overflow-hidden"
      >
        {/* カードヘッダー */}
        <div className="flex items-center justify-between pb-3.5 border-b border-amber-100">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="bg-gradient-to-r from-amber-500 to-orange-400 text-white font-mono text-xs font-bold px-2.5 py-0.5 rounded-md tracking-wider shadow-xs">
              No. {question.id}
            </span>
            <DifficultyBadge difficulty={question.difficulty} size="sm" />
            {question.categoryName && (
              <span className="bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[10px] font-bold px-2 py-0.5 rounded-md truncate max-w-[130px]">
                {question.categoryName}
              </span>
            )}
            <span className="text-[11px] font-semibold text-stone-400">
              {currentIndex + 1} / {totalQuestions} 問目
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* フォントサイズ切り替え */}
            <button
              id="toggle-font-size-btn"
              onClick={() => setIsLargeFont(!isLargeFont)}
              className={`p-1.5 rounded-lg transition active:scale-95 ${
                isLargeFont ? 'text-amber-900 bg-amber-100 font-bold' : 'text-stone-400 hover:text-amber-800 hover:bg-amber-50'
              }`}
              title="文字サイズ変更"
              aria-label="文字サイズ変更"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* 音声読み上げボタン */}
            <button
              id="speak-question-btn"
              onClick={handleSpeak}
              className={`p-1.5 rounded-lg transition active:scale-95 ${
                isSpeaking ? 'text-amber-900 bg-amber-100' : 'text-stone-400 hover:text-amber-800 hover:bg-amber-50'
              }`}
              title="読み上げ"
              aria-label="音声読み上げ"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 問題文 */}
        <div className="my-auto py-6 min-h-[140px] flex items-center">
          <p
            className={`text-stone-900 font-medium leading-relaxed tracking-normal text-left ${
              isLargeFont ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}
          >
            {question.q}
          </p>
        </div>

        {/* 解答エリア (アニメーション表示) */}
        <AnimatePresence>
          {isAnswerShown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-4 pt-4 border-t border-amber-200/80 bg-gradient-to-b from-amber-50/70 to-orange-50/40 -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-6 sm:p-7 rounded-b-2xl"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>正解</span>
              </div>
              <div className="text-stone-950 font-bold text-lg sm:text-xl leading-snug break-words">
                {question.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* アクションボタン群 */}
      <div className="pt-2">
        {!isAnswerShown ? (
          <button
            id="btn-reveal-answer"
            onClick={() => setIsAnswerShown(true)}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.98] text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Eye className="w-4 h-4 text-white" />
            <span>解答を見る</span>
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button
              id="btn-answer-incorrect"
              onClick={() => onAnswer(false)}
              className="bg-rose-50 hover:bg-rose-100/80 active:scale-[0.98] text-rose-800 font-bold py-3.5 px-4 rounded-xl border border-rose-200/90 shadow-xs transition-all flex flex-col items-center justify-center gap-0.5"
            >
              <div className="flex items-center gap-1.5">
                <X className="w-4 h-4 text-rose-600 stroke-[2.5]" />
                <span className="text-sm sm:text-base">間違えた</span>
              </div>
              <span className="text-[10px] text-rose-700/80 font-medium">要復習に記録</span>
            </button>

            <button
              id="btn-answer-correct"
              onClick={() => onAnswer(true)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.98] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex flex-col items-center justify-center gap-0.5"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white stroke-[3]" />
                <span className="text-sm sm:text-base">覚えた！</span>
              </div>
              <span className="text-[10px] text-amber-100 font-medium">習得済みに記録</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
