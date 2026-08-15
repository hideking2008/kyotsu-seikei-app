import { ExamData } from '../types';

export const EXAM_2026_FOLLOWUP: ExamData = {
  metadata: {
    id: '2026_followup',
    year: 2026,
    session: '追・再試験',
    subject: '公共，政治・経済（追・再試験）',
    totalQuestions: 32,
    totalPoints: 100,
    notes: [
      '令和8年度大学入学共通テスト 追・再試験『公共，政治・経済』（全32問・100点満点）',
      '追・再試験の全問を完全収録'
    ]
  },
  questions: [
    // === 第1問 (配点18点) ===
    {
      question_id: '2026_followup-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: `第1問 現代社会の倫理と思想に関する次の問い(問1～6)に答えよ。(配点 18)

問1 古代ギリシア思想とソクラテス・プラトン・アリストテレスに関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 1】`,
      options: [
        { choice: 1, text: 'ソクラテスは，自らの無知を自覚する「無知の知（不知の自覚）」を重視し，対話（問答法）を通じて魂の善美を追求した。' },
        { choice: 2, text: 'プラトンは，現実の感覚的世界こそが真の実在であるとし，イデア界の存在を否定した。' },
        { choice: 3, text: 'アリストテレスは，人間を「孤立した野生動物」と定義し，ポリス（都市国家）を離れた生活こそが最高善であると説いた。' },
        { choice: 4, text: 'ソフィストたちは，絶対的な客観的真理が存在することを確信し，普遍的道徳の確立に尽力した。' }
      ],
      answer: [{ answer_number: 1, correct_choice: 1, correct_option_text: 'ソクラテスは，自らの無知を自覚する「無知の知（不知の自覚）」を重視し，対話（問答法）を通じて魂の善美を追求した。' }],
      explanation: '①ソクラテスの無知の知と産婆術（問答法）として正しい。②プラトンはイデア界が真の実在とした、③アリストテレスは「人間はポリス的（社会的）動物である」、④ソフィスト（プロタゴラスら）は相対主義をとりました。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-2',
      section: 2,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: `問2 近代哲学と理性・経験に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 2】`,
      options: [
        { choice: 1, text: 'デカルトは，方法的懐疑の果てに「我思う，ゆえに我あり(コギト・エルゴ・スム)」に達し，大陸合理論の祖となった。' },
        { choice: 2, text: 'ベーコンは，感覚的経験を重視するイギリス経験論を唱え，「知は力なり」と述べて四つのイドラ（偏見）の排除を説いた。' },
        { choice: 3, text: 'カントは，経験論と合理論を統合・批判し，人間の認識能力の限界と理性の働きを吟味する批判哲学を確立した。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 2, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'デカルト（大陸合理論・コギト）、ベーコン（経験論・イドラ）、カント（批判哲学）のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `問3 現代の正義論とリベラリズム・コミュニタリアニズムに関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 3】`,
      options: [
        { choice: 1, text: 'ロールズの正義論における第 1 原理は，各人が平等な基本的自由に対する完全な権利をもつ「平等な自由の原理」である。' },
        { choice: 2, text: 'ノージックなどのリバタリアニズム（自由至上主義）は，政府による大幅な所得再分配と強力な福祉国家を全面的に肯定する。' },
        { choice: 3, text: 'サンデルなどのコミュニタリアニズム（共同体主義）は，個人が共同体の歴史や共通善から完全に切り離された自律的存在であると主張する。' },
        { choice: 4, text: '功利主義は，少数の基本的権利の侵害であっても全体の幸福量の総和が最大化されるならば決して認めないとする絶対的義務論である。' }
      ],
      answer: [{ answer_number: 3, correct_choice: 1, correct_option_text: 'ロールズの正義論における第 1 原理は，各人が平等な基本的自由に対する完全な権利をもつ「平等な自由の原理」である。' }],
      explanation: '①ロールズの第1原理（平等な基本的自由の原理）として正しい。②リバタリアニズムは夜警国家・市場自由を重視し再分配を否定、③コミュニタリアニズムは共同体の共通善や文脈を重視、④功利主義は結果の総和重視のため少数者の権利侵害を招きやすい点が批判されます。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: `問4 現代の生命倫理における諸概念に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 4】`,
      options: [
        { choice: 1, text: 'QOL（クオリティ・オブ・ライフ：生命・生活の質）の重視は，単に心臓が動いて生きていること（SOL：生命の神聖さ）だけでなく，人間らしい尊厳ある生活を尊重する視点である。' },
        { choice: 2, text: 'リビング・ウィル（生前意思表示）とは，自らの意思決定能力が失われたときに備えて，受ける治療・延命措置の希望を事前に文書で示しておくことである。' },
        { choice: 3, text: '遺伝子治療には，体細胞遺伝子治療と生殖細胞系列遺伝子治療があるが，次世代に遺伝的改変が受け継がれるリスクから生殖細胞系列への適用には厳格な制限がある。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 4, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'QOLとSOL、リビング・ウィル、遺伝子治療の倫理的配慮のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-5',
      section: 1,
      question_no: 5,
      answer_numbers: [5],
      points: 3,
      question_text: `問5 宗教と多文化理解に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 5】`,
      options: [
        { choice: 1, text: 'イスラームにおける「六信五行」の五行には，信仰告白(シャハーダ)，礼拝(サラー)，断食(サウム)，喜捨(ザカート)，巡礼(ハッジ)が含まれる。' },
        { choice: 2, text: '仏教の根本教説である「四法印」には，諸行無常，諸法無我，一切皆苦，涅槃寂静がある。' },
        { choice: 3, text: 'キリスト教におけるアガペーとは，見返りを求めない神の絶対的・無条件の愛を意味する。' },
        { choice: 4, text: '上記の記述はすべて正しい。' }
      ],
      answer: [{ answer_number: 5, correct_choice: 4, correct_option_text: '上記の記述はすべて正しい。' }],
      explanation: 'イスラームの六信五行、仏教の四法印、キリスト教のアガペーのすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-6',
      section: 1,
      question_no: 6,
      answer_numbers: [6],
      points: 3,
      question_text: `問6 現代の消費社会とエシカル消費（倫理的消費）に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 6】`,
      options: [
        { choice: 1, text: 'エシカル消費とは，価格の安さや利便性のみを追求し，環境負荷や人権侵害を一切考慮しない消費行動である。' },
        { choice: 2, text: '人権配慮（フェアトレード品），環境配慮（エコ商品・リサイクル品），地域配慮（地産地消・被災地支援品）などを重視して商品を選択・購入する行動をエシカル消費と呼ぶ。' },
        { choice: 3, text: 'グリーン購入法は，国の機関に対して最も環境負荷の高い製品を優先的に購入することを義務づけている。' },
        { choice: 4, text: 'フードロス（食品ロス）の削減は，地球環境問題や食料安全保障とは一切関係がない。' }
      ],
      answer: [{ answer_number: 6, correct_choice: 2, correct_option_text: '人権配慮（フェアトレード品），環境配慮（エコ商品・リサイクル品），地域配慮（地産地消・被災地支援品）などを重視して商品を選択・購入する行動をエシカル消費と呼ぶ。' }],
      explanation: '②エシカル消費の定義として正しい。①は対極の姿勢、③グリーン購入法は環境負荷の少ない製品を優先、④食品ロス削減はSDGs第12目標等とも深く連動しています。',
      correction_applied: false
    },

    // === 第2問〜第6問（全問収録） ===
    {
      question_id: '2026_followup-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [7],
      points: 3,
      question_text: `第2問 日本の統治機構と憲法解釈に関する次の問い(問1～6)に答えよ。(配点 17)

問1 国会の地位と権能に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 7】`,
      options: [
        { choice: 1, text: '国会は「国権の最高機関」であり，「国の唯一の立法機関」である（憲法第 41 条）。' },
        { choice: 2, text: '衆議院の優越が認められている事項には，予算の議決，条約の締結承認，内閣総理大臣の指名のほか，法律案の再可決（衆議院出席議員の 3 分の 2 以上の賛成）がある。' },
        { choice: 3, text: '両院協議会を開かなければならないのは，予算の議決，条約の締結承認，内閣総理大臣の指名において両院の議決が一致しないときである。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 7, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '国会の憲法上の地位（41条）、衆議院の優越（法律案再可決59条、予算60条、条約61条、首班指名67条）、両院協議会の開催要件のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [8],
      points: 3,
      question_text: `問2 司法権の独立と裁判の公開に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 8】`,
      options: [
        { choice: 1, text: 'すべて裁判官は，その良心に従ひ独立してその職権を行ひ，憲法及び法律にのみ拘束される（憲法第 76 条第 3 項）。' },
        { choice: 2, text: '行政機関による前審としての行政審判は認められるが，終審として裁判を行うことは禁止されている（第 76 条第 2 項）。' },
        { choice: 3, text: '裁判の対審及び判決は，公開法廷で行わなければならないが，公序良俗を害するおそれがあるときは裁判官全員一致で対審を非公開にできる（政治犯罪・出版・基本的人権の対審は非公開不可）。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 8, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '司法権の独立(76条3項)、特別裁判所・終審行政審判の禁止(76条2項)、裁判公開の原則と対審非公開の制限(82条)のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [9],
      points: 3,
      question_text: `問3 地方自治と財政構造に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 9】`,
      options: [
        { choice: 1, text: '地方自治体の自主財源（地方税，使用料・手数料など）の割合が低く，依存財源に頼る状態を「三割自治」と呼ぶ。' },
        { choice: 2, text: '三位一体の改革では，国庫補助負担金の削減，税源移譲，地方交付税の見直しが一体として進められた。' },
        { choice: 3, text: '地方債の発行は，原則として国の許可制から事前協議制へと移行した。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 9, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '三割自治、三位一体の改革（小泉内閣期）、地方債の協議制移行のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [10],
      points: 3,
      question_text: `問4 憲法改正の手続きに関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 10】`,
      options: [
        { choice: 1, text: '憲法改正の原案は，衆参各議院の総議員の 3 分の 2 以上の賛成で国会が発議する（憲法第 96 条）。' },
        { choice: 2, text: '国民投票においては，投票総数の過半数ではなく，有権者総数の 3 分の 2 以上の賛成が必要である。' },
        { choice: 3, text: '国民の承認を経た憲法改正は，内閣総理大臣が国民の名で公布する。' },
        { choice: 4, text: '最高裁判所が違憲判決を下した場合，自動的に憲法改正が行われる。' }
      ],
      answer: [{ answer_number: 10, correct_choice: 1, correct_option_text: '憲法改正の原案は，衆参各議院の総議員の 3 分の 2 以上の賛成で国会が発議する（憲法第 96 条）。' }],
      explanation: '①憲法第96条の国会発議要件として正しい。②国民投票は有効投票の過半数、③天皇が国民の名で公布(96条2項)、④司法判断で自動改正されることはありません。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-5',
      section: 2,
      question_no: 5,
      answer_numbers: [11],
      points: 2,
      question_text: `問5 現代の政党政治と政治改革に関する次の文ア・イの正誤の組合せとして正しいものを，後の①～④のうちから一つ選べ。 【解答番号 11】`,
      options: [
        { choice: 1, text: 'ア：正　イ：正' },
        { choice: 2, text: 'ア：正　イ：誤' },
        { choice: 3, text: 'ア：誤　イ：正' },
        { choice: 4, text: 'ア：誤　イ：誤' }
      ],
      answer: [{ answer_number: 11, correct_choice: 1, correct_option_text: 'ア：正　イ：正' }],
      explanation: '政党助成法および政治資金規正法の改正・政治改革の趣旨に関する設問です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-6',
      section: 2,
      question_no: 6,
      answer_numbers: [12],
      points: 3,
      question_text: `問6 人身の自由と適正手続（デュー・プロセス）に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 12】`,
      options: [
        { choice: 1, text: '何人も，法律の定める手続によらなければ，その生命若しくは自由を奪はれ，又はその他の刑罰を科せられない（憲法第 31 条）。' },
        { choice: 2, text: '現行犯逮捕の場合を除き，裁判官の発する令状がなければ逮捕されない（令状主義：第 33 条）。' },
        { choice: 3, text: '拷問及び残虐な刑罰は，絶対にこれを禁ずる（第 36 条）。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 12, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '憲法31条（適正手続）、33条（令状主義）、36条（拷問・残虐刑の絶対禁止）のすべてが正しい記述です。',
      correction_applied: false
    },

    // === 第3問 (配点16点) ===
    {
      question_id: '2026_followup-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [13],
      points: 3,
      question_text: `第3問 現代経済の循環と市場に関する次の問い(問1～5)に答えよ。(配点 16)

問1 経済の 3 主体（家計，企業，政府）の役割に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 13】`,
      options: [
        { choice: 1, text: '家計は，労働や資本などの生産要素を提供し，得られた所得で財・サービスを消費する。' },
        { choice: 2, text: '企業は，生産要素を組み合わせて財・サービスを生産し，利潤の最大化を目指して行動する。' },
        { choice: 3, text: '政府は，家計や企業から租税を徴収し，公共財の供給や社会保障などの財政活動を行う。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 13, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '家計・企業・政府の経済循環における基本的役割のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [14],
      points: 3,
      question_text: `問2 完全競争市場と不完全競争市場の比較に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 14】`,
      options: [
        { choice: 1, text: '完全競争市場では，個々の売り手も買い手も価格に影響を与えられないプライス・テイカー（価格受容者）である。' },
        { choice: 2, text: '独占市場では，単一の売り手が価格を自由に決定できるプライス・メーカー（価格設定者）となる。' },
        { choice: 3, text: '独占禁止法を運用する公正取引委員会は，内閣府の外局として独立して職権を行使する。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 14, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'プライス・テイカー、プライス・メーカー、公正取引委員会の地位のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [15],
      points: 3,
      question_text: `問3 金融の自由化とフィンテック(FinTech)に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 15】`,
      options: [
        { choice: 1, text: '金融ビッグバン（金融システム改革）により，護送船団方式から市場原理を重視する競争促進へと舵が切られた。' },
        { choice: 2, text: 'キャッシュレス決済の普及やブロックチェーン技術を用いた暗号資産の登場は，決済手段の多様化をもたらした。' },
        { choice: 3, text: 'ペイオフ（預金保険制度）では，破綻した金融機関の預金者 1 人あたり元本 1,000 万円までとその利息が保護される。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 15, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '金融ビッグバン、FinTech、預金保険機構のペイオフ制度（1000万＋利息）のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [16],
      points: 3,
      question_text: `問4 日本の国債発行と財政健全化に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 16】`,
      options: [
        { choice: 1, text: '特例国債（赤字国債）は，毎年の財政特例法を根拠として発行される。' },
        { choice: 2, text: '日本の国債依存度および債務残高の対 GDP 比は，主要先進国の中で最も高い水準にある。' },
        { choice: 3, text: '将来世代へのツケ回しを防ぐため，基礎的財政収支（プライマリー・バランス）の黒字化目標が掲げられている。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 16, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '赤字国債の発行根拠法、対GDP債務残高比率、PB黒字化目標のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [17],
      points: 4,
      question_text: `問5 為替相場と国際収支の構造に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 17】`,
      options: [
        { choice: 1, text: '国際収支統計における経常収支は，貿易・サービス収支，第一次所得収支，第二次所得収支から構成される。' },
        { choice: 2, text: '日本の経常収支では，対外直接投資や証券投資からの利子・配当金収入を示す「第一次所得収支」の黒字が大きな割合を占めている。' },
        { choice: 3, text: '購買力平価説(PPP)によれば，為替相場は 2 国間の物価水準の比率（同一のバスケットの価格）に連動して決まる。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 17, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '経常収支の内訳、日本の第一次所得収支黒字構造、カッセルの購買力平価説のすべてが正確です。',
      correction_applied: false
    },

    // === 第4問〜第6問（全問収録） ===
    {
      question_id: '2026_followup-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [18],
      points: 3,
      question_text: `第4問 労働問題と共生社会に関する次の問い(問1～5)に答えよ。(配点 16)

問1 働き方改革と労働法制の改正に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 18】`,
      options: [
        { choice: 1, text: '高度プロフェッショナル制度とは，一定の年収要件を満たす専門職について，労働時間や割増賃金規制の適用を除外する制度である。' },
        { choice: 2, text: '過労死等防止対策推進法は，過労死等の実態解明や予防対策を国の責務として定めている。' },
        { choice: 3, text: '有給休暇の年 5 日確実な取得が，年間 10 日以上の有給休暇が付与される労働者を対象に使用者に義務づけられた。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 18, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '高プロ制度、過労死防止推進法、有休5日取得義務化のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [19],
      points: 3,
      question_text: `問2 社会福祉六法と地域共生社会に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 19】`,
      options: [
        { choice: 1, text: '社会福祉六法には，生活保護法，児童福祉法，身体障害者福祉法，知的障害者福祉法，老人福祉法，母子及び父子並びに寡婦福祉法が含まれる。' },
        { choice: 2, text: 'ノーマライゼーションとは，障害者や高齢者が特別扱いされることなく，健常者と共に地域社会で当たり前に生活できる社会を目指す理念である。' },
        { choice: 3, text: '地域共生社会とは，制度・分野ごとの縦割りを超えて，地域住民や支援機関が包括的に支え合う社会像である。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 19, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '福祉六法、バンク・ミケルセンらが提唱したノーマライゼーション、地域共生社会の理念のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [20],
      points: 4,
      question_text: `問3 少子化対策と子育て支援に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 20】`,
      options: [
        { choice: 1, text: 'こども基本法が制定され，こども家庭庁が発足して，子ども・若者施策を総合的・一体的に推進する体制が整えられた。' },
        { choice: 2, text: '児童手当制度は，所得制限の撤廃や支給対象の高校生年代までの延長などの拡充が行われた。' },
        { choice: 3, text: '少子化の背景には，未婚化・晩婚化，非正規雇用の拡大による経済的不安，子育てと仕事の両立の難しさなどがある。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 20, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'こども家庭庁・こども基本法、児童手当の抜本拡充、少子化要因分析のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [21],
      points: 3,
      question_text: `問4 消費者保護行政の推進に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 21】`,
      options: [
        { choice: 1, text: '消費者基本法は，2004 年の改正により，消費者の保護から「消費者の自立支援（権利の尊重）」へと基本理念が転換された。' },
        { choice: 2, text: '消費者庁および消費者委員会は，消費者行政を一元的に推進するために設置された。' },
        { choice: 3, text: '国民生活センターや全国の消費生活センターは，消費者からの相談窓口（消費者ホットライン 188 等）として機能している。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 21, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '消費者基本法改正（権利尊重）、消費者庁、消費生活センター（188：いやや）のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [22],
      points: 3,
      question_text: `問5 中小企業の技術革新と地域経済に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 22】`,
      options: [
        { choice: 1, text: '日本の全企業数および全従業者数において，中小企業はいずれも 90％以上を占めている。' },
        { choice: 2, text: '産業集積（クラスター）とは，特定の地域に関連企業や研究機関が集積し，イノベーションや相乗効果を生み出す現象である。' },
        { choice: 3, text: '下請代金支払遅延等防止法（下請法）は，親事業者による優越的地位の濫用から下請事業者を保護している。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 22, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '企業数99%・従業者約7割（大半）、産業クラスター、下請法の規制内容のすべてが正確です。',
      correction_applied: false
    },

    // === 第5問 (配点17点) ===
    {
      question_id: '2026_followup-Q5-1',
      section: 5,
      question_no: 1,
      answer_numbers: [23],
      points: 3,
      question_text: `第5問 国際社会の動向と多国間協調に関する次の問い(問1～6)に答えよ。(配点 17)

問1 国際人道法とジュネーヴ諸条約に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 23】`,
      options: [
        { choice: 1, text: 'ジュネーヴ条約群は，武力紛争における傷病者，捕虜，民間人などの保護を定めている。' },
        { choice: 2, text: '赤十字国際委員会(ICRC)は，中立・公平・独立の原則のもとで人道支援活動を行う。' },
        { choice: 3, text: '対人地雷禁止条約（オタワ条約）やクラスター弾に関する条約は，非人道的な通常兵器の使用・保有を禁止している。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 23, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'ジュネーヴ諸条約、ICRC、オタワ条約・クラスター弾禁止条約のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-2',
      section: 5,
      question_no: 2,
      answer_numbers: [24],
      points: 3,
      question_text: `問2 国際開発援助と貧困削減に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 24】`,
      options: [
        { choice: 1, text: '人間の安全保障基金は，人間の尊厳を守る草の根のプロジェクトを支援するために日本政府の主導で国連に設置された。' },
        { choice: 2, text: 'グラミン銀行（ムハマド・ユヌス創設）は，貧困層に対する無担保の少額融資（マイクロファイナンス）でノーベル平和賞を受賞した。' },
        { choice: 3, text: 'ミレニアム開発目標(MDGs)は 2015 年を達成期限とし，発展途上国の極度の貧困半減などを目指した。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 24, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '人間の安全保障基金、マイクロファイナンス、MDGsのすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-3',
      section: 5,
      question_no: 3,
      answer_numbers: [25],
      points: 3,
      question_text: `問3 グローバリゼーションと多国籍企業に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 25】`,
      options: [
        { choice: 1, text: '多国籍企業は，サプライチェーン（供給網）を世界規模で展開し，生産の最適配置を行っている。' },
        { choice: 2, text: '企業の国外移転に伴い，国内の製造業基盤が縮小・衰退する現象を「産業の空洞化」と呼ぶ。' },
        { choice: 3, text: 'タックス・ヘイヴン（租税回避地）を利用した企業の過度な節税に対し，BEPS（税源浸食と利益移転）プロジェクトなどの国際協調が進められている。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 25, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'グローバルサプライチェーン、産業の空洞化、OECDのBEPSプロジェクト（国際最低法人税率等）のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-4',
      section: 5,
      question_no: 4,
      answer_numbers: [26],
      points: 3,
      question_text: `問4 難民問題と国際難民保護に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 26】`,
      options: [
        { choice: 1, text: '難民条約における「ノン・ルフールマンの原則」とは，難民を迫害のおそれがある国へ強制送還してはならない原則である。' },
        { choice: 2, text: '国内避難民(IDP)は，国境を越えていないため難民条約の定義には直接含まれないが，UNHCR（国連難民高等弁務官事務所）などの支援対象となっている。' },
        { choice: 3, text: '気候変動による海面上昇や干ばつによって故郷を追われる「気候難民」への国際的対応が新たな課題となっている。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 26, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'ノン・ルフールマン原則、国内避難民、気候難民のすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-5',
      section: 5,
      question_no: 5,
      answer_numbers: [27],
      points: 3,
      question_text: `問5 国際エネルギー情勢と資源外交に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 27】`,
      options: [
        { choice: 1, text: 'OPEC（石油輸出国機構）および OPEC プラスは，世界の原油生産量の調整を通じて原油価格に影響を与えている。' },
        { choice: 2, text: 'シェール革命により，アメリカ合衆国は世界最大の原油・天然ガス生産国の一つとなった。' },
        { choice: 3, text: 'レアメタルやレアアース（希土類）などの重要鉱物資源の安定確保は，脱炭素技術やハイテク産業において不可欠となっている。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 27, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'OPECプラス、シェール革命、重要鉱物サプライチェーンのすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-6',
      section: 5,
      question_no: 6,
      answer_numbers: [28],
      points: 2,
      question_text: `問6 多国間安全保障枠組みに関する次の文ア・イの正誤の組合せとして正しいものを，後の①～④のうちから一つ選べ。 【解答番号 28】`,
      options: [
        { choice: 1, text: 'ア：正　イ：正' },
        { choice: 2, text: 'ア：正　イ：誤' },
        { choice: 3, text: 'ア：誤　イ：正' },
        { choice: 4, text: 'ア：誤　イ：誤' }
      ],
      answer: [{ answer_number: 28, correct_choice: 1, correct_option_text: 'ア：正　イ：正' }],
      explanation: 'NATOやQuad（日米豪印）、AUKUSなどの地域安全保障枠組みに関する設問です。',
      correction_applied: false
    },

    // === 第6問 (配点16点) ===
    {
      question_id: '2026_followup-Q6-1',
      section: 6,
      question_no: 1,
      answer_numbers: [29],
      points: 3,
      question_text: `第6問 総合探究と持続可能な社会構想に関する次の問い(問1～6)に答えよ。(配点 16)

問1 生物多様性条約とネイチャーポジティブに関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 29】`,
      options: [
        { choice: 1, text: '生物多様性条約第 15 回締約国会議(COP15)で採択された「昆明・モントリオール生物多様性枠組」では，2030 年までに陸と海の少なくとも 30％を保全する「30by30」目標が合意された。' },
        { choice: 2, text: '名古屋議定書は，遺伝資源の利用から生じる利益の公正かつ衡平な配分(ABS)を定めている。' },
        { choice: 3, text: 'ネイチャーポジティブとは，生物多様性の損失を食い止め，回復軌道に乗せる考え方である。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 29, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: '30by30目標、名古屋議定書、ネイチャーポジティブのすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-2',
      section: 6,
      question_no: 2,
      answer_numbers: [30],
      points: 3,
      question_text: `問2 サーキュラー・エコノミー（循環経済）に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 30】`,
      options: [
        { choice: 1, text: '従来の「大量採取・大量生産・大量消費・大量廃棄」という線形経済（リニア・エコノミー）から，資源を循環させ続けるサーキュラー・エコノミーへの転換が進められている。' },
        { choice: 2, text: 'サーキュラー・エコノミーでは，製品設計の段階から再利用や分解・リサイクルが容易になるような設計（エコデザイン）が重視される。' },
        { choice: 3, text: 'シェアリング・エコノミーや製品のサービス化（サービタイゼーション）も，資源利用効率を高める循環経済の取組みである。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 30, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'サーキュラー・エコノミー、エコデザイン、シェアリング・エコノミーのすべてが正しい記述です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-3',
      section: 6,
      question_no: 3,
      answer_numbers: [31],
      points: 3,
      question_text: `問3 グリーン・トランスフォーメーション(GX)と脱炭素投資に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 31】`,
      options: [
        { choice: 1, text: 'GX 推進法に基づき，脱炭素成長型経済構造への移行に向けた GX 経済移行債の発行やカーボンプライシングの導入が進められている。' },
        { choice: 2, text: 'ESG 投資とは，環境(Environment)，社会(Social)，企業統治(Governance)の要素を重視して投資先を選別する手法である。' },
        { choice: 3, text: 'アンモニア混焼発電や水素エネルギー，CCUS（二酸化炭素回収・利用・貯留）などの次世代技術の開発が進められている。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 31, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'GX経済移行債、ESG投資、次世代脱炭素技術（水素・CCUS等）のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-4',
      section: 6,
      question_no: 4,
      answer_numbers: [32],
      points: 3,
      question_text: `問4 デジタル社会の形成とプライバシー・データ主権に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 32】`,
      options: [
        { choice: 1, text: 'EU の一般データ保護規則(GDPR)は，個人データの保護とデータ主権を強化し，世界的なプライバシー法制に大きな影響を与えた。' },
        { choice: 2, text: 'データフリーフロー・ウィズ・トラスト(DFFT：信頼性ある自由なデータ流通)は，プライバシーやセキュリティを確保しながら自由なデータ越境流通を目指す構想である。' },
        { choice: 3, text: '生成 AI の利用においては，著作権保護，個人情報保護，ディープフェイク対策などのルール形成が国際的に進められている（広島 AI プロセス等）。' },
        { choice: 4, text: '上記のすべてが正しい。' }
      ],
      answer: [{ answer_number: 32, correct_choice: 4, correct_option_text: '上記のすべてが正しい。' }],
      explanation: 'GDPR、DFFT、広島AIプロセスなどのデジタル社会のルール形成のすべてが正確です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-5',
      section: 6,
      question_no: 5,
      answer_numbers: [33],
      points: 2,
      question_text: `問5 地域の防災・減災とコミュニティの強靭化（レジリエンス）に関する次の文ア・イの正誤の組合せとして正しいものを，後の①～④のうちから一つ選べ。 【解答番号 33】

ア タイムライン（防災行動計画）とは，台風などの接近時に「いつ，誰が，何をするか」を時系列で定めた防災計画である。
イ 自助・共助・公助において，大規模災害時には行政による「公助」のみに頼るべきであり，住民同士の「共助」は無効とされる。`,
      options: [
        { choice: 1, text: 'ア：正　イ：誤' },
        { choice: 2, text: 'ア：正　イ：正' },
        { choice: 3, text: 'ア：誤　イ：正' },
        { choice: 4, text: 'ア：誤　イ：誤' }
      ],
      answer: [{ answer_number: 33, correct_choice: 1, correct_option_text: 'ア：正　イ：誤' }],
      explanation: 'ア：タイムライン防災計画として正しい。イ：大規模災害時ほど公助の限界が生じるため、自助・共助が極めて重要です。',
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-6',
      section: 6,
      question_no: 6,
      answer_numbers: [34],
      points: 2,
      question_text: `問6 持続可能な未来を築く市民の態度に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。 【解答番号 34】`,
      options: [
        { choice: 1, text: '複眼的な視点をもち，対立する価値観や利害関係を調整しながら，持続可能で公正な社会の実現に向けて主体的に参画する態度が重要である。' },
        { choice: 2, text: '社会問題の解決はすべて専門家に一任し，一般市民は何の関心ももたないことが最善である。' },
        { choice: 3, text: '自らの目先の利益のみを最大化し，将来世代や地球環境への影響は無視することが合理的である。' },
        { choice: 4, text: '他者との対話を避け，自らの固定観念のみを主張し続けることが民主主義の精神である。' }
      ],
      answer: [{ answer_number: 34, correct_choice: 1, correct_option_text: '複眼的な視点をもち，対立する価値観や利害関係を調整しながら，持続可能で公正な社会の実現に向けて主体的に参画する態度が重要である。' }],
      explanation: '①公共的な精神と自律的市民の育成目標として最も適当です。',
      correction_applied: false
    }
  ]
};
