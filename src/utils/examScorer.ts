import { ExamData, ExamResultSummary, ExamQuestionResult, SectionScore, ExamField, FieldScore, ExamFieldStatus } from '../types';

/**
 * 各問題の所属分野を判定する関数
 */
export function determineQuestionField(q: { section: number; question_text?: string; field?: ExamField }): ExamField {
  if (q.field) return q.field;

  const text = q.question_text || '';
  
  // 大問番号に基づく標準的な共通テスト『公共，政治・経済』の分野マッピング
  switch (q.section) {
    case 1:
      // 第1問: 公共の扉、青年期、法規範、現代社会
      return '公共';
    case 2:
      // 第2問: 現代の民主政治、日本国憲法、統治機構、人権保障
      return '政治';
    case 3:
      // 第3問: 市場機構、金融、財政、国民生活と日本経済
      return '経済';
    case 4:
      // 第4問: 国際政治、安全保障、国際経済、地球環境問題
      return '国際';
    case 5:
    case 6:
      // 第5問・第6問: 公共的課題の探究、持続可能な社会、社会保障
      if (text.includes('少子高齢') || text.includes('社会保障') || text.includes('地域社会') || text.includes('労働')) {
        return '社会';
      }
      return '公共';
    default:
      return '公共';
  }
}

/**
 * 正答率に応じた学習上の目安ステータス判定
 * 80%以上: 得意
 * 60〜79%: 要確認
 * 59%以下: 要強化
 */
export function getFieldStatus(percentage: number): ExamFieldStatus {
  if (percentage >= 80) return '得意';
  if (percentage >= 60) return '要確認';
  return '要強化';
}

export function gradeExam(exam: ExamData, userAnswers: Record<string, number | string>): ExamResultSummary {
  const questionResults: ExamQuestionResult[] = [];
  let totalScore = 0;

  const sectionMap: Record<number, { score: number; totalPoints: number; correct: number; total: number }> = {};
  const fieldMap: Record<ExamField, { score: number; totalPoints: number; correct: number; total: number }> = {
    '公共': { score: 0, totalPoints: 0, correct: 0, total: 0 },
    '政治': { score: 0, totalPoints: 0, correct: 0, total: 0 },
    '経済': { score: 0, totalPoints: 0, correct: 0, total: 0 },
    '国際': { score: 0, totalPoints: 0, correct: 0, total: 0 },
    '社会': { score: 0, totalPoints: 0, correct: 0, total: 0 },
  };

  let unansweredCount = 0;

  exam.questions.forEach((q) => {
    const field = determineQuestionField(q);

    if (!sectionMap[q.section]) {
      sectionMap[q.section] = { score: 0, totalPoints: 0, correct: 0, total: 0 };
    }
    sectionMap[q.section].totalPoints += q.points;
    sectionMap[q.section].total += 1;

    fieldMap[field].totalPoints += q.points;
    fieldMap[field].total += 1;

    const userAns = userAnswers[q.question_id];
    let isCorrect = false;

    if (userAns === undefined || userAns === '' || userAns === null) {
      unansweredCount += 1;
    }

    // 連動問題の判定（2026年問1, 2026年問6, 2025年問5など）
    if (q.answer_numbers.length > 1 && typeof userAns === 'string' && userAns.includes('sub1:')) {
      const parts: Record<string, string> = {};
      userAns.split(';').forEach((p) => {
        const [k, v] = p.split(':');
        if (k && v) parts[k] = v;
      });
      const sub1 = Number(parts.sub1);
      const sub2 = Number(parts.sub2);

      if (q.question_id.includes('2026_main-Q3-1')) {
        // A国(1) -> 5 (イとエ) / B国(2) -> 2 (アとウ)
        if ((sub1 === 1 && sub2 === 5) || (sub1 === 2 && sub2 === 2)) {
          isCorrect = true;
        }
      } else if (q.question_id.includes('2026_main-Q4-6')) {
        // 立場a(1) -> 4 (イとウ) / 立場b(2) -> 3 (アとエ)
        if ((sub1 === 1 && sub2 === 4) || (sub1 === 2 && sub2 === 3)) {
          isCorrect = true;
        }
      } else if (q.question_id.includes('2025_main-Q4-5')) {
        // 立場a(1) -> 2 (アとウ) / 立場b(2) -> 5 (イとエ)
        if ((sub1 === 1 && sub2 === 2) || (sub1 === 2 && sub2 === 5)) {
          isCorrect = true;
        }
      } else {
        // 一般的な連動
        const firstAns = q.answer[0]?.correct_choice;
        const secondAns = q.answer[1]?.correct_choice;
        if (sub1 === firstAns && sub2 === secondAns) {
          isCorrect = true;
        }
      }
    } else if (typeof userAns === 'number') {
      // 通常の1択マーク判定
      const targetAns = q.answer[0]?.correct_choice;
      if (typeof targetAns === 'number') {
        isCorrect = targetAns === userAns;
      } else if (typeof targetAns === 'string') {
        // 複数可能表記
        if (targetAns.includes('or')) {
          const validChoices = targetAns.split('or').map((s) => Number(s.trim()));
          isCorrect = validChoices.includes(userAns);
        }
      }
    }

    const earnedPoints = isCorrect ? q.points : 0;
    totalScore += earnedPoints;

    if (isCorrect) {
      sectionMap[q.section].score += q.points;
      sectionMap[q.section].correct += 1;
      fieldMap[field].score += q.points;
      fieldMap[field].correct += 1;
    }

    questionResults.push({
      questionId: q.question_id,
      section: q.section,
      questionNo: q.question_no,
      userChoice: userAns ?? null,
      isCorrect,
      earnedPoints,
      maxPoints: q.points,
      field,
    });
  });

  const sectionScores: SectionScore[] = Object.keys(sectionMap)
    .map(Number)
    .sort((a, b) => a - b)
    .map((sec) => ({
      section: sec,
      score: sectionMap[sec].score,
      totalPoints: sectionMap[sec].totalPoints,
      correctCount: sectionMap[sec].correct,
      totalQuestions: sectionMap[sec].total,
    }));

  // 分野別スコア（問題数が1問以上ある分野のみ抽出）
  const fieldOrder: ExamField[] = ['政治', '経済', '国際', '公共', '社会'];
  const fieldScores: FieldScore[] = fieldOrder
    .filter((f) => fieldMap[f].total > 0)
    .map((f) => {
      const data = fieldMap[f];
      const p = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      return {
        field: f,
        score: data.score,
        totalPoints: data.totalPoints,
        correctCount: data.correct,
        totalQuestions: data.total,
        percentage: p,
        status: getFieldStatus(p),
      };
    });

  const correctCount = questionResults.filter((q) => q.isCorrect).length;
  const incorrectCount = questionResults.filter((q) => !q.isCorrect).length;
  const percentage =
    exam.metadata.totalPoints > 0
      ? Math.round((totalScore / exam.metadata.totalPoints) * 100)
      : 0;

  return {
    examId: exam.metadata.id,
    year: exam.metadata.year,
    session: exam.metadata.session,
    examTitle: `${exam.metadata.year}年度 ${exam.metadata.session}`,
    score: totalScore,
    totalPoints: exam.metadata.totalPoints,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    totalQuestions: exam.questions.length,
    completedAt: Date.now(),
    sectionScores,
    fieldScores,
    questionResults,
  };
}
