import { ExamData } from '../types';

export const EXAM_2025_MAIN: ExamData = {
  metadata: {
    id: '2025_main',
    year: 2025,
    session: '本試験',
    subject: '公共，政治・経済',
    totalQuestions: 32,
    totalPoints: 100,
    notes: ['新課程「公共，政治・経済」本試験（全32問・100点満点）', '第6問問6は問題訂正後の回答者数を採用']
  },
  questions: [
    {
      question_id: '2025_main-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: `日本の男女平等に関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ａ：日本国憲法第１４条は，【ア】を明記しており，人種，信条，性別，社会的身分又は門地による差別を禁じているよね。
Ｂ：他にも，日本は女子差別撤廃条約を批准したことに伴い，同じ年に【イ】を制定したよね。`,
      options: [
        { choice: 1, text: 'ア 法の下の平等 イ 男女共同参画社会基本法' },
        { choice: 2, text: 'ア 法の下の平等 イ 男女雇用機会均等法' },
        { choice: 3, text: 'ア 両性の本質的平等 イ 男女共同参画社会基本法' },
        { choice: 4, text: 'ア 両性の本質的平等 イ 男女雇用機会均等法' }
      ],
      answer: [{ answer_number: 1, correct_choice: 2, correct_option_text: 'ア 法の下の平等 イ 男女雇用機会均等法' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: `性別役割意識に関する調査（内閣府資料）から読み取れることとして適当でないものを，後の①〜④のうちから一つ選べ。

【肯定的な回答割合（％）】
■「共働きでも男性は家庭よりも仕事を優先するべきだ」:
男性20代 26.2 / 女性20代 14.5 | 男性30代 25.6 / 女性30代 17.7 | 男性40代 27.2 / 女性40代 23.3 | 男性50代 32.2 / 女性50代 24.7 | 男性60代 31.2 / 女性60代 28.0

■「同程度の実力なら，まず男性から昇進させたり管理職に登用するものだ」:
男性20代 20.4 / 女性20代 11.0 | 男性30代 20.7 / 女性30代 10.4 | 男性40代 17.6 / 女性40代 10.4 | 男性50代 15.7 / 女性50代 8.4 | 男性60代 15.8 / 女性60代 9.4`,
      options: [
        { choice: 1, text: '「共働きでも男性は家庭よりも仕事を優先するべきだ」への肯定的な回答割合は，女性２０代〜女性６０代では，年代が上がるほど高くなっている。' },
        { choice: 2, text: '「共働きでも男性は家庭よりも仕事を優先するべきだ」への肯定的な回答割合は，男性２０代の方が女性２０代よりも１０．０ポイント以上高い。' },
        { choice: 3, text: '「同程度の実力なら，まず男性から昇進させたり管理職に登用するものだ」への肯定的な回答割合は，男性２０代と男性３０代のみ２０．０％ を超えている。' },
        { choice: 4, text: '「同程度の実力なら，まず男性から昇進させたり管理職に登用するものだ」への肯定的な回答割合は，６０代において男女の差が最も大きい。' }
      ],
      answer: [{ answer_number: 2, correct_choice: 4, correct_option_text: '「同程度の実力なら，まず男性から昇進させたり管理職に登用するものだ」 への肯定的な回答割合は，６０代において男女の差が最も大きい。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `女性議員比率の国際比較（Ｘ国: 1960年13.8%→1980年27.8%→2000年42.7%→2020年47.0% / Ｙ国: 1960年1.5%→2000年10.9%→2010年18.9%→2020年39.5% / Ｚ国: 1960年3.9%→2000年14.0%→2020年27.3% / 日本: 1960年1.5%→2000年7.3%→2020年9.9%）と会話文から読み取れることとして最も適当なものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'Ｘ国では，女性議員比率が初めて上昇し始めたのは，各政党が候補者名簿の男女比率を均等にする努力を始めた時期である。' },
        { choice: 2, text: 'Ｙ国では，各政党の候補者の男女比率を均等にする法を制定した年（2000年）とその１０年後とを比較すると，女性議員比率は８．０ポイント高い。' },
        { choice: 3, text: 'Ｚ国では，クオータ制を導入していないが，女性議員比率は１９６０年以降，常に日本の女性議員比率より高く，Ｙ国より低い。' },
        { choice: 4, text: '日本では，各政党に候補者の男女比率をできる限り均等にすることを促す法律が制定された後，女性議員比率はＺ国を上回った。' }
      ],
      answer: [{ answer_number: 3, correct_choice: 2, correct_option_text: 'Ｙ国では，各政党の候補者の男女比率を均等にする法を制定した年とその １０年後とを比較すると，女性議員比率は８． ０ポイント高い。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: `平等に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｂ：「個性や属性にかかわらず，すべての人を同じように扱うこと」という意味での平等は「【ア】平等」だと学んだね。
Ｂ：事実として残る差別に対しては，クオータ制のような制度を新たに導入することによって，「【イ】平等」を実現するやり方があり得るね。
Ｂ：例えば，アイヌ民族に対する差別については，２０１９年に【ウ】によってアイヌ民族は法律上初めて「先住民族」と明記されたよ。`,
      options: [
        { choice: 1, text: 'ア 形式的 イ 実質的 ウ アイヌ文化振興法' },
        { choice: 2, text: 'ア 実質的 イ 形式的 ウ アイヌ文化振興法' },
        { choice: 3, text: 'ア 形式的 イ 実質的 ウ アイヌ施策推進法（アイヌ民族支援法）' },
        { choice: 4, text: 'ア 実質的 イ 形式的 ウ アイヌ施策推進法（アイヌ民族支援法）' }
      ],
      answer: [{ answer_number: 4, correct_choice: 3, correct_option_text: 'ア 形式的 イ 実質的 ウ アイヌ施策推進法（アイヌ民族支援法）' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [5],
      points: 3,
      question_text: `先生の説明中の空欄【ア】〜【ウ】に入るものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

『コミュニケーション的行為の理論』という著書のある【ア】によれば，公共空間では対等な立場で自由に意見を交わすという共通理解のもとで，合意を形成していくことが大切であり，そのような合意形成には【イ】が必要である。
また別の哲学者（ハンナ・アーレント）は著書『人間の条件』で，人間の営みを「労働」「仕事」「人と人とが【ウ】営みである活動」の三種類に分け，「活動」こそが公共空間を形成すると論じている。`,
      options: [
        { choice: 1, text: 'ア アーレント イ 対話的理性 ウ 言葉を通して関わり合う' },
        { choice: 2, text: 'ア アーレント イ 対話的理性 ウ 契約を結んでこれを守る' },
        { choice: 3, text: 'ア アーレント イ 他者危害原理 ウ 言葉を通して関わり合う' },
        { choice: 4, text: 'ア アーレント イ 他者危害原理 ウ 契約を結んでこれを守る' },
        { choice: 5, text: 'ア ハーバーマス イ 対話的理性 ウ 言葉を通して関わり合う' },
        { choice: 6, text: 'ア ハーバーマス イ 対話的理性 ウ 契約を結んでこれを守る' },
        { choice: 7, text: 'ア ハーバーマス イ 他者危害原理 ウ 言葉を通して関わり合う' },
        { choice: 8, text: 'ア ハーバーマス イ 他者危害原理 ウ 契約を結んでこれを守る' }
      ],
      answer: [{ answer_number: 5, correct_choice: 5, correct_option_text: 'ア ハーバーマス イ 対話的理性 ウ 言葉を通して関わり合う' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [6],
      points: 4,
      question_text: `２０１８年と２０２２年の「時間のゆとりの有無」と「自由時間の過ごし方」の調査データを正しく読み取った意見ア〜ウの組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 「時間のゆとりの有無」について「ゆとりがある」と回答した割合が半数を下回るようになったのは「３０〜３９歳」と「４０〜４９歳」だ。この二つの年齢層は，「自由時間の過ごし方」として「インターネットやソーシャルメディアの利用」をあげた割合が半数を超えるようになった。
イ 「時間のゆとりの有無」について「ゆとりがない」と回答した割合は，すべての年齢層で上がっているが，上がった割合が１ポイント未満だったのは「１８〜２９歳」だけだ。また「自由時間の過ごし方」として「友人や恋人との交際」をあげた割合に関して，５ポイント以上増えたのは「１８〜２９歳」だけで，５０歳以上については，どの年齢層も減っている。
ウ 「自由時間の過ごし方」として「社会参加」をあげた割合は，どの年齢層でも減っている。だけど「７０歳以上」は，「社会参加」の割合が他のどの年齢層より高いままであり，「時間のゆとりの有無」について「ゆとりがある」と答えた割合も，他のどの年齢層より高いままだ。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 6, correct_choice: 6, correct_option_text: 'イとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [7],
      points: 3,
      question_text: `哲学カフェの参加者の発言Ⅰ〜Ⅲのうち，帰納的に推論されているものの組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

Ⅰ 哲学カフェでお互い安心して話せるように取り決めたところ，対話が活発にできるようになった。これらの事実が何度もあったことから，活発な哲学対話は安心して話せる取り決めがあれば可能になるという経験則が導き出せる。
Ⅱ 人間には意見を自由に述べる権利があり，尊重し合う義務がある。そうであるならば，職場でも学校でも相手の話を尊重して聞くことを対話のルールにしなければならないことになる。
Ⅲ 初めて参加した人が素朴な質問をしてくれると問いが深まった。他の参加者たちも同じ実感をもっていた。これらの経験を基にして，素朴であっても率直に質問を出し問いを深めていくことが方針になった。`,
      options: [
        { choice: 1, text: 'Ⅰ' },
        { choice: 2, text: 'Ⅱ' },
        { choice: 3, text: 'Ⅲ' },
        { choice: 4, text: 'ⅠとⅡ' },
        { choice: 5, text: 'ⅠとⅢ' },
        { choice: 6, text: 'ⅡとⅢ' },
        { choice: 7, text: 'ⅠとⅡとⅢ' }
      ],
      answer: [{ answer_number: 7, correct_choice: 5, correct_option_text: 'ⅠとⅢ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [8],
      points: 3,
      question_text: `公共空間の形成に関する構想メモの下線部①〜③と，事例ア〜ウの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

① 別々の場所にいる人たちが，ICTを使うことで対面の場に集まることなく対話に参加できる（非対面的関わりのみ）
② 今まで対面の場に参加できなかった人が，ICTを使って対面の場に非対面で参加できる（対面的関わりに非対面が加わる）
③ その場にいる人たちが互いに気楽に質問したり反応を確認しながら伝えたりしやすい（対面的関わりのみ）

ア これまで対面で実施されていた会議がオンライン会議に変更され，全参加者がネットで出席した。
イ 料理教室に講師と生徒が集まり，生徒は指導に基づいて料理を作りその場で味見してもらい講評を受けた。
ウ 外出できなかった人が，地元の公民館に集まった人々の対話集会にインターネットで参加した。`,
      options: [
        { choice: 1, text: '①―ア ②―イ ③―ウ' },
        { choice: 2, text: '①―ア ②―ウ ③―イ' },
        { choice: 3, text: '①―イ ②―ア ③―ウ' },
        { choice: 4, text: '①―イ ②―ウ ③―ア' },
        { choice: 5, text: '①―ウ ②―ア ③―イ' },
        { choice: 6, text: '①―ウ ②―イ ③―ア' }
      ],
      answer: [{ answer_number: 8, correct_choice: 2, correct_option_text: '①―ア ②―ウ ③―イ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [9],
      points: 3,
      question_text: `アメリカの消費者物価指数上昇率と失業率の推移資料に関する空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

【ア】（1950〜1970年の期間a / 1970〜1990年の期間b）では，好況期には物価上昇率が高く，不況期には物価上昇率が低くなる傾向がみられる。もう一つの期間では，高い物価上昇率と不況が同時に生じる【イ】が確認できる。`,
      options: [
        { choice: 1, text: 'ア 期間 a イ デフレスパイラル' },
        { choice: 2, text: 'ア 期間 a イ スタグフレーション' },
        { choice: 3, text: 'ア 期間 b イ デフレスパイラル' },
        { choice: 4, text: 'ア 期間 b イ スタグフレーション' }
      ],
      answer: [{ answer_number: 9, correct_choice: 2, correct_option_text: 'ア 期間 a イ スタグフレーション' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [10],
      points: 3,
      question_text: `国政選挙の合区（鳥取・島根，徳島・高知）に関する会話文中の空欄【ア】・【イ】に当てはまる語句と記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：合区は，【ア】の選挙制度で採用されたんだよね。
Ｙ：私は【イ】ために合区を進めるべきだと思うな。

【ア】衆議院 / 参議院
【イ】投票価値の平等を実現する / 道州制の導入を推進する`,
      options: [
        { choice: 1, text: 'ア 衆議院 イ 投票価値の平等を実現する' },
        { choice: 2, text: 'ア 衆議院 イ 道州制の導入を推進する' },
        { choice: 3, text: 'ア 参議院 イ 投票価値の平等を実現する' },
        { choice: 4, text: 'ア 参議院 イ 道州制の導入を推進する' }
      ],
      answer: [{ answer_number: 10, correct_choice: 3, correct_option_text: 'ア 参議院 イ 投票価値の平等を実現する' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [11],
      points: 3,
      question_text: `フードマイレージと地域農業に関するメモ中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

自国での食料生産の増加は，輸入が途絶した際のリスクを下げることによって，【ア】に貢献しうる。また，地域で作られた食料をその地域内で食べる【イ】の推進は，輸送にかかるエネルギー消費を抑え，環境負荷の低下にもつながりうる。`,
      options: [
        { choice: 1, text: 'ア オフショアリングの推進 イ 地産地消' },
        { choice: 2, text: 'ア オフショアリングの推進 イ 減反政策' },
        { choice: 3, text: 'ア 食料安全保障の確保 イ 地産地消' },
        { choice: 4, text: 'ア 食料安全保障の確保 イ 減反政策' }
      ],
      answer: [{ answer_number: 11, correct_choice: 3, correct_option_text: 'ア 食料安全保障の確保 イ 地産地消' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [12],
      points: 3,
      question_text: `「思想の自由市場論」に関する会話文中の空欄【ア】・【イ】に当てはまる記述と語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：この資料の考え方を踏まえると，日本国憲法で定めている検閲の禁止は，【ア】ためにも大事なんだね。
Ｙ：SNS上でアルゴリズムによって自分の考えと同じ意見ばかり表示されるとしたら，思想の自由市場の前提である競争が【イ】されるんじゃないかな。

【ア】ａ 危険な言論を取り除くことで，思想の自由市場を健全に保ち続ける / ｂ 意見の自由なやりとりを確保することで，真理を探究し続ける
【イ】ｃ 促進 / ｄ 阻害`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 12, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [13],
      points: 3,
      question_text: `「ふるさと納税」に関する次の記述ア〜ウのうち，メモから読みとれる記述として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア ２０２３年度の「ふるさと納税」の市区町村での寄附金控除の過半は，政令指定都市と東京２３区の住民によるこの制度の利用から生じている。
イ 「ふるさと納税」により，この制度を利用した個人間の所得格差が是正される。
ウ 「ふるさと納税」の制度と，国の財政とは無関係である。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 13, correct_choice: 1, correct_option_text: 'ア' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q3-6',
      section: 3,
      question_no: 6,
      answer_numbers: [14],
      points: 3,
      question_text: `防災・減災に関する資料中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

防潮堤や遊水地を設置するため土地が強制収用される場合，憲法で定められた【ア】が適切になされる必要がある。
国や地方公共団体が洪水浸水想定区域を指定することは，自助・共助・公助のうち【イ】に該当する。`,
      options: [
        { choice: 1, text: 'ア 国家賠償 イ 公助' },
        { choice: 2, text: 'ア 国家賠償 イ 共助' },
        { choice: 3, text: 'ア 損失補償 イ 公助' },
        { choice: 4, text: 'ア 損失補償 イ 共助' }
      ],
      answer: [{ answer_number: 14, correct_choice: 3, correct_option_text: 'ア 損失補償 イ 公助' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [15],
      points: 3,
      question_text: `金融政策に関する会話文中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして正しいものを，後の①〜④のうちから一つ選べ。

Ｙ：中央銀行が市中銀行との間で国債等を売買する公開市場操作により増減する【ア】のことだね。
Ｘ：市中銀行はコールレートを基準に貸出金利を設定して貸出しを行っているよ。この貸出しが【イ】を形成していくんだよね。
Ｘ：額面100円・年利子1円の国債の場合，金利が2%になると，額面と比較してその国債の市場評価額は【ウ】よね。

【ア・イ】マネタリーベース / マネーストック
【ウ】上がる / 下がる`,
      options: [
        { choice: 1, text: 'ア マネーストック イ マネタリーベース ウ 上がる' },
        { choice: 2, text: 'ア マネーストック イ マネタリーベース ウ 下がる' },
        { choice: 3, text: 'ア マネタリーベース イ マネーストック ウ 上がる' },
        { choice: 4, text: 'ア マネタリーベース イ マネーストック ウ 下がる' }
      ],
      answer: [{ answer_number: 15, correct_choice: 4, correct_option_text: 'ア マネタリーベース イ マネーストック ウ 下がる' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [16],
      points: 4,
      question_text: `2000年以降の貿易収支と一人当たりGDPの推移を示す図（図ア〜図エ）について，会話文を踏まえた国名（インド，韓国，中国）と図との組合せとして正しいものを，後の①〜⑧のうちから一つ選べ。
（会話文要点: 韓国は貿易黒字を重ね一人当たりGDPも日本とほぼ並ぶ。中国は貿易黒字が急増し一人当たりGDPも大きく急伸。インドは一人当たりGDPは伸びているが貿易収支は毎年赤字。）`,
      options: [
        { choice: 1, text: 'インド ― 図ア 韓国 ― 図イ 中国 ― 図ウ' },
        { choice: 2, text: 'インド ― 図ア 韓国 ― 図エ 中国 ― 図ウ' },
        { choice: 3, text: 'インド ― 図イ 韓国 ― 図ア 中国 ― 図エ' },
        { choice: 4, text: 'インド ― 図イ 韓国 ― 図ウ 中国 ― 図エ' },
        { choice: 5, text: 'インド ― 図ウ 韓国 ― 図イ 中国 ― 図ア' },
        { choice: 6, text: 'インド ― 図ウ 韓国 ― 図エ 中国 ― 図ア' },
        { choice: 7, text: 'インド ― 図エ 韓国 ― 図ア 中国 ― 図イ' },
        { choice: 8, text: 'インド ― 図エ 韓国 ― 図ウ 中国 ― 図イ' }
      ],
      answer: [{ answer_number: 16, correct_choice: 8, correct_option_text: 'インド ― 図エ 韓国 ― 図ウ 中国 ― 図イ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [17],
      points: 3,
      question_text: `世界経済の統合と分断の流れに関するメモ中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

〇中国が自由貿易を掲げる【ア】に加盟した。
〇【イ】を背景に，２００８年に世界金融危機が始まった。`,
      options: [
        { choice: 1, text: 'ア OECD（経済協力開発機構） イ サブプライムローン問題' },
        { choice: 2, text: 'ア OECD（経済協力開発機構） イ ユーロ危機' },
        { choice: 3, text: 'ア WTO（世界貿易機関） イ サブプライムローン問題' },
        { choice: 4, text: 'ア WTO（世界貿易機関） イ ユーロ危機' }
      ],
      answer: [{ answer_number: 17, correct_choice: 3, correct_option_text: 'ア WTO（世界貿易機関） イ サブプライムローン問題' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [18],
      points: 3,
      question_text: '国際刑事裁判所（ICC）の目的や活動に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '個人の刑事責任を国際法に基づいて追及する国際的な手続を設けることで，国際社会が処罰対象とする重大な犯罪を防止しようとしている。' },
        { choice: 2, text: '個人の刑事責任を国際法に基づいて追及する国際的な手続を設けることで，各国の刑事裁判における法定手続（適法手続）を保障しようとしている。' },
        { choice: 3, text: '国際司法裁判所によって有罪判決を下された個人が ICC に上訴する手続を設けることで，迅速な刑事裁判の実現を図ろうとしている。' },
        { choice: 4, text: '国際司法裁判所によって有罪判決を下された個人が ICC に上訴する手続を設けることで，再審手続を充実させようとしている。' }
      ],
      answer: [{ answer_number: 18, correct_choice: 1, correct_option_text: '個人の刑事責任を国際法に基づいて追及する国際的な手続を設けることで，国際社会が処罰対象とする重大な犯罪を防止しようとしている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [19],
      points: 3,
      question_text: '安保理常任理事国の拒否権行使に対して国連総会の場で説明を求める決議に関する説明として最も適当なものを，後の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'この決議は，総会が上位機関として安保理を管理監督する権限を国連憲章によって与えられていることを確認し，その権限の行使として総会が安保理の活動に制限をかけるものとして採択されたものである。' },
        { choice: 2, text: 'この決議は，安保理が積極的に対応する必要がないと考えた場合であっても，総会が必要と判断した場合には安保理による強制措置の発動を義務づける仕組みを導入しようとしたものである。' },
        { choice: 3, text: 'この決議は，国際の平和と安全の維持について安保理が有する権限を尊重しつつ，国連憲章が扱う問題全般に及ぶ総会自身の権限に基づいて拒否権の行使をとくに取り上げ，討議の対象とすることとしたものである。' },
        { choice: 4, text: 'この決議は，総会が「平和のための結集」決議に基づいて，総会として強制措置を加盟国に命じるべきかを判断するために，安保理での審議状況について，とくに常任理事国から説明を受けることとしたものである。' }
      ],
      answer: [{ answer_number: 19, correct_choice: 3, correct_option_text: 'この決議は，国際の平和と安全の維持について安保理が有する権限を尊重しつつ，国連憲章が扱う問題全般に及ぶ総会自身の権限に基づいて拒否権の行使をとくに取り上げ，討議の対象とすることとしたものである。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q4-6',
      section: 4,
      question_no: 6,
      answer_numbers: [20],
      points: 3,
      question_text: `「アラブの春」に対する世論調査結果を踏まえた会話文中の空欄【ア】・【イ】に当てはまる国名と記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：２０１５年頃に【ア】などのように内戦が激化したり，イスラーム原理主義勢力がイラク北部から勢力を広げたりしているね。
Ｚ：資料からは，【イ】ことを読みとれることからすると，「アラブの春」は民主化に対する期待が根強くあることを示したといえるんじゃないかな。

【ア】ａ チュニジア / ｂ シリア
【イ】ｃ ２０１５年の調査を除いて，「肯定的な評価」と「どちらかというと肯定的な評価」との合計が「否定的な評価」と「どちらかというと否定的な評価」との合計を常に上回っている / ｄ ２０１６年以降の調査では，「否定的な評価」と「どちらかというと否定的な評価」との合計が「肯定的な評価」と「どちらかというと肯定的な評価」との合計を常に上回っている`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 20, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-1',
      section: 5,
      question_no: 1,
      answer_numbers: [21],
      points: 3,
      question_text: '現代における格差や貧困に関する記述として正しいものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '発展途上国の低所得層に向けて製品やサービスを販売して利益を得つつ，低所得層の生活水準の向上に資する企業の活動を，BOP ビジネスという。' },
        { choice: 2, text: 'すべての国民に対して個別の事情によらず無条件に現金を定期的に給付する制度を，ミニマム・アクセスという。' },
        { choice: 3, text: '情報通信技術を使いこなすことができる人と使いこなすことができない人との間に生じる格差を，トレードオフという。' },
        { choice: 4, text: 'ある国における全世帯の年間可処分所得の中央値の半分に満たない人の割合を，絶対的貧困率という。' }
      ],
      answer: [{ answer_number: 21, correct_choice: 1, correct_option_text: '発展途上国の低所得層に向けて製品やサービスを販売して利益を得つつ， 低所得層の生活水準の向上に資する企業の活動を，BOP ビジネスという。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-2',
      section: 5,
      question_no: 2,
      answer_numbers: [22],
      points: 3,
      question_text: `日韓の労働・外国人政策に関する会話文中の空欄【ア】・【イ】に当てはまる語句と記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：日本でも１９９３年に，【ア】を目的として掲げた技能実習制度が導入されたよ。
Ｚ：日本では２０１８年の出入国管理法改正で【イ】こととして，翌年施行されたね。

【ア】ａ 発展途上国への技能や知識の移転 / ｂ 日本国内の労働力不足への対応
【イ】ｃ 「特定技能」の在留資格を新設して，在留資格が与えられる業種を拡大する / ｄ 技能実習制度を廃止して，外国人にほぼすべての業種での就労を認める`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 22, correct_choice: 1, correct_option_text: 'ア―ａ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-3',
      section: 5,
      question_no: 3,
      answer_numbers: [23],
      points: 3,
      question_text: `共生社会に関する会話文中の空欄【ア】・【イ】に当てはまる語句と記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：まずは，高齢者や障害者も社会の中でほかの人々と同じような暮らしを送り，ともに生活するという【ア】という考え方が重要だよね。
Ｙ：現在，国，地方公共団体や企業などに対して，【イ】が法律で義務づけられているね。

【ア】ａ ワーク・ライフ・バランス / ｂ ノーマライゼーション
【イ】ｃ 定年制を廃止すること / ｄ 障害者を職員や従業員の一定比率以上雇用すること`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 23, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-4',
      section: 5,
      question_no: 4,
      answer_numbers: [24],
      points: 3,
      question_text: '契約自由の原則が労働契約においてはそのままでは当てはまらない理由を示した記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '労働者と使用者は，効率的な生産の実現に向けて分業や協業の関係を構築しなければならず，契約の締結に政府の介入が容認されるため。' },
        { choice: 2, text: '労働者と使用者は，労働条件をめぐってしばしば対立し，結果として争議行為が発生して生産活動が止まったときの企業の損失を避けるため。' },
        { choice: 3, text: '労働者と使用者は，形式上は対等な主体として契約を締結したとしても，実際には立場の弱い労働者に不利な内容となる可能性があるため。' },
        { choice: 4, text: '労働者と使用者は，商品の品質について共同で責任をもつだけでなく，それぞれの活動が社会に及ぼす影響についても配慮する必要があるため。' }
      ],
      answer: [{ answer_number: 24, correct_choice: 3, correct_option_text: '労働者と使用者は，形式上は対等な主体として契約を締結したとしても， 実際には立場の弱い労働者に不利な内容となる可能性があるため。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-5',
      section: 5,
      question_no: 5,
      answer_numbers: [25],
      points: 3,
      question_text: `労働生産性と労働組合組織率の国際比較（2019年: 就業者1人当たり年間労働生産性は 日本79,307ドル, 韓国82,850ドル / 1時間当たり労働生産性は 日本47.5ドル, 韓国42.2ドル / 組織率は 日本16.7%, ドイツ16.3%, ドイツの1時間当たり労働生産性は76.8ドル）に関する会話文中の空欄【ア】・【イ】の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：日本は韓国よりも年間労働生産性が低い一方で，１時間当たり労働生産性が高い。ということは，日本が韓国よりも就業者１人当たりの年間総労働時間が【ア】ことになるよね。
Ｚ：労働組合組織率と労働生産性については，表をみる限り，【イ】と推察できるね。

【ア】ａ 長い / ｂ 短い
【イ】ｃ 就業１時間当たり労働生産性が高い米独と低い日韓を比べると，米独は組織率が日韓より高いので，生産性の違いが組織率の違いをもたらしている / ｄ 組織率が同水準の日本とドイツとを比べると，１時間当たり労働生産性に大きな差がみられるので，組織率の違いが労働生産性の違いをもたらしているわけではない`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 25, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q5-6',
      section: 5,
      question_no: 6,
      answer_numbers: [26],
      points: 4,
      question_text: `日本の雇用慣行に関する会話文中の空欄【ア】〜【ウ】に当てはまる記述と語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｚ：職務が特定されていない労働契約では，【ア】が重要な要素となっていると推察できるね。
Ｘ：さらに，同じ人がさまざまな職務を担当する終身雇用の下では，【イ】が難しいので年功序列型賃金がみられるようになったと推察できるね。
Ｙ：今後，職務に適合した労働者を雇用する傾向が強まると，労働者にとって【ウ】の労働組合の必要性が高まるんじゃないかな。

【ア】ａ 労働者が単一の職務の専門的技能を身につけていること / ｂ 労働者が特定の企業の一員であること
【イ】ｃ 職務の専門的技能の高低や職務の必要度の高低に応じて賃金を定めること / ｄ 入社後の期間や年齢といった客観的な基準に応じて賃金を定めること
【ウ】ｅ 企業別 / ｆ 産業別や職業別`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ ウ―ｅ' },
        { choice: 2, text: 'ア―ａ イ―ｃ ウ―ｆ' },
        { choice: 3, text: 'ア―ａ イ―ｄ ウ―ｅ' },
        { choice: 4, text: 'ア―ａ イ―ｄ ウ―ｆ' },
        { choice: 5, text: 'ア―ｂ イ―ｃ ウ―ｅ' },
        { choice: 6, text: 'ア―ｂ イ―ｃ ウ―ｆ' },
        { choice: 7, text: 'ア―ｂ イ―ｄ ウ―ｅ' },
        { choice: 8, text: 'ア―ｂ イ―ｄ ウ―ｆ' }
      ],
      answer: [{ answer_number: 26, correct_choice: 6, correct_option_text: 'ア―ｂ イ―ｃ ウ―ｆ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-1',
      section: 6,
      question_no: 1,
      answer_numbers: [27],
      points: 3,
      question_text: `株式会社のコーポレート・ガバナンスに関するメモ中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

株式会社の所有者は【ア】であり，その最高意思決定機関は【ア】によって構成される。一方で株式会社では，【イ】が進行しており，会社の行為が【ア】の利益と一致しないこともありうる。
コーポレート・ガバナンスの強化のため，ディスクロージャーや【ウ】が進められている。`,
      options: [
        { choice: 1, text: 'ア 取締役 イ 所有と経営の分離 ウ 株主代表訴訟の手続の簡素化' },
        { choice: 2, text: 'ア 取締役 イ 所有と経営の分離 ウ メインバンク制度の新設' },
        { choice: 3, text: 'ア 取締役 イ 有限会社への転換 ウ 株主代表訴訟の手続の簡素化' },
        { choice: 4, text: 'ア 取締役 イ 有限会社への転換 ウ メインバンク制度の新設' },
        { choice: 5, text: 'ア 株主 イ 所有と経営の分離 ウ 株主代表訴訟の手続の簡素化' },
        { choice: 6, text: 'ア 株主 イ 所有と経営の分離 ウ メインバンク制度の新設' },
        { choice: 7, text: 'ア 株主 イ 有限会社への転換 ウ 株主代表訴訟の手続の簡素化' },
        { choice: 8, text: 'ア 株主 イ 有限会社への転換 ウ メインバンク制度の新設' }
      ],
      answer: [{ answer_number: 27, correct_choice: 5, correct_option_text: 'ア 株主 イ 所有と経営の分離 ウ 株主代表訴訟の手続の簡素化' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-2',
      section: 6,
      question_no: 2,
      answer_numbers: [28],
      points: 3,
      question_text: `ある農産物の需要曲線が右下がりの直線である。2023年（生産量300万単位, 価格70円）, 2024年（生産量400万単位, 価格60円）のとき，2025年見込み（生産量800万単位, 価格x円）の全農家の売上総額は，2024年と比較して【ア】だけ【イ】すると見込まれる。【ア】・【イ】に入る組合せとして正しいものを，後の①〜⑥のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'ア ８千万円 イ 増加' },
        { choice: 2, text: 'ア ８千万円 イ 減少' },
        { choice: 3, text: 'ア １億６千万円 イ 増加' },
        { choice: 4, text: 'ア １億６千万円 イ 減少' },
        { choice: 5, text: 'ア ２億４千万円 イ 増加' },
        { choice: 6, text: 'ア ２億４千万円 イ 減少' }
      ],
      answer: [{ answer_number: 28, correct_choice: 2, correct_option_text: 'ア ８千万円 イ 減少' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-3',
      section: 6,
      question_no: 3,
      answer_numbers: [29],
      points: 3,
      question_text: `イノベーションと知的財産権に関する会話文中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：人口が減少し実質GDPが伸び悩む状況の下でも，【ア】考えると，イノベーションによる生産性の上昇があれば生活水準を高めることは可能だとわかると書いてあったよ。
Ｙ：知的財産権の保護を【イ】すぎると勝手に使われてしまうし，逆に保護を【ウ】すぎると研究開発に利用できなくなったり高額使用料を求められたりするね。

【ア】一人当たりで / 固定資本減耗を控除して
【イ・ウ】強め / 弱め`,
      options: [
        { choice: 1, text: 'ア 一人当たりで イ 強め ウ 弱め' },
        { choice: 2, text: 'ア 一人当たりで イ 弱め ウ 強め' },
        { choice: 3, text: 'ア 固定資本減耗を控除して イ 強め ウ 弱め' },
        { choice: 4, text: 'ア 固定資本減耗を控除して イ 弱め ウ 強め' }
      ],
      answer: [{ answer_number: 29, correct_choice: 2, correct_option_text: 'ア 一人当たりで イ 弱め ウ 強め' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-4',
      section: 6,
      question_no: 4,
      answer_numbers: [30],
      points: 4,
      question_text: `日本の検察審査会制度に関するメモから読みとれる内容として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 検察審査会が起訴相当の議決をし，それに対して検察官が再び不起訴の判断をした事件について，検察審査会が起訴を相当と認める場合，起訴が行われなければならない。
イ 検察審査会の不起訴不当の議決をうけて，検察官が再び不起訴の判断をした場合，検察審査会は，当該判断の当否の審査を行わなければならない。
ウ 検察審査会の議決に基づき強制的に起訴が行われる場合，その起訴は検察官によって行われる。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 30, correct_choice: 1, correct_option_text: 'ア' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-5',
      section: 6,
      question_no: 5,
      answer_numbers: [31],
      points: 3,
      question_text: `製造物責任法（PL法）に関するメモ中の空欄【ア】・【イ】に当てはまる記述と語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

日本の製造物責任法では，消費者が企業に賠償を求めるためには，【ア】。
また，日本の製造物責任法に基づき企業に賠償責任を負わせることは，事前規制と事後規制の二つのうち，【イ】に分類される。

【ア】ａ 製品の欠陥の証明と企業の過失の証明とが両方とも必要である / ｂ 製品の欠陥の証明は必要であるが，企業の過失の証明は不要である / ｃ 製品の欠陥の証明は不要であるが，企業の過失の証明は必要である / ｄ 製品の欠陥の証明と企業の過失の証明とが両方とも不要である
【イ】ｅ 事前規制 / ｆ 事後規制`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｅ' },
        { choice: 2, text: 'ア―ａ イ―ｆ' },
        { choice: 3, text: 'ア―ｂ イ―ｅ' },
        { choice: 4, text: 'ア―ｂ イ―ｆ' },
        { choice: 5, text: 'ア―ｃ イ―ｅ' },
        { choice: 6, text: 'ア―ｃ イ―ｆ' },
        { choice: 7, text: 'ア―ｄ イ―ｅ' },
        { choice: 8, text: 'ア―ｄ イ―ｆ' }
      ],
      answer: [{ answer_number: 31, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｆ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_main-Q6-6',
      section: 6,
      question_no: 6,
      answer_numbers: [32],
      points: 3,
      question_text: `企業の農業参入に関する目的（表1: 建設業の経営多角化80%, 雇用対策72% / 食品製造業の本業商品の付加価値化・差別化59%）と課題（表2: 建設業の販路開拓83%, 農業技術習得63%）を踏まえた会話文中の空欄【ア】・【イ】に当てはまる記述の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｘ：表１の企業の参入の目的をみると，たとえば，【ア】。
Ｘ：表２の建設業で，参入時の課題としてあげている企業が最も多い項目（販路の開拓）については，地方自治体の支援策として【イ】が考えられるよ。

【ア】ａ 建設業において農業に参入する目的として最も多いのは，これまでとは異なる業種に事業を拡大することだね / ｂ 食品製造業において農業に参入する目的として最も多いのは，製造する食品の生産や流通の経路を把握できるようにすることだね
【イ】ｃ スマート農業を導入するための資金を援助すること / ｄ 参入企業と，生産した農作物を購入して利用する可能性のある他の企業とのマッチングの機会を設けること / ｅ 栽培技術を習得するための講習会を開催すること`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ａ イ―ｅ' },
        { choice: 4, text: 'ア―ｂ イ―ｃ' },
        { choice: 5, text: 'ア―ｂ イ―ｄ' },
        { choice: 6, text: 'ア―ｂ イ―ｅ' }
      ],
      answer: [{ answer_number: 32, correct_choice: 2, correct_option_text: 'ア―ａ イ―ｄ' }],
      explanation: null,
      correction_applied: true
    }
  ]
};

export const EXAM_2025_FOLLOWUP: ExamData = {
  metadata: {
    id: '2025_followup',
    year: 2025,
    session: '追・再試験',
    subject: '公共，政治・経済',
    totalQuestions: 32,
    totalPoints: 100,
    notes: ['新課程「公共，政治・経済」追・再試験（全32問・100点満点）']
  },
  questions: [
    {
      question_id: '2025_followup-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: '倫理・公共に関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ア 最大多数 イ 欲求' },
        { choice: 2, text: 'ア 最大多数 イ 尊厳' },
        { choice: 3, text: 'ア 無差別 イ 欲求' },
        { choice: 4, text: 'ア 無差別 イ 尊厳' }
      ],
      answer: [{ answer_number: 1, correct_choice: 2, correct_option_text: 'ア 最大多数 イ 尊厳' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: `人権保障に関する考え方ア〜ウとカードＸ〜Ｚ（Ｙ:「国王が，議会の同意なくして王の権威により法や法の執行を停止する権限があるかのようにふるまうことは違法である」＝権利章典）との組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

【考え方】
ア 権力者といえども法に従わなければならない
イ 市民の自由を守るために政治権力を分立する
ウ 人は生まれながらに人権を有している`,
      options: [
        { choice: 1, text: 'ア―Ｘ　イ―Ｙ　ウ―Ｚ' },
        { choice: 2, text: 'ア―Ｘ　イ―Ｚ　ウ―Ｙ' },
        { choice: 3, text: 'ア―Ｙ　イ―Ｘ　ウ―Ｚ' },
        { choice: 4, text: 'ア―Ｙ　イ―Ｚ　ウ―Ｘ' },
        { choice: 5, text: 'ア―Ｚ　イ―Ｘ　ウ―Ｙ' },
        { choice: 6, text: 'ア―Ｚ　イ―Ｙ　ウ―Ｘ' }
      ],
      answer: [{ answer_number: 2, correct_choice: 4, correct_option_text: 'ア―Ｙ　イ―Ｚ　ウ―Ｘ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `屋外広告物条例に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ａ：Ｐ市では，屋外広告物条例を作るために，条例案について広く住民の意見や情報を求める【ア】の手続きを始めたそうだよ。
Ａ：看板を撤去するとお客さんが減ってしまう心配があるな。広告を規制する条例案は，表現の自由や【イ】を侵害することになるんじゃないかな。
Ｂ：環境権そのものは，【ウ】や生存権を根拠に主張されているようだけど，景観利益の保護も含むかは議論があるね。`,
      options: [
        { choice: 1, text: 'ア パブリックコメント イ 労働基本権 ウ 幸福追求権' },
        { choice: 2, text: 'ア パブリックコメント イ 労働基本権 ウ 請願権' },
        { choice: 3, text: 'ア パブリックコメント イ 営業の自由 ウ 幸福追求権' },
        { choice: 4, text: 'ア パブリックコメント イ 営業の自由 ウ 請願権' },
        { choice: 5, text: 'ア マニフェスト イ 労働基本権 ウ 幸福追求権' },
        { choice: 6, text: 'ア マニフェスト イ 労働基本権 ウ 請願権' },
        { choice: 7, text: 'ア マニフェスト イ 営業の自由 ウ 幸福追求権' },
        { choice: 8, text: 'ア マニフェスト イ 営業の自由 ウ 請願権' }
      ],
      answer: [{ answer_number: 3, correct_choice: 3, correct_option_text: 'ア パブリックコメント イ 営業の自由 ウ 幸福追求権' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: `契約の解除等に関する会話文中の発言①・②の正誤の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

① 契約が成立すると，原則として，契約を一方的にやめることはできない。
② クーリング・オフは，一定の期間内であれば，事業者の同意を条件に契約を解除することができるという仕組みである。`,
      options: [
        { choice: 1, text: '①―正 ②―正' },
        { choice: 2, text: '①―正 ②―誤' },
        { choice: 3, text: '①―誤 ②―正' },
        { choice: 4, text: '①―誤 ②―誤' }
      ],
      answer: [{ answer_number: 4, correct_choice: 2, correct_option_text: '①―正 ②―誤' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [5],
      points: 3,
      question_text: `青年期の発達と社会化に関する記述ア〜ウが，記述Ｘ・Ｙのいずれに該当するかの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

【ア〜ウ】
ア 大人としての責任や社会的義務が，部分的に猶予される
イ 親や年長者の考え方や，社会的権威に反抗する
ウ 一定の儀式を経ることで，社会的な地位や社会的役割が与えられる

【Ｘ・Ｙ】
Ｘ 人の一生には，七五三や成人式のように，人生の節目に行われる行事がある
Ｙ 人の一生には，自分自身をよく知り，独自の価値観や人生観を体得し，精神的な自立を実現する時期がある`,
      options: [
        { choice: 1, text: 'Ｘ ― アとイ Ｙ―ウ' },
        { choice: 2, text: 'Ｘ ― アとウ Ｙ―イ' },
        { choice: 3, text: 'Ｘ―ア Ｙ ― イとウ' },
        { choice: 4, text: 'Ｘ ― イとウ Ｙ―ア' },
        { choice: 5, text: 'Ｘ―イ Ｙ ― アとウ' },
        { choice: 6, text: 'Ｘ―ウ Ｙ ― アとイ' }
      ],
      answer: [{ answer_number: 5, correct_choice: 6, correct_option_text: 'Ｘ―ウ Ｙ ― アとイ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [6],
      points: 4,
      question_text: `国民負担率（対NI比: 国X 32.3%, 国Y 54.5%, 国Z 47.9%）と老後への準備状況（国ア: 預貯金54.6%, 個人年金24.0% / 国イ: 預貯金42.4%, 個人年金48.8% / 国ウ: 預貯金62.7%, 株式投信52.2%, 能力向上27.1%）のデータに基づき，Xに対応する国名と表2の記号の組合せとして最も適当なものを，後の①〜⑨のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'スウェーデン ア' },
        { choice: 2, text: 'スウェーデン イ' },
        { choice: 3, text: 'スウェーデン ウ' },
        { choice: 4, text: '日本 ア' },
        { choice: 5, text: '日本 イ' },
        { choice: 6, text: '日本 ウ' },
        { choice: 7, text: 'アメリカ ア' },
        { choice: 8, text: 'アメリカ イ' },
        { choice: 9, text: 'アメリカ ウ' }
      ],
      answer: [{ answer_number: 6, correct_choice: 9, correct_option_text: 'アメリカ ウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [7],
      points: 3,
      question_text: `年金制度の仕組みに関するメモ中の空欄【イ】〜【エ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

〇積立方式: 現役時に支払った保険料を財源として支給。持続的な物価上昇によって年金給付額の実質的価値が【ウ】することがある。
〇【イ】方式: その時々の現役世代が負担する保険料を財源として支給。少子高齢化に伴い給付水準を維持するためには，現役世代の保険料負担を【エ】必要がある。`,
      options: [
        { choice: 1, text: 'イ 賦課 ウ 減少 エ 減らす' },
        { choice: 2, text: 'イ 賦課 ウ 減少 エ 増やす' },
        { choice: 3, text: 'イ 賦課 ウ 増加 エ 減らす' },
        { choice: 4, text: 'イ 賦課 ウ 増加 エ 増やす' },
        { choice: 5, text: 'イ 積立 ウ 減少 エ 減らす' },
        { choice: 6, text: 'イ 積立 ウ 減少 エ 増やす' },
        { choice: 7, text: 'イ 積立 ウ 増加 エ 減らす' },
        { choice: 8, text: 'イ 積立 ウ 増加 エ 増やす' }
      ],
      answer: [{ answer_number: 7, correct_choice: 2, correct_option_text: 'イ 賦課 ウ 減少 エ 増やす' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [8],
      points: 3,
      question_text: `社会保障に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｃ：貧困などに陥った際に生じる問題を防ぐ仕組みや制度である【ア】の機能が注目される。
Ａ：社会保険のなかでも，事業主のみが負担する【イ】の意義にも気付かされた。
Ｂ：若い世代が主体的に社会に参画する方法として，【ウ】があげられるね。阪神・淡路大震災後に大きく進展したことから，１９９５年が日本における【ウ】の「元年」と言われた。`,
      options: [
        { choice: 1, text: 'ア ディーセント・ワーク イ 雇用保険 ウ 公共サービス' },
        { choice: 2, text: 'ア ディーセント・ワーク イ 雇用保険 ウ ボランティア' },
        { choice: 3, text: 'ア ディーセント・ワーク イ 労災保険 ウ 公共サービス' },
        { choice: 4, text: 'ア ディーセント・ワーク イ 労災保険 ウ ボランティア' },
        { choice: 5, text: 'ア セーフティネット イ 雇用保険 ウ 公共サービス' },
        { choice: 6, text: 'ア セーフティネット イ 雇用保険 ウ ボランティア' },
        { choice: 7, text: 'ア セーフティネット イ 労災保険 ウ 公共サービス' },
        { choice: 8, text: 'ア セーフティネット イ 労災保険 ウ ボランティア' }
      ],
      answer: [{ answer_number: 8, correct_choice: 8, correct_option_text: 'ア セーフティネット イ 労災保険 ウ ボランティア' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [9],
      points: 3,
      question_text: `刑事手続の基本原則に関する会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：犯罪の内容と刑罰をあらかじめ法律で定める【ア】は，国民が刑罰を科せられる危険を事前に予測できるようにしている。
Ｙ：日本国憲法では，行為の後に制定された法律でその行為が犯罪とされ刑罰が科せられないようにするために【イ】が定められているよ。

【ア】ａ 罪刑法定主義 / ｂ 過失責任主義
【イ】ｃ 遡及処罰の禁止 / ｄ 残虐な刑罰の禁止`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 9, correct_choice: 1, correct_option_text: 'ア―ａ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [10],
      points: 3,
      question_text: `全国民の代表と命令委任の禁止に関する会話文中の空欄【ア】・【イ】の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：代表者の選出母体からの独立性を強調する命令委任の禁止の考えに照らしてみれば，今の日本では【ア】ことがよく理解できるね。
Ｙ：国会議員の特権のうち，【イ】は，議院の承認があるときなど一定の場合を除いて，原則として会期中にのみ認められるんだね。

【ア】ａ 議院による所属議員の除名が認められている / ｂ 有権者による国会議員の解職請求が制度化されていない
【イ】ｃ 不逮捕特権 / ｄ 免責特権`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 10, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [11],
      points: 3,
      question_text: '日本国憲法における司法権の独立に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '日本国憲法は，職務上の義務に著しく違反したか，職務の内外を問わず裁判官としての威信を著しく損なう非行を行った裁判官については，内閣に罷免権を付与している。' },
        { choice: 2, text: '日本国憲法は，裁判官は憲法と法律にのみ拘束されると規定し，裁判官の職権の独立を保障している。' },
        { choice: 3, text: '日本国憲法は，行政機関が終審として裁判を行うことを認めていないが，例外として，市場の独占や寡占等に関する訴訟については公正取引委員会が終審となることを認めている。' },
        { choice: 4, text: '日本国憲法は，最高裁判所の裁判官の任命について，内閣に任命権を認めているが，国会の同意を必要としている。' }
      ],
      answer: [{ answer_number: 11, correct_choice: 2, correct_option_text: '日本国憲法は，裁判官は憲法と法律にのみ拘束されると規定し，裁判官の 職権の独立を保障している。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [12],
      points: 3,
      question_text: `国家観と経済思想に関するメモ中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

２０世紀になると先進資本主義諸国では政府が積極的に市場介入を行い，経済政策の実施と社会保障体制の整備により【ア】が形成された。
１９７０年代後半から自由な経済活動を重視し，政府の市場介入の縮小を主張する【イ】が台頭した。【イ】は公企業の民営化や規制緩和を導く理念とされ，その背景にあるのが市場メカニズムに対する【ウ】である。`,
      options: [
        { choice: 1, text: 'ア 夜警国家 イ 修正資本主義 ウ 批判' },
        { choice: 2, text: 'ア 夜警国家 イ 修正資本主義 ウ 信頼' },
        { choice: 3, text: 'ア 夜警国家 イ 新自由主義 ウ 批判' },
        { choice: 4, text: 'ア 夜警国家 イ 新自由主義 ウ 信頼' },
        { choice: 5, text: 'ア 福祉国家 イ 修正資本主義 ウ 批判' },
        { choice: 6, text: 'ア 福祉国家 イ 修正資本主義 ウ 信頼' },
        { choice: 7, text: 'ア 福祉国家 イ 新自由主義 ウ 批判' },
        { choice: 8, text: 'ア 福祉国家 イ 新自由主義 ウ 信頼' }
      ],
      answer: [{ answer_number: 12, correct_choice: 8, correct_option_text: 'ア 福祉国家 イ 新自由主義 ウ 信頼' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [13],
      points: 3,
      question_text: `税制の原則に関する会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｘ：課税が経済活動にできるだけ影響しないようにする【ア】の原則が気になったよ。
Ｘ：ある企業が汚染物質を排出して損失を与えている場合，その損失の費用を考慮しないで生産活動を行うと，生産量は社会全体として望ましい生産量よりも【イ】なるよ。環境税の導入は【ア】の原則には反するけれど，社会的に望ましい方向へ導くことができるね。

【ア】公平 / 中立 / 簡素
【イ】多く / 少なく`,
      options: [
        { choice: 1, text: 'ア 公平 イ 多く' },
        { choice: 2, text: 'ア 公平 イ 少なく' },
        { choice: 3, text: 'ア 中立 イ 多く' },
        { choice: 4, text: 'ア 中立 イ 少なく' },
        { choice: 5, text: 'ア 簡素 イ 多く' },
        { choice: 6, text: 'ア 簡素 イ 少なく' }
      ],
      answer: [{ answer_number: 13, correct_choice: 3, correct_option_text: 'ア 中立 イ 多く' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q3-6',
      section: 3,
      question_no: 6,
      answer_numbers: [14],
      points: 4,
      question_text: `日本のジニ係数の推移（当初所得ジニ係数は2002年0.498→2021年0.570に上昇，再分配後ジニ係数は2002年0.381→2021年0.381と一定）に関する会話文中の空欄【ア】・【イ】の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：当初所得と再分配所得のジニ係数をみると，２００２年よりも２０２１年の方が再分配効果は【ア】ことがわかるね。
Ｙ：所得格差を小さくするために所得課税の税率構造を変えるとしたら，最高税率を【イ】と，再分配効果は高くなるね。

【ア】大きい / 小さい
【イ】引き上げる / 引き下げる`,
      options: [
        { choice: 1, text: 'ア 大きい イ 引き上げる' },
        { choice: 2, text: 'ア 大きい イ 引き下げる' },
        { choice: 3, text: 'ア 小さい イ 引き上げる' },
        { choice: 4, text: 'ア 小さい イ 引き下げる' }
      ],
      answer: [{ answer_number: 14, correct_choice: 1, correct_option_text: 'ア 大きい イ 引き上げる' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [15],
      points: 3,
      question_text: `フィンテックと通貨に関する会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：ブロックチェーンによって改ざんを防いで取引する【ア】が話題になっているよ。暗号資産とも呼ばれているね。
Ｘ：日本銀行券の場合は，法定通貨として【イ】があり，金融政策を通じてその価値の安定化が図られているよ。`,
      options: [
        { choice: 1, text: 'ア 仮想通貨 イ 発行できる量の上限' },
        { choice: 2, text: 'ア 仮想通貨 イ 強制的な通用力' },
        { choice: 3, text: 'ア 現金通貨 イ 発行できる量の上限' },
        { choice: 4, text: 'ア 現金通貨 イ 強制的な通用力' }
      ],
      answer: [{ answer_number: 15, correct_choice: 2, correct_option_text: 'ア 仮想通貨 イ 強制的な通用力' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [16],
      points: 3,
      question_text: '企業が銀行から３，０００万円の資金を借り入れて設備投資を行った場合，貸借対照表（バランスシート）のア（資産），イ（負債），ウ（純資産）のどの欄に３，０００万円を書き加えればよいか。当てはまるものをすべて選び，その組合せとして正しいものを，後の①〜⑦のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 16, correct_choice: 4, correct_option_text: 'アとイ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [17],
      points: 3,
      question_text: `家計の資産運用に関する会話文中の空欄【ア】・【イ】に当てはまる記述と金額の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｊ：日本では，市中銀行への預金は【ア】から，投資に比べてリスクが小さいね。
Ｊ：発行時利率年１．２％・満期１年後の額面100万円の債券の場合，【イ】で購入すれば，１年後には１０％の利回り（受取額計101.2万円）が得られるよね。

【ア】ａ 貸金業法によって上限金利が定められている / ｂ 預金保険制度によって１，０００万円までの預金元本とその利息が保証されている
【イ】ｃ ９２万円 / ｄ １０８万円`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 17, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [18],
      points: 3,
      question_text: `路線バスの人手不足対策に関する会話文中の空欄【ア】・【イ】に当てはまる記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：たとえば，【ア】ことで運転経験が少ない人の運転技能の向上を支援することは，新規就業者数の増加に効果があると思うよ。
Ｘ：人手不足が続く場合には，既存のバス路線網を廃止しないために【イ】ことが必要なのではないかな。

【ア】ａ バスの運行状況を利用客がスマホで確認できるようにする / ｂ 急発進等を検知するセンサーをバスに取り付け，運転者にAIがアドバイスする
【イ】ｃ 乗客数が最も多い時間帯を増便する / ｄ 乗客数が一定以下の時間帯を減便する`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 18, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [19],
      points: 3,
      question_text: '現在の日本の地方公共団体に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '地方公共団体の活動を監視するために，一部の地方公共団体がオンブズパーソン（オンブズマン）制度を設置している。' },
        { choice: 2, text: '地方公共団体の事務処理の効率性を高めるために，一部の地方公共団体が共同で道州制を導入している。' },
        { choice: 3, text: '住民自治の原則を実現するために，地方公共団体の議会は，条例に基づいて行われた住民投票の結果に法的に拘束される。' },
        { choice: 4, text: '法律との整合性を図るために，地方公共団体の条例は，その地方公共団体の議会での議決ののち総務大臣の認可を経て制定される。' }
      ],
      answer: [{ answer_number: 19, correct_choice: 1, correct_option_text: '地方公共団体の活動を監視するために，一部の地方公共団体がオンブズ パーソン（オンブズマン）制度を設置している。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q4-6',
      section: 4,
      question_no: 6,
      answer_numbers: [20],
      points: 4,
      question_text: '現在の日本における行政機関に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '内閣府は，各省庁より上位の位置から省庁間の政策に関する総合調整を行う機関である。' },
        { choice: 2, text: '国家公安委員会は，政治的中立性や公平性の観点から警察行政を統括し調整する独立行政法人である。' },
        { choice: 3, text: '各省庁の幹部職員人事に関する一元的な管理を行うことを目的として，人事院が設置されている。' },
        { choice: 4, text: '各省庁の国務大臣による企画立案を補佐することを目的として，政府委員制度が設置されている。' }
      ],
      answer: [{ answer_number: 20, correct_choice: 1, correct_option_text: '内閣府は，各省庁より上位の位置から省庁間の政策に関する総合調整を行 う機関である。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-1',
      section: 5,
      question_no: 1,
      answer_numbers: [21],
      points: 3,
      question_text: `日本の人口および労働力人口の推移図に関する次の記述ア〜ウのうち，正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 総人口が減少していても，６５歳以上人口が増加している期間がある。
イ ２０００年と２０２０年の労働力人口を比べると，６５歳以上の増加分が６５歳未満の減少分を上回っている。
ウ 生産年齢人口が減少している期間にも，６５歳未満の労働力人口は増加した期間がある。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 21, correct_choice: 7, correct_option_text: 'アとイとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-2',
      section: 5,
      question_no: 2,
      answer_numbers: [22],
      points: 3,
      question_text: `女性の就業率と働き方に関する会話文中の空欄【ア】・【イ】に当てはまる記述の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｘ：２０１７年にはM字カーブがある程度解消しているようにみえるけど，【ア】。
Ｙ：だけど，非正規就業を選択した理由をみると，【イ】ことも重要だと思うな。

【ア】ａ １９８７年に比べて上昇しているのは非正規での就業率で，正規での就業率は低下しているね / ｂ 正規での就業率は２０歳代後半で最も高くなり，それ以降は年齢階級が上がるに従って低下しているね
【イ】ｃ 「正規の仕事がないから」が多いから，企業が正規雇用を拡大する / ｄ 「自分の都合のよい時間に働きたいから」が多いから，企業が「限定正社員制度」の導入を進める / ｅ 「高度プロフェッショナル制度」での雇用を拡大する`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ａ イ―ｅ' },
        { choice: 4, text: 'ア―ｂ イ―ｃ' },
        { choice: 5, text: 'ア―ｂ イ―ｄ' },
        { choice: 6, text: 'ア―ｂ イ―ｅ' }
      ],
      answer: [{ answer_number: 22, correct_choice: 5, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-3',
      section: 5,
      question_no: 3,
      answer_numbers: [23],
      points: 3,
      question_text: `日本の政策分野別社会支出の内訳（【ア】: 医療保険や介護保険など約10%, 【イ】: 高齢年金など約10%, 【ウ】: 児童手当など約2〜3%, 【エ】: 失業・雇用調整助成金など約0.5%）において，空欄【ア】・【ウ】に当てはまるものの組合せとして正しいものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'ア 保健 ウ 家族' },
        { choice: 2, text: 'ア 保健 ウ 高齢' },
        { choice: 3, text: 'ア 失業・積極的労働市場政策 ウ 家族' },
        { choice: 4, text: 'ア 失業・積極的労働市場政策 ウ 高齢' }
      ],
      answer: [{ answer_number: 23, correct_choice: 1, correct_option_text: 'ア 保健 ウ 家族' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-4',
      section: 5,
      question_no: 4,
      answer_numbers: [24],
      points: 3,
      question_text: `夫婦同氏制をめぐる２０１５年最高裁判所判決についての会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：夫婦同氏制をめぐる争いの背景には，【ア】が増えて，氏の変更に伴う不利益に直面する人々の存在があるね。
Ｙ：婚姻により氏を変更した場合，その婚姻中は【イ】の識別に困難が生じやすくなるね。`,
      options: [
        { choice: 1, text: 'ア 婚姻後も就労する女性 イ 変更前の人物と同一人物であるか' },
        { choice: 2, text: 'ア 婚姻後も就労する女性 イ 自身の婚内子（嫡出子）との親子関係' },
        { choice: 3, text: 'ア 育児休業を取得する男性 イ 変更前の人物と同一人物であるか' },
        { choice: 4, text: 'ア 育児休業を取得する男性 イ 自身の婚内子（嫡出子）との親子関係' }
      ],
      answer: [{ answer_number: 24, correct_choice: 1, correct_option_text: 'ア 婚姻後も就労する女性 イ 変更前の人物と同一人物であるか' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-5',
      section: 5,
      question_no: 5,
      answer_numbers: [25],
      points: 3,
      question_text: '日本国憲法が保障する生存権に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '朝日訴訟において，最高裁判所は，当時の生活保護基準は最低限度の生活水準を維持できないため憲法違反であると判断した。' },
        { choice: 2, text: '堀木訴訟において，最高裁判所は，生存権保障のための立法について国会の裁量の余地はないと判断した。' },
        { choice: 3, text: '日本国憲法は，健康で文化的な最低限度の生活を営む権利を保障しており，この権利を具体化するものとして生活保護法が定められている。' },
        { choice: 4, text: '日本国憲法は，健康で文化的な最低限度の生活を営む権利を保障するため，この権利を具体化するものとして生活保護基準を条文で定めている。' }
      ],
      answer: [{ answer_number: 25, correct_choice: 3, correct_option_text: '日本国憲法は，健康で文化的な最低限度の生活を営む権利を保障してお り，この権利を具体化するものとして生活保護法が定められている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q5-6',
      section: 5,
      question_no: 6,
      answer_numbers: [26],
      points: 3,
      question_text: `選挙制度に関する会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：公職選挙法で認められる選挙運動の範囲として，たとえば，現在は全面的に禁止されている【ア】の解禁が考えられるね。
Ｘ：長期の旅行や病院に入院している人が，登録地以外の場所で投票することのできる【イ】があるね。`,
      options: [
        { choice: 1, text: 'ア 戸別訪問による選挙運動 イ 不在者投票制度' },
        { choice: 2, text: 'ア 戸別訪問による選挙運動 イ 期日前投票制度' },
        { choice: 3, text: 'ア インターネットを利用した選挙運動 イ 不在者投票制度' },
        { choice: 4, text: 'ア インターネットを利用した選挙運動 イ 期日前投票制度' }
      ],
      answer: [{ answer_number: 26, correct_choice: 1, correct_option_text: 'ア 戸別訪問による選挙運動 イ 不在者投票制度' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-1',
      section: 6,
      question_no: 1,
      answer_numbers: [27],
      points: 3,
      question_text: '自国通貨の為替相場が米ドルに対して下落（自国通貨安・ドル高）したときに起きることとして最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '自国企業が保有していた他国の米ドル建ての国債が償還されて，米ドルで受け取った元本と利子を自国通貨に換算すると，その受取額が減少する。' },
        { choice: 2, text: '自国企業が生産拠点をアメリカに設立する場合，自国通貨でみると，より多くの投資額が必要となる。' },
        { choice: 3, text: '外国企業が著作権をもつコンテンツを自国企業が利用して，その利用料を米ドルで支払っている場合，この支払額が自国通貨でみると減少する。' },
        { choice: 4, text: '米ドル建てで自動車を輸入している自国企業が，自国通貨建てでの国内の販売価格を据え置くと，自動車１台当たりの売上げに伴う利益が増大する。' }
      ],
      answer: [{ answer_number: 27, correct_choice: 2, correct_option_text: '自国企業が生産拠点をアメリカに設立する場合，自国通貨でみると，より 多くの投資額が必要となる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-2',
      section: 6,
      question_no: 2,
      answer_numbers: [28],
      points: 3,
      question_text: '安全保障のジレンマに関するメモ（自国の防衛目的の軍拡が相手国から攻撃的とみなされ軍拡競争に至るが，相互コミュニケーションと信頼醸成により協力可能）に基づいたとき，二国間で軍事的緊張が回避されうる場合の記述として最も適当なものを，後の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '一方の国が，攻撃ではなく防衛の意図をもって，迎撃ミサイルの配備数や配備地点を増やした。' },
        { choice: 2, text: '一方の国が，攻撃ではなく防衛の意図をもって，戦闘機を改修して速度と航続距離を向上させた。' },
        { choice: 3, text: '一方の国が他方の国に対し，軍事情報を相互提供する制度の創設を提案し，二国間の相互提供が開始された。' },
        { choice: 4, text: '一方の国が他方の国に対し，サイバーテロに備えて合同で実施してきた演習の打切りを通告し，二国間の演習が終了した。' }
      ],
      answer: [{ answer_number: 28, correct_choice: 3, correct_option_text: '一方の国が他方の国に対し，軍事情報を相互提供する制度の創設を提案 し，二国間の相互提供が開始された。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-3',
      section: 6,
      question_no: 3,
      answer_numbers: [29],
      points: 4,
      question_text: `日本の国際収支（Ａ: 第一次所得収支で黒字拡大, Ｂ: 貿易収支で2011〜14年に赤字拡大, Ｃ: サービス収支）に関するメモ中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

〇Ａの２０１２年から２０１５年までの時期の変化は，【ア】が増加してこの金額が計上されたことを反映している。
〇Ｂの２０１１年から２０１４年までの時期の変化は，【イ】が増加してこの金額が計上されたことを反映している。

【ア】ａ 日本企業による対外直接投資額 / ｂ 日本企業による対外直接投資の投資収益
【イ】ｃ エネルギー資源の輸入額 / ｄ 海外の証券に対する投資額`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 29, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-4',
      section: 6,
      question_no: 4,
      answer_numbers: [30],
      points: 3,
      question_text: `為替相場と通貨体制に関する出来事ｂ〜ｄを古いものから順に並べたものとして正しいものを，後の①〜⑥のうちから一つ選べ。

ａ 1929年世界恐慌により金本位制が停止
ｂ ブレトンウッズ体制（米ドルと金の交換保証，ドルペッグ固定相場制）
ｃ プラザ合意（1985年のドル高是正合意）
ｄ スミソニアン体制の崩壊と変動為替相場制への移行（1973年）
ｅ 欧州共通通貨ユーロの導入（1999年）`,
      options: [
        { choice: 1, text: 'ｂ→ｃ→ｄ' },
        { choice: 2, text: 'ｂ→ｄ→ｃ' },
        { choice: 3, text: 'ｃ→ｂ→ｄ' },
        { choice: 4, text: 'ｃ→ｄ→ｂ' },
        { choice: 5, text: 'ｄ→ｂ→ｃ' },
        { choice: 6, text: 'ｄ→ｃ→ｂ' }
      ],
      answer: [{ answer_number: 30, correct_choice: 2, correct_option_text: 'ｂ→ｄ→ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-5',
      section: 6,
      question_no: 5,
      answer_numbers: [31],
      points: 3,
      question_text: '「グローバル・ヘルス」における医薬品アクセス問題の解決策として誤っているものを，後の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '発展途上国に対して，医薬品に関する知的財産権の厳格な運用を義務づける。' },
        { choice: 2, text: '発展途上国に対して，医薬品を共同で購入したものを優先的に供給する仕組みを作る。' },
        { choice: 3, text: '発展途上国の製薬企業に特許の切れた医薬品を大量生産する技術の導入を促して，より多くの発展途上国の人々が医薬品を入手できるようにする。' },
        { choice: 4, text: '先進国の製薬企業の特許権を管理して，発展途上国の製薬企業が医薬品を安価に製造・販売できるようにする。' }
      ],
      answer: [{ answer_number: 31, correct_choice: 1, correct_option_text: '発展途上国に対して，医薬品に関する知的財産権の厳格な運用を義務づけ る。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2025_followup-Q6-6',
      section: 6,
      question_no: 6,
      answer_numbers: [32],
      points: 3,
      question_text: `教育格差とESG投資に関する会話文中の空欄【ア】に当てはまる記述として最も適当なものを，後の①〜④のうちから一つ選べ。

Ｚ：授業で学んだ ESG 投資も解決につながるかもしれない。たとえば【ア】なんか，当てはまるんじゃないかな。`,
      options: [
        { choice: 1, text: '人々が発展途上国の教育改善に携わる企業の株式を積極的に購入すること' },
        { choice: 2, text: '先進国が無償資金援助を実施してより多くの学校を建設すること' },
        { choice: 3, text: '非営利組織が発展途上国の未就学の人々に教育を提供して社会的包摂を促進すること' },
        { choice: 4, text: '大学が研究を進めてより高い性能の教育機器を開発すること' }
      ],
      answer: [{ answer_number: 32, correct_choice: 1, correct_option_text: '人々が発展途上国の教育改善に携わる企業の株式を積極的に購入すること' }],
      explanation: null,
      correction_applied: false
    }
  ]
};
