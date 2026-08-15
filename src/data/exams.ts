import { ExamData, ExamMetadata } from '../types';
import { EXAM_2025_SAMPLE } from './kyotsu2025_sample';
import { EXAM_2025_MAIN } from './kyotsu2025_main';
import { EXAM_2025_FOLLOWUP } from './kyotsu2025_followup';
import { EXAM_2026_MAIN } from './kyotsu2026_main';
import { EXAM_2026_FOLLOWUP } from './kyotsu2026_followup';

export const ALL_EXAMS: Record<string, ExamData> = {
  '2026_main': EXAM_2026_MAIN,
  '2026_followup': EXAM_2026_FOLLOWUP,
  '2025_main': EXAM_2025_MAIN,
  '2025_followup': EXAM_2025_FOLLOWUP,
  '2025_sample': EXAM_2025_SAMPLE,
};

export const AVAILABLE_YEARS = [2026, 2025] as const;

export const EXAM_LIST: ExamMetadata[] = [
  EXAM_2026_MAIN.metadata,
  EXAM_2026_FOLLOWUP.metadata,
  EXAM_2025_MAIN.metadata,
  EXAM_2025_FOLLOWUP.metadata,
  EXAM_2025_SAMPLE.metadata,
];

export function getExam(year: number, session: '本試験' | '追試験' | '追・再試験' | '試作問題'): ExamData | undefined {
  if (session === '試作問題') {
    return ALL_EXAMS[`${year}_sample`];
  }
  if (session === '追・再試験' || session === '追試験') {
    return ALL_EXAMS[`${year}_followup`];
  }
  return ALL_EXAMS[`${year}_main`];
}

