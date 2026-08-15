import React, { useState, useMemo } from 'react';
import { ExamData, ExamQuestion } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  List,
} from 'lucide-react';

interface ExamPracticeViewProps {
  exam: ExamData;
  onFinishExam: (userAnswers: Record<string, number | string>) => void;
  onQuitExam: () => void;
}

export const ExamPracticeView: React.FC<ExamPracticeViewProps> = ({
  exam,
  onFinishExam,
  onQuitExam,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number | string>>({});
  const [showQuestionGrid, setShowQuestionGrid] = useState<boolean>(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState<boolean>(false);

  const currentQ: ExamQuestion | undefined = exam.questions[currentIdx];

  // 全大問リスト
  const sections = useMemo(() => {
    const s = new Set<number>();
    exam.questions.forEach((q) => s.add(q.section));
    return Array.from(s).sort((a, b) => a - b);
  }, [exam]);

  // 現在の大問
  const currentSection = currentQ ? currentQ.section : 1;

  // 回答数
  const answeredCount = Object.keys(userAnswers).filter(
    (key) => userAnswers[key] !== undefined && userAnswers[key] !== ''
  ).length;

  const totalQuestions = exam.questions.length;
  const isAllAnswered = answeredCount === totalQuestions;

  // 単一問題の回答選択
  const handleSelectChoice = (questionId: string, choiceNum: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: choiceNum,
    }));
  };

  // 連動型問題（解答番号が複数ある場合、例: 立場と組合せ）
  const handleSelectSubChoice = (questionId: string, subKey: string, choiceVal: number | string) => {
    const currentVal = (userAnswers[questionId] as string) || '';
    const parts: Record<string, string> = {};
    if (currentVal) {
      currentVal.split(';').forEach((p) => {
        const [k, v] = p.split(':');
        if (k && v) parts[k] = v;
      });
    }
    parts[subKey] = String(choiceVal);
    const newVal = Object.entries(parts)
      .map(([k, v]) => `${k}:${v}`)
      .join(';');

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: newVal,
    }));
  };

  if (!currentQ) return null;

  return (
    <div className="w-full max-w-xl mx-auto p-4 space-y-4 pb-16">
      {/* 演習上部バー */}
      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            id="btn-exam-quit"
            onClick={onQuitExam}
            className="text-xs font-bold text-stone-600 hover:text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 py-1.5 px-3 rounded-lg transition-colors"
          >
            中断
          </button>
          <div className="text-left">
            <span className="text-[10px] font-bold text-amber-900/70 block">
              {exam.metadata.year}年 {exam.metadata.session}
            </span>
            <span className="text-xs font-bold text-stone-900">
              第{currentQ.section}問 問{currentQ.question_no}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* 問題一覧グリッドトグル */}
          <button
            id="btn-toggle-question-grid"
            onClick={() => setShowQuestionGrid(!showQuestionGrid)}
            className={`p-2 rounded-lg border text-xs font-bold flex items-center gap-1 transition-all ${
              showQuestionGrid
                ? 'bg-stone-900 text-amber-300 border-stone-900'
                : 'bg-white text-stone-700 border-amber-200/80 hover:bg-amber-50/50'
            }`}
          >
            <List className="w-3.5 h-3.5 text-amber-600" />
            <span className="tabular-nums font-mono">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          {/* 採点提出ボタン */}
          <button
            id="btn-submit-exam"
            onClick={() => setShowFinishConfirm(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold py-2 px-3.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>採点する</span>
          </button>
        </div>
      </div>

      {/* 問題クイックナビゲーション（グリッド表示時） */}
      {showQuestionGrid && (
        <div className="bg-white rounded-2xl p-4 border border-amber-200/90 shadow-md shadow-amber-900/5 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800 pb-1 border-b border-amber-100">
            <span>問題一覧（タップしてジャンプ）</span>
            <span className="text-[11px] text-amber-800/80 font-normal">
              オレンジ枠: 回答済 / 白枠: 未回答
            </span>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
            {exam.questions.map((q, idx) => {
              const isAnswered = userAnswers[q.question_id] !== undefined;
              const isCurrent = idx === currentIdx;
              return (
                <button
                  key={q.question_id}
                  id={`btn-jump-q-${idx + 1}`}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setShowQuestionGrid(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`h-9 rounded-lg text-xs font-bold font-mono transition-all border flex flex-col items-center justify-center ${
                    isCurrent
                      ? 'ring-2 ring-amber-500 border-amber-500 font-black'
                      : ''
                  } ${
                    isAnswered
                      ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-xs'
                      : 'bg-amber-50/40 text-stone-700 border-amber-200/70 hover:bg-amber-100/50'
                  }`}
                >
                  <span>{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 大問タブバー */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {sections.map((sec) => {
          const isCurrentSec = sec === currentSection;
          const firstQIndex = exam.questions.findIndex((q) => q.section === sec);
          const secQs = exam.questions.filter((q) => q.section === sec);
          const secAnswered = secQs.filter((q) => userAnswers[q.question_id] !== undefined).length;

          return (
            <button
              key={sec}
              id={`tab-section-${sec}`}
              onClick={() => {
                if (firstQIndex !== -1) {
                  setCurrentIdx(firstQIndex);
                  window.scrollTo(0, 0);
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 border ${
                isCurrentSec
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-xs'
                  : 'bg-white text-stone-600 border-amber-200/80 hover:bg-amber-50/60'
              }`}
            >
              第{sec}問
              <span
                className={`ml-1 text-[10px] font-normal ${
                  isCurrentSec ? 'text-amber-100' : 'text-stone-400'
                }`}
              >
                ({secAnswered}/{secQs.length})
              </span>
            </button>
          );
        })}
      </div>

      {/* メイン問題カード */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/90 space-y-5">
        {/* 問題メタヘッダー */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-2.5 py-1 rounded-md font-mono shadow-xs">
              第{currentQ.section}問 問{currentQ.question_no}
            </span>
            <span className="text-xs bg-amber-100/80 text-amber-900 font-bold px-2 py-0.5 rounded-md border border-amber-300">
              配点 {currentQ.points}点
            </span>
            <span className="text-xs text-stone-500 font-mono">
              [解答番号 {currentQ.answer_numbers.join('・')}]
            </span>
            {currentQ.correction_applied && (
              <span className="text-[11px] bg-rose-100 text-rose-800 border border-rose-300 font-bold px-2 py-0.5 rounded-md">
                問題訂正反映済
              </span>
            )}
          </div>

          <div className="text-xs text-stone-500 font-mono font-medium">
            {currentIdx + 1} / {totalQuestions}
          </div>
        </div>

        {/* 問題文 */}
        <div className="space-y-3">
          <div className="text-stone-900 text-[15px] sm:text-base font-normal leading-relaxed whitespace-pre-wrap">
            {currentQ.question_text}
          </div>
        </div>

        {/* 選択肢エリア */}
        <div className="space-y-2.5 pt-2">
          <div className="text-[11px] font-bold text-amber-900/80 uppercase tracking-wider">
            選択肢（マーク）
          </div>

          {/* 通常の単一選択肢（1つの解答番号） */}
          {currentQ.answer_numbers.length === 1 && (
            <div className="space-y-2">
              {currentQ.options.map((opt) => {
                const isSelected = userAnswers[currentQ.question_id] === opt.choice;
                const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
                const symbol = circleNumbers[opt.choice - 1] || `${opt.choice}`;

                return (
                  <button
                    key={opt.choice}
                    id={`choice-${currentQ.question_id}-${opt.choice}`}
                    onClick={() => handleSelectChoice(currentQ.question_id, opt.choice)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
                        : 'bg-white hover:bg-amber-50/50 text-stone-800 border-amber-200/80'
                    }`}
                  >
                    <span
                      className={`text-base font-bold shrink-0 ${
                        isSelected ? 'text-white' : 'text-amber-800'
                      }`}
                    >
                      {symbol}
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        isSelected ? 'text-white font-medium' : 'text-stone-800'
                      }`}
                    >
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 複数解答番号・連動型問題の場合（例: 立場選択 9 + 組合せ 10） */}
          {currentQ.answer_numbers.length > 1 && (
            <div className="space-y-4 bg-amber-50/40 p-4 rounded-xl border border-amber-200/80">
              <div className="text-xs text-amber-900 font-semibold">
                ※ この問題は複数の解答番号（マーク）に分かれています。それぞれ選択してください。
              </div>

              {/* 解答番号1（例: 立場/政策の選択） */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-900">
                  【解答番号 {currentQ.answer_numbers[0]}】 立場・対象の選択:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2].map((val) => {
                    const savedVal = (userAnswers[currentQ.question_id] as string) || '';
                    const isSelected = savedVal.includes(`sub1:${val}`);
                    const label = val === 1 ? '① 選択肢 (1) / 立場 a / A国' : '② 選択肢 (2) / 立場 b / B国';
                    return (
                      <button
                        key={val}
                        id={`sub1-choice-${val}`}
                        onClick={() => handleSelectSubChoice(currentQ.question_id, 'sub1', val)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-xs'
                            : 'bg-white text-stone-700 border-amber-200 hover:bg-amber-50/60'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 解答番号2（組合せの選択） */}
              <div className="space-y-2 pt-2 border-t border-amber-200/70">
                <div className="text-xs font-bold text-stone-900">
                  【解答番号 {currentQ.answer_numbers[1]}】 根拠・ねらいの組合せ選択:
                </div>
                <div className="space-y-1.5">
                  {currentQ.options.map((opt) => {
                    const savedVal = (userAnswers[currentQ.question_id] as string) || '';
                    const isSelected = savedVal.includes(`sub2:${opt.choice}`);
                    const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
                    const symbol = circleNumbers[opt.choice - 1] || `${opt.choice}`;

                    return (
                      <button
                        key={opt.choice}
                        id={`sub2-choice-${opt.choice}`}
                        onClick={() =>
                          handleSelectSubChoice(currentQ.question_id, 'sub2', opt.choice)
                        }
                        className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center gap-2 ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-xs'
                            : 'bg-white text-stone-800 border-amber-200 hover:bg-amber-50/60'
                        }`}
                      >
                        <span className="font-bold shrink-0">{symbol}</span>
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 前へ・次へナビゲーションボタン */}
      <div className="grid grid-cols-2 gap-3">
        <button
          id="btn-prev-exam-question"
          disabled={currentIdx === 0}
          onClick={() => {
            if (currentIdx > 0) {
              setCurrentIdx(currentIdx - 1);
              window.scrollTo(0, 0);
            }
          }}
          className="bg-white hover:bg-amber-50/50 disabled:hover:bg-white text-stone-700 disabled:text-stone-300 font-bold py-3 px-4 rounded-xl border border-amber-200/80 shadow-xs transition-all flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed text-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>前の問題</span>
        </button>

        {currentIdx < totalQuestions - 1 ? (
          <button
            id="btn-next-exam-question"
            onClick={() => {
              setCurrentIdx(currentIdx + 1);
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 text-xs"
          >
            <span>次の問題</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            id="btn-finish-exam-last"
            onClick={() => setShowFinishConfirm(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 text-xs"
          >
            <span>全問完了・採点へ</span>
            <Send className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 採点確認モーダル */}
      {showFinishConfirm && (
        <div
          id="finish-confirm-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs"
          onClick={() => setShowFinishConfirm(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl border border-amber-200 space-y-4 text-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <CheckCircle className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">解答を提出して採点しますか？</h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  回答状況: {answeredCount} / {totalQuestions} 問
                  {!isAllAnswered && (
                    <span className="block text-rose-700 font-semibold mt-1">
                      ※ 未回答の問題が {totalQuestions - answeredCount} 問あります。
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                id="btn-cancel-finish"
                onClick={() => setShowFinishConfirm(false)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-2.5 px-3 rounded-xl text-xs transition-all text-center"
              >
                演習に戻る
              </button>
              <button
                id="btn-confirm-finish"
                onClick={() => {
                  setShowFinishConfirm(false);
                  onFinishExam(userAnswers);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all text-center shadow-xs"
              >
                採点して結果を見る
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
