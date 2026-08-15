import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/db');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Political Questions (Comprehensive list from politicalData.ts)
const politicalQuestions = [
  {
    id: "pe_0001",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習01 国家と主権",
    question_number: 1,
    question_text: "問1 経済水域についての記述として最も適当なものを，次の①～④のうちから一つ選べ。",
    choices: [
      "① 各国に経済水域を設定する権利を承認する制度は，遠洋漁業が盛んな国にとって有利に働く。",
      "② 経済水域における沿岸国の権利は，生物資源のほか非生物資源の開発にも及ぶ。",
      "③ 日本は，尖閣諸島問題が存在しているために，現在まで日本沿岸に経済水域を設定していない。",
      "④ 今日，海洋は諸国の領海と経済水域によってほぼ完全に分割されていることから，国連海洋法条約は公海に関する規定を置いていない。"
    ],
    has_material: false,
    material_ids: [],
    answer: "②",
    explanation: "排他的経済水域(EEZ)では、漁業（生物資源）だけでなく海底油田や鉱物資源などの非生物資源の開発・探査・保全に関する主権的権利を有します。設定範囲は沿岸から200海里（約370km）以内、領海は12海里以内です。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0002",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習01 国家と主権",
    question_number: 2,
    question_text: "問2 主権に関連する記述として最も適当なものを，次の①～④のうちから一つ選べ。",
    choices: [
      "① ブラクトンやエドワード・コーク（クック）は，国王のもつ絶対的な支配権を擁護する議論を行った。",
      "② アメリカ合衆国憲法が連邦制を採用したのは，各州にも対外的主権を与えるためであった。",
      "③ フランスでは，主権という考え方は，ローマ教皇の権威と結びついて，キリスト教社会の連帯を強めるために主張された。",
      "④ 絶対主義王権を擁護しようとした王権神授説は，国王の権力は神の意思以外の何ものにも拘束されないと主張した。"
    ],
    has_material: false,
    material_ids: [],
    answer: "④",
    explanation: "王権神授説（ボシュエやフィルマーら）は、王権は神から直接授けられたものであり、国王は神に対してのみ責任を負い国民や法律に拘束されないと主張しました。①コークは「王は人の下にあるべきではないが、神と法の下にあるべきである」というブラクトンの言葉を引用し王権を制限しました（法の支配）。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0003",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習01 国家と主権",
    question_number: 3,
    question_text: "問3 主権には複数の意味があるが，その説明Ａ～Ｃとその具体例ア～ウとの組合せとして正しいものを，下の①～⑥のうちから一つ選べ。\n\nＡ 国家の統治権    Ｂ 国家権力の最高・独立性   Ｃ 国家の政治のあり方を最終的に決定する最高の権力\n\nア ｢主権の存する日本国民の総意｣(日本国憲法第１条)\nイ ｢すべての加盟国の主権平等の原則｣(国連憲章第２条)\nウ ｢日本国ノ主権ハ本州，北海道，九州及四国…(中略)…ニ局限セラルヘシ｣(ポツダム宣言第８項)",
    choices: [
      "① Ａ―ア    Ｂ―イ   Ｃ―ウ",
      "② Ａ―ア    Ｂ―ウ   Ｃ―イ",
      "③ Ａ―イ    Ｂ―ア   Ｃ―ウ",
      "④ Ａ―イ    Ｂ―ウ   Ｃ―ア",
      "⑤ Ａ―ウ    Ｂ―ア   Ｃ―イ",
      "⑥ Ａ―ウ    Ｂ―イ   Ｃ―ア"
    ],
    has_material: false,
    material_ids: [],
    answer: "⑥",
    explanation: "主権の3つの意味：\n・Ａ（統治権そのもの、統治が及ぶ地理的範囲）＝ウ（ポツダム宣言の領域限定）\n・Ｂ（他国の干渉を受けない最高・独立の権力、対外的独立）＝イ（国連憲章の主権平等）\n・Ｃ（国政の最終決定権・国民主権）＝ア（憲法第1条の国民主権）\nよって⑥が正解です。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0004",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習01 国家と主権",
    question_number: 4,
    question_text: "問4 主権国家体制に関連する記述として誤っているものを，次の①～④のうちから一つ選べ。",
    choices: [
      "① ウェストファリア条約は，ヨーロッパにおいて，主権国家を構成単位とする国際社会の成立を促した。",
      "② 主権国家の領空には，排他的経済水域の上空が含まれる。",
      "③ 国際組織を創設することによる集団安全保障体制は，国際連盟と国際連合で採用された。",
      "④ 国際法には，条約などの成文国際法と，慣習国際法(国際慣習法)とがある。"
    ],
    has_material: false,
    material_ids: [],
    answer: "②",
    explanation: "領空は「領土」と「領海」の上空に限られます。排他的経済水域(EEZ)や公海の上空は「国際空域（公海上空）」であり、他国航空機の自由な飛行（上空飛行の自由）が認められています。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0005",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習01 国家と主権",
    question_number: 5,
    question_text: "問5 「国家の３要素」の一つとして「領域」がある。次のＡ～Ｄのうち，残りの二つの要素の組合せとして正しいものを，下の①～⑥のうちから一つ選べ。\n\nＡ 人 権       Ｂ 主 権      Ｃ 領 主     Ｄ 国 民",
    choices: [
      "① ＡとＢ",
      "② ＡとＣ",
      "③ ＡとＤ",
      "④ ＢとＣ",
      "⑤ ＢとＤ",
      "⑥ ＣとＤ"
    ],
    has_material: false,
    material_ids: [],
    answer: "⑤",
    explanation: "イェリネックが体系化した国家の3要素は「主権（Ｂ）」「国民（Ｄ）」「領域」です。主権の概念を最初に唱えたのはジャン・ボダン（フランス）です。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0011",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習02 民主政治の基本原理と社会契約説",
    question_number: 11,
    question_text: "問11 次の資料（社会契約説の思想家比較）を踏まえ、近代民主政治の基本思想に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① ホッブズは『統治二論』を著し、自然権を守るために国家へ権利を信託し、政府が信託に違反した場合は抵抗権・革命権を行使できると説いた。",
      "② ロックは『リヴァイアサン』を著し、自然状態を「万人の万人に対する闘争」と捉え、絶対君主に全権利を譲渡することを主張した。",
      "③ モンテスキューは『法の精神』において、立憲君主制のもとで立法・行政・司法の三権分立による抑制と均衡の重要性を唱えた。",
      "④ ルソーは代議制民主主義を最善の政治形態と位置づけ、議会制を通じた個人の特殊意志の集約を求めた。"
    ],
    has_material: true,
    material_ids: ["pe_0011_material.png"],
    answer: "③",
    explanation: "①『統治二論』および抵抗権はロックの主張です。②『リヴァイアサン』および「万人の万人に対する闘争」はホッブズの主張です。③モンテスキューは『法の精神』で三権分立論を展開し、アメリカ合衆国憲法等に決定的な影響を与えました。④ルソーは『社会契約論』で直接民主制と「一般意志」を主張し、代議制（間接民主制）を痛烈に批判しました。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [4, 5, 6], answer_pages: [6] },
    material_pdf: "political_materials.pdf",
    material_pdf_page: 1
  },
  {
    id: "pe_0019",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習03 権力分立と法の支配",
    question_number: 19,
    question_text: "問19 次の資料文（国家権力のあり方についての古典的著作の抜粋）を読み、その著者の思想および権力分立に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① この文章の著者はホッブズであり、国家権力の集中による秩序形成を最も重視した。",
      "② この文章の著者はモンテスキューであり、権力の濫用を防ぐためには立法・執行・裁判の分離が不可欠であると論じた。",
      "③ この文章の著者はルソーであり、一般意志の分割不可能性を根拠に権力の分立を厳しく批判した。",
      "④ この文章の著者はロックであり、司法権が立法権に優越する違憲立法審査権の確立を求めた。"
    ],
    has_material: true,
    material_ids: ["pe_0019_material.png"],
    answer: "②",
    explanation: "資料文はモンテスキュー『法の精神』の抜粋です。「同一人の掌中に立法権と執行権が結合されているときには自由はない」「裁判権が立法権・執行権から分離されていないときにも自由はない」と述べ、専制を防ぎ自由を確保するための三権分立を説いています。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [7, 8, 9], answer_pages: [9] },
    material_pdf: "political_materials.pdf",
    material_pdf_page: 3
  },
  {
    id: "pe_0025",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習04 日本国憲法の基本原理",
    question_number: 25,
    question_text: "問25 日本国憲法における平和主義および自衛権・安全保障に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 砂川事件判決において最高裁判所は、在日米軍の駐留は憲法第9条第2項の保持を禁止された戦力に当たると判示した。",
      "② 1968年に佐藤栄作首相が表明した非核三原則は、「持たず、つくらず、持ち込ませず」の3原則である。",
      "③ 2015年に成立した安全保障関連法では、日本が直接攻撃を受けていない場合であっても、密接な関係にある他国への武力攻撃により日本の存立が脅かされる明白な危険があるときは、無制限に集団的自衛権を行使できるとされた。",
      "④ 日本国憲法前文および第9条には、自衛のための交戦権の行使が明文で肯定されている。"
    ],
    has_material: false,
    material_ids: [],
    answer: "②",
    explanation: "②非核三原則は「持たず、つくらず、持ち込ませず」であり、国是とされています。①砂川事件では最高裁は「統治行為論」を援用し在日米軍は憲法9条2項の「戦力」には当たらないと合憲判断を示しました。③安全保障関連法における集団的自衛権の行使は「武力行使の新3要件」に基づき限定的に容認されたものであり無制限ではありません。④憲法9条2項は「国の交戦権は、これを認めない」と規定しています。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [10, 11, 12], answer_pages: [12] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0051",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習08 国会と内閣・統治機構",
    question_number: 51,
    question_text: "問51 衆議院の優越が認められている事項に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 憲法改正の発議において、参議院が否決した場合でも衆議院が出席議員の3分の2以上で再可決すれば成立する。",
      "② 予算の先議権は参議院に認められており、議決が一致しない場合は衆議院の議決が優先される。",
      "③ 内閣不信任決議権は衆議院のみに認められており、参議院には認められていない。",
      "④ 条約の承認において両院の議決が一致せず両院協議会を開いても成案が得られない場合、衆議院の議決後60日を経過すれば自動的に衆議院の議決が国会の議決となる。"
    ],
    has_material: false,
    material_ids: [],
    answer: "③",
    explanation: "③内閣不信任決議（および信任決議）は衆議院のみの権能です（第69条）。①憲法改正の発議には衆参両院それぞれで総議員の3分の2以上の賛成が必要であり、衆議院の優越はありません。②予算の先議権は衆議院にあります（第60条第1項）。④条約承認および内閣総理大臣指名・予算議決の期間：予算・条約は30日（自然成立）、首相指名は10日です（60日は法律案の再可決規定）。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [16, 17, 18], answer_pages: [18] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0123",
    subject: "公共・政治経済",
    category: "政治",
    unit: "政経演習13 地方自治と住民参加",
    question_number: 123,
    question_text: "問123 次の資料（戦後日本の地方自治に関する主な出来事Ａ～Ｄ）を読み、これらを年代の古いものから順に正しく並べたものを、下の①～⑥のうちから一つ選べ。\n\nＡ 地方自治体の事務区分の再編や国の関与のルール化などを規定する地方分権一括法が成立した。\nＢ 行財政の効率化などを図るため市町村合併（平成の大合併）が推進された。\nＣ 日本国憲法および地方自治法が制定され、住民が首長を直接公選する制度が導入された。\nＤ 都市問題や公害の深刻化を背景に、各地で革新自治体が誕生した。",
    choices: [
      "① Ｃ → Ｄ → Ａ → Ｂ",
      "② Ｃ → Ｄ → Ｂ → Ａ",
      "③ Ｄ → Ｃ → Ａ → Ｂ",
      "④ Ｄ → Ｃ → Ｂ → Ａ",
      "⑤ Ｃ → Ａ → Ｄ → Ｂ",
      "⑥ Ｄ → Ａ → Ｃ → Ｂ"
    ],
    has_material: true,
    material_ids: ["pe_0123_material.png"],
    answer: "①",
    explanation: "年代順の整理：\n・Ｃ：日本国憲法・地方自治法制定（1947年）\n・Ｄ：革新自治体の台頭（1960年代後半〜1970年代）\n・Ａ：地方分権一括法の成立（1999年成立・2000年施行、機関委任事務の廃止）\n・Ｂ：平成の大合併の本格進展（1999年〜2000年代中盤）\nしたがって年代順は「Ｃ → Ｄ → Ａ → Ｂ」の①が正解です。",
    source: { file: "★過去問プリント【政治編まとめ】.pdf", question_pages: [25, 26, 27], answer_pages: [27] },
    material_pdf: "political_materials.pdf",
    material_pdf_page: 15
  }
];

