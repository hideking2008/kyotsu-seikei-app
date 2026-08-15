import { ExamData } from '../types';

export const EXAM_2024_MAIN: ExamData = {
  metadata: {
    id: '2024_main',
    year: 2024,
    session: '本試験',
    subject: '政治・経済',
    totalQuestions: 30,
    totalPoints: 100,
    notes: ['旧課程「政治・経済」形式（全30問・100点満点）']
  },
  questions: [
    {
      question_id: '2024_main-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: '生徒Ｘは，講座後，下線部①にかかわる制度について調べた。現在の日本の制度に関する記述として誤っているものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '１８歳以上の者は，選挙運動期間中に特定の候補者への投票を電話をかけて依頼することができる。' },
        { choice: 2, text: '憲法改正に関する国民投票で投票権を有する年齢は，１８歳以上である。' },
        { choice: 3, text: '刑事罰の適用の対象とならない年齢は，１８歳未満である。' },
        { choice: 4, text: '親権者などの法定代理人の同意なく１８歳未満の者が単独で締結した契約は，原則として取り消すことができる。' }
      ],
      answer: [{ answer_number: 1, correct_choice: 3, correct_option_text: '刑事罰の適用の対象とならない年齢は，１８歳未満である。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 4,
      question_text: `下線部②に関心をもった生徒Ｘは，選挙制度が選挙結果に与える影響についてモデルケースで考え，次のメモを作成した。メモ中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして正しいものを，後の①〜⑧のうちから一つ選べ。

ある議会の定員は１０人で，各選挙区の各有権者は候補者１人に投票し，各選挙区で得票数の多い順に候補者２人が当選者となる。この議会の選挙において，三つの政党 A〜C が五つの選挙区 a〜e で，それぞれ１人の候補者を立てた。次の表は，この選挙での各候補者の得票数を示したものである。表において，得票数の合計が最も少ない政党は，当選者数が最も【ア】。
いま，選挙制度が変更されたとする。変更後は，議会の定員は５人で，議員は小選挙区制で選出される。各選挙区で政党は変更前と同じ候補者１人を立て，有権者は変更前と同じ候補者に投票する。このとき，死票の数は変更前より【イ】する。そして，得票数の合計が最も少ない政党は，当選者数が最も【ウ】。

【得票数一覧】
選挙区: a | A党: 10 | B党: 25 | C党: 65 | 合計: 100
選挙区: b | A党: 25 | B党: 30 | C党: 45 | 合計: 100
選挙区: c | A党: 15 | B党: 20 | C党: 65 | 合計: 100
選挙区: d | A党: 60 | B党: 25 | C党: 15 | 合計: 100
選挙区: e | A党: 40 | B党: 35 | C党: 25 | 合計: 100
合計: A党: 150 | B党: 135 | C党: 215 | 合計: 500`,
      options: [
        { choice: 1, text: 'ア 多い イ 増加 ウ 多い' },
        { choice: 2, text: 'ア 多い イ 増加 ウ 少ない' },
        { choice: 3, text: 'ア 多い イ 減少 ウ 多い' },
        { choice: 4, text: 'ア 多い イ 減少 ウ 少ない' },
        { choice: 5, text: 'ア 少ない イ 増加 ウ 多い' },
        { choice: 6, text: 'ア 少ない イ 増加 ウ 少ない' },
        { choice: 7, text: 'ア 少ない イ 減少 ウ 多い' },
        { choice: 8, text: 'ア 少ない イ 減少 ウ 少ない' }
      ],
      answer: [{ answer_number: 2, correct_choice: 2, correct_option_text: 'ア 多い イ 増加 ウ 少ない' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 3,
      question_text: `下線部③に関連して，生徒Ｘと生徒Ｙは，講座の内容を振り返りながら，現在の日本の地方公共団体において住民が政治に参加する仕組みについて話し合っている。次の会話文中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして正しいものを，後の①〜⑧のうちから一つ選べ。

Ｘ：政治へのかかわり方は，年齢などによって違ってくるんだね。政治に参加する仕組みといえば，すぐに思いつくのは選挙だけど，私たち住民は選挙の時にしか政治にかかわることはできないのかな。
Ｙ：「政治・経済」の授業では，選挙とは別に住民の意見を地方公共団体へ届ける手段として，【ア】の手続が重要だと学習したよね。
Ｘ：そういえば，その手続の一つとして新たな条例の制定を求めることができたよね。
Ｙ：そうだね。だけど，条例の制定を求める場合，その地方公共団体の有権者の【イ】以上の署名を集める必要があるよ。
Ｘ：条例制定の提案ほど意見がまとまっていなくても，もっと簡単に住民の意見を地方公共団体へ伝える方法はないのかな。たとえば，近所の公園を市が別の場所へ移転させると聞いたけど，その方針が一度決まってしまったら，「公園を残してほしい」という私の意見は，市に伝えられないのかな。
Ｙ：憲法第１６条には，【ウ】についての規定があって，地方公共団体の政策などに関しても平穏に希望や要望を述べることができるよ。この規定によると，年齢にかかわらず意見を地方公共団体へ届けられるね。`,
      options: [
        { choice: 1, text: 'ア 情報公開 イ ３分の１ ウ 請願権' },
        { choice: 2, text: 'ア 情報公開 イ ３分の１ ウ 再議' },
        { choice: 3, text: 'ア 情報公開 イ ５０分の１ ウ 請願権' },
        { choice: 4, text: 'ア 情報公開 イ ５０分の１ ウ 再議' },
        { choice: 5, text: 'ア 直接請求 イ ３分の１ ウ 請願権' },
        { choice: 6, text: 'ア 直接請求 イ ３分の１ ウ 再議' },
        { choice: 7, text: 'ア 直接請求 イ ５０分の１ ウ 請願権' },
        { choice: 8, text: 'ア 直接請求 イ ５０分の１ ウ 再議' }
      ],
      answer: [{ answer_number: 3, correct_choice: 7, correct_option_text: 'ア 直接請求 イ ５０分の１ ウ 請願権' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-4',
      section: 1,
      question_no: 4,
      answer_numbers: [4],
      points: 3,
      question_text: `下線部④に関心をもった生徒Ｘは，講座後に図書館で関連する書籍などを参照して，諸国の刑事裁判への市民参加の制度についてまとめ，次のメモを作成した。メモ中の空欄【ア】〜【ウ】に当てはまるものの組合せとして正しいものを，後の①〜⑧のうちから一つ選べ。

日本に裁判員制度を導入するにあたって，アメリカの陪審制度やドイツの参審制度など，諸外国の刑事裁判への市民参加の制度が参考にされた。アメリカやドイツの制度は地域ごとに異なることがあるものの，日本と比較するとおおむね次のようになる。
選任については，アメリカでは，陪審員は事件ごとに選ばれる。ドイツでは，参審員は一定年数の任期で選ばれる。日本では，裁判員は裁判員候補者名簿の中から【ア】選ばれる。
また，アメリカでは，有罪か無罪かの判断は，陪審員のみで行い，量刑の判断に陪審員は加わらない。ドイツでは，有罪か無罪かの判断は，参審員と裁判官が合議で行い，量刑の判断に参審員は加わる。日本では，有罪か無罪かの判断は，【イ】行い，量刑の判断に裁判員は【ウ】。`,
      options: [
        { choice: 1, text: 'ア 事件ごとに イ 裁判員のみで ウ 加わる' },
        { choice: 2, text: 'ア 事件ごとに イ 裁判員のみで ウ 加わらない' },
        { choice: 3, text: 'ア 事件ごとに イ 裁判員と裁判官が合議で ウ 加わる' },
        { choice: 4, text: 'ア 事件ごとに イ 裁判員と裁判官が合議で ウ 加わらない' },
        { choice: 5, text: 'ア 一定年数の任期で イ 裁判員のみで ウ 加わる' },
        { choice: 6, text: 'ア 一定年数の任期で イ 裁判員のみで ウ 加わらない' },
        { choice: 7, text: 'ア 一定年数の任期で イ 裁判員と裁判官が合議で ウ 加わる' },
        { choice: 8, text: 'ア 一定年数の任期で イ 裁判員と裁判官が合議で ウ 加わらない' }
      ],
      answer: [{ answer_number: 4, correct_choice: 3, correct_option_text: 'ア 事件ごとに イ 裁判員と裁判官が合議で ウ 加わる' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-5',
      section: 1,
      question_no: 5,
      answer_numbers: [5],
      points: 4,
      question_text: `生徒Ｘと生徒Ｙは，下線部⑤に関心をもち，雇用や失業などの労働市場に関する情報を集めた。ＸとＹは，労働市場の資料をみながら話し合っている。会話文中の空欄【ア】〜【ウ】に当てはまる語句の組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｘ：講師の先生が，「２０１０年代後半は労働市場が売り手市場になっていて，就職がしやすくなっていた」と話していたのが気になって調べてみたよ。
Ｙ：資料をみると，たしかにそうなっていたことがわかるね。でも，２０１４年以降は求人数が求職者数を【ア】いるのに完全失業率がゼロにならなかったのは，何が原因なのかな。
Ｘ：資料をみると，「事務的職業」は労働力の需要量が【イ】いて，「輸送・機械運転の職業」は労働力の供給量が【イ】いるから，職種によるミスマッチが起こっているといえるね。
Ｙ：なるほど。
Ｘ：２００２年から２００６年の間は，２０１０年から２０１４年の間と比べると，有効求人倍率が同じ程度で推移しているのに完全失業率が上回っているんだ。『労働経済白書』では，【ウ】の労働力の需要量が【イ】いることが就職を難しくしていると分析されていたんだ。`,
      options: [
        { choice: 1, text: 'ア 上回って イ 過剰になって ウ フルタイム' },
        { choice: 2, text: 'ア 上回って イ 過剰になって ウ パートタイム' },
        { choice: 3, text: 'ア 上回って イ 不足して ウ フルタイム' },
        { choice: 4, text: 'ア 上回って イ 不足して ウ パートタイム' },
        { choice: 5, text: 'ア 下回って イ 過剰になって ウ フルタイム' },
        { choice: 6, text: 'ア 下回って イ 過剰になって ウ パートタイム' },
        { choice: 7, text: 'ア 下回って イ 不足して ウ フルタイム' },
        { choice: 8, text: 'ア 下回って イ 不足して ウ パートタイム' }
      ],
      answer: [{ answer_number: 5, correct_choice: 3, correct_option_text: 'ア 上回って イ 不足して ウ フルタイム' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-6',
      section: 1,
      question_no: 6,
      answer_numbers: [6],
      points: 3,
      question_text: `下線部⑥に関心をもった生徒Ｙは，講座で配布された単身勤労世帯３例における１年間の家計収支の平均月額資料を見返し，分析した結果を後のノートにまとめた。ノート中の空欄【ア】・【イ】に当てはまるものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

【資料：単身勤労世帯３例における家計収支の平均月額（単位：千円）】
実収入: 例a 550 | 例b 310 | 例c 140
実支出: 例a 450 | 例b 240 | 例c 120
消費支出: 例a 300 | 例b 180 | 例c 100
(うち食料費): 例a 60 | 例b 42 | 例c 30
非消費支出（直接税・社会保険料）: 例a 150 | 例b 60 | 例c 20

【ノート】
〇家計は，可処分所得の制約の下で最大の満足感が得られるように，消費支出額と貯蓄額を決定する。資料中の例 a と例 b とを比較すると，可処分所得に占める消費支出の割合である平均消費性向は【ア】の方が高い。
〇可処分所得が少なくなると，生活必需品の支出の割合が高くなる。こうした点に着目した指標がエンゲル係数である。資料中でも可処分所得の最も少ない例 c のエンゲル係数が最も高くなっており，その値は【イ】となる。`,
      options: [
        { choice: 1, text: 'ア 例a イ ２５％' },
        { choice: 2, text: 'ア 例a イ ３０％' },
        { choice: 3, text: 'ア 例b イ ２５％' },
        { choice: 4, text: 'ア 例b イ ３０％' }
      ],
      answer: [{ answer_number: 6, correct_choice: 2, correct_option_text: 'ア 例a イ ３０％' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-7',
      section: 1,
      question_no: 7,
      answer_numbers: [7],
      points: 3,
      question_text: `生徒Ｙは，社会の変化によって生活困難に遭遇するリスクが高まる中での下線部⑦の意義に関心をもち，その意義を具体化する仕組みについて調べた。次の記述ア〜ウのうち，日本における社会保険制度，公的扶助制度，社会福祉制度それぞれの基本的な特徴に関する記述として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 社会保険制度では，原則としてあらかじめ保険料が拠出されていて，疾病や老齢などの保険の対象となる事由が発生した当事者に対して諸給付が行われる。
イ 公的扶助制度では，生活に困窮し，最低限度の生活水準に満たない状態になった当事者に対して保険料から生活に必要な諸給付が行われる。
ウ 社会福祉制度では，老齢，障害などによって社会生活を送る上での支援が必要な当事者に対してサービスの提供などが行われる。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 7, correct_choice: 5, correct_option_text: 'アとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q1-8',
      section: 1,
      question_no: 8,
      answer_numbers: [8],
      points: 3,
      question_text: '生徒Ｙは，日本の下線部⑧の変化について調べた。２０００年以降における日本の行政機構の変化に関する記述として誤っているものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '消費者行政の一元化などを目的として新設された「消費者庁」は，内閣府におかれている。' },
        { choice: 2, text: '東日本大震災からの復興を円滑かつ迅速に進めることなどを目的として，「復興庁」が新設された。' },
        { choice: 3, text: '行政手続のオンライン化によるデジタル社会の形成などを目的として，「デジタル庁」が新設された。' },
        { choice: 4, text: '子どもと家庭の福祉保健政策を総合的に進めることなどを目的として新設された「こども家庭庁」は，厚生労働省におかれている。' }
      ],
      answer: [{ answer_number: 8, correct_choice: 4, correct_option_text: '子どもと家庭の福祉保健政策を総合的に進めることなどを目的として新設された「こども家庭庁」は，厚生労働省におかれている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [9],
      points: 3,
      question_text: `生徒Ｘは，近代国家の成立について調べ，国家の強制力に関する資料をみつけた（マックス・ヴェーバー『職業としての政治』）。資料から読みとれる内容として最も適当なものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: '資料中の過去においては，暴力行使は国家に特有の手段であり，国家が用いる通常かつ唯一の手段でもある。' },
        { choice: 2, text: '資料中の今日において，国家と暴力の関係は特別に緊密であるが，それ以前に暴力行使はいかなる団体にも認められたことがない。' },
        { choice: 3, text: '資料中の今日において，国家はある一定の領域の内部における正当な物理的暴力行使の唯一の源泉とみなされている。' },
        { choice: 4, text: '資料中の過去においては，国家の許容した範囲内でのみ，国家以外の団体や個人が物理的暴力を行使することが認められていた。' }
      ],
      answer: [{ answer_number: 9, correct_choice: 3, correct_option_text: '資料中の今日において，国家はある一定の領域の内部における正当な物理的暴力行使の唯一の源泉とみなされている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-2',
      section: 2,
      question_no: 2,
      answer_numbers: [10],
      points: 3,
      question_text: `生徒Ｘは，国家が運営する社会保障の仕組みに注目し，日本の雇用保険と労働者災害補償保険（労災保険）について次のメモを作成した。空欄【ア】・【イ】に当てはまるものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

〇雇用保険: 労働者が失業したときなどに給付を行う制度である。労働者が失業したときの主な給付の財源の負担者は，【ア】。
〇労災保険: 労働者が業務に起因して負傷したり病気になったりしたときなどに給付を行う制度である。給付の財源となる保険料の負担者は，【イ】。

【アに当てはまる記述】
ａ 失業が事業主の経営判断や労働者の転職・求職行動を原因として生じるという考え方により，事業主と労働者とされている
ｂ 失業が政府の経済政策や雇用政策と無縁ではなく事業主や労働者だけでは対処できない原因でも生じるという考え方により，事業主，労働者，政府の三者とされている

【イに当てはまる記述】
ｃ 給付を受けうる労働者も負担すべきという考え方により，事業主と労働者とされている
ｄ 事業から利益を得る事業主が負担すべきという考え方により，事業主のみとされている`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 10, correct_choice: 4, correct_option_text: 'ア―ｂ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-3',
      section: 2,
      question_no: 3,
      answer_numbers: [11],
      points: 4,
      question_text: `生徒Ｘは，国家の運営を支える公務員が結成する団体について調べてみた。そして，Ｘは，日本における公務員の労働基本権に関する全農林警職法事件の最高裁判所判決をみながら，生徒Ｙと議論している。空欄【ア】〜【ウ】に当てはまるものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

判決文:「公務員の従事する職務には公共性がある一方，法律によりその主要な勤務条件が定められ，身分が保障されているほか，適切な代償措置が講じられているのであるから，…公務員の【ア】およびそのあおり行為等を禁止するのは，勤労者をも含めた国民全体の共同利益の見地からするやむをえない制約というべきであって，憲法２８条に違反するものではない」。

Ｘ：この判決がいう代償措置とは，たとえば，【イ】が国家公務員の給与などの勤務条件の改善を勧告する制度のことだよね。
Ｙ：勧告された内容を国が実施しない場合には本当に代償措置があるといえるのかな。
Ｘ：公務員の職務に公共性があることなどの事情を考慮すると，現行法で，【ウ】と思うよ。

【ア】ａ 不当労働行為 / ｂ 争議行為
【イ】ｃ 人事院 / ｄ 内閣人事局
【ウ】ｅ 一般職の国家公務員は勤務条件の維持改善を目的とする職員団体をつくることができ，職員団体から申入れを受けた機関は交渉に応ずべき地位にあるものとされるにとどまっているのもやむをえない / ｆ 一般職の国家公務員は勤務条件の維持改善を目的とする職員団体をつくることができないとされる代わりに，国会が勤務条件を法律で定めてその適正さを確保しようとするのもやむをえない`,
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
      answer: [{ answer_number: 11, correct_choice: 5, correct_option_text: 'ア―ｂ イ―ｃ ウ―ｅ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-4',
      section: 2,
      question_no: 4,
      answer_numbers: [12],
      points: 3,
      question_text: `国と地方公共団体との関係に関心をもった生徒Ｘは，両者の関係に関する日本国憲法や地方自治法の規定を調べ，次のメモを作成した。空欄【ア】・【イ】に当てはまるものの組合せとして最も適当なものを，後の①〜④のうちから一つ選べ。

憲法第９２条の「地方自治の本旨」の内容のうち，国から独立した団体を設け，その団体の意思と責任において地方の事務を処理するべきであるという考え方を，【ア】の原則という。
また，地方分権一括法で改正された地方自治法では，国と地方公共団体の役割分担に関して，【イ】という両者の関係が定められている。

【ア】ａ 団体自治 / ｂ 住民自治
【イ】ｃ 住民に身近な行政については，まずは国が責任を負い，国は地方公共団体に対して指揮監督を行う / ｄ 住民に身近な行政については，まずは地方公共団体が責任を負い，国は地方公共団体による施策の実施を補助する`,
      options: [
        { choice: 1, text: 'ア―ａ イ―ｃ' },
        { choice: 2, text: 'ア―ａ イ―ｄ' },
        { choice: 3, text: 'ア―ｂ イ―ｃ' },
        { choice: 4, text: 'ア―ｂ イ―ｄ' }
      ],
      answer: [{ answer_number: 12, correct_choice: 2, correct_option_text: 'ア―ａ イ―ｄ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-5',
      section: 2,
      question_no: 5,
      answer_numbers: [13],
      points: 3,
      question_text: `宗教団体に関心をもった生徒Ｙは，日本国憲法における宗教に関する規定について調べた。信教の自由や政教分離の原則に関する次の記述ア〜ウのうち，正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 宗教団体などを結成する宗教的結社の自由は，憲法が保障する信教の自由に含まれる。
イ 一定の要件を満たした宗教団体には，国から特権を受けたり政治上の権力を行使したりすることが憲法上認められている。
ウ 国および地方公共団体は，宗教教育をはじめとして，いかなる宗教的活動も行ってはならない。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 13, correct_choice: 5, correct_option_text: 'アとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-6',
      section: 2,
      question_no: 6,
      answer_numbers: [14],
      points: 3,
      question_text: '消費者団体に関心をもった生徒Ｙは，特定商取引法等にも消費者団体訴訟制度を導入した２００８年の法改正について調べた。メモから読みとれる内容として最も適当なものを，後の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '特定商取引法等にも消費者団体訴訟制度を導入した背景の一つとして，違反行為に対処する上での行政規制の過剰があげられる。' },
        { choice: 2, text: '民事上のルールである消費者団体訴訟制度の活用は，事業者の経済活動に対する規制緩和の一環ということができる。' },
        { choice: 3, text: '消費者被害の未然防止や拡大防止のための取組みは，適格消費者団体のみが行うこととなった。' },
        { choice: 4, text: '消費者団体訴訟制度の導入には，限りのある行政資源を重大な消費者被害に集中的に投入することを可能にするという効果も想定される。' }
      ],
      answer: [{ answer_number: 14, correct_choice: 4, correct_option_text: '消費者団体訴訟制度の導入には，限りのある行政資源を重大な消費者被害に集中的に投入することを可能にするという効果も想定される。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-7',
      section: 2,
      question_no: 7,
      answer_numbers: [15],
      points: 3,
      question_text: `生徒Ｙは，日本の会社の組織や責任について，生徒Ｘと議論している。会話文中の空欄【ア】〜【ウ】に当てはまるものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｙ：株式会社では，株主は，会社の債務に対して，【ア】よ。
Ｘ：会社の債務について出資者がどこまで責任を負うかは，【イ】も同じだね。
Ｙ：株主が【ア】という仕組みには，自らの経済的利益を優先し，社会にとって望ましくない活動を会社にさせうるという意見もあるよ。
Ｘ：【ウ】は，そうした事態を避けるために有効だよね。

【ア】ａ 出資額をこえた責任は負わない / ｂ 出資額をこえた責任を負う
【イ】ｃ 合同会社 / ｄ 合名会社
【ウ】ｅ 会社が株主代表訴訟を通じて株主の責任を追及していくこと / ｆ 会社に社会的責任を果たさせて幅広いステークホルダーの利益を確保すること`,
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
      answer: [{ answer_number: 15, correct_choice: 2, correct_option_text: 'ア―ａ イ―ｃ ウ―ｆ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q2-8',
      section: 2,
      question_no: 8,
      answer_numbers: [16],
      points: 3,
      question_text: `家族という集団に関心をもった生徒Ｙは，日本の２００９年の臓器移植法改正について調べ，脳死した者に家族がいる場合における制度の改正前後の内容をメモにまとめた。メモから読みとれる内容として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 法改正の前後を通じて，本人が臓器を提供しない意思を表示していれば医師は臓器を摘出できないため，臓器を提供しないという本人の自己決定は，家族の意思にかかわらず実現される仕組みとなっている。
イ 法改正後は，本人の年齢にかかわらず，本人の臓器提供の意思が不明なときには家族の書面による承諾で医師が臓器を摘出できるが，本人が臓器を提供しない意思を表示しているときには臓器を摘出できない仕組みとなっている。
ウ 法改正後は，本人が臓器を提供する意思を書面で表示していれば家族が反対していても医師は臓器を摘出でき，臓器を提供するとの本人の自己決定は，家族の意思にかかわらず実現される仕組みとなっている。`,
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
      question_id: '2024_main-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [17],
      points: 3,
      question_text: `国で生産できる財が「小麦」，「小麦粉」，「パン」だけであると仮定し，農家・製粉会社・製パン会社からなる経済を考える。農家は小麦を製粉会社に計50万円で販売。製粉会社は小麦粉を製パン会社に計150万円で販売。製パン会社はパンを消費者に計400万円で販売した。他の原材料はないものとする。
このとき，製パン会社の生み出した付加価値額は【エ】万円であり，この国のGDPは【オ】万円である。【エ】・【オ】に入る数値の組合せとして正しいものを，後の①〜⑥のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'エ ２５０ オ ２５０' },
        { choice: 2, text: 'エ ２５０ オ ４００' },
        { choice: 3, text: 'エ ２５０ オ ６００' },
        { choice: 4, text: 'エ ４００ オ ２５０' },
        { choice: 5, text: 'エ ４００ オ ４００' },
        { choice: 6, text: 'エ ４００ オ ６００' }
      ],
      answer: [{ answer_number: 17, correct_choice: 2, correct_option_text: 'エ ２５０ オ ４００' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-2',
      section: 3,
      question_no: 2,
      answer_numbers: [18],
      points: 3,
      question_text: `生徒Ｘと生徒Ｙは国民所得について会話している。会話文中の空欄【ア】〜【ウ】に当てはまるものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｙ：GDP に海外からの純所得を加え，固定資本減耗を除き，そこからさらに間接税を差し引き，補助金を加えた額は【ア】と呼ばれるよ。
Ｘ：生産に貢献した者に分配された総額が，どのように【イ】に充てられたかという点も興味深いね。
Ｙ：生産面からみた総額と，分配面からみた総額と，【イ】面からみた総額とは，それぞれの大きさを比較するとどれが一番大きいのだろうか。
Ｘ：もちろん，【ウ】よ。

【ア】ａ GNI（国民総所得） / ｂ NI（国民所得）
【イ】ｃ 支出 / ｄ 投資
【ウ】ｅ 生産面からみた総額が一番大きい / ｆ どの面からみた総額もすべて等しい`,
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
      answer: [{ answer_number: 18, correct_choice: 6, correct_option_text: 'ア―ｂ イ―ｃ ウ―ｆ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-3',
      section: 3,
      question_no: 3,
      answer_numbers: [19],
      points: 3,
      question_text: `次の記述ア〜ウのうち，市場の失敗の例として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア 市場で特定の企業の支配が進み，その企業が価格支配力をもつ。
イ ある企業の周辺の住民が，対価を受け取ることなく企業活動による不利益を被る。
ウ 市場で取引を行う場合，売り手がもっている情報をすべて買い手ももっている。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 19, correct_choice: 4, correct_option_text: 'アとイ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-4',
      section: 3,
      question_no: 4,
      answer_numbers: [20],
      points: 3,
      question_text: `GDPデフレーターに関するメモ中の空欄【ア】・【イ】に当てはまるものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

〇２０１０年の名目 GDP は４００兆円，２０２０年の名目 GDP は５４０兆円，２０１０年の実質 GDP は４００兆円，２０２０年の実質 GDP は３６０兆円である経済を考えた場合，２０１０年を基準年とした場合の２０２０年の GDP デフレーターは【ア】である。
〇この結果をみると，基準年と比較して２０２０年の物価は【イ】したといえる。

【ア】ａ ６６ / ｂ ９０ / ｃ １３５ / ｄ １５０
【イ】ｅ 上昇 / ｆ 下落`,
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
      answer: [{ answer_number: 20, correct_choice: 7, correct_option_text: 'ア―ｄ イ―ｅ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-5',
      section: 3,
      question_no: 5,
      answer_numbers: [21],
      points: 3,
      question_text: `同一の汚染物質を排出する企業 A（汚染水100トン/年, 濃度1%）と企業 B（汚染水500トン/年, 濃度2%）が存在する地域がある。1年間に排出される汚染物質の総量（現在計11トン）を，いかなる場合においても規制導入以前より確実に減少させる規制の内容として正しいものを，後の①〜④のうちから一つ選べ。`,
      options: [
        { choice: 1, text: '汚染水の濃度を企業 A と企業 B ともに０．１％ までに制限するが，汚染水の年間排出量は制限しない。' },
        { choice: 2, text: '汚染水の濃度は制限しないが，汚染水の年間排出量を企業 A は５０トンまでに，企業 B は２００トンまでに制限する。' },
        { choice: 3, text: '汚染水の濃度を企業 A と企業 B ともに１．５％ までに制限し，汚染水の年間排出量を企業 A は１２０トンまでに，企業 B は６００トンまでに制限する。' },
        { choice: 4, text: '汚染水の濃度を企業 A は１％ までに，企業 B は２％ までに制限し，汚染水の年間排出量を企業 A は３００トンまでに，企業 B は４００トンまでに制限する。' }
      ],
      answer: [{ answer_number: 21, correct_choice: 3, correct_option_text: '汚染水の濃度を企業 A と企業 B ともに１．５％ までに制限し，汚染水の年間排出量を企業 A は１２０トンまでに，企業 B は６００トンまでに制限する。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-6',
      section: 3,
      question_no: 6,
      answer_numbers: [22],
      points: 3,
      question_text: `景気循環に関する資料において，日本の1989年〜1994年の対前年増減額（資料2: 振れ幅約-1〜+3兆円, 資料3: 振れ幅約-10〜+15兆円, 資料4: 振れ幅約0〜+25兆円）について，空欄【ア】〜【ウ】に当てはまる語句（「GDP」「民間設備投資」「民間部門の在庫」）の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'ア GDP イ 民間部門の在庫 ウ 民間設備投資' },
        { choice: 2, text: 'ア GDP イ 民間設備投資 ウ 民間部門の在庫' },
        { choice: 3, text: 'ア 民間部門の在庫 イ GDP ウ 民間設備投資' },
        { choice: 4, text: 'ア 民間部門の在庫 イ 民間設備投資 ウ GDP' },
        { choice: 5, text: 'ア 民間設備投資 イ GDP ウ 民間部門の在庫' },
        { choice: 6, text: 'ア 民間設備投資 イ 民間部門の在庫 ウ GDP' }
      ],
      answer: [{ answer_number: 22, correct_choice: 4, correct_option_text: 'ア 民間部門の在庫 イ 民間設備投資 ウ GDP' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-7',
      section: 3,
      question_no: 7,
      answer_numbers: [23],
      points: 4,
      question_text: `自動車とオレンジを生産するA国とB国の労働力モデル（技術革新前: A国 自動車20人/オレンジ8人, B国 自動車10人/オレンジ6人）。技術革新後（A国 自動車【ア】人/オレンジ8人, B国 自動車10人/オレンジ6人）で，自動車生産に比較優位をもつ国が変わる【ア】に当てはまる数値（ａ 15, ｂ 10, ｃ 5）として正しいものの組合せを，後の①〜⑦から一つ選べ。`,
      options: [
        { choice: 1, text: 'ａ' },
        { choice: 2, text: 'ｂ' },
        { choice: 3, text: 'ｃ' },
        { choice: 4, text: 'ａとｂ' },
        { choice: 5, text: 'ａとｃ' },
        { choice: 6, text: 'ｂとｃ' },
        { choice: 7, text: 'ａとｂとｃ' }
      ],
      answer: [{ answer_number: 23, correct_choice: 6, correct_option_text: 'ｂとｃ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q3-8',
      section: 3,
      question_no: 8,
      answer_numbers: [24],
      points: 3,
      question_text: '安価な冷凍野菜の輸入解禁が国内の生鮮野菜市場に与える影響として，消費者が生鮮野菜の価格が高いほど冷凍野菜を好んで購入する傾向にあるとき，生鮮野菜の需要曲線を表す図として最も適当なものを，次の①〜④のうちから一つ選べ（高価格ほど左シフト幅が大きい図）。',
      options: [
        { choice: 1, text: '図①（価格にかかわらず一律に左シフト）' },
        { choice: 2, text: '図②（高価格ほど大きく左へシフトし需要曲線が傾斜化）' },
        { choice: 3, text: '図③（高価格ほど右へシフト）' },
        { choice: 4, text: '図④（低価格ほど大きく右へシフト）' }
      ],
      answer: [{ answer_number: 24, correct_choice: 2, correct_option_text: '図②（右上）' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [25],
      points: 4,
      question_text: `『統治二論（市民政府二論）』，『戦争と平和の法』，『リヴァイアサン』の記述ア〜ウと著者名 a: グロティウス, b: ホッブズ, c: ロック との組合せとして正しいものを，後の①〜⑥のうちから一つ選べ。
（イ:「人びとが，かれらすべてを威圧しておく共通の権力なしに，生活しているときには…自身のつよさと自分自身の工夫とが与えるもののほかには，なんの保証もなしに生きている…」）`,
      options: [
        { choice: 1, text: 'ア―a　イ―b　ウ―c' },
        { choice: 2, text: 'ア―a　イ―c　ウ―b' },
        { choice: 3, text: 'ア―b　イ―a　ウ―c' },
        { choice: 4, text: 'ア―b　イ―c　ウ―a' },
        { choice: 5, text: 'ア―c　イ―a　ウ―b' },
        { choice: 6, text: 'ア―c　イ―b　ウ―a' }
      ],
      answer: [{ answer_number: 25, correct_choice: 6, correct_option_text: 'ア―c　イ―b　ウ―a' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-2',
      section: 4,
      question_no: 2,
      answer_numbers: [26],
      points: 4,
      question_text: `アジアで人口が多いインド・インドネシア・中国の年齢別人口ピラミッドに基づき，２０５０年に高齢化が進み生産年齢人口（15〜64歳）割合が最も落ち込むと考えられる国【ア】と，総人口に占める生産年齢人口割合が低下する状態を表す語句【イ】の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。`,
      options: [
        { choice: 1, text: 'ア インド イ 人口オーナス' },
        { choice: 2, text: 'ア インド イ 人口ボーナス' },
        { choice: 3, text: 'ア インドネシア イ 人口オーナス' },
        { choice: 4, text: 'ア インドネシア イ 人口ボーナス' },
        { choice: 5, text: 'ア 中国 イ 人口オーナス' },
        { choice: 6, text: 'ア 中国 イ 人口ボーナス' }
      ],
      answer: [{ answer_number: 26, correct_choice: 5, correct_option_text: 'ア 中国 イ 人口オーナス' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-3',
      section: 4,
      question_no: 3,
      answer_numbers: [27],
      points: 4,
      question_text: 'アジアのインフラ開発や ODA（政府開発援助）に関連する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '中国が取り組む一帯一路構想は，現代のシルクロードとして，陸路のみによる経済圏構築をめざしているものである。' },
        { choice: 2, text: '中国が主導して設立されたアジアインフラ投資銀行への参加は，アジア諸国に限定されている。' },
        { choice: 3, text: '自然災害や紛争による被災者の救援のために日本の ODA として行われる食料や医療品の無償援助は，国際収支の第二次所得収支に含まれる。' },
        { choice: 4, text: 'ODA は発展途上国の経済発展のために行われるものであり，日本では開発協力大綱によって日本の国益を考慮せずに行うことが示されている。' }
      ],
      answer: [{ answer_number: 27, correct_choice: 3, correct_option_text: '自然災害や紛争による被災者の救援のために日本の ODA として行われる食料や医療品の無償援助は，国際収支の第二次所得収支に含まれる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-4',
      section: 4,
      question_no: 4,
      answer_numbers: [28],
      points: 4,
      question_text: `家計の金融資産構成（日本: 現預金54.3%, 株式等10.0% / アメリカ: 現預金13.3%, 株式等37.8% / ユーロエリア: 現預金34.3%, 株式等18.2%）についての会話文中の空欄【ア】・【イ】に当てはまる語句の組合せとして最も適当なものを，後の①〜⑥のうちから一つ選べ。

Ｙ：一般に，収益性が高い金融資産は，安全性や流動性が【ア】といわれているね。
Ｙ：私は資産が減る可能性を最も低くしたいから，リターンが低くてもいいな。そういう意味では，この資料の中だと【イ】のような金融資産構成の方が私の考え方に合っているな。`,
      options: [
        { choice: 1, text: 'ア 低い イ 日本' },
        { choice: 2, text: 'ア 低い イ アメリカ' },
        { choice: 3, text: 'ア 低い イ ユーロエリア' },
        { choice: 4, text: 'ア 高い イ 日本' },
        { choice: 5, text: 'ア 高い イ アメリカ' },
        { choice: 6, text: 'ア 高い イ ユーロエリア' }
      ],
      answer: [{ answer_number: 28, correct_choice: 1, correct_option_text: 'ア 低い イ 日本' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-5',
      section: 4,
      question_no: 5,
      answer_numbers: [29],
      points: 4,
      question_text: `宇宙条約（宇宙空間平和利用条約）の条文に基づいて判断したとき，当事国である J 国の行為で宇宙条約違反となる事例として正しいものはどれか。当てはまるものをすべて選び，その組合せとして最も適当なものを，後の①〜⑦のうちから一つ選べ。

ア J 国は，地球を回る軌道上に，核兵器を搭載した人工衛星を乗せた。
イ J 国は，自国の宇宙船が着陸した月面上のある場所の周辺を，自国の領土であると主張し，占拠した。
ウ J 国の企業 K が製作し J 国内から打ち上げた人工衛星が，他の当事国の領域に落下して甚大な損害を与えたところ，その原因は企業 K にあったことが立証されたので，J 国は自国に国際的な責任はないと主張して責任をとらなかった。`,
      options: [
        { choice: 1, text: 'ア' },
        { choice: 2, text: 'イ' },
        { choice: 3, text: 'ウ' },
        { choice: 4, text: 'アとイ' },
        { choice: 5, text: 'アとウ' },
        { choice: 6, text: 'イとウ' },
        { choice: 7, text: 'アとイとウ' }
      ],
      answer: [{ answer_number: 29, correct_choice: 7, correct_option_text: 'アとイとウ' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_main-Q4-6',
      section: 4,
      question_no: 6,
      answer_numbers: [30],
      points: 4,
      question_text: `科学技術の利用とリスクについての会話文中の空欄【ア】〜【ウ】に当てはまるものの組合せとして最も適当なものを，後の①〜⑧のうちから一つ選べ。

Ｘ：発電時の排熱を暖房や給湯などに利用して熱効率を高める【ア】の技術を導入する事例もあるよね。
Ｙ：情報通信技術の進展でプライバシー侵害のリスクが高まったよ。日本においてプライバシーの権利は，【イ】。
Ｙ：先端技術は軍事利用されることもあるよ。そのため日本では，【ウ】。

【ア】ａ スマートグリッド / ｂ コージェネレーション
【イ】ｃ 現在，自らについての情報が勝手に利用されないように，それをコントロールする権利でもあるととらえられているよね / ｄ 憲法制定時から重要だと認識されていたので，憲法第１３条は，私生活をみだりに公開されない自由を明文で保障しているよね
【ウ】ｅ 経済安全保障推進法に基づいて，半導体など特定の重要な先端技術の流出を防止するための制度作りが行われているよ / ｆ １９８０年代の日米貿易摩擦で対象の品目に含まれていた半導体を，制限なく輸出できるようにするための政策が実施されているよ`,
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
      answer: [{ answer_number: 30, correct_choice: 5, correct_option_text: 'ア―ｂ イ―ｃ ウ―ｅ' }],
      explanation: null,
      correction_applied: false
    }
  ]
};

export const EXAM_2024_FOLLOWUP: ExamData = {
  metadata: {
    id: '2024_followup',
    year: 2024,
    session: '追試験',
    subject: '政治・経済',
    totalQuestions: 30,
    totalPoints: 100,
    notes: ['旧課程「政治・経済」追・再試験（全30問・100点満点）']
  },
  questions: [
    {
      question_id: '2024_followup-Q1-1',
      section: 1,
      question_no: 1,
      answer_numbers: [1],
      points: 3,
      question_text: '日本の地方財政に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '地方交付税交付金は，使途が特定されている特定財源である。' },
        { choice: 2, text: '国庫支出金は，地方自治体が自由に使い道を決めることができる一般財源である。' },
        { choice: 3, text: '地方税のうち，道府県民税や市町村民税などの住民税は直接税に分類される。' },
        { choice: 4, text: '自主財源の割合が高い自治体ほど，地方債への依存度が高くなる傾向にある。' }
      ],
      answer: [{ answer_number: 1, correct_choice: 3, correct_option_text: '地方税のうち，道府県民税や市町村民税などの住民税は直接税に分類される。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_followup-Q1-2',
      section: 1,
      question_no: 2,
      answer_numbers: [2],
      points: 3,
      question_text: '日本国憲法における国民の権利と義務に関する記述として誤っているものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '勤労の権利は憲法で保障されていると同時に，勤労の義務も定められている。' },
        { choice: 2, text: '教育を受けさせる義務は，保護者がその保護する子女に普通教育を受けさせる義務である。' },
        { choice: 3, text: '納税の義務は，法律の定めるところにより国民に課せられる憲法上の義務である。' },
        { choice: 4, text: '法の下の平等の規定により，皇族や外国人も含め一切の例外なく選挙権が平等に付与されている。' }
      ],
      answer: [{ answer_number: 2, correct_choice: 4, correct_option_text: '法の下の平等の規定により，皇族や外国人も含め一切の例外なく選挙権が平等に付与されている。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_followup-Q1-3',
      section: 1,
      question_no: 3,
      answer_numbers: [3],
      points: 4,
      question_text: '国会の権限と運営に関する記述として正しいものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '条約の承認について衆議院と参議院で異なった議決をした場合，両院協議会を開いても意見が一致しないときは衆議院の議決が国会の議決となる。' },
        { choice: 2, text: '内閣総理大臣の指名において，参議院が衆議院と異なった議決をしたときは，両院協議会を開くことなく直ちに衆議院の指名が国会の指名となる。' },
        { choice: 3, text: '法律案の議決で参議院が否決した場合，衆議院が出席議員の過半数で再可決すれば法律となる。' },
        { choice: 4, text: '予算の先議権は参議院に認められている。' }
      ],
      answer: [{ answer_number: 3, correct_choice: 1, correct_option_text: '条約の承認について衆議院と参議院で異なった議決をした場合，両院協議会を開いても意見が一致しないときは衆議院の議決が国会の議決となる。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_followup-Q2-1',
      section: 2,
      question_no: 1,
      answer_numbers: [4],
      points: 3,
      question_text: '日本銀行の金融政策に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '日本銀行が公開市場操作で国債を買い入れる買いオペレーションを行うと，市場の通貨量が減少する。' },
        { choice: 2, text: '日本銀行の金融政策決定会合は，政府の指示に従って政策金利を決定しなければならない。' },
        { choice: 3, text: 'マイナス金利政策では，民間金融機関が日本銀行当座預金に預け入れる一部の残高にマイナスの金利が適用された。' },
        { choice: 4, text: '預金準備率操作は，現在でも日本の金融政策の日常的・主要な操作手段として頻繁に変更されている。' }
      ],
      answer: [{ answer_number: 4, correct_choice: 3, correct_option_text: 'マイナス金利政策では，民間金融機関が日本銀行当座預金に預け入れる一部の残高にマイナスの金利が適用された。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_followup-Q3-1',
      section: 3,
      question_no: 1,
      answer_numbers: [5],
      points: 4,
      question_text: '国際通貨制度の変遷に関する記述として正しいものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: 'ブレトンウッズ体制下では，米ドルのみが金との兌換性を維持し，各国通貨は米ドルに対して固定相場制をとった。' },
        { choice: 2, text: 'スミソニアン協定により，主要先進国は一斉に変動為替相場制へと移行した。' },
        { choice: 3, text: 'キングストン合意では，金の公定価格が復活し，再び金本位制への復帰が確認された。' },
        { choice: 4, text: 'プラザ合意では，深刻なドル高を是正するために主要5カ国（G5）が協調介入を行い，急激な円安が進行した。' }
      ],
      answer: [{ answer_number: 5, correct_choice: 1, correct_option_text: 'ブレトンウッズ体制下では，米ドルのみが金との兌換性を維持し，各国通貨は米ドルに対して固定相場制をとった。' }],
      explanation: null,
      correction_applied: false
    },
    {
      question_id: '2024_followup-Q4-1',
      section: 4,
      question_no: 1,
      answer_numbers: [6],
      points: 3,
      question_text: '国際連合の主要機関とその機能に関する記述として最も適当なものを，次の①〜④のうちから一つ選べ。',
      options: [
        { choice: 1, text: '安全保障理事会の常任理事国5カ国は，実質事項の採決において大国一致の原則に基づく拒否権をもつ。' },
        { choice: 2, text: '総会の決議は，すべての加盟国に対して法的拘束力をもつ。' },
        { choice: 3, text: '国際司法裁判所（ICJ）の裁判は，当事国の一方が拒絶しても裁判が自動的に開始される義務的管轄権が全面的に認められている。' },
        { choice: 4, text: '経済社会理事会は，平和維持活動（PKO）の派遣を最終決定する最高機関である。' }
      ],
      answer: [{ answer_number: 6, correct_choice: 1, correct_option_text: '安全保障理事会の常任理事国5カ国は，実質事項の採決において大国一致の原則に基づく拒否権をもつ。' }],
      explanation: null,
      correction_applied: false
    }
  ]
};

