import { RawQuestionData } from '../data/types';

export interface MaterialUserRecord {
  correctCount: number;
  incorrectCount: number;
  lastStatus: boolean; // true: correct, false: incorrect
  lastAnsweredAt: number;
}

export interface MaterialProgressState {
  records: Record<string, MaterialUserRecord>;
  bookmarks: string[];
}

const STORAGE_KEY = 'pe_material_practice_progress_v1';

export const loadMaterialProgress = (): MaterialProgressState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { records: {}, bookmarks: [] };
    }
    const parsed = JSON.parse(raw);
    return {
      records: parsed.records || {},
      bookmarks: parsed.bookmarks || [],
    };
  } catch (err) {
    console.error('Failed to load material progress from localStorage:', err);
    return { records: {}, bookmarks: [] };
  }
};

export const saveMaterialProgress = (state: MaterialProgressState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save material progress to localStorage:', err);
  }
};

export const clearMaterialProgress = (): MaterialProgressState => {
  const fresh: MaterialProgressState = { records: {}, bookmarks: [] };
  saveMaterialProgress(fresh);
  return fresh;
};
