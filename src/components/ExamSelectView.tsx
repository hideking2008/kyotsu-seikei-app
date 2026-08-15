import React, { useState } from 'react';
import { ALL_EXAMS, AVAILABLE_YEARS } from '../data/exams';
import { ExamData, ExamField } from '../types';
import { getExamBestScore } from '../utils/examStorage';
import { ExamAnalyticsView } from './ExamAnalyticsView';
import {
  Calendar,
  Award,
  ChevronRight,
  BookOpen,
  FileCheck,
  CheckCircle,
  Sparkles,
  BarChart2,
} from 'lucide-react';

interface ExamSelectViewProps {
  onSelectExam: (exam: ExamData) => void;
  onBack: () => void;
  onReviewField?: (field: ExamField) => void;
  onResetExamData?: () => void;
}

export const ExamSelectView: React.FC<ExamSelectViewProps> = ({
  onSelectExam,
  onBack,
  onReviewField,
  onResetExamData,
}) => {
  // メインタブ（過去問演習 / 成績確認）
  const [activeTab, setActiveTab] = useState<'practice' | 'analytics'>('practice');
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedSession, setSelectedSession] = useState<'本試験' | '追試験' | '追・再試験' | '試作問題'>('本試験');


  // 現在選択中の年度で利用可能な試験種別を特定
  const mainExamId = `${selectedYear}_main`;
  const followupExamId = `${selectedYear}_followup`;
  const sampleExamId = `${selectedYear}_sample`;

  const mainExam = ALL_EXAMS[mainExamId];
  const followupExam = ALL_EXAMS[followupExamId];
  const sampleExam = ALL_EXAMS[sampleExamId];

  // 追試験の表示名
  const followupLabel = '追・再試験';

  let currentExam: ExamData | null = null;
  if (selectedSession === '本試験') {
    currentExam = mainExam || null;
  } else if (selectedSession === '追試験' || selectedSession === '追・再試験') {
    currentExam = followupExam || null;
  } else if (selectedSession === '試作問題') {
    currentExam = sampleExam || null;
  }

  // 最高得点
  const mainBest = mainExam ? getExamBestScore(mainExam.metadata.id) : null;
  const followupBest = followupExam ? getExamBestScore(followupExam.metadata.id) : null;
  const sampleBest = sampleExam ? getExamBestScore(sampleExam.metadata.id) : null;

  return (
    <div className="w-full max-w-xl mx-auto p-4 space-y-4 pb-12">
      {/* 0. 最上部：過去問演習 / 成績確認 切り替えタブ（要件1） */}
      <div className="bg-stone-200/80 p-1 rounded-2xl flex items-center gap-1 border border-stone-300/70 shadow-inner">
        <button
          id="btn-tab-exam-practice"
          onClick={() => setActiveTab('practice')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'practice'
              ? 'bg-white text-stone-900 shadow-sm border border-stone-200/90'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <BookOpen className={`w-4 h-4 ${activeTab === 'practice' ? 'text-amber-600' : 'text-stone-400'}`} />
          <span>過去問演習</span>
        </button>

        <button
          id="btn-tab-exam-analytics"
          onClick={() => setActiveTab('analytics')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'analytics'
              ? 'bg-white text-stone-900 shadow-sm border border-stone-200/90'
              : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <BarChart2 className={`w-4 h-4 ${activeTab === 'analytics' ? 'text-amber-600' : 'text-stone-400'}`} />
          <span>成績確認</span>
        </button>
      </div>

      {activeTab === 'analytics' ? (
        /* 成績確認画面 */
        <ExamAnalyticsView
          onGoToPractice={() => setActiveTab('practice')}
          onReviewField={(field) => {
            if (onReviewField) {
              onReviewField(field);
            }
          }}
          onResetExamData={() => {
            setRefreshKey((k) => k + 1);
            if (onResetExamData) {
              onResetExamData();
            }
          }}
        />
      ) : (
        /* 過去問演習 選択画面 */
        <div className="space-y-4">
          {/* 上部ヘッダー */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(217,119,6,0.06)] border border-amber-200/80 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold tracking-wider text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md inline-block mb-1 border border-amber-300/80">
                  共通テスト 過去問演習
                </div>
                <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                  年度・試験種別を選択
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  2026・2025本試/再試・試作問題をPDF原文に基づき完全収録
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shrink-0 shadow-xs shadow-amber-500/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* 1. 年度タブ選択 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold text-amber-900/80 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                実施年度
              </span>
              <span className="text-[11px] text-amber-800/70 font-medium">新課程『公共，政治・経済』対応</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {AVAILABLE_YEARS.map((year) => {
                const isSelected = selectedYear === year;
                return (
                  <button
                    key={year}
                    id={`btn-year-${year}`}
                    onClick={() => {
                      setSelectedYear(year);
                      if (year === 2026 && selectedSession === '試作問題') {
                        setSelectedSession('本試験');
                      }
                    }}
                    className={`py-3 px-3 rounded-xl text-center font-bold text-sm transition-all border ${
                      isSelected
                        ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
                        : 'bg-white text-stone-700 hover:bg-amber-50/50 border-amber-200/80'
                    }`}
                  >
                    <div className="text-base font-bold tracking-tight">{year}年（令和{year === 2026 ? 8 : 7}年）</div>
                    <div
                      className={`text-[10px] font-normal mt-0.5 ${
                        isSelected ? 'text-amber-50' : 'text-stone-500'
                      }`}
                    >
                      {year === 2026 ? '本試験・追再試験' : '本試・再試・試作問題'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. 試験種別選択 (本試験 / 追・再試験 / 試作問題) */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-900/80 uppercase tracking-wider px-1 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-amber-600" />
              試験種別
            </span>

            <div className={`grid ${selectedYear === 2025 ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
              {/* 本試験 */}
              <button
                id="btn-session-main"
                onClick={() => setSelectedSession('本試験')}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  selectedSession === '本試験'
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
                    : 'bg-white text-stone-800 hover:bg-amber-50/50 border-amber-200/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">本試験</span>
                  {selectedSession === '本試験' && <CheckCircle className="w-3.5 h-3.5 text-amber-100" />}
                </div>
                <div className="mt-2">
                  <div
                    className={`text-[10px] font-normal ${
                      selectedSession === '本試験' ? 'text-amber-50' : 'text-stone-400'
                    }`}
                  >
                    {mainExam ? `全${mainExam.metadata.totalQuestions}問` : '未収録'}
                  </div>
                  {selectedYear === 2025 && (
                    <div className={`text-[9px] mt-0.5 ${selectedSession === '本試験' ? 'text-amber-100' : 'text-amber-700 font-medium'}`}>
                      (問題訂正反映済)
                    </div>
                  )}
                  {mainBest !== null && (
                    <div
                      className={`text-[10px] font-bold mt-1 flex items-center gap-0.5 ${
                        selectedSession === '本試験' ? 'text-amber-100' : 'text-amber-800'
                      }`}
                    >
                      <Award className="w-3 h-3" />
                      <span>最高: {mainBest}点</span>
                    </div>
                  )}
                </div>
              </button>

              {/* 追・再試験 */}
              <button
                id="btn-session-followup"
                onClick={() => setSelectedSession('追・再試験')}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  selectedSession === '追・再試験' || selectedSession === '追試験'
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
                    : 'bg-white text-stone-800 hover:bg-amber-50/50 border-amber-200/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">{followupLabel}</span>
                  {(selectedSession === '追・再試験' || selectedSession === '追試験') && (
                    <CheckCircle className="w-3.5 h-3.5 text-amber-100" />
                  )}
                </div>
                <div className="mt-2">
                  <div
                    className={`text-[10px] font-normal ${
                      selectedSession === '追・再試験' || selectedSession === '追試験'
                        ? 'text-amber-50'
                        : 'text-stone-400'
                    }`}
                  >
                    {followupExam ? `全${followupExam.metadata.totalQuestions}問` : '未収録'}
                  </div>
                  {followupBest !== null && (
                    <div
                      className={`text-[10px] font-bold mt-1 flex items-center gap-0.5 ${
                        selectedSession === '追・再試験' || selectedSession === '追試験' ? 'text-amber-100' : 'text-amber-800'
                      }`}
                    >
                      <Award className="w-3 h-3" />
                      <span>最高: {followupBest}点</span>
                    </div>
                  )}
                </div>
              </button>

              {/* 試作問題 (2025年のみ) */}
              {selectedYear === 2025 && (
                <button
                  id="btn-session-sample"
                  onClick={() => setSelectedSession('試作問題')}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                    selectedSession === '試作問題'
                      ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-sm shadow-amber-500/20'
                      : 'bg-white text-stone-800 hover:bg-amber-50/50 border-amber-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">試作問題</span>
                    {selectedSession === '試作問題' && <CheckCircle className="w-3.5 h-3.5 text-amber-100" />}
                  </div>
                  <div className="mt-2">
                    <div
                      className={`text-[10px] font-normal ${
                        selectedSession === '試作問題' ? 'text-amber-50' : 'text-stone-400'
                      }`}
                    >
                      {sampleExam ? `全${sampleExam.metadata.totalQuestions}問` : '未収録'}
                    </div>
                    {sampleBest !== null && (
                      <div
                        className={`text-[10px] font-bold mt-1 flex items-center gap-0.5 ${
                          selectedSession === '試作問題' ? 'text-amber-100' : 'text-amber-800'
                        }`}
                      >
                        <Award className="w-3 h-3" />
                        <span>最高: {sampleBest}点</span>
                      </div>
                    )}
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* 3. 選択された試験の概要カード */}
          {currentExam && (
            <div className="bg-white rounded-2xl p-5 border border-amber-200/90 shadow-[0_2px_16px_rgba(217,119,6,0.06)] space-y-3.5 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-bold text-amber-900/70">
                    {currentExam.metadata.year}年度 {currentExam.metadata.subject}
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mt-0.5">
                    {currentExam.metadata.session} 実戦演習
                  </h3>
                </div>
                <span className="text-xs bg-amber-100/80 border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded-lg font-mono">
                  全{currentExam.questions.length}問
                </span>
              </div>

              {/* 試験の特記事項・構成 */}
              <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/30 rounded-xl p-3 border border-amber-200/80 text-xs space-y-1.5 text-stone-700">
                <div className="flex items-center justify-between text-stone-700 font-medium">
                  <span>配点合計</span>
                  <span className="font-bold text-stone-900 font-mono">
                    {currentExam.metadata.totalPoints} 点満点
                  </span>
                </div>
                <div className="flex items-center justify-between text-stone-700 font-medium">
                  <span>大問構成</span>
                  <span className="font-medium text-stone-900">
                    第1問〜第{Math.max(...currentExam.questions.map((q) => q.section))}問
                  </span>
                </div>
                {currentExam.metadata.notes && currentExam.metadata.notes.length > 0 && (
                  <div className="pt-1 border-t border-amber-200/70 text-[11px] text-stone-600 space-y-0.5">
                    {currentExam.metadata.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 開始ボタン */}
              <button
                id="btn-start-selected-exam"
                onClick={() => onSelectExam(currentExam)}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>この試験の演習を開始する</span>
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 戻るボタン */}
      <div className="pt-1">
        <button
          id="btn-back-to-home-from-exam-select"
          onClick={onBack}
          className="w-full py-3 text-center text-xs font-bold text-stone-500 hover:text-amber-900 transition-colors"
        >
          ホーム画面に戻る
        </button>
      </div>
    </div>
  );
};
