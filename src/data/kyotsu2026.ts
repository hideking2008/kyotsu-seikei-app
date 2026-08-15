import { ExamData } from '../types';

export const EXAM_2026_MAIN: ExamData = {
  metadata: {
    id: '2026_main',
    year: 2026,
    session: '本試験',
    subject: '公共，政治・経済',
    totalQuestions: 32,
    totalPoints: 100,
    notes: [
      '新課程「公共，政治・経済」本試験（全32問・解答番号34個・100点満点）',
      '第3問問1（解答番号9・10）および第4問問6（解答番号21・22）は立場選択に応じた連動型配点'
    ]
  },
  questions: [
    {
      question_id: '2026_main-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: `生徒Ａのメモ中のａ・ｂのうち「公助」に該当するものを，生徒Ｂのメモ中のｃ・ｄのうちロールズの「公正としての正義」における「格差原理」に該当するものを選んだとき，その組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

【生徒Ａのメモ】
ａ 甚大な自然災害を被った地域で，地方自治体の担当部署が心のケアの相談窓口を開設した。
ｂ 甚大な自然災害の直後，地方自治体による救援物資が届くまでの間，住民が食料を相互に持ち寄って飢えをしのいだ。

【生徒Ｂのメモ】
ｃ 個々人によって抱えている問題は異なる。問題を抱える人々のなかでも，最大多数の人々が利益を受ける社会保障制度を優先的に構築するべきである。
ｄ 所得の再分配が結果として不平等を生み出してしまうとしても，再分配の際に，最も不遇な立場の人々の状況が改善される社会保障制度を構築するべきである。`,
      options: [
        { choice: 1, text: 'ａとｃ' },
        { choice: 2, text: 'ａとｄ' },
        { choice: 3, text: 'ｂとｃ' },
        { choice: 4, text: 'ｂとｄ' }
      ],
      answer: [{ answer_number: 1, correct_choice: 2, correct_option_text: 'ａとｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: `経済活動と社会保障に関する復習ノート中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

経済成長とは，実質 GDP の値が大きくなり，一年間に国内で生み出された【ア】の合計が増加することをいう。
一国の経済成長率を高めるためには，企業による【イ】が重要である。
経済格差に対して累進課税制度が設けられており，その代表的な税として【ウ】がある。`,
      options: [
        { choice: 1, text: 'ア 社会資本 イ イノベーション ウ 消費税' },
        { choice: 2, text: 'ア 社会資本 イ イノベーション ウ 所得税' },
        { choice: 3, text: 'ア 社会資本 イ セーフガード ウ 消費税' },
        { choice: 4, text: 'ア 社会資本 イ セーフガード ウ 所得税' },
        { choice: 5, text: 'ア 付加価値 イ イノベーション ウ 消費税' },
        { choice: 6, text: 'ア 付加価値 イ イノベーション ウ 所得税' },
        { choice: 7, text: 'ア 付加価値 イ セーフガード ウ 消費税' },
        { choice: 8, text: 'ア 付加価値 イ セーフガード ウ 所得税' }
      ],
      answer: [{ answer_number: 2, correct_choice: 6, correct_option_text: 'ア 付加価値 イ イノベーション ウ 所得税' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `社会保障財源の対 GDP 比（フランス: 一般政府16.2%, 事業主13.2%, 被保険者5.7%, 合計35.1% / ドイツ: 一般政府11.6%, 事業主11.7%, 被保険者10.0%, 合計33.3% / スウェーデン: 一般政府16.2%, 事業主11.4%, 被保険者2.8%, 合計30.4% / 日本: 一般政府11.2%, 事業主7.0%, 被保険者7.2%, 合計25.4%）の表から読み取れることについて述べた記述として最も適当なものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'フランスとドイツについて，「事業主拠出」と「被保険者拠出」を合わせた数値は，どちらの国においても「一般政府拠出」の数値よりも低い。' },
        { choice: 2, text: 'スウェーデンについて，「合計」に対する 「一般政府拠出」 の割合は，５０％ を超えている。' },
        { choice: 3, text: '日本について，「合計」 に対する「被保険者拠出」の割合は，４０％ を超えている。' },
        { choice: 4, text: 'すべての国について， 「事業主拠出」 と「被保険者拠出」 の数値を比較すると，「事業主拠出」の数値の方が高い。' }
      ],
      answer: [{ answer_number: 3, correct_choice: 2, correct_option_text: 'スウェーデンについて，「合計」に対する 「一般政府拠出」 の割合は，５０％ を超えている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: `社会保障制度における再分配の考え方Ｘ（すべての人に対して無条件に給付・サービス提供）および考え方Ｙ（一定の要件を満たす人に対して給付・サービス提供）に関する記述ア・イの正誤の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

ア 考え方Ｘは，社会保険に区分される国民健康保険にみることができる。
イ 考え方Ｙは，公的扶助に区分される生活保護制度にみることができる。`,
      options: [
        { choice: 1, text: 'ア―正 イ―正' },
        { choice: 2, text: 'ア―正 イ―誤' },
        { choice: 3, text: 'ア―誤 イ―正' },
        { choice: 4, text: 'ア―誤 イ―誤' }
      ],
      answer: [{ answer_number: 4, correct_choice: 3, correct_option_text: 'ア―誤 イ―正' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [5],
      points: 3,
      question_text: `文化の捉え方についての会話文中の空欄【ア】・【イ】に入るものの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｂ：自分たちの文化が優れていると考える心情はわからなくはないけれど，その結果【ア】に陥らないよう注意したいね。
Ｂ：私たちが何らかの文化遺産制度による認定や登録をとりわけ重視する姿勢をとるとき，それは【イ】ことになるのではないかな。

【ア】ａ 多文化主義 / ｂ エスノセントリズム / ｃ 文化相対主義
【イ】ｄ 特定の基準による評価を受け入れずに文化に独自の価値づけをしている / ｅ 特定の基準がもつ権威に依拠して文化を評価し序列づけている`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｄ' },
        { choice: 2, text: 'ア―ａ イ―ｅ' },
        { choice: 3, text: 'ア―ｂ イ―ｄ' },
        { choice: 4, text: 'ア―ｂ イ―ｅ' },
        { choice: 5, text: 'ア―ｃ イ―ｄ' },
        { choice: 6, text: 'ア―ｃ イ―ｅ' }
      ],
      answer: [{ answer_number: 5, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｅ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [6],
      points: 4,
      question_text: `日本で暮らす在留外国人の動向に関する資料１（総数: 2014年212.2万人→2024年376.9万人 / ベトナム: 2014年10.0万人→2024年63.4万人で＋53.4万人と最多増加 / インドネシア: 2019年6.7万人→2024年20.0万人で約3倍増）および資料２（ベトナムの在留資格は「技能実習・特定技能」が過半数）を正しく読み取った意見ア〜ウの組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 資料１を見ると２０２４年末時点で中国・ベトナム・韓国の３か国合計は総数の半数を超える。資料２を見ると在留資格別割合では「留学」が最も高い。
イ 資料１を見ると２０１４年末と２０２４年末を比較したときに人数が最も増加したのはベトナムだ。資料２を見るとベトナムの在留資格別割合では「技能実習・特定技能」が最も高い。
ウ 資料１を見ると２０１９年末と２０２４年末を比較したときに増加率が最も高いのはインドネシアだ。資料２を見るとインドネシアは「永住者・定住者」が最も高い。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 6, correct_choice: 2, correct_option_text: 'イ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [7],
      points: 3,
      question_text: '日本における政教分離をめぐる最高裁判所の判例に関する記述として適当でないものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '津地鎮祭訴訟の最高裁判決（１９７７年）では，市が主催した地鎮祭に公金を支出したことについて，違憲とされた。' },
        { choice: 2, text: '愛媛玉ぐし料訴訟の最高裁判決（１９９７年）では，県が神社に対して玉ぐし料などを公金から支出したことについて，違憲とされた。' },
        { choice: 3, text: '空知太神社訴訟の最高裁判決（２０１０年）では，地域の神社の敷地として市が公有地を無償で使用させていることについて，違憲とされた。' },
        { choice: 4, text: '那覇孔子廟訴訟の最高裁判決（２０２１年）では，孔子を祀る施設の敷地として市が公有地を無償で使用させていることについて，違憲とされた。' }
      ],
      answer: [{ answer_number: 7, correct_choice: 1, correct_option_text: '津地鎮祭訴訟の最高裁判決（１９７７年）では，市が主催した地鎮祭に公金を 支出したことについて，違憲とされた。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [8],
      points: 3,
      question_text: `宗教の捉え方（捉え方Ｘ: 信仰対象・実践・集団など外面的要素 / 捉え方Ｙ: 人生に究極的な意味や新たな視点への転換をもたらす内面的機能）に関する会話文中の空欄【ア】・【イ】に入るものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｂ：毎年同じ時期に行われる初詣や節分，お彼岸などの【ア】はどうなのかな。
Ｃ：マンガや映画に影響を受けて本人の生き方が大きく変化したのなら，ノートの二つの捉え方のうちでは【イ】に通じるところがあると思うよ。`,
      options: [
        { choice: 1, text: 'ア 通過儀礼 イ 捉え方Ｘ' },
        { choice: 2, text: 'ア 通過儀礼 イ 捉え方Ｙ' },
        { choice: 3, text: 'ア 年中行事 イ 捉え方Ｘ' },
        { choice: 4, text: 'ア 年中行事 イ 捉え方Ｙ' }
      ],
      answer: [{ answer_number: 8, correct_choice: 4, correct_option_text: 'ア 年中行事 イ 捉え方Ｙ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [9, 10],
      points: 4,
      question_text: `貿易政策に関する問（A国: 高関税賦課・輸入数量制限 / B国: 高関税削減撤廃・輸入数量制限撤廃）。
(1) あなたが関心をもつ方を選べ（A国の政策なら①，B国の政策なら②）。【解答番号９】
(2) 選択した国の政策のねらいが含まれている記述をア〜エから２つ選んだ組合せを①〜⑥から選べ。【解答番号１０】

ア 自国の消費者が国産品よりも安価な輸入品を利用できる機会を広げる。（B国のねらい）
イ 他国と比べて自国ではまだ発展していないが，今後の発展が期待される分野を育成する。（A国のねらい）
ウ 相対的に生産性が低い自国の産業から，生産性が高い産業へ労働力や資本が移動するのを促す。（B国のねらい）
エ 自国で生産された農産物が消費に占める割合を高めて，農業生産の維持と拡大を図る。（A国のねらい）`,
      options: [
        { choice: 1, text: 'アとイ' },
        { choice: 2, text: 'アとウ' },
        { choice: 3, text: 'アとエ' },
        { choice: 4, text: 'イとウ' },
        { choice: 5, text: 'イとエ' },
        { choice: 6, text: 'ウとエ' }
      ],
      answer: [
        { answer_number: 9, correct_choice: '1 or 2' },
        { answer_number: 10, correct_choice: '5 if answer 9=1; 2 if answer 9=2', correct_option_text: 'A国選択(1)時は「イとエ(5)」 / B国選択(2)時は「アとウ(2)」' }
      ],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [11],
      points: 3,
      question_text: '国際貿易協定やルールについての記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '協定を締結している国どうしの貿易では関税を撤廃し，協定を締結していない国との貿易では共通の関税を設定するルールは，EU（欧州連合）の加盟国間で導入されている。' },
        { choice: 2, text: '発展途上国からの輸入に対して先進国が一方的に優遇措置を適用するルールは，UNCTAD（国連貿易開発会議）での提唱をうけて，各国で導入されている。' },
        { choice: 3, text: '協定を締結しているある国からの輸入に対して関税を引き下げた場合，協定を締結している他の国からの輸入にも同じ条件を適用することは，WTO（世界貿易機関）の原則の一つになっている。' },
        { choice: 4, text: '国内に輸入された外国の産品に対して，同種の自国の産品よりも不利となるような取扱いを国内法によって行わないことは，WTO の原則の一つになっている。' }
      ],
      answer: [{ answer_number: 11, correct_choice: 3, correct_option_text: '協定を締結しているある国からの輸入に対して関税を引き下げた場合，協 定を締結している他の国からの輸入にも同じ条件を適用することは，WTO （世界貿易機関）の原則の一つになっている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [12],
      points: 3,
      question_text: `記述ア〜エのうち，世界のサービス貿易の動きを示しているものを二つ選び，その組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

ア インドで，ソフトウェア開発やコールセンター業務の外国企業からの受託が増大した。
イ 南米で EV（電気自動車）の充電池の生産に不可欠な資源の開発が進み，その資源の国際的な取引が拡大した。
ウ プラットフォーマーと呼ばれる巨大企業が，音楽や動画などをインターネットで配信し巨額の利益を得るようになった。
エ アメリカにある多国籍企業の本社が，国外の生産拠点で組み立てられた最終製品の輸入を増大させた。`,
      options: [
        { choice: 1, text: 'アとイ' },
        { choice: 2, text: 'アとウ' },
        { choice: 3, text: 'アとエ' },
        { choice: 4, text: 'イとウ' },
        { choice: 5, text: 'イとエ' },
        { choice: 6, text: 'ウとエ' }
      ],
      answer: [{ answer_number: 12, correct_choice: 2, correct_option_text: 'アとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [13],
      points: 3,
      question_text: '国連機関の仕組みと活動に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '安全保障理事会（安保理）は，常任理事国５か国と非常任理事国１０か国で構成され，非常任理事国は経済社会理事会が選挙する。' },
        { choice: 2, text: '人権理事会は，安保理とならぶ国連の主要機関として位置づけられ，各国の人権状況の改善に取り組んでいる。' },
        { choice: 3, text: '国際司法裁判所（ ICJ ）は，同裁判所の裁判を行う権限に対して，紛争当事国双方による同意があると認められる場合に，裁判を行うことができる。' },
        { choice: 4, text: '国連事務局は，安保理とならぶ国連の主要機関として位置づけられ，その長たる事務総長は，総会の勧告に基づいて安保理が任命する。' }
      ],
      answer: [{ answer_number: 13, correct_choice: 3, correct_option_text: '国際司法裁判所（ ICJ ）は，同裁判所の裁判を行う権限に対して，紛争当事 国双方による同意があると認められる場合に，裁判を行うことができる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [14],
      points: 3,
      question_text: `多国間条約（ア: WTO協定のネガティブ・コンセンサス, イ: 国際人権規約の履行状況報告・審査, ウ: 国連気候変動枠組条約のCOP設置）と運用上の特徴ａ〜ｃとの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

ａ 基本条約で共通目的を設定し，協議しながら具体的な義務を新たに定めていく
ｂ 専門家機関が各国の行動を定期評価し，規定を遵守しているか判断する
ｃ 全締約国が一致して反対しない限り，紛争解決手続が開始され判断も採択される`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｂ ウ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｃ ウ―ｂ' },
        { choice: 3, text: 'ア―ｂ イ―ａ ウ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｃ ウ―ａ' },
        { choice: 5, text: 'ア―ｃ イ―ａ ウ―ｂ' },
        { choice: 6, text: 'ア―ｃ イ―ｂ ウ―ａ' }
      ],
      answer: [{ answer_number: 14, correct_choice: 6, correct_option_text: 'ア―ｃ イ―ｂ ウ―ａ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q3-6',
      section: 3,
      question_no: 6,
      answer_numbers: [15],
      points: 3,
      question_text: `パレスチナ問題と国連総会の対応についての会話文中の空欄【ア】・【イ】に入るものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：安保理で拒否権が行使されて機能しなくなったから，総会は【ア】に基づいて審議を断続的に行ってきたんだよね。
Ｙ：総会がパレスチナにオブザーバー国家承認や加盟承認決議を採択してきたのは，解決にあたっては，【イ】和平合意を成立させる方向で行くべきという意思が示されているんじゃないかな。

【ア】ａ 国連平和維持活動を実施するための決議 / ｂ 「平和のための結集」決議
【イ】ｃ パレスチナに対してイスラエルという国家の下で一定の自治を認める / ｄ イスラエルとパレスチナが互いにそれぞれを独立国家として承認する`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 15, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [16],
      points: 3,
      question_text: `日本経済の動きに関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：実質経済成長率は，名目経済成長率から【ア】の変動の影響を除いたものだよね。
Ｘ：２００８年から２００９年にかけて実質経済成長率が大きく低下している主な原因としては，【イ】が考えられるよ。`,
      options: [
        { choice: 1, text: 'ア 物価 イ 消費税率の引上げ' },
        { choice: 2, text: 'ア 物価 イ 世界金融危機' },
        { choice: 3, text: 'ア 失業率 イ 消費税率の引上げ' },
        { choice: 4, text: 'ア 失業率 イ 世界金融危機' }
      ],
      answer: [{ answer_number: 16, correct_choice: 2, correct_option_text: 'ア 物価 イ 世界金融危機' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [17],
      points: 3,
      question_text: `日本版金融ビッグバンとアベノミクスに関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：日本版金融ビッグバンでは，独占禁止法で禁止されていた【ア】が解禁されたこともあって金融機関の再編が進んだよ。
Ｙ：アベノミクスには，大胆な金融緩和によって【イ】からの脱却を図ることで日本経済を活性化させるねらいがあったんだよ。`,
      options: [
        { choice: 1, text: 'ア 持株会社 イ デフレーション' },
        { choice: 2, text: 'ア 持株会社 イ スタグフレーション' },
        { choice: 3, text: 'ア 合同会社 イ デフレーション' },
        { choice: 4, text: 'ア 合同会社 イ スタグフレーション' }
      ],
      answer: [{ answer_number: 17, correct_choice: 1, correct_option_text: 'ア 持株会社 イ デフレーション' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [18],
      points: 3,
      question_text: `日本の投資部門項目別株式保有比率推移（【ア】: 1980年代30%超から現在約10%へ大幅低下, 【イ】: 1980年代数%から現在約30%へ大幅上昇）に関するメモ中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

【ア】の保有比率の動きは企業集団内における株式の持合いの【ウ】に向かう変化に対応し，【イ】の保有比率の動きは短期的な収益追求や株主意向の強い反映へとつながっている。`,
      options: [
        { choice: 1, text: 'ア 外国法人・外国人 イ 普通銀行 ウ 強化' },
        { choice: 2, text: 'ア 外国法人・外国人 イ 普通銀行 ウ 解消' },
        { choice: 3, text: 'ア 普通銀行 イ 外国法人・外国人 ウ 強化' },
        { choice: 4, text: 'ア 普通銀行 イ 外国法人・外国人 ウ 解消' }
      ],
      answer: [{ answer_number: 18, correct_choice: 4, correct_option_text: 'ア 普通銀行 イ 外国法人・外国人 ウ 解消' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [19],
      points: 3,
      question_text: `国会の議決ルールに関するメモ（衆議院465名: A党308, B党107, C党31, D党13, E党6 / 参議院248名: A党102, B党119, C党20, D党5, E党2）における日本の国会の議決に関する記述として最も適当なものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: '内閣総理大臣の指名において，各政党の議員が所属政党の候補者１名に投票した場合，内閣総理大臣は B 党から選出される。' },
        { choice: 2, text: 'A 党による単独政権が予算を提出する場合，B 党と C 党が反対すると，予算は成立しない。' },
        { choice: 3, text: 'A 党による単独政権に対して，A 党以外のすべての政党が共同で内閣不信任案を提出する場合，A 党が反対したとしても，内閣不信任案は否決されない。' },
        { choice: 4, text: 'A 党と C 党による連立政権が法律案を提出する場合，ほかの政党が反対したとしても，A 党と C 党の賛成で，最終的には法律案を可決することができる。' }
      ],
      answer: [{ answer_number: 19, correct_choice: 4, correct_option_text: 'A 党と C 党による連立政権が法律案を提出する場合，ほかの政党が反対 したとしても，A 党と C 党の賛成で，最終的には法律案を可決することが できる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [20],
      points: 3,
      question_text: '日本国憲法の下での経済的自由に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '日本国憲法が保障する職業選択の自由には，自ら選択した職業を実際に営む営業の自由も含まれている。' },
        { choice: 2, text: '最高裁判所は，既存の薬局から一定の距離内では新たな薬局開設を制限する薬事法の規定は職業選択の自由を侵害せず，合憲であると判断した。' },
        { choice: 3, text: '日本国憲法によれば，私有財産を公共のために用いるときには当該財産の所有者に対する補償がなくても収用することができる。' },
        { choice: 4, text: '最高裁判所は，共有林について分割請求権を制限する森林法の規定は財産権を侵害せず，合憲であると判断した。' }
      ],
      answer: [{ answer_number: 20, correct_choice: 1, correct_option_text: '日本国憲法が保障する職業選択の自由には，自ら選択した職業を実際に営 む営業の自由も含まれている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q4-6',
      section: 4,
      question_no: 6,
      answer_numbers: [21, 22],
      points: 4,
      question_text: `違憲審査権の行使に関する立場（立場 a: 積極的に行使すべき / 立場 b: 慎重に行使すべき）に関する問。
(1) 支持する立場を選べ（立場 a なら①，立場 b なら②）。【解答番号２１】
(2) 選択した立場の根拠として適当なものをア〜エから２つ選び，その組合せを①〜⑥から選べ。【解答番号２２】

ア 裁判所が法律を違憲と判断することは国民代表機関の意思を覆すことであり，議会制民主主義を否定することになりかねないから。（立場bの根拠）
イ 多数者によって選出された機関では，少数者の声が十分に考慮されない可能性があるから。（立場aの根拠）
ウ 国会が権限を濫用しないよう厳しく監視し抑制することが，権力分立で期待される機能の一つだから。（立場aの根拠）
エ 国会は，専門家の知見や利害関係者の意見など，さまざまな判断材料に基づき法律を制定しているから。（立場bの根拠）`,
      options: [
        { choice: 1, text: 'アとイ' },
        { choice: 2, text: 'アとウ' },
        { choice: 3, text: 'アとエ' },
        { choice: 4, text: 'イとウ' },
        { choice: 5, text: 'イとエ' },
        { choice: 6, text: 'ウとエ' }
      ],
      answer: [
        { answer_number: 21, correct_choice: '1 or 2' },
        { answer_number: 22, correct_choice: '4 if answer 21=1; 3 if answer 21=2', correct_option_text: '立場a選択(1)時は「イとウ(4)」 / 立場b選択(2)時は「アとエ(3)」' }
      ],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-1',
      section: 5,
      question_no: 1,
      answer_numbers: [23],
      points: 3,
      question_text: `全国の市区町村数の推移（1999年: 市区694, 町村2,558＝計3,252 → 2023年: 市区815, 町村926＝計1,741）および地方公共団体の職員数推移（都道府県: 1999年315千人→2011年237千人＝約24.8%減 / 市町村等: 1999年846千人→2011年689千人＝約18.6%減 / 2015年に下げ止まり後増加）から読みとれる記述として正しいものはどれか。すべて選んだ組合せを後の①〜⑦から選べ。

ア １９９９年と２０２３年を比較すると，全国の市区町村数は半分以下に減少した。
イ 東日本大震災を経て，２０１５年には地方公共団体の職員数は下げ止まりをみせ，その後，増加に転じた。
ウ １９９９年と２０１１年の数値に着目すると，都道府県の職員数の減少率は市町村等の職員数の減少率よりも高い。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 23, correct_choice: 6, correct_option_text: 'イとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-2',
      section: 5,
      question_no: 2,
      answer_numbers: [24],
      points: 3,
      question_text: `水道事業の経営に関するメモ中の空欄【ア】・【イ】に入るものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

浄水場などの大規模設備を必要とするので，生産を増加することで生産量１単位当たりの費用が【ア】するという規模の経済が当てはまる。
広域化の効果として，【イ】ことを通じて規模の経済が働き，長期的に安定した事業の継続につながる。

【ア】ａ 上昇 / ｂ 低下
【イ】ｃ 施設の共同設置や共同利用により，維持管理費用が削減される / ｄ 採算の合わない事業者の赤字を他の事業者の収益で補填する`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 24, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-3',
      section: 5,
      question_no: 3,
      answer_numbers: [25],
      points: 3,
      question_text: '日本の地方公共団体の収入に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '国が地方への国庫支出金を削減して，その削減分を国税から地方税に移譲すると，地方公共団体の自主財源が増える。' },
        { choice: 2, text: '国が地方への国庫支出金を削減して，その削減分を地方交付税にすると，地方公共団体の依存財源が増える。' },
        { choice: 3, text: '財源不足を補うために，地方公共団体が借り入れる地方債は，自主財源である。' },
        { choice: 4, text: '地域の実情に合った施策を行うために，地方公共団体が設ける独自課税は，依存財源である。' }
      ],
      answer: [{ answer_number: 25, correct_choice: 1, correct_option_text: '国が地方への国庫支出金を削減して，その削減分を国税から地方税に移譲 すると，地方公共団体の自主財源が増える。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-4',
      section: 5,
      question_no: 4,
      answer_numbers: [26],
      points: 3,
      question_text: '日本の地方公共団体に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '地方公共団体が住民の意思を問うために投票を実施する，イニシアティブの制度が設けられている。' },
        { choice: 2, text: '地方公共団体の首長や議員の解職をその地方公共団体の有権者が請求する，リコールの制度が設けられている。' },
        { choice: 3, text: '地方公共団体の議会は，首長が議会の決定に対して拒否権を行使した場合，その決定を再議決することはできない。' },
        { choice: 4, text: '地方公共団体の首長は，議会が首長に対する不信任決議案を可決した場合，議会を解散することはできない。' }
      ],
      answer: [{ answer_number: 26, correct_choice: 2, correct_option_text: '地方公共団体の首長や議員の解職をその地方公共団体の有権者が請求す る，リコールの制度が設けられている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-5',
      section: 5,
      question_no: 5,
      answer_numbers: [27],
      points: 3,
      question_text: `宿泊税に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：定額を課す自治体 A は，観光客が訪れることで増大する公共サービス費用の受益に応じた【ア】負担の考え方だね。
Ｙ：宿泊料金に応じて税額が決まる自治体 C は，消費額から間接的に経済力をとらえる【イ】負担の考え方に基づく課税といえるよ。
Ｙ：宿泊税上乗せで宿泊客数が大幅に落ち込むと反対事業者が想定しているのは，需要の価格弾力性が【ウ】と想定しているからだね。`,
      options: [
        { choice: 1, text: 'ア 応能 イ 応益 ウ 大きい' },
        { choice: 2, text: 'ア 応能 イ 応益 ウ 小さい' },
        { choice: 3, text: 'ア 応益 イ 応能 ウ 大きい' },
        { choice: 4, text: 'ア 応益 イ 応能 ウ 小さい' }
      ],
      answer: [{ answer_number: 27, correct_choice: 3, correct_option_text: 'ア 応益 イ 応能 ウ 大きい' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q5-6',
      section: 5,
      question_no: 6,
      answer_numbers: [28],
      points: 3,
      question_text: `日本の NPO や企業に関する次の記述ア〜ウのうち，正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 特定非営利活動促進法（NPO 法）によって，NPO に対しては法人格の取得が義務づけられている。
イ 会社法の制定により，株式会社設立のための最低資本金の規定が撤廃されている。
ウ 環境問題，高齢化問題，過疎化問題などの社会問題に取り組む，社会的企業が出現している。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 28, correct_choice: 6, correct_option_text: 'イとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-1',
      section: 6,
      question_no: 1,
      answer_numbers: [29],
      points: 3,
      question_text: 'グローバルな格差や貧困に関連する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'モノカルチャー経済への依存を背景に，BRICS などの新興国と発展途上国との経済格差が拡大した状況を，南北問題という。' },
        { choice: 2, text: '発展途上国内の天然資源を管理し開発する権利を，先進国企業が保有しようとした動きを，資源ナショナリズムという。' },
        { choice: 3, text: '国外から多額の資金を借り入れ，累積債務が深刻化した貧困国を，重債務貧困国という。' },
        { choice: 4, text: '男女間格差の度合いを，政治，経済，教育，健康などの観点から数値化されたものを，人間開発指数という。' }
      ],
      answer: [{ answer_number: 29, correct_choice: 3, correct_option_text: '国外から多額の資金を借り入れ，累積債務が深刻化した貧困国を，重債務 貧困国という。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-2',
      section: 6,
      question_no: 2,
      answer_numbers: [30],
      points: 3,
      question_text: `地球環境問題の解決に向けた出来事ｂ〜ｄを古いものから順に並べたものとして正しいものを，後の①〜⑥のうちから一つ選べ。

ａ 人間環境宣言が採択（1972年 国連人間環境会議）
ｂ 地球サミットでアジェンダ21採択（1992年 国連環境開発会議）
ｃ 京都議定書採択（1997年 先進国の温室効果ガス排出削減義務）
ｄ 名古屋議定書採択（2010年 遺伝資源の利用における公正な利益配分）
ｅ COP28ドバイ会議（脱化石燃料への移行）`,
      options: [
        { choice: 1, text: 'ｂ→ｃ→ｄ' },
        { choice: 2, text: 'ｂ→ｄ→ｃ' },
        { choice: 3, text: 'ｃ→ｂ→ｄ' },
        { choice: 4, text: 'ｃ→ｄ→ｂ' },
        { choice: 5, text: 'ｄ→ｂ→ｃ' },
        { choice: 6, text: 'ｄ→ｃ→ｂ' }
      ],
      answer: [{ answer_number: 30, correct_choice: 1, correct_option_text: 'ｂ→ｃ→ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-3',
      section: 6,
      question_no: 3,
      answer_numbers: [31],
      points: 4,
      question_text: `世界のエネルギー投資額（図1: 2015年以降減少傾向の【ア】＝化石燃料, 増加傾向の【イ】＝クリーンエネルギー）およびCO2排出量動向（総排出量で中国に次ぎ増加中の【エ】＝インド, 一人当たり排出量が突出して高い【カ】＝アメリカ）に関する空欄【ア】・【エ】・【カ】の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'ア 化石燃料 エ 日本 カ アメリカ' },
        { choice: 2, text: 'ア 化石燃料 エ 日本 カ EU' },
        { choice: 3, text: 'ア 化石燃料 エ インド カ アメリカ' },
        { choice: 4, text: 'ア 化石燃料 エ インド カ EU' },
        { choice: 5, text: 'ア クリーンエネルギー エ 日本 カ アメリカ' },
        { choice: 6, text: 'ア クリーンエネルギー エ 日本 カ EU' },
        { choice: 7, text: 'ア クリーンエネルギー エ インド カ アメリカ' },
        { choice: 8, text: 'ア クリーンエネルギー エ インド カ EU' }
      ],
      answer: [{ answer_number: 31, correct_choice: 3, correct_option_text: 'ア 化石燃料 エ インド カ アメリカ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-4',
      section: 6,
      question_no: 4,
      answer_numbers: [32],
      points: 3,
      question_text: `高齢者犯罪・刑法改正に関するメモ中の空欄【ア】・【イ】に入るものの組合せとして正しいものを，後の①〜④のうちから一つ選べ。

検挙人数に関して，２００８年に比べて２０２２年には【ア】が減少している。日本では２０２２年の刑法改正により２０２５年に【イ】。新設の刑罰は，再犯防止のための措置の充実を期待して導入されたものである。

【ア】ａ 検挙人数の総数に占める６５歳以上検挙人数の割合 / ｂ ６５歳以上人口に占める６５歳以上検挙人数の割合
【イ】ｃ 懲役刑と禁錮刑に代わって，拘禁刑が新設された / ｄ 拘禁刑に代わって，懲役刑と禁錮刑が新設された`,
      options: [
        { choice: 1, text: 'ア―ａ　イ―ｃ' },
        { choice: 2, text: 'ア―ａ　イ―ｄ' },
        { choice: 3, text: 'ア―ｂ　イ―ｃ' },
        { choice: 4, text: 'ア―ｂ　イ―ｄ' }
      ],
      answer: [{ answer_number: 32, correct_choice: 1, correct_option_text: 'ア―ａ　イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-5',
      section: 6,
      question_no: 5,
      answer_numbers: [33],
      points: 3,
      question_text: '発展途上国における格差や貧困に対する解決策（ワークシート: 単なる経済成長重視の産業振興策には限界があり，公正な社会や人々の機会拡大をめざす取組みが必要）として適当でないものを，後の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ある国際機関が，援助先での基礎教育の定着をめざして，発展途上国の学校に通う子どもたちに給食を提供する。' },
        { choice: 2, text: 'ある国が，援助先の経済成長の促進をめざして，発展途上国での資源開発に巨額の資金を融資する。' },
        { choice: 3, text: 'ある NGO が，発展途上国へ専門家を派遣して，コミュニティの生活環境を改善する事業へ参画する。' },
        { choice: 4, text: 'ある企業が，発展途上国の貧困層を対象にして，保健衛生に役立つ商品を安い価格で販売する。' }
      ],
      answer: [{ answer_number: 33, correct_choice: 2, correct_option_text: 'ある国が，援助先の経済成長の促進をめざして，発展途上国での資源開発 に巨額の資金を融資する。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_main-Q6-6',
      section: 6,
      question_no: 6,
      answer_numbers: [34],
      points: 3,
      question_text: `平和の実現に向けたグローバル統治のメモ中の空欄【ア】・【イ】に入る語句の組合せとして正しいものを，後の①〜④のうちから一つ選べ。

１．国家間協調を軸とする多国間外交の展開（例: 【ア】）
２．非国家主体による運動の推進（例: 日本原水爆被害者団体協議会）
３．国家と非国家主体との協働を通じた制度の構築（例: 【イ】）`,
      options: [
        { choice: 1, text: 'ア パグウォッシュ会議 イ 核兵器禁止条約' },
        { choice: 2, text: 'ア パグウォッシュ会議 イ 戦略兵器削減条約' },
        { choice: 3, text: 'ア ASEAN 地域フォーラム イ 核兵器禁止条約' },
        { choice: 4, text: 'ア ASEAN 地域フォーラム イ 戦略兵器削減条約' }
      ],
      answer: [{ answer_number: 34, correct_choice: 3, correct_option_text: 'ア ASEAN 地域フォーラム イ 核兵器禁止条約' }],
      explanation: null,
      correction_applied: false
    }
  ]
};

export const EXAM_2026_FOLLOWUP: ExamData = {
  metadata: {
    id: '2026_followup',
    year: 2026,
    session: '追・再試験',
    subject: '公共，政治・経済',
    totalQuestions: 32,
    totalPoints: 100,
    notes: ['新課程「公共，政治・経済」追・再試験（全32問・100点満点）']
  },
  questions: [
    {
      question_id: '2026_followup-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: 'ノート中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ア 国家からの自由 イ 労働基本権' },
        { choice: 2, text: 'ア 国家からの自由 イ 国家賠償請求権' },
        { choice: 3, text: 'ア 国家による自由 イ 労働基本権' },
        { choice: 4, text: 'ア 国家による自由 イ 国家賠償請求権' }
      ],
      answer: [{ answer_number: 1, correct_choice: 3, correct_option_text: 'ア 国家による自由 イ 労働基本権' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: `メモ１（状況を超えて自由に選ぶことができるが結果には全面的に責任を引き受ける＝実存的自由）およびメモ２（欲求や感情を理性で抑制し自律的な意志に基づいて行動する＝理性的自由）に該当する事例ａ〜ｃの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

ａ 試験準備をやめてゲームで遊び，卒業できず退学した（メモ１に該当）
ｂ カラオケに行きたかったが，別の友人との約束を守る義務を考えて断った（メモ２に該当）
ｃ 就職すべきだという周囲の声をよそに海外放浪に出て，帰国後苦労した（メモ１に該当）`,
      options: [
        { choice: 1, text: 'メモ１ ― ａ メモ２ ― ｂとｃ' },
        { choice: 2, text: 'メモ１ ― ｂ メモ２ ― ａとｃ' },
        { choice: 3, text: 'メモ１ ― ｃ メモ２ ― ａとｂ' },
        { choice: 4, text: 'メモ１ ― ａとｂ メモ２ ― ｃ' },
        { choice: 5, text: 'メモ１ ― ａとｃ メモ２ ― ｂ' },
        { choice: 6, text: 'メモ１ ― ｂとｃ メモ２ ― ａ' }
      ],
      answer: [{ answer_number: 2, correct_choice: 5, correct_option_text: 'メモ１ ― ａとｃ メモ２ ― ｂ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `表現の自由に関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｂ：政府が不適当な表現として発表を事前に禁止してしまうと，それは憲法が明文で禁止する【ア】ですね。
Ｂ：外国人や特定の民族の排斥をあおる差別的言動である【イ】に対応するため２０１６年に「【イ】解消法」が制定されました。`,
      options: [
        { choice: 1, text: 'ア 検閲 イ ヘイトスピーチ' },
        { choice: 2, text: 'ア 検閲 イ ポピュリズム' },
        { choice: 3, text: 'ア 秘密選挙 イ ヘイトスピーチ' },
        { choice: 4, text: 'ア 秘密選挙 イ ポピュリズム' }
      ],
      answer: [{ answer_number: 3, correct_choice: 1, correct_option_text: 'ア 検閲 イ ヘイトスピーチ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: '日本における裁判に関する法制度の記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '最高裁判所は，法律が憲法に反しているかどうかを，具体的な事件とはかかわりなく審査する。' },
        { choice: 2, text: '裁判員の参加する裁判では，裁判員は，量刑の判断は行わず，有罪か無罪かの判断のみを行う。' },
        { choice: 3, text: '罷免の訴追を受けた裁判官を罷免するかどうかを決める弾劾裁判所は，最高裁判所に設けられている。' },
        { choice: 4, text: '下級裁判所として，高等裁判所，地方裁判所，家庭裁判所，簡易裁判所が設けられている。' }
      ],
      answer: [{ answer_number: 4, correct_choice: 4, correct_option_text: '下級裁判所として，高等裁判所，地方裁判所，家庭裁判所，簡易裁判所が 設けられている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [5],
      points: 3,
      question_text: `先生の問題提起中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

政治哲学者サンデルは，共同体で共有されている【ア】を実現することが公正な社会の基盤になると述べている。
教育学者【イ】は，『人間の発達課題と教育』で，発達課題の一つとして行動指針としての価値観や倫理体系の獲得を挙げている。`,
      options: [
        { choice: 1, text: 'ア 共通善 イ ハヴィガースト' },
        { choice: 2, text: 'ア 共通善 イ リースマン' },
        { choice: 3, text: 'ア 原初状態 イ ハヴィガースト' },
        { choice: 4, text: 'ア 原初状態 イ リースマン' }
      ],
      answer: [{ answer_number: 5, correct_choice: 1, correct_option_text: 'ア 共通善 イ ハヴィガースト' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [6],
      points: 4,
      question_text: `雇用形態別・男女別所得分布表を正しく読み取った記述（Ｘ〜Ｚ）とメモ中の空欄【ア】に入る語句の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

【表の読取】
Ｘ 非正規男性では所得200〜299万円が44.0%（4割以上）だが，正規男性ではどの層も19.5%以下（2割超なし）。
Ｙ 所得299万円以下の非正規女性は86.5%（8割以上）で，非正規男性は65.0%（6割台）。
Ｚ 所得900万円以上の正規男性は8.5%（1割未満）。

【メモ】
雇用形態や性別による所得の差の是正に向けて，日本では今後，ヨーロッパ諸国のように【ア】をさらに進めていくことが重要である。
【ア】ａ 同一労働同一賃金 / ｂ 終身雇用制`,
      options: [
        { choice: 1, text: 'Ｘ，ア ― ａ' },
        { choice: 2, text: 'Ｘ，ア ― ｂ' },
        { choice: 3, text: 'Ｙ，ア ― ａ' },
        { choice: 4, text: 'Ｙ，ア ― ｂ' },
        { choice: 5, text: 'Ｚ，ア ― ａ' },
        { choice: 6, text: 'Ｚ，ア ― ｂ' }
      ],
      answer: [{ answer_number: 6, correct_choice: 3, correct_option_text: 'Ｙ，ア ― ａ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [7],
      points: 3,
      question_text: `貧困と雇用に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ａ：日本は，年間所得が全国民の中央値の半分に満たない人の割合である【ア】が OECD 加盟国のなかでも高いです。
Ｔ：１９９９年の【イ】の改正で対象業務範囲が拡大されたことや，１９９０年代半ば〜２０００年代前半の不況時に新卒で正規雇用に就きにくかった【ウ】世代は，いまだに所得の低い人が多いようです。`,
      options: [
        { choice: 1, text: 'ア 絶対的貧困率 イ 労働者派遣法 ウ 就職氷河期' },
        { choice: 2, text: 'ア 絶対的貧困率 イ 労働者派遣法 ウ 第一次ベビーブーム' },
        { choice: 3, text: 'ア 絶対的貧困率 イ 最低賃金法 ウ 就職氷河期' },
        { choice: 4, text: 'ア 絶対的貧困率 イ 最低賃金法 ウ 第一次ベビーブーム' },
        { choice: 5, text: 'ア 相対的貧困率 イ 労働者派遣法 ウ 就職氷河期' },
        { choice: 6, text: 'ア 相対的貧困率 イ 労働者派遣法 ウ 第一次ベビーブーム' },
        { choice: 7, text: 'ア 相対的貧困率 イ 最低賃金法 ウ 就職氷河期' },
        { choice: 8, text: 'ア 相対的貧困率 イ 最低賃金法 ウ 第一次ベビーブーム' }
      ],
      answer: [{ answer_number: 7, correct_choice: 5, correct_option_text: 'ア 相対的貧困率 イ 労働者派遣法 ウ 就職氷河期' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [8],
      points: 3,
      question_text: `公正な社会に向けた構想１（所得制限なしの現金給付＝【ア】）および構想２（ワークシェアリング＝【イ】）に入る記述Ｘ〜Ｚの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｘ 所得の低い家庭の子どもに無償または安価で食事を提供する
Ｙ すべての人に最低限度の所得を保障する
Ｚ 労働者一人あたりの労働時間を短縮する`,
      options: [
        { choice: 1, text: 'ア―Ｘ イ―Ｙ' },
        { choice: 2, text: 'ア―Ｘ イ―Ｚ' },
        { choice: 3, text: 'ア―Ｙ イ―Ｘ' },
        { choice: 4, text: 'ア―Ｙ イ―Ｚ' },
        { choice: 5, text: 'ア―Ｚ イ―Ｘ' },
        { choice: 6, text: 'ア―Ｚ イ―Ｙ' }
      ],
      answer: [{ answer_number: 8, correct_choice: 4, correct_option_text: 'ア―Ｙ イ―Ｚ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [9],
      points: 3,
      question_text: `完全競争市場の需給モデルに関するメモ中の空欄【ア】〜【ウ】に入るものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

価格が均衡価格 P1 より低い P2 だとしたら，需要量が供給量より【ア】，その差は Q3 から【イ】を引いた値である。この需給の不一致（超過需要）によって価格が上昇し，需要量を【ウ】させると同時に供給量を増加させ，最終的に P1 で均衡する。

【ア】多く / 少なく
【イ】Q2 / Q1
【ウ】減少 / 増加`,
      options: [
        { choice: 1, text: 'ア 少なく イ Q２ ウ 減少' },
        { choice: 2, text: 'ア 少なく イ Q２ ウ 増加' },
        { choice: 3, text: 'ア 少なく イ Q１ ウ 減少' },
        { choice: 4, text: 'ア 少なく イ Q１ ウ 増加' },
        { choice: 5, text: 'ア 多く イ Q２ ウ 減少' },
        { choice: 6, text: 'ア 多く イ Q２ ウ 増加' },
        { choice: 7, text: 'ア 多く イ Q１ ウ 減少' },
        { choice: 8, text: 'ア 多く イ Q１ ウ 増加' }
      ],
      answer: [{ answer_number: 9, correct_choice: 5, correct_option_text: 'ア 多く イ Q２ ウ 減少' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [10],
      points: 3,
      question_text: '不況期に財政が景気を安定化させることに関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '増税をせずに政府支出を増やすことによって，景気を回復に向かわせる。' },
        { choice: 2, text: '減税をせずに政府支出を減らすことによって，景気を回復に向かわせる。' },
        { choice: 3, text: '累進課税制度によって自動的に税収が増えるだけでなく，社会保障給付も増えるため景気が回復に向かう。' },
        { choice: 4, text: '累進課税制度によって自動的に税収が減るだけでなく，社会保障給付も減るため景気が回復に向かう。' }
      ],
      answer: [{ answer_number: 10, correct_choice: 1, correct_option_text: '増税をせずに政府支出を増やすことによって，景気を回復に向かわせる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [11],
      points: 3,
      question_text: `公共財の特徴に関するメモ中の空欄【ア】〜【ウ】に入るものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

公共財の特徴は，【ア】こと（非競合性）と，【イ】こと（非排除性）である。公共財はフリーライダーを生じさせるため，もし民間企業だけが供給するなら供給量が最適水準と比べて【ウ】になる。

【ア】ａ ある人が利用したら他の人は利用できない / ｂ 多くの人々が同時に利用できる
【イ】ｃ 対価を支払わない人は利用できない / ｄ 対価を支払わない人も利用できる
【ウ】ｅ 過小 / ｆ 過大`,
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
      answer: [{ answer_number: 11, correct_choice: 7, correct_option_text: 'ア―ｂ イ―ｄ ウ―ｅ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [12],
      points: 3,
      question_text: `次のア〜ウのうち，最高裁判所で違憲の判断が示された事件をすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 在外国民が衆議院と参議院の比例代表選挙でしか投票できないとしていた公職選挙法の規定について争われた事件（在外国民選挙権訴訟）
イ 特定の障害をもつ者などに対して不妊手術を強制する根拠となった旧優生保護法の規定について争われた事件
ウ 障害福祉年金と児童扶養手当の併給を禁止していた児童扶養手当法の規定について争われた事件（堀木訴訟）`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 12, correct_choice: 4, correct_option_text: 'アとイ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [13],
      points: 3,
      question_text: `国家による自由の実現に関する会話文中の空欄【ア】・【イ】に入る記述の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：生存権の具体化の例として，【ア】ことがあげられる。
Ｘ：勤労権が立法を通じて具体化された例としては，【イ】ことがあるよね。

【ア】ａ コメの国内生産者に対して補助金を支払う / ｂ 生活の困窮により保護を必要とする者に生活費を支給する
【イ】ｃ 求職者に公共職業安定所（ハローワーク）を通じた職業紹介を行う / ｄ 労働者に労働組合を通じた交渉権を与える`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 13, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q3-6',
      section: 3,
      question_no: 6,
      answer_numbers: [14],
      points: 4,
      question_text: `公私二元論とフェミニズムに関する資料から読みとれる内容として正しいものを後のア〜ウからすべて選び，その組合せとして最も適当なものを後の①〜⑦のうちから一つ選べ。

ア 公私二元論からすれば，公的領域と私的領域の活動の双方が，政治的な権力行使の対象となる。
イ フェミニズムの考え方によれば，公私二元論では，私的領域における女性の抑圧は政治の争点にはならない。
ウ 公的領域の活動よりも，私的領域の活動に政治的な介入をすべきとするのが公私二元論とフェミニズムに共通する考え方である。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 14, correct_choice: 2, correct_option_text: 'イ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [15],
      points: 3,
      question_text: `EU における財政政策に関する正しい記述（ア・イ）と，金融政策に関する正しい記述（ウ・エ）の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

【財政政策】
ア EU のすべての加盟国において，欧州委員会による一元的な財政政策がとられている。
イ EU のすべての加盟国で，各国別の財政政策がとられている。

【金融政策】
ウ 共通通貨ユーロを導入している国において，欧州中央銀行による一元的な金融政策がとられている。
エ 共通通貨ユーロを導入している国で，各国別の金融政策がとられている。`,
      options: [
        { choice: 1, text: 'アとウ' },
        { choice: 2, text: 'アとエ' },
        { choice: 3, text: 'イとウ' },
        { choice: 4, text: 'イとエ' }
      ],
      answer: [{ answer_number: 15, correct_choice: 3, correct_option_text: 'イとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [16],
      points: 3,
      question_text: '日本における金融政策に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ペイオフ制度の下で，銀行への公的資金の注入が禁止された。' },
        { choice: 2, text: 'バーゼル合意によって，マネタリーベースが政策目標から排除された。' },
        { choice: 3, text: '量的・質的金融緩和によって，インフレーションの抑制がめざされた。' },
        { choice: 4, text: '非伝統的金融政策の下で，マイナス金利が導入された。' }
      ],
      answer: [{ answer_number: 16, correct_choice: 4, correct_option_text: '非伝統的金融政策の下で，マイナス金利が導入された。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [17],
      points: 3,
      question_text: `EU全加盟国のエネルギー輸入動向（ロシア産原油-90%, パイプライン天然ガス-83%だがLNG+38%, 天然ウラン+45% / 米国産天然ガス輸入+197%）に関する会話文中の空欄【ア】・【イ】に入るものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｚ：EU が経済制裁でロシア産のエネルギー資源を【ア】輸入制限の対象としたことが重要な要因と考えられるね。
Ｚ：アメリカからの輸入量が約200%増えた背景には，【イ】ことから，EU 加盟国がアメリカからの天然ガスの輸入を増加させた事情があったと考えられるよ。

【ア】ａ 例外なく / ｂ 選択的に
【イ】ｃ リスボン条約が締結されてモノの移動の自由が確保されている / ｄ アメリカで頁岩（シェール）層の採掘技術が発達して生産量が増加している`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 17, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [18],
      points: 3,
      question_text: '国際法に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '国家間の文書による合意としての条約については，実際には，条約だけでなく協定や規約などさまざまな名称も用いられている。' },
        { choice: 2, text: '国際法の主体は，国際連合（国連）などの国際機関であり，国家や個人は限られた範囲において国際法の主体と認められている。' },
        { choice: 3, text: '公海自由の原則は，国際慣習法として発展してきたが，現在ではラムサール条約において成文化されている。' },
        { choice: 4, text: '国際社会には統一的な立法機関は存在しなかったが，国連憲章において，国連総会が国際法の統一的な立法機関として規定されている。' }
      ],
      answer: [{ answer_number: 18, correct_choice: 1, correct_option_text: '国家間の文書による合意としての条約については，実際には，条約だけで なく協定や規約などさまざまな名称も用いられている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [19],
      points: 3,
      question_text: `日本における情報公開に関する会話文中の空欄【ア】・【イ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｘ：日本では，地方公共団体において情報公開条例が【ア】，中央省庁の行政文書を対象とした情報公開法が制定されたね。
Ｙ：特定秘密保護法については，国民の【イ】を侵害しないような運用が求められているよ。`,
      options: [
        { choice: 1, text: 'ア 制定される前に イ 知る権利' },
        { choice: 2, text: 'ア 制定される前に イ アクセス権' },
        { choice: 3, text: 'ア 制定された後に イ 知る権利' },
        { choice: 4, text: 'ア 制定された後に イ アクセス権' }
      ],
      answer: [{ answer_number: 19, correct_choice: 3, correct_option_text: 'ア 制定された後に イ 知る権利' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q4-6',
      section: 4,
      question_no: 6,
      answer_numbers: [20],
      points: 3,
      question_text: '日本の環境法令や裁判例に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '環境影響評価法は，事業者が行う開発が環境に与える影響を事前ではなく事後的に調査し，その結果を公表することを事業者に対して義務づけている。' },
        { choice: 2, text: '循環型社会形成推進基本法は，生産者が製品の廃棄やリサイクルの段階まで一定の責任を負うという，拡大生産者責任の考え方を取り入れている。' },
        { choice: 3, text: '大阪空港の周辺住民が，航空機の騒音などの被害から生活環境を守るために，国に対して夜間の飛行差止め等を求めた裁判において，最高裁判所は夜間の飛行差止めを認めた。' },
        { choice: 4, text: '広島県福山市の鞆の浦地区の周辺住民が，歴史的・文化的景観が損なわれるとして，湾の埋立て免許の交付差止め等を求めた裁判で，広島地方裁判所は周辺住民の景観利益を認めなかった。' }
      ],
      answer: [{ answer_number: 20, correct_choice: 2, correct_option_text: '循環型社会形成推進基本法は，生産者が製品の廃棄やリサイクルの段階ま で一定の責任を負うという，拡大生産者責任の考え方を取り入れている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-1',
      section: 5,
      question_no: 1,
      answer_numbers: [21],
      points: 3,
      question_text: '国家主権に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '主権の概念は，中世ヨーロッパにおいて，国家を統治する国王の行為を宗教的権威により規制する教会の権力として成立した。' },
        { choice: 2, text: '１７世紀から１８世紀にかけての一連の市民革命において，すべての成人男女に選挙権を与える普通選挙制の確立とともに，国民は主権を獲得した。' },
        { choice: 3, text: '主権を有する国家は，国内的には領域内のすべての人々を統治する最高権力をもち，対外的には他国から独立している。' },
        { choice: 4, text: '国家の三要素とは，領土・領海・領空からなる領域，権力者が統治を行う政府，および主権である。' }
      ],
      answer: [{ answer_number: 21, correct_choice: 3, correct_option_text: '主権を有する国家は，国内的には領域内のすべての人々を統治する最高権 力をもち，対外的には他国から独立している。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-2',
      section: 5,
      question_no: 2,
      answer_numbers: [22],
      points: 4,
      question_text: `関税政策のゲーム理論モデル（両国が低関税: A国+5, B国+5 / A高関税・B低関税: A国+8, B国+1 / A低関税・B高関税: A国+1, B国+8 / 両国が高関税: A国+3, B国+3）から導かれる内容として正しいものをすべて選び，その組合せとして最も適当なものを後の①〜⑦のうちから一つ選べ。

ア A 国が最も高い点数を得るには，A 国が「低関税」を選択し，そのとき B 国が「低関税」を選択する必要がある。
イ B 国が「低関税」を選択する場合，A 国が「低関税」を選択するより「高関税」を選択した方が A 国の点数はより高くなる。
ウ B 国は，A 国が「高関税」を選択すると予想する場合は「高関税」を選択する。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 22, correct_choice: 5, correct_option_text: 'アとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-3',
      section: 5,
      question_no: 3,
      answer_numbers: [23],
      points: 3,
      question_text: `「寡占」の用語説明（ａ〜ｃ）と，「事実上の標準（デファクトスタンダード）」に当てはまる事例（ｄ・ｅ）の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

【用語説明】
ａ 従来と異なる産業にも進出すること
ｂ 数社の企業で特定の市場の大半を支配すること
ｃ 国境を越えて企業活動を展開すること

【事例】
ｄ 文書作成ソフトウェアが乱立していたが，徐々に一つのソフトウェアに利用が集中して，ほかのソフトウェアの利用が大幅に減少した。
ｅ 独自規格の端子を採用していたスマートフォンを販売する企業が，ある国際機関が定めた端子の採用を強いられることとなった。`,
      options: [
        { choice: 1, text: '下線部① ― ａ 下線部② ― ｄ' },
        { choice: 2, text: '下線部① ― ａ 下線部② ― ｅ' },
        { choice: 3, text: '下線部① ― ｂ 下線部② ― ｄ' },
        { choice: 4, text: '下線部① ― ｂ 下線部② ― ｅ' },
        { choice: 5, text: '下線部① ― ｃ 下線部② ― ｄ' },
        { choice: 6, text: '下線部① ― ｃ 下線部② ― ｅ' }
      ],
      answer: [{ answer_number: 23, correct_choice: 3, correct_option_text: '下線部\' ― ｂ 下線部( ― ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-4',
      section: 5,
      question_no: 4,
      answer_numbers: [24],
      points: 3,
      question_text: 'ガルブレイスが提唱した「依存効果」の例として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '欲しかったけれどこれまで高くて買えなかった商品を，タイムセールで値下がりしていたので購入した。' },
        { choice: 2, text: '知ってはいたが買うつもりのなかった商品を，魅力的な広告をみて欲しくなったので購入した。' },
        { choice: 3, text: 'ある商品が政府の補助金で安くなったので，その商品を購入した。' },
        { choice: 4, text: '習慣としていつも買っている商品なので，値上がりしていたが購入した。' }
      ],
      answer: [{ answer_number: 24, correct_choice: 2, correct_option_text: '知ってはいたが買うつもりのなかった商品を，魅力的な広告をみて欲しく なったので購入した。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-5',
      section: 5,
      question_no: 5,
      answer_numbers: [25],
      points: 3,
      question_text: `次のア〜ウで示した人権条約のうち，日本が批准していないものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 女性差別撤廃条約（１９７９年採択）
イ 死刑廃止条約（１９８９年採択）
ウ 障害者権利条約（２００６年採択）`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 25, correct_choice: 2, correct_option_text: 'イ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q5-6',
      section: 5,
      question_no: 6,
      answer_numbers: [26],
      points: 3,
      question_text: `国際平和や安全保障に関する記述ア〜ウのうち，正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 国際紛争の鎮静化と平和的な解決に向けて，関係国の同意の下，国連加盟国が自発的に提供した人員によって，中立的な立場をとる「平和維持活動（PKO）」が実施されてきた。
イ 内戦で深刻な危機にさらされた住民を救済するために，国際社会は必要な介入を行いうるとして，「人道的介入」が外国国家の武力行使を正当化する理由として主張されてきた。
ウ 内政不干渉の原則を維持しつつ，危機にある人々を保護すべき責任は第一義的には国際社会にあり，それが果たされないときには危機にある当該国家の政府にその責任が移行するという「保護する責任」論が提唱されてきた。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 26, correct_choice: 4, correct_option_text: 'アとイ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-1',
      section: 6,
      question_no: 1,
      answer_numbers: [27],
      points: 3,
      question_text: `公的年金制度に関するメモ中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

・国民年金は，原則として【ア】歳から受給可能である。
・国民年金は【イ】ともいわれ，国民皆年金制度の根幹である。
・民間企業の会社員や公務員などの場合，【イ】に上乗せされて支給される【ウ】に加入する。
・【ウ】の保険料は労使折半である。`,
      options: [
        { choice: 1, text: 'ア ６０ イ 厚生年金 ウ 基礎年金' },
        { choice: 2, text: 'ア ６０ イ 基礎年金 ウ 厚生年金' },
        { choice: 3, text: 'ア ６５ イ 厚生年金 ウ 基礎年金' },
        { choice: 4, text: 'ア ６５ イ 基礎年金 ウ 厚生年金' }
      ],
      answer: [{ answer_number: 27, correct_choice: 4, correct_option_text: 'ア ６５ イ 基礎年金 ウ 厚生年金' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-2',
      section: 6,
      question_no: 2,
      answer_numbers: [28],
      points: 3,
      question_text: `年金制度と GPIF の資金運用に関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｘ：年金制度は，現役世代が年金を受け取る世代に年金原資を移転する【ア】方式が事実上とられているね。
Ｙ：一般に金利が下がると，市場で取引されている債券価格は【イ】ね。
Ｙ：円高・ドル安になると，ドル建ての債券や株式の日本円での評価額は【ウ】するね。

【ア】積立 / 賦課
【イ】上がる / 下がる
【ウ】増加 / 減少`,
      options: [
        { choice: 1, text: 'ア 積立 イ 上がる ウ 増加' },
        { choice: 2, text: 'ア 積立 イ 上がる ウ 減少' },
        { choice: 3, text: 'ア 積立 イ 下がる ウ 増加' },
        { choice: 4, text: 'ア 積立 イ 下がる ウ 減少' },
        { choice: 5, text: 'ア 賦課 イ 上がる ウ 増加' },
        { choice: 6, text: 'ア 賦課 イ 上がる ウ 減少' },
        { choice: 7, text: 'ア 賦課 イ 下がる ウ 増加' },
        { choice: 8, text: 'ア 賦課 イ 下がる ウ 減少' }
      ],
      answer: [{ answer_number: 28, correct_choice: 6, correct_option_text: 'ア 賦課 イ 上がる ウ 減少' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-3',
      section: 6,
      question_no: 3,
      answer_numbers: [29],
      points: 3,
      question_text: `国民経済のストックとフローに関する会話文中の空欄【ア】〜【ウ】に入る語句の組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

Ｙ：債券や株式といった証券は，ある時点までに蓄積された貸付けや投資の証明書であり，金融面での【ア】の経済ともいえるものだよ。
Ｘ：その一方で，GDP は一国の経済活動の規模を示す指標であり，これは実物面での【イ】の経済だね。
Ｙ：三面等価の原則において，【ウ】面でみた国民所得は雇用者報酬，財産所得，企業所得からなるよ。`,
      options: [
        { choice: 1, text: 'ア フロー イ ストック ウ 分配' },
        { choice: 2, text: 'ア フロー イ ストック ウ 支出' },
        { choice: 3, text: 'ア ストック イ フロー ウ 分配' },
        { choice: 4, text: 'ア ストック イ フロー ウ 支出' }
      ],
      answer: [{ answer_number: 29, correct_choice: 3, correct_option_text: 'ア ストック イ フロー ウ 分配' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-4',
      section: 6,
      question_no: 4,
      answer_numbers: [30],
      points: 3,
      question_text: `高齢者被疑者数と刑法改正に関するメモ中の空欄【ア】・【イ】に入るものの組合せとして正しいものを，後の①〜④のうちから一つ選べ。

図によれば２００８年に比べて２０２２年には【ア】が減少している。日本では２０２２年の刑法改正により２０２５年に【イ】。

【ア】ａ 検挙人数の総数に占める６５歳以上検挙人数の割合 / ｂ ６５歳以上人口に占める６５歳以上検挙人数の割合
【イ】ｃ 懲役刑と禁錮刑に代わって，拘禁刑が新設された / ｄ 拘禁刑に代わって，懲役刑と禁錮刑が新設された`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 30, correct_choice: 3, correct_option_text: 'ア―ｂ イ―ｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-5',
      section: 6,
      question_no: 5,
      answer_numbers: [31],
      points: 4,
      question_text: `消費者保護に関する法制度（ア: 消費者契約法, イ: クーリング・オフ制度, ウ: 成年後見制度）と内容（ａ〜ｃ）との組合せとして正しいものを，後の①〜⑥のうちから一つ選べ。

ａ 判断能力が十分でない人のために，契約締結を助ける人を選任できる
ｂ 訪問販売等の契約について，契約締結から一定期間内であれば無条件で解除できる
ｃ 事業者が消費者に誤認を生じさせて契約を締結させた場合等に，一定期間内であれば取り消すことができる`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｂ ウ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｃ ウ―ｂ' },
        { choice: 3, text: 'ア―ｂ イ―ａ ウ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｃ ウ―ａ' },
        { choice: 5, text: 'ア―ｃ イ―ａ ウ―ｂ' },
        { choice: 6, text: 'ア―ｃ イ―ｂ ウ―ａ' }
      ],
      answer: [{ answer_number: 31, correct_choice: 6, correct_option_text: 'ア―ｃ イ―ｂ ウ―ａ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2026_followup-Q6-6',
      section: 6,
      question_no: 6,
      answer_numbers: [32],
      points: 3,
      question_text: `一票の格差と選挙制度改革に関するメモ中の空欄【ア】・【ウ】に入るものの組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

◇一票の格差問題の改善のため，【ア】の選挙で新しい議員定数配分方式（アダムズ方式）を２０２２年に導入。
◇世代別の選挙区を設ける制度の利点と課題: 【ウ】

【ア】ａ 衆議院議員 / ｂ 参議院議員
【ウ】ｃ 若年世代が選んだ者を必ず確保できるようになるが，世代間対立を選挙制度によって煽ることになりかねない / ｄ 投票率上昇が期待されるが，投票に行かない自由が制約されかねない / ｅ 若年世代有権者を増加できるが，人口が少ないため増加数は限定的`,
      options: [
        { choice: 1, text: 'ア―ａ ウ―ｃ' },
        { choice: 2, text: 'ア―ａ ウ―ｄ' },
        { choice: 3, text: 'ア―ａ ウ―ｅ' },
        { choice: 4, text: 'ア―ｂ ウ―ｃ' },
        { choice: 5, text: 'ア―ｂ ウ―ｄ' },
        { choice: 6, text: 'ア―ｂ ウ―ｅ' }
      ],
      answer: [{ answer_number: 32, correct_choice: 1, correct_option_text: 'ア―ａ ウ―ｃ' }],
      explanation: null,
      correction_applied: false
    }
  ]
};
