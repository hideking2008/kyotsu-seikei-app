import { ExamResultSummary, SectionScore, FieldScore, ExamQuestionResult } from '../types';

const EXAM_STORAGE_KEY = 'kyotsu_exam_records_v1';
const EXAM_TARGET_STORAGE_KEY = 'kyotsu_exam_target_scores_v1';

export interface ExamHistoryRecord {
  examId: string;
  year: number;
  session: string;
  examTitle?: string;
  score: number;
  totalPoints: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalQuestions: number;
  completedAt: number;
  userAnswers: Record<string, number | string>;
  sectionScores?: SectionScore[];
  fieldScores?: FieldScore[];
  questionResults?: ExamQuestionResult[];
}

export function loadExamHistories(): Record<string, ExamHistoryRecord[]> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load exam history', e);
    return {};
  }
}

export function saveExamResult(result: ExamResultSummary, answers: Record<string, number | string>) {
  if (typeof window === 'undefined') return;
  try {
    const histories = loadExamHistories();
    const list = histories[result.examId] || [];
    const newRecord: ExamHistoryRecord = {
      examId: result.examId,
      year: result.year,
      session: result.session,
      examTitle: result.examTitle || `${result.year}年度 ${result.session}`,
      score: result.score,
      totalPoints: result.totalPoints,
      percentage: result.percentage,
      correctCount: result.correctCount,
      incorrectCount: result.incorrectCount ?? (result.totalQuestions - result.correctCount),
      unansweredCount: result.unansweredCount ?? 0,
      totalQuestions: result.totalQuestions,
      completedAt: result.completedAt || Date.now(),
      userAnswers: answers,
      sectionScores: result.sectionScores,
      fieldScores: result.fieldScores,
      questionResults: result.questionResults,
    };
    // 過去問ごとの最新履歴を先頭に最大20回まで保存
    histories[result.examId] = [newRecord, ...list.slice(0, 19)];
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(histories));
  } catch (e) {
    console.error('Failed to save exam history', e);
  }
}

export function getExamBestScore(examId: string): number | null {
  const histories = loadExamHistories();
  const list = histories[examId];
  if (!list || list.length === 0) return null;
  return Math.max(...list.map((r) => r.score));
}

/**
 * すべての受験履歴を新しい順（降順）で取得
 */
export function getAllExamHistoriesFlat(): ExamHistoryRecord[] {
  const histories = loadExamHistories();
  const all: ExamHistoryRecord[] = [];
  Object.values(histories).forEach((records) => {
    if (Array.isArray(records)) {
      all.push(...records);
    }
  });
  return all.sort((a, b) => b.completedAt - a.completedAt);
}

/**
 * 目標点の読み込み（未設定時はnull）
 */
export function getExamTargetScore(examId: string): number | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(EXAM_TARGET_STORAGE_KEY);
    if (!raw) return null;
    const map = JSON.parse(raw);
    return typeof map[examId] === 'number' ? map[examId] : null;
  } catch {
    return null;
  }
}

/**
 * 目標点の保存
 */
export function saveExamTargetScore(examId: string, targetScore: number): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(EXAM_TARGET_STORAGE_KEY);
    const map = raw ? JSON.parse(raw) : {};
    map[examId] = targetScore;
    localStorage.setItem(EXAM_TARGET_STORAGE_KEY, JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save target score', e);
  }
}

/**
 * すべての過去問受験履歴および目標点数データを完全消去（初期化）
 */
export function clearAllExamHistories(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(EXAM_STORAGE_KEY);
    localStorage.removeItem(EXAM_TARGET_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear exam histories', e);
  }
}

