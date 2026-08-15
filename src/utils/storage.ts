import { UserProgressState } from '../types';
import { clearAllExamHistories } from './examStorage';

const STORAGE_KEY = 'seikei_qanda_progress_v2';

export function loadUserProgress(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // 互換性チェック: 旧バージョンのキーがあればマイグレーション
      const oldRaw = localStorage.getItem('seikei_app_data_v1');
      if (oldRaw) {
        const parsed = JSON.parse(oldRaw);
        return {
          records: parsed.learned || {},
          bookmarks: parsed.bookmarks || []
        };
      }
      return { records: {}, bookmarks: [] };
    }
    const parsed = JSON.parse(raw);
    return {
      records: parsed.records || {},
      bookmarks: parsed.bookmarks || []
    };
  } catch (error) {
    console.error('Failed to load progress', error);
    return { records: {}, bookmarks: [] };
  }
}

export function saveUserProgress(state: UserProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save progress', error);
  }
}

export function clearUserProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('seikei_app_data_v1');
    clearAllExamHistories();
  } catch (error) {
    console.error('Failed to clear progress', error);
  }
}

