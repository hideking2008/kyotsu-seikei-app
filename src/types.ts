export type DifficultyRank = 'S' | 'A' | 'B' | 'C';

export interface Question {
  id: number;
  q: string;
  a: string;
  category?: string; // カテゴリID (例: 'principles', 'constitution', 'governance', etc.)
  categoryName?: string; // カテゴリ表示名
  difficulty?: DifficultyRank; // 共通テスト・センター試験頻出度・難易度 (S: 最頻出必修, A: 頻出重要, B: 標準, C: 発展)
}

export interface QuestionCategory {
  id: string;
  name: string;
  description: string;
  tag: '公共' | '政治' | '経済' | '国際' | '社会';
}

export interface QuestionRecord {
  correctCount: number;
  incorrectCount: number;
  lastStatus: boolean; // true = remembered/correct, false = needs review
  lastAnsweredAt?: number;
}

export interface UserProgressState {
  records: Record<number, QuestionRecord>;
  bookmarks: number[];
}

export type QuizMode =
  | 'all'
  | 'random10'
  | 'random20'
  | 'bookmarked'
  | 'incorrect'
  | 'unlearned'
  | 'category'
  | 'difficulty_s'
  | 'difficulty_a'
  | 'difficulty_b'
  | 'difficulty_c';

export interface QuizSessionResult {
  total: number;
  correct: number;
  incorrect: number;
  incorrectIds: number[];
}

// 共通テスト用 型定義
export type ExamField = '公共' | '政治' | '経済' | '国際' | '社会';

export type ExamFieldStatus = '得意' | '要確認' | '要強化';

export interface FieldScore {
  field: ExamField;
  score: number;
  totalPoints: number;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  status: ExamFieldStatus;
}

export interface ExamOption {
  choice: number;
  text: string;
}

export interface ExamAnswerItem {
  answer_number: number;
  correct_choice: number | string;
  correct_option_text?: string;
}

export interface ExamQuestion {
  question_id: string;
  section: number;
  question_no: number;
  answer_numbers: number[];
  points: number;
  question_text: string;
  options: ExamOption[];
  answer: ExamAnswerItem[];
  explanation: string | null;
  correction_applied?: boolean;
  field?: ExamField;
}

export interface ExamMetadata {
  id: string;
  year: number;
  session: '本試験' | '追試験' | '追・再試験' | '試作問題';
  subject: string;
  totalQuestions: number;
  totalPoints: number;
  notes?: string[];
}

export interface ExamData {
  metadata: ExamMetadata;
  questions: ExamQuestion[];
}

export interface ExamQuestionResult {
  questionId: string;
  section: number;
  questionNo: number;
  userChoice: number | string | null;
  isCorrect: boolean;
  earnedPoints: number;
  maxPoints: number;
  field?: ExamField;
}

export interface SectionScore {
  section: number;
  score: number;
  totalPoints: number;
  correctCount: number;
  totalQuestions: number;
}

export interface ExamResultSummary {
  examId: string;
  year: number;
  session: string;
  examTitle?: string;
  score: number;
  totalPoints: number;
  percentage: number;
  correctCount: number;
  incorrectCount?: number;
  unansweredCount?: number;
  totalQuestions: number;
  completedAt: number;
  sectionScores: SectionScore[];
  fieldScores?: FieldScore[];
  questionResults: ExamQuestionResult[];
}
