import React, { useState } from 'react';
import {
  BookOpen,
  TrendingUp,
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Layers,
  ArrowRight,
  Smartphone,
  HelpCircle,
  Clock,
  Zap,
  GraduationCap
} from 'lucide-react';

interface AppGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTextbook: () => void;
  onNavigateToQuiz: () => void;
  onNavigateToExam: () => void;
  onNavigateToMaterialPractice?: () => void;
}

interface SlideItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  featurePoints: { label: string; detail: string }[];
  targetAudience: string;
  previewType: 'overview' | 'textbook' | 'quiz' | 'exam' | 'material' | 'roadmap';
  actionButton?: {
    label: string;
    action: () => void;
  };
}

export const AppGuideModal: React.FC<AppGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTextbook,
  onNavigateToQuiz,
  onNavigateToExam,
  onNavigateToMaterialPractice,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides: SlideItem[] = [
    {
      id: 'overview',
      badge: 'APP OVERVIEW',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      title: '共通テスト「公共・政治・経済」を最短攻略',
      subtitle: 'インプットから過去問演習・資料問題・詳細解説までこの1本で完結',
      description:
        '新課程の共通テスト「公共、政治・経済」（全5回分：本試・追再試・試作問題）および過去問プリント（政治・経済・国際）を徹底分析。公共分野から政経全分野・実戦資料問題まで最短ルートで高得点を狙えるオールインワン学習ツールです。',
      featurePoints: [
        { label: '① 体系マスター教科書', detail: '全500語の因果関係を長文×赤シートで一気にインプット' },
        { label: '② 一問一答スピード演習', detail: '公共・政経の頻出度S/A/B/Cランク別、苦手復習＆ブックマーク機能' },
        { label: '③ 共通テスト過去問演習', detail: '2025・2026年全5回分の過去問を本番形式＆詳細解説付きで演習' },
        { label: '④ 資料問題 演習モード', detail: 'グラフ・古典抜粋・比較図・年代整序など頻出の図表付き問題を特訓' },
      ],
      targetAudience: '公共・政経を初学から一気に仕上げたい方・最短で得点源にしたい全受験生',
      previewType: 'overview',
    },
    {
      id: 'textbook',
      badge: 'FEATURE 01',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
      title: '体系マスター教科書（赤シート講義）',
      subtitle: '単なる用語の丸暗記から「歴史的背景・因果関係の理解」へ',
      description:
        '全19章にわたる教科書レベルの解説長文を収録。重要キーワード（全500語）が赤字で隠れる「赤シートモード」をワンタップで切り替え、読解しながら即アウトプットできます。',
      featurePoints: [
        { label: '赤シートON/OFF', detail: 'タップで暗記用赤文字を隠し、タップで答え合わせ' },
        { label: '全19章・完全体系化', detail: '民主政治の基本から最新のデジタル社会・国際紛争まで網羅' },
        { label: '目次ジャンプ', detail: '苦手な分野やテスト直前の確認箇所へ一瞬で移動' },
      ],
      targetAudience: '用語のつながりや因果関係が頭に入っていない方・教科書代わりに通読したい方',
      previewType: 'textbook',
      actionButton: {
        label: '体系マスター教科書を開く',
        action: () => {
          onClose();
          onNavigateToTextbook();
        },
      },
    },
    {
      id: 'quiz',
      badge: 'FEATURE 02',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      title: '一問一答 スピード演習',
      subtitle: '厳選500問を頻出度ランク別＆多様なモードで高速周回',
      description:
        '共テ出題頻度に基づき全問題を「S・A・B・C」に格付け。時間が限られた理系生は「Sランク・Aランク最優先モード」で短期間で基礎〜標準を完成させることができます。',
      featurePoints: [
        { label: '理系最優先S/A特化', detail: '配点効率の高い最頻出問題から集中的にマスター' },
        { label: '苦手・ブックマーク復習', detail: '間違えた問題だけを抽出して弱点を即克服' },
        { label: '分野別セレクト', detail: '「憲法」「金融」「国際政治」など特定テーマを集中的に強化' },
      ],
      targetAudience: 'スキマ時間にサクサク知識定着させたい方・問題演習数を増やしたい方',
      previewType: 'quiz',
      actionButton: {
        label: '一問一答を始める',
        action: () => {
          onClose();
          onNavigateToQuiz();
        },
      },
    },
    {
      id: 'material',
      badge: 'FEATURE 03',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      title: '資料問題 演習モード（図表・グラフ・古典抜粋）',
      subtitle: '共テ最大の差がつく「資料読み取り問題」を分野別に集中特訓',
      description:
        '市場の需要供給曲線、GDP三面等価、日銀オペ、古典思想家の原典抜粋、地方自治年表、国連・国際条約の比較表など、視覚資料・提示文を用いた実践問題を集中攻略できます。',
      featurePoints: [
        { label: '図表・資料ビューア', detail: '鮮明なSVGグラフや比較テーブルをズーム機能付きで閲覧' },
        { label: '分野別＆資料付き特訓', detail: '「政治」「経済」「国際」の各分野から資料問題のみを抽出' },
        { label: '根拠がわかる詳細解説', detail: '出題の狙い・グラフの読み方・背景知識まで丁寧に解説' },
      ],
      targetAudience: '資料問題やグラフ問題で失点しやすい方・実戦問題の演習量を増やしたい方',
      previewType: 'material',
      actionButton: onNavigateToMaterialPractice ? {
        label: '資料問題演習を始める',
        action: () => {
          onClose();
          onNavigateToMaterialPractice();
        },
      } : undefined,
    },
    {
      id: 'exam',
      badge: 'FEATURE 04',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
      title: '共通テスト 過去問実戦演習',
      subtitle: '2025・2026年度（全5回分・計160問）を完全収録',
      description:
        '新課程施行後の「本試験」「追・再試験」「試作問題」を完全網羅。各大問（会話文・資料読み取り・思考力問題）を本番同様の画面で解き、丁寧な根拠解説で復習できます。',
      featurePoints: [
        { label: '全5回分の過去問', detail: '2026年本試/追試・2025年本試/追試・試作問題を収録' },
        { label: '大問別・全問実戦', detail: 'まとまった1回分の演習も、大問ごとのピンポイント演習も自在' },
        { label: '合否を分ける詳細解説', detail: 'なぜその選択肢が誤りなのか、関連知識まで徹底解説' },
      ],
      targetAudience: '共テ特有の思考力問題や会話文問題に慣れたい方・本番シミュレーションをしたい方',
      previewType: 'exam',
      actionButton: {
        label: '過去問演習一覧へ',
        action: () => {
          onClose();
          onNavigateToExam();
        },
      },
    },
    {
      id: 'roadmap',
      badge: 'RECOMMENDED STEP',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      title: 'おすすめの学習ステップ（合格ロードマップ）',
      subtitle: '理系生・短期間で高得点を狙うための推奨フロー',
      description:
        'このアプリの機能を組み合わせることで、無駄なく最短距離で実力を養成できます。自分の現在のレベルや残り期間に合わせて活用してください。',
      featurePoints: [
        { label: 'STEP 1: 体系理解', detail: '「体系マスター教科書」を通読し、赤シートで基本用語の流れを把握' },
        { label: 'STEP 2: 基礎定着', detail: '「一問一答 演習」でSランク・Aランクから優先的に全問正解を目指す' },
        { label: 'STEP 3: 資料特訓', detail: '「資料問題 演習」で頻出のグラフ・図表・条約比較問題をマスター' },
        { label: 'STEP 4: 本番演習', detail: '「過去問実戦演習」で本番形式（100点満点）の思考力問題に挑戦' },
      ],
      targetAudience: '何から始めればよいか迷っている方・学習計画を立てたい方',
      previewType: 'roadmap',
    },
  ];

  const current = slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-3xl shadow-2xl border border-amber-200/90 overflow-hidden flex flex-col max-h-[92vh]">
        {/* App Store風 トップバー（ブランド & 閉じるボタン） */}
        <div className="px-5 pt-4 pb-3 border-b border-amber-200/70 flex items-center justify-between bg-white/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white shadow-xs shadow-amber-500/20">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-900 tracking-tight">公共政経 一問一答</span>
                <span className="text-[9px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold border border-amber-300">
                  共テ攻略
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-stone-500 font-medium">
                <span className="text-amber-600 flex items-center">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </span>
                <span>4.9 (公共・政経・共テ特化)</span>
              </div>
            </div>
          </div>

          <button
            id="btn-close-app-guide"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
            title="閉じる"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* クイック切替タブピル（横スクロール） */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-stone-50/80 border-b border-amber-200/50 overflow-x-auto no-scrollbar">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx;
            const shortLabels = ['総合概要', '① 教科書', '② 一問一答', '③ 資料問題', '④ 過去問', '⑤ 合格ステップ'];
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-amber-50 border-amber-200/70'
                }`}
              >
                {shortLabels[idx]}
              </button>
            );
          })}
        </div>

        {/* メインスライドコンテンツ（スクロール可能領域） */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* スライドヘッダー */}
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${current.badgeColor}`}>
                {current.badge}
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-400">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
              {current.title}
            </h3>
            <p className="text-xs font-medium text-amber-800/90">
              {current.subtitle}
            </p>
          </div>

          {/* App Store風 スマホモックアップ / スクリーンショットプレビューカード */}
          <div className="bg-gradient-to-b from-stone-900 to-stone-800 rounded-2xl p-4 text-white shadow-lg shadow-stone-900/10 border border-stone-700/60 relative overflow-hidden">
            {/* 上部ノッチ＆ステータスバー風演出 */}
            <div className="flex justify-between items-center text-[9px] text-stone-400 mb-2.5 px-1 font-mono">
              <span>9:41</span>
              <div className="w-12 h-2.5 bg-black/50 rounded-full mx-auto" />
              <span>100%</span>
            </div>

            {/* 各画面のリアルなUIモックプレビュー */}
            {current.previewType === 'overview' && (
              <div className="space-y-2 bg-[#FAF8F5] rounded-xl p-3 text-stone-800 shadow-inner">
                <div className="flex items-center justify-between pb-1.5 border-b border-amber-200/80">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-xs font-bold text-stone-900">政経 一問一答 マスター</span>
                  </div>
                  <span className="text-[9px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded">共テ特化</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                  <div className="bg-rose-50 border border-rose-200 p-2 rounded-lg text-rose-900">
                    <div className="font-bold flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-rose-600" />
                      体系マスター教科書
                    </div>
                    <div className="text-[9px] text-stone-600 mt-0.5">全500語・赤シート講義</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-2 rounded-lg text-amber-900">
                    <div className="font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                      一問一答 演習
                    </div>
                    <div className="text-[9px] text-stone-600 mt-0.5">S/A/B/C ランク別攻略</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg text-blue-900">
                    <div className="font-bold flex items-center gap-1">
                      <Award className="w-3 h-3 text-blue-600" />
                      過去問実戦演習
                    </div>
                    <div className="text-[9px] text-stone-600 mt-0.5">2025・2026 全5回分</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 p-2 rounded-lg text-orange-900">
                    <div className="font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-600" />
                      頻出キーワード
                    </div>
                    <div className="text-[9px] text-stone-600 mt-0.5">TOP25・引っかけ解説</div>
                  </div>
                </div>
              </div>
            )}

            {current.previewType === 'textbook' && (
              <div className="space-y-2 bg-[#FAF8F5] rounded-xl p-3 text-stone-800 shadow-inner">
                <div className="flex items-center justify-between pb-1 border-b border-rose-200 text-xs font-bold text-rose-900">
                  <span>第2章 日本国憲法の基本原理</span>
                  <span className="text-[9px] bg-rose-600 text-white px-2 py-0.5 rounded-full">赤シート ON</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-[11px] leading-relaxed space-y-1">
                  <p>
                    大日本帝国憲法では主権は天皇にあったが、日本国憲法では
                    <span className="bg-rose-100 text-rose-700 font-bold px-1 py-0.5 rounded mx-0.5 border border-rose-300">
                      [ 国民主権 ]
                    </span>
                    が採用され、象徴天皇制となった。
                  </p>
                  <p>
                    基本的人権は
                    <span className="bg-rose-500 text-transparent select-none px-2 py-0.5 rounded mx-0.5 cursor-pointer">
                      永久不可侵
                    </span>
                    の権利として保障されている。
                  </p>
                </div>
              </div>
            )}

            {current.previewType === 'quiz' && (
              <div className="space-y-2 bg-[#FAF8F5] rounded-xl p-3 text-stone-800 shadow-inner">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">Q. 448 / 500</span>
                  <span className="bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded">頻出 Sランク</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-xs font-bold text-stone-900">
                  給付に要する財源を現役労働者の保険料で賄う年金方式を何と言うか？
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-amber-100/80 text-amber-900 border border-amber-300 p-2 rounded-lg text-center font-bold text-xs">
                    答えを見る (タップ)
                  </div>
                  <div className="bg-emerald-50 text-emerald-800 border border-emerald-300 p-2 rounded-lg text-center font-bold text-xs">
                    正解：賦課方式
                  </div>
                </div>
              </div>
            )}

            {current.previewType === 'exam' && (
              <div className="space-y-2 bg-[#FAF8F5] rounded-xl p-3 text-stone-800 shadow-inner">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-blue-900">2026年度 共通テスト 本試験</span>
                  <span className="bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">第2問 問1</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-200 text-[10px] space-y-1">
                  <div className="font-semibold text-stone-900">衆議院の優越に関する会話文読解</div>
                  <div className="text-stone-600 text-[9px] line-clamp-2">
                    「予算の議決において参議院で不一致となった場合、両院協議会を開く必要があるか…」
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-stone-500 pt-0.5">
                  <span>配点: 3点</span>
                  <span className="text-emerald-700 font-bold">全問 根拠・関連知識解説付き</span>
                </div>
              </div>
            )}

            {current.previewType === 'roadmap' && (
              <div className="space-y-1.5 bg-[#FAF8F5] rounded-xl p-3 text-stone-800 shadow-inner text-[10px]">
                <div className="font-bold text-emerald-900 pb-1 border-b border-emerald-200 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  最短8〜9割奪取の4ステップ
                </div>
                <div className="grid grid-cols-4 gap-1 text-center font-bold text-[9px]">
                  <div className="bg-rose-50 border border-rose-200 p-1.5 rounded text-rose-900">
                    <div>1. 教科書</div>
                    <div className="text-[8px] font-normal text-stone-500">赤シート</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-1.5 rounded text-amber-900">
                    <div>2. 一問一答</div>
                    <div className="text-[8px] font-normal text-stone-500">S/Aランク</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-1.5 rounded text-blue-900">
                    <div>3. 過去問</div>
                    <div className="text-[8px] font-normal text-stone-500">2025/2026</div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 p-1.5 rounded text-emerald-900">
                    <div>4. 苦手克服</div>
                    <div className="text-[8px] font-normal text-stone-500">総仕上げ</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 解説テキスト */}
          <div className="text-xs text-stone-600 leading-relaxed bg-white p-3.5 rounded-xl border border-amber-200/80">
            <p>{current.description}</p>
          </div>

          {/* 特徴箇条書きリスト */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-stone-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>主な特徴・使いどころ</span>
            </div>
            <div className="space-y-1.5">
              {current.featurePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2.5 rounded-xl border border-amber-200/60 text-xs flex items-start gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">{pt.label}</div>
                    <div className="text-stone-500 text-[11px]">{pt.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* おすすめ対象 */}
          <div className="bg-amber-50/60 border border-amber-200 p-2.5 rounded-xl text-[11px] text-amber-900 flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>
              <strong>こんな方へ:</strong> {current.targetAudience}
            </span>
          </div>

          {/* 各機能への直接ジャンプボタン（ある場合） */}
          {current.actionButton && (
            <button
              onClick={current.actionButton.action}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-amber-500/20 transition-all active:scale-[0.99]"
            >
              <span>{current.actionButton.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 下部コントローラー（ページネーション・前へ/次へ） */}
        <div className="px-5 py-3.5 bg-white border-t border-amber-200/80 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-xl transition-all ${
              currentSlide === 0
                ? 'text-stone-300 cursor-not-allowed'
                : 'text-stone-700 hover:bg-amber-50 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>前へ</span>
          </button>

          {/* ドットインジケーター */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx
                    ? 'w-6 bg-amber-600'
                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                title={`スライド ${idx + 1}`}
              />
            ))}
          </div>

          {currentSlide < slides.length - 1 ? (
            <button
              onClick={nextSlide}
              className="flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-3.5 py-2 rounded-xl transition-all shadow-xs active:scale-95"
            >
              <span>次へ</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-xl transition-all shadow-xs active:scale-95"
            >
              <span>学習を始める</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
