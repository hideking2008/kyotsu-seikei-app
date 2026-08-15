import React, { useState } from 'react';
import { RawQuestionData } from '../data/types';
import { Maximize2, Minimize2, FileText, BarChart3, Table as TableIcon, MapPin, ZoomIn } from 'lucide-react';

interface MaterialViewerProps {
  question: RawQuestionData;
  className?: string;
}

export const MaterialViewer: React.FC<MaterialViewerProps> = ({ question, className = '' }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!question.has_material) {
    return null;
  }

  const pdfName = question.material_pdf || '資料集.pdf';
  const pageNum = question.material_pdf_page || 1;
  const materialId = question.material_ids?.[0] || `${question.id}_material.png`;

  // Render specific interactive graphics/diagrams/tables based on question.id
  const renderMaterialGraphic = () => {
    switch (question.id) {
      // 政治分野
      case 'pe_0011':
        return (
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-sm space-y-2">
            <div className="font-bold text-amber-900 text-xs tracking-wide uppercase border-b border-amber-200 pb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              【資料】近代民主政治思想と社会契約説の論点
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 pt-1">
              <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                <span className="font-semibold text-amber-800">ホッブズ『リヴァイアサン』</span>
                <p className="mt-1 text-stone-600">自然状態＝万人の万人に対する闘争。絶対君主への権利譲渡による平和維持。</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                <span className="font-semibold text-amber-800">ロック『統治二論』</span>
                <p className="mt-1 text-stone-600">自然権（生命・自由・財産）保全のため政府に信託。政府の権力濫用には「抵抗権（革命権）」を肯定。</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                <span className="font-semibold text-amber-800">モンテスキュー『法の精神』</span>
                <p className="mt-1 text-stone-600">三権分立（立法・行政・司法の抑制と均衡）。</p>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-amber-100 shadow-2xs">
                <span className="font-semibold text-amber-800">ルソー『社会契約論』</span>
                <p className="mt-1 text-stone-600">公共の利益を目指す「一般意志」に基づく直接民主制を主張（代議制・間接民主制を批判）。</p>
              </div>
            </div>
          </div>
        );

      case 'pe_0019':
        return (
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-sm space-y-2">
            <div className="font-bold text-amber-900 text-xs tracking-wide uppercase border-b border-amber-200 pb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              【資料】国家権力のあり方についての抜粋文（井上幸治責任編集『世界の名著 28』）
            </div>
            <blockquote className="italic p-3 bg-white rounded-lg border-l-4 border-amber-500 text-xs sm:text-sm text-stone-800 leading-relaxed">
              「同一人，または同一の執政官団体の掌中に立法権と執行権が結合されているときには，自由はない。なぜなら，同じ君主あるいは同じ元老院が暴政的な法律を定め，それを暴政的に執行するおそれがありうるからである。<br className="hidden sm:inline" />
              裁判権が，立法権と執行権から分離されていないときにもまた，自由はない。もしそれが，立法権に結合されていれば，市民の生命と自由を支配する権力は恣意的であろう。なぜならば，裁判官が立法者なのだから。もしそれが執行権に結合されていれば，裁判官は圧制者の力をもちうることになろう。」
            </blockquote>
          </div>
        );

      case 'pe_0123':
        return (
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200 text-sm space-y-2">
            <div className="font-bold text-blue-900 text-xs tracking-wide uppercase border-b border-blue-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-blue-700" />
              【資料】戦後日本の地方自治をめぐる出来事（年代順並べ替え）
            </div>
            <div className="space-y-1.5 text-xs text-stone-800 pt-1">
              <div className="p-2 bg-white rounded border border-blue-100 flex items-start gap-2">
                <span className="font-bold text-blue-700 w-5 shrink-0">Ａ</span>
                <span>地方自治体の事務区分の再編や国の関与のルール化などを規定する，475の関連法からなる地方分権一括法が成立した。（2000年施行）</span>
              </div>
              <div className="p-2 bg-white rounded border border-blue-100 flex items-start gap-2">
                <span className="font-bold text-blue-700 w-5 shrink-0">Ｂ</span>
                <span>行財政の効率化などを図るために市町村合併が推進された結果，市町村数が1,700台に減少した。（平成の大合併 1999〜2010年）</span>
              </div>
              <div className="p-2 bg-white rounded border border-blue-100 flex items-start gap-2">
                <span className="font-bold text-blue-700 w-5 shrink-0">Ｃ</span>
                <span>住民が知事を直接選挙で選ぶようになるなど，地方自治の拡充を図る制度改革が実現した。（日本国憲法・地方自治法制定 1947年）</span>
              </div>
              <div className="p-2 bg-white rounded border border-blue-100 flex items-start gap-2">
                <span className="font-bold text-blue-700 w-5 shrink-0">Ｄ</span>
                <span>都市問題や公害が深刻になったことを背景として，全国各地で革新自治体が誕生した。（1960年代後半〜1970年代）</span>
              </div>
            </div>
          </div>
        );

      // 経済分野
      case 'pe_0161':
        return (
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-sm space-y-3">
            <div className="font-bold text-emerald-900 text-xs tracking-wide uppercase border-b border-emerald-200 pb-1 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-700" />
              【図】三つの経済主体間における経済循環の基本構造
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-100 flex flex-col items-center">
              <div className="w-full max-w-sm border-2 border-emerald-300 rounded-lg p-2 text-center font-bold text-xs bg-emerald-100/50 mb-2">
                【 家 計 】
              </div>
              <div className="w-full grid grid-cols-2 gap-2 text-xs text-stone-700 my-1">
                <div className="border border-stone-300 p-2 rounded bg-stone-50 text-center">
                  <div className="font-bold text-stone-800">左側：政府との関係</div>
                  <div className="text-[11px] text-stone-600 mt-1">家計 → [ Ａ ] → 政府</div>
                  <div className="text-[11px] text-stone-600">政府 → [ Ｃ:社会資本/公共サービス ] → 家計</div>
                </div>
                <div className="border border-stone-300 p-2 rounded bg-stone-50 text-center">
                  <div className="font-bold text-stone-800">右側：企業との関係</div>
                  <div className="text-[11px] text-stone-600 mt-1">家計 → 労働力・土地・[ Ｂ:資本 ] → 企業</div>
                  <div className="text-[11px] text-stone-600">企業 → 賃金・配当・利子 → 家計</div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 mt-2">
                <div className="border-2 border-blue-300 rounded-lg p-2 text-center font-bold text-xs bg-blue-50">
                  【 政 府 】
                </div>
                <div className="border-2 border-amber-300 rounded-lg p-2 text-center font-bold text-xs bg-amber-50">
                  【 企 業 】
                </div>
              </div>
            </div>
          </div>
        );

      case 'pe_0167':
      case 'pe_0172':
        return (
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
            <div className="font-bold text-emerald-900 text-xs tracking-wide uppercase border-b border-emerald-200 pb-1 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-700" />
              【図】完全競争市場における需要曲線・供給曲線と価格上限規制
            </div>
            <div className="p-3 bg-white rounded-lg border border-emerald-100 flex flex-col items-center">
              <svg viewBox="0 0 280 180" className="w-full max-w-xs h-auto">
                {/* 軸 */}
                <line x1="40" y1="20" x2="40" y2="150" stroke="#44403c" strokeWidth="2" />
                <line x1="40" y1="150" x2="260" y2="150" stroke="#44403c" strokeWidth="2" />
                <text x="25" y="25" fontSize="11" fill="#44403c" fontWeight="bold">価格</text>
                <text x="245" y="165" fontSize="11" fill="#44403c" fontWeight="bold">数量</text>
                {/* 需要曲線 (右下がり) */}
                <line x1="60" y1="35" x2="230" y2="140" stroke="#dc2626" strokeWidth="2.5" />
                <text x="235" y="140" fontSize="10" fill="#dc2626" fontWeight="bold">需要曲線</text>
                {/* 供給曲線 (右上がり) */}
                <line x1="60" y1="140" x2="230" y2="35" stroke="#2563eb" strokeWidth="2.5" />
                <text x="235" y="38" fontSize="10" fill="#2563eb" fontWeight="bold">供給曲線</text>
                {/* 均衡点 P0, Q0 */}
                <line x1="40" y1="87.5" x2="145" y2="87.5" stroke="#78716c" strokeDasharray="3,3" />
                <line x1="145" y1="87.5" x2="145" y2="150" stroke="#78716c" strokeDasharray="3,3" />
                <text x="20" y="91" fontSize="10" fill="#78716c">P₀</text>
                <text x="140" y="165" fontSize="10" fill="#78716c">Q₀</text>
                {/* 規制価格 P' (P0より低い) */}
                <line x1="40" y1="115" x2="260" y2="115" stroke="#b45309" strokeWidth="1.5" />
                <text x="18" y="118" fontSize="10" fill="#b45309" fontWeight="bold">P′</text>
                <line x1="100" y1="115" x2="100" y2="150" stroke="#2563eb" strokeDasharray="2,2" />
                <text x="96" y="165" fontSize="10" fill="#2563eb" fontWeight="bold">Q₁</text>
                <line x1="190" y1="115" x2="190" y2="150" stroke="#dc2626" strokeDasharray="2,2" />
                <text x="186" y="165" fontSize="10" fill="#dc2626" fontWeight="bold">Q₂</text>
              </svg>
              <div className="mt-2 text-xs text-stone-600 text-center">
                ※ 価格が P′ に上限規制された場合、供給量は Q₁、需要量は Q₂ となり超過需要（品不足）が発生。実際の取引数量は供給側の <strong className="text-amber-800">Q₁</strong> となる。
              </div>
            </div>
          </div>
        );

      case 'pe_0189':
        return (
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
            <div className="font-bold text-emerald-900 text-xs tracking-wide uppercase border-b border-emerald-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-emerald-700" />
              【資料】国民経済計算フロー諸指標の数値例
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse bg-white rounded-lg border border-stone-200">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                    <th className="p-2 font-bold">項目</th>
                    <th className="p-2 font-bold text-right">金額（兆円等）</th>
                    <th className="p-2 font-bold">対応する諸指標Ａ～Ｃ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  <tr>
                    <td className="p-2">国内総生産 (GDP)</td>
                    <td className="p-2 text-right font-mono font-semibold">500</td>
                    <td className="p-2 text-stone-500">-</td>
                  </tr>
                  <tr>
                    <td className="p-2">海外からの純所得</td>
                    <td className="p-2 text-right font-mono font-semibold">+ 20</td>
                    <td className="p-2 text-stone-500">→ GNP = GDP + 20 = 520 [ウ]</td>
                  </tr>
                  <tr>
                    <td className="p-2">固定資本減耗</td>
                    <td className="p-2 text-right font-mono font-semibold">100</td>
                    <td className="p-2 text-stone-500">→ NNP = GNP - 100 = 420 [イ]</td>
                  </tr>
                  <tr>
                    <td className="p-2">間接税 - 補助金（純間接税）</td>
                    <td className="p-2 text-right font-mono font-semibold">40</td>
                    <td className="p-2 text-stone-500">→ NI = NNP - 40 = 380 [ア]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'pe_0211':
        return (
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-sm space-y-2">
            <div className="font-bold text-emerald-900 text-xs tracking-wide uppercase border-b border-emerald-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-emerald-700" />
              【資料】銀行の信用創造プロセス（本源的預金 2,000万円・支払準備率 20%）
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse bg-white rounded-lg border border-stone-200">
                <thead>
                  <tr className="bg-emerald-100/60 border-b border-stone-200 text-stone-800 font-bold">
                    <th className="p-2">銀行</th>
                    <th className="p-2">預金</th>
                    <th className="p-2">支払準備金 (20%)</th>
                    <th className="p-2">貸出金 (80%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono text-stone-800">
                  <tr>
                    <td className="p-2 font-bold text-stone-900">Ａ銀行</td>
                    <td className="p-2 font-semibold">2,000 万円</td>
                    <td className="p-2 text-stone-600">400 万円</td>
                    <td className="p-2 text-emerald-700 font-bold">1,600 万円</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-900">Ｂ銀行</td>
                    <td className="p-2 font-semibold">1,600 万円</td>
                    <td className="p-2 text-stone-600">320 万円</td>
                    <td className="p-2 text-emerald-700 font-bold">1,280 万円</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-900">Ｃ銀行</td>
                    <td className="p-2 font-semibold">1,280 万円</td>
                    <td className="p-2 text-stone-600">256 万円</td>
                    <td className="p-2 text-emerald-700 font-bold">1,024 万円</td>
                  </tr>
                  <tr className="text-stone-400">
                    <td className="p-2">：</td>
                    <td className="p-2">：</td>
                    <td className="p-2">：</td>
                    <td className="p-2">：</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-2 bg-stone-100 rounded text-xs text-stone-600">
              公式: 預金総額 = 本源的預金 ÷ 準備率 = 2,000万 ÷ 0.2 = 1億円<br />
              増加額(信用創造額) = 預金総額 − 本源的預金 = 1億円 − 2,000万円 = <strong>8,000万円</strong>
            </div>
          </div>
        );

      // 国際分野
      case 'pe_0382':
        return (
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 text-sm space-y-2">
            <div className="font-bold text-indigo-900 text-xs tracking-wide uppercase border-b border-indigo-200 pb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-700" />
              【図】世界で起きたいくつかの紛争や戦争の場所（Ａ～Ｃ）
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-100 flex flex-col items-center">
              <div className="w-full max-w-sm grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                  <div className="font-bold text-rose-800 text-sm">[ 場所 Ａ ]</div>
                  <div className="font-semibold text-stone-800 mt-1">アフリカ中部 (ルワンダ)</div>
                  <div className="text-[11px] text-stone-600 mt-1">ベルギー独立後、フツ派とツチ派の内戦と虐殺 (説明ウ)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                  <div className="font-bold text-amber-800 text-sm">[ 場所 Ｂ ]</div>
                  <div className="font-semibold text-stone-800 mt-1">ロシア・カフカス (チェチェン)</div>
                  <div className="text-[11px] text-stone-600 mt-1">連邦政府が独立を求める共和国に軍を投入 (説明イ)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="font-bold text-blue-800 text-sm">[ 場所 Ｃ ]</div>
                  <div className="font-semibold text-stone-800 mt-1">南アジア (カシミール/印パ)</div>
                  <div className="text-[11px] text-stone-600 mt-1">領土帰属をめぐる戦争・核開発競争 (説明ア)</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pe_0386':
        return (
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 text-sm space-y-2">
            <div className="font-bold text-indigo-900 text-xs tracking-wide uppercase border-b border-indigo-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-indigo-700" />
              【利得表】国家間協調をめぐるゲーム（囚人のジレンマ型利得行列）
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse bg-white rounded-lg border border-stone-300">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th colSpan={2} rowSpan={2} className="p-2 bg-stone-100 border-r border-stone-300"></th>
                    <th colSpan={2} className="p-2 bg-blue-50 text-blue-900 font-bold border-b border-stone-300">
                      Ｂ 国 の 戦 略
                    </th>
                  </tr>
                  <tr className="border-b border-stone-300">
                    <th className="p-2 bg-blue-100/60 font-bold text-blue-800 border-r border-stone-300">協 調</th>
                    <th className="p-2 bg-blue-100/60 font-bold text-blue-800">非 協 調</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <th rowSpan={2} className="p-2 bg-amber-50 text-amber-900 font-bold border-r border-stone-300 writing-vertical sm:writing-horizontal">
                      Ａ国
                    </th>
                    <th className="p-2 bg-amber-100/60 font-bold text-amber-800 border-r border-stone-300">協 調</th>
                    <td className="p-2.5 border-r border-stone-300 bg-emerald-50/60">
                      <span className="font-bold text-amber-900">A国に 10点</span><br />
                      <span className="font-bold text-blue-900">B国に 10点</span><br />
                      <span className="text-[10px] text-emerald-700 font-semibold">(合計 20点: 最大)</span>
                    </td>
                    <td className="p-2.5">
                      <span className="text-amber-800">A国に 1点</span><br />
                      <span className="font-bold text-blue-900">B国に 15点</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 bg-amber-100/60 font-bold text-amber-800 border-r border-stone-300">非協調</th>
                    <td className="p-2.5 border-r border-stone-300">
                      <span className="font-bold text-amber-900">A国に 15点</span><br />
                      <span className="text-blue-800">B国に 1点</span>
                    </td>
                    <td className="p-2.5 bg-rose-50/60">
                      <span className="font-semibold text-amber-900">A国に 5点</span><br />
                      <span className="font-semibold text-blue-900">B国に 5点</span><br />
                      <span className="text-[10px] text-rose-700 font-semibold">(ナッシュ均衡)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'pe_0393':
        return (
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 text-sm space-y-2">
            <div className="font-bold text-indigo-900 text-xs tracking-wide uppercase border-b border-indigo-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-indigo-700" />
              【資料】比較生産費説（1単位生産に必要な労働者数）
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse bg-white rounded-lg border border-stone-300">
                <thead>
                  <tr className="bg-indigo-100/70 text-indigo-950 font-bold border-b border-stone-300">
                    <th className="p-2">国名</th>
                    <th className="p-2">電化製品 (1単位)</th>
                    <th className="p-2">衣料品 (1単位)</th>
                    <th className="p-2">総労働者数</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono text-stone-800">
                  <tr>
                    <td className="p-2 font-bold text-stone-900 bg-stone-50">Ａ 国</td>
                    <td className="p-2">40 人</td>
                    <td className="p-2 text-emerald-700 font-bold bg-emerald-50/60">10 人 (比較優位)</td>
                    <td className="p-2 text-stone-600">50 人</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-900 bg-stone-50">Ｂ 国</td>
                    <td className="p-2 text-blue-700 font-bold bg-blue-50/60">2 人 (比較優位)</td>
                    <td className="p-2">8 人</td>
                    <td className="p-2 text-stone-600">10 人</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-xs text-stone-600 bg-stone-100 p-2 rounded">
              ※ A国は衣料品(10/40=0.25)、B国は電化製品(2/8=0.25)に比較優位があるため、それぞれ特化することで全体の生産量が増加する。
            </div>
          </div>
        );

      case 'pe_0397':
        return (
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 text-sm space-y-2">
            <div className="font-bold text-indigo-900 text-xs tracking-wide uppercase border-b border-indigo-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-indigo-700" />
              【資料】比較生産費説（小麦と鉄 1単位の生産に必要な労働者数）
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse bg-white rounded-lg border border-stone-300">
                <thead>
                  <tr className="bg-indigo-100/70 text-indigo-950 font-bold border-b border-stone-300">
                    <th className="p-2">国名</th>
                    <th className="p-2">小麦 1単位の生産に必要な労働者数</th>
                    <th className="p-2">鉄 1単位の生産に必要な労働者数</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono text-stone-800">
                  <tr>
                    <td className="p-2 font-bold text-stone-900 bg-stone-50">Ａ 国</td>
                    <td className="p-2">6 人</td>
                    <td className="p-2 font-semibold">6 人</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-900 bg-stone-50">Ｂ 国</td>
                    <td className="p-2 text-emerald-700 font-bold bg-emerald-50/60">1 人</td>
                    <td className="p-2 font-semibold">4 人</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-xs text-stone-600 bg-stone-100 p-2 rounded">
              交換比率：両国間では「小麦 2単位」に対して「鉄 1単位」の比率で交換可能。
            </div>
          </div>
        );

      case 'pe_0447':
        return (
          <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 text-sm space-y-2">
            <div className="font-bold text-indigo-900 text-xs tracking-wide uppercase border-b border-indigo-200 pb-1 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5 text-indigo-700" />
              【資料】世界の政府開発援助(ODA)の実績表
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse bg-white rounded-lg border border-stone-300">
                <thead>
                  <tr className="bg-indigo-100/70 text-indigo-950 font-bold border-b border-stone-300">
                    <th className="p-2">国名</th>
                    <th className="p-2">ODAの総額 (億ドル)</th>
                    <th className="p-2">ODAの対GNI比 (%)</th>
                    <th className="p-2">指標 [ Ａ ] (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono text-stone-800">
                  <tr>
                    <td className="p-2 font-bold text-indigo-800">[ Ｂ: アメリカ ]</td>
                    <td className="p-2 font-bold">344.1</td>
                    <td className="p-2">0.19</td>
                    <td className="p-2">100.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-indigo-800">[ Ｃ: ドイツ ]</td>
                    <td className="p-2 font-bold">247.4</td>
                    <td className="p-2">0.70</td>
                    <td className="p-2">88.4</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-700">イギリス</td>
                    <td className="p-2">180.5</td>
                    <td className="p-2">0.70</td>
                    <td className="p-2">98.3</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-indigo-800">[ Ｄ: 日本 ]</td>
                    <td className="p-2 font-bold">104.2</td>
                    <td className="p-2">0.20</td>
                    <td className="p-2">87.0</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-stone-700">フランス</td>
                    <td className="p-2">96.2</td>
                    <td className="p-2">0.38</td>
                    <td className="p-2">81.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-xs text-stone-600 bg-stone-100 p-2 rounded">
              ※ [ Ａ ] = グラント・エレメント（借款の贈与相当割合＝支援の緩やかさ度合い）
            </div>
          </div>
        );

      default:
        // Default clean visual container for all other material items
        return (
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-sm space-y-2">
            <div className="flex items-center justify-between border-b border-stone-200 pb-1.5">
              <span className="font-bold text-stone-800 text-xs flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                【資料・図表】 {pdfName} (P.{pageNum})
              </span>
              <span className="text-[11px] font-mono text-stone-500 bg-stone-200/70 px-2 py-0.5 rounded">
                {materialId}
              </span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed">
              <div className="font-semibold text-stone-900 mb-1">《出題資料・図表》</div>
              <p>本問は原資料PDF「<strong>{pdfName}</strong>」の <strong>{pageNum}ページ</strong>（{materialId}）に掲載された図表・資料を参照して解答する問題です。</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`my-3.5 ${className}`}>
      {/* 資料ヘッダーバー */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-xl text-xs font-semibold shadow-xs">
        <div className="flex items-center gap-1.5 truncate">
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">必要資料・図表: {pdfName} (P.{pageNum})</span>
        </div>
        <button
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className="flex items-center gap-1 text-[11px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded transition-colors"
          title="拡大表示"
        >
          {isZoomed ? <Minimize2 className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
          <span>{isZoomed ? '縮小' : '拡大'}</span>
        </button>
      </div>

      {/* 資料本体 */}
      <div className="border-x border-b border-amber-200 bg-white rounded-b-xl p-2.5 sm:p-3 shadow-xs">
        {renderMaterialGraphic()}
      </div>

      {/* 拡大モーダル */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 shadow-2xl border border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-3">
              <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>資料詳細表示: {pdfName} (第{pageNum}頁)</span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-1 rounded-lg text-stone-500 hover:bg-stone-100 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
            {renderMaterialGraphic()}
            <div className="mt-4 text-right">
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-4 py-1.5 bg-stone-800 text-white rounded-lg text-xs font-semibold hover:bg-stone-700 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
