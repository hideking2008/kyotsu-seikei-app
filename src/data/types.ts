export interface RawQuestionData {
  id: string;
  subject: string;
  category: '政治' | '経済' | '国際';
  unit: string;
  question_number: number;
  question_text: string;
  choices: string[];
  has_material: boolean;
  material_ids: string[];
  answer: string;
  explanation: string;
  source?: {
    file?: string;
    question_pages?: number[];
    answer_pages?: number[];
  };
  material_pdf: string | null;
  material_pdf_page: number | null;
}
