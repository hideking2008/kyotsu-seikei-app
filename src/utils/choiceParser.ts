/**
 * Parse and normalize choices and answers for database questions
 */

export interface ParsedChoice {
  numberStr: string; // e.g. "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"
  numberVal: number; // 1 to 8
  text: string;      // Choice content text
}

// Convert any circle number or digit to standard 1..8 value
export function normalizeAnswerNumber(val: string | number): number {
  if (typeof val === 'number') return val;
  const s = String(val).trim();
  const circleMap: Record<string, number> = {
    '①': 1, '➀': 1, '1': 1,
    '②': 2, '➁': 2, '2': 2,
    '③': 3, '➂': 3, '3': 3,
    '④': 4, '➃': 4, '4': 4,
    '⑤': 5, '➄': 5, '5': 5,
    '⑥': 6, '➅': 6, '6': 6,
    '⑦': 7, '➆': 7, '7': 7,
    '⑧': 8, '➇': 8, '8': 8,
  };
  return circleMap[s] || parseInt(s, 10) || 0;
}

export function numberToCircle(num: number): string {
  const circles = ['', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
  return circles[num] || String(num);
}

export function parseChoices(rawChoices: string[]): ParsedChoice[] {
  if (!rawChoices || rawChoices.length === 0) {
    return [];
  }

  const results: ParsedChoice[] = [];
  const circleRegex = /([①-⑧➀-➇]|\b[1-8]\b)/g;

  // Flatten if choices have multiple options on single lines
  for (const rawLine of rawChoices) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check if the line has multiple circled numbers like "① Ａ ② Ｂ ③ Ｃ ④ ＡとＢ"
    const matches = Array.from(trimmed.matchAll(/([①-⑧➀-➇])/g));
    if (matches.length > 1) {
      // Split by circled numbers
      for (let i = 0; i < matches.length; i++) {
        const currentMatch = matches[i];
        const numSymbol = currentMatch[1];
        const startIdx = currentMatch.index! + numSymbol.length;
        const endIdx = i + 1 < matches.length ? matches[i + 1].index! : trimmed.length;
        const content = trimmed.substring(startIdx, endIdx).trim();
        const numVal = normalizeAnswerNumber(numSymbol);
        results.push({
          numberStr: numberToCircle(numVal),
          numberVal: numVal,
          text: content || numberToCircle(numVal),
        });
      }
    } else {
      // Single choice per entry, e.g. "① ラッセル・アインシュタイン宣言"
      const matchFirst = trimmed.match(/^([①-⑧➀-➇]|\d+[\.\s、]?)\s*(.*)$/);
      if (matchFirst) {
        const numVal = normalizeAnswerNumber(matchFirst[1]);
        results.push({
          numberStr: numberToCircle(numVal || results.length + 1),
          numberVal: numVal || results.length + 1,
          text: matchFirst[2] || trimmed,
        });
      } else {
        const nextNum = results.length + 1;
        results.push({
          numberStr: numberToCircle(nextNum),
          numberVal: nextNum,
          text: trimmed,
        });
      }
    }
  }

  // Ensure items are unique by numberVal
  const uniqueMap = new Map<number, ParsedChoice>();
  for (const c of results) {
    if (!uniqueMap.has(c.numberVal)) {
      uniqueMap.set(c.numberVal, c);
    }
  }

  return Array.from(uniqueMap.values()).sort((a, b) => a.numberVal - b.numberVal);
}

export function isAnswerCorrect(userChoiceVal: number, correctAnswerStr: string): boolean {
  const targetVal = normalizeAnswerNumber(correctAnswerStr);
  return userChoiceVal === targetVal;
}