// 2. Economics Questions
const economicsQuestions = [
  {
    id: "pe_0161",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習16 経済主体と循環",
    question_number: 161,
    question_text: "問161 次の図は、三つの経済主体（家計・企業・政府）の間で行われる経済循環の基本構造を示したものである。図中の空欄［ Ａ ］～［ Ｃ ］に当てはまる語句の組合せとして最も適当なものを、下の①～④のうちから一つ選べ。",
    choices: [
      "① Ａ：租税　Ｂ：資本　Ｃ：公共財・公共サービス",
      "② Ａ：資本　Ｂ：租税　Ｃ：公共財・公共サービス",
      "③ Ａ：租税　Ｂ：公共財・公共サービス　Ｃ：資本",
      "④ Ａ：公共財・公共サービス　Ｂ：資本　Ｃ：租税"
    ],
    has_material: true,
    material_ids: ["pe_0161_material.png"],
    answer: "①",
    explanation: "経済循環において、家計は政府に対して［Ａ：租税（税金）］を納め、政府は家計に対して［Ｃ：公共サービスや社会保障、公共財］を提供します。また家計は企業へ労働力や土地のほか［Ｂ：資本（資金）］を提供し、企業から賃金・配当等を受け取ります。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [1, 2, 3], answer_pages: [3] },
    material_pdf: "economics_materials.pdf",
    material_pdf_page: 1
  },
  {
    id: "pe_0167",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習16 市場機構と価格弾力性",
    question_number: 167,
    question_text: "問167 次の図は、ある財の市場における需要曲線と供給曲線を示している。均衡価格と市場取引に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 政府が価格上限規制を均衡価格より低い水準に設定した場合、市場には品余り（超過供給）が発生する。",
      "② 技術革新によって生産コストが大幅に低減した場合、供給曲線は右方にシフトし均衡価格は下落する。",
      "③ 原材料の高騰は供給曲線を右方にシフトさせ、取引量の増加をもたらす。",
      "④ 消費者の所得減少により正常財の需要曲線は右方にシフトする。"
    ],
    has_material: true,
    material_ids: ["pe_0167_material.png"],
    answer: "②",
    explanation: "②技術革新（生産コスト低下）は同一価格でより多くの供給を可能にするため供給曲線を右方（下方）へシフトさせ、均衡価格は下落・取引量は増加します。①均衡価格より低い価格上限規制では需要超過（品不足）が生じます。③原材料高騰は左方シフトです。④所得減少で正常財需要は左方シフトします。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [2, 3], answer_pages: [3] },
    material_pdf: "economics_materials.pdf",
    material_pdf_page: 2
  },
  {
    id: "pe_0172",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習17 現代の企業と市場構造",
    question_number: 172,
    question_text: "問172 独占・寡占市場および市場の失敗に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 寡占市場では、価格指導者（プライス・リーダー）に追随して価格が設定される管理価格が成立しやすく、価格の下方硬直性が見られる。",
      "② 公共財は非排除性と競合性を持つため、民間市場でも最適な数量が効率的に供給される。",
      "③ 外部不経済の発生に対し、政府がピグー税を課すと市場の供給曲線は右方へシフトする。",
      "④ カルテルは企業合同のことであり、参加企業は完全に独立性を失って一つの企業に合併する。"
    ],
    has_material: true,
    material_ids: ["pe_0172_material.png"],
    answer: "①",
    explanation: "①寡占市場ではプライス・リーダーによる管理価格が形成され、コストが下がっても価格が下がりにくい「価格の下方硬直性」が生じます。②公共財は非競合性・非排除性を持ち市場では過小供給になります。③ピグー税はコスト増となるため供給曲線を左方へシフトさせます。④カルテルは企業協定（独立性は維持）であり、企業合同はトラスト、企業連携はコンツェルンです。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [4, 5, 6], answer_pages: [6] },
    material_pdf: "economics_materials.pdf",
    material_pdf_page: 3
  },
  {
    id: "pe_0185",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習19 国民所得の概念とGDP",
    question_number: 185,
    question_text: "問185 国内総生産（GDP）および国民経済計算に関する記述として最も適当なものを，次の①～④のうちから一つ選べ。",
    choices: [
      "① GDPには，主婦の家事労働やボランティア活動，地下経済の取引額がすべて推計されて計上される。",
      "② 三面等価の原則によれば，生産国民所得，分配国民所得，支出国民所得の3つの総額は事後的に一致する。",
      "③ 名目GDPを実質GDPに換算する際に用いられる物価指数を「消費者物価指数（CPI）」と呼ぶ。",
      "④ 国民総所得（GNI）は，国内総生産（GDP）から海外からの純所得受取を加算したものではなく，減算したものである。"
    ],
    has_material: false,
    material_ids: [],
    answer: "②",
    explanation: "②国民所得は生産・分配・支出のいずれの側面から計測しても等しくなる「三面等価の原則」が成立します。①市場で取引されない家事労働や地下経済はGDPに含まれません。③名目GDPから実質GDPを求めるデフレーターは「GDPデフレーター」です。④GNI ＝ GDP ＋ 海外からの純要素所得受取 です。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [7, 8, 9], answer_pages: [9] },
    material_pdf: null,
    material_pdf_page: null
  },
  {
    id: "pe_0189",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習19 景気変動と物価",
    question_number: 189,
    question_text: "問189 次の図は、景気循環の4局面（回復・好況・後退・不況）と景気変動の波を示したものである。景気変動に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 約40カ月周期の短い波はキチンの波と呼ばれ、企業の設備投資の更新が主な要因である。",
      "② 約10年周期のジュグラーの波は、在庫変動が主な要因である。",
      "③ 約50年周期のコンドラチェフの波は、技術革新（イノベーション）や資源開発が主な要因である。",
      "④ クズネッツの波は約20年周期であり、企業の大型IT投資が直接の原因である。"
    ],
    has_material: true,
    material_ids: ["pe_0189_material.png"],
    answer: "③",
    explanation: "③コンドラチェフの波（約50〜60年周期）はシュンペーターが指摘した技術革新（蒸気機関、電気、自動車等）が主な要因です。①キチンの波（約40ヶ月）は「在庫投資」、②ジュグラーの波（約10年）は「設備投資」、④クズネッツの波（約20年）は「建築・住宅投資」です。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [9, 10], answer_pages: [10] },
    material_pdf: "economics_materials.pdf",
    material_pdf_page: 4
  },
  {
    id: "pe_0211",
    subject: "公共・政治経済",
    category: "経済",
    unit: "政経演習21 金融政策と中央銀行",
    question_number: 211,
    question_text: "問211 次の図は、日本銀行が実施する公開市場操作（買いオペレーション／売りオペレーション）のメカニズムを示したものである。金融政策に関する記述として最も適当なものを、次の①～④のうちから一つ選べ。",
    choices: [
      "① 日本銀行が市中銀行から国債を買い入れる「買いオペ」を行うと、市中に出回る資金量が増加し、金利は低下傾向となる。",
      "② 景気が過熱してインフレの懸念があるとき、日本銀行は買いオペを実施してマネタリーベースを拡大させる。",
      "③ 日本銀行の「売りオペ」は、市中銀行に資金を供給して貸出金利を引き下げる効果がある。",
      "④ 準備預金制度において法定準備率を引き上げると、民間銀行の貸出余力が増加しマネーサプライが増加する。"
    ],
    has_material: true,
    material_ids: ["pe_0211_material.png"],
    answer: "①",
    explanation: "①買いオペレーションでは日銀が民間金融機関の保有国債を買い取り代金を支払うため、市中の通貨量（資金）が増加して金利は低下し、景気刺激策（金融緩和）となります。②インフレ抑制期は売りオペ（引き締め）を行います。③売りオペは資金吸収・金利上昇効果です。④準備率引き上げは貸出余力を減らします。",
    source: { file: "★過去問プリント【経済編まとめ】.pdf", question_pages: [13, 14], answer_pages: [14] },
    material_pdf: "economics_materials.pdf",
    material_pdf_page: 6
  }
];

// 3. International Questions (Loaded from internationalData.ts)
const internationalQuestions = JSON.parse(fs.readFileSync('src/data/internationalData.ts', 'utf8'));

// Write out all 3 files
fs.writeFileSync(path.join(outDir, 'political.json'), JSON.stringify(politicalQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'economics.json'), JSON.stringify(economicsQuestions, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'international.json'), JSON.stringify(internationalQuestions, null, 2), 'utf8');

console.log('Successfully updated DB JSON files:');
console.log('- political.json:', politicalQuestions.length);
console.log('- economics.json:', economicsQuestions.length);
console.log('- international.json:', internationalQuestions.length);
