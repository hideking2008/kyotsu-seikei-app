import politicalJson from './db/political.json';
import economicsJson from './db/economics.json';
import internationalJson from './db/international.json';
import materialsMappingJson from './db/materialsMapping.json';
import { RawQuestionData } from './types';

export interface DbMaterialMapping {
  question_id: string;
  category: string;
  material_id: string;
  pdf: string;
  pdf_page: number;
}

export const POLITICAL_DB: RawQuestionData[] = politicalJson as unknown as RawQuestionData[];
export const ECONOMICS_DB: RawQuestionData[] = economicsJson as unknown as RawQuestionData[];
export const INTERNATIONAL_DB: RawQuestionData[] = internationalJson as unknown as RawQuestionData[];
export const MATERIALS_MAPPING: DbMaterialMapping[] = materialsMappingJson as unknown as DbMaterialMapping[];

export const ALL_DB_QUESTIONS: RawQuestionData[] = [
  ...POLITICAL_DB,
  ...ECONOMICS_DB,
  ...INTERNATIONAL_DB,
];

export const DB_STATS = {
  total: ALL_DB_QUESTIONS.length,
  politicalCount: POLITICAL_DB.length,
  economicsCount: ECONOMICS_DB.length,
  internationalCount: INTERNATIONAL_DB.length,
  withMaterialCount: ALL_DB_QUESTIONS.filter((q) => q.has_material).length,
};
