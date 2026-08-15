import React from 'react';
import { ExternalLink, Sparkles, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

export const AppFooterCredits: React.FC = () => {
  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-amber-200/60 text-stone-500 space-y-5">
      {/* AI利用方針と正確性に関する重要なお知らせ・免責事項 */}
      <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200/90 space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-950">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>AI利用と掲載内容の正確性に関するお知らせ</span>
        </div>
        <div className="space-y-2 text-[11px] sm:text-xs text-stone-700 leading-relaxed">
          <p>
            本アプリに収録されている問題・選択肢・解答・解説は、下記の正規の公的試験問題および記載された出典資料に基づいて編纂・照合されており、<strong className="text-stone-900 font-semibold">出典に基づかない無根拠な創作情報（AIが勝手に生成した架空の問題・解答解説等）は一切利用しておりません</strong>。
          </p>
          <p>
            一方で、本アプリの開発および問題データのデジタル構造化・カリキュラム整理・解説のフォーマット作成においては<strong className="text-stone-900 font-semibold">AI技術を全面的に使用</strong>しております。細心の照合・校正を行っておりますが、<strong className="text-amber-950 font-semibold">掲載されている問題・解答・解説の正誤が100パーセント正しいとは言い切れません</strong>。
          </p>
          <p className="text-[10px] sm:text-[11px] text-stone-500 bg-white/80 p-2.5 rounded-xl border border-amber-200/60">
            ※ 受験勉強や本番対策に際して疑義が生じた場合や、最新の法改正・制度変更の細部については、必ず文部科学省検定済教科書や大学入試センター公式発表、公式の過去問題集・資料集と併せてご確認ください。
          </p>
        </div>
      </div>

      {/* 出典・参考文献 */}
      <div className="bg-stone-50/80 rounded-2xl p-4 sm:p-5 border border-stone-200/80 space-y-3.5 shadow-2xs">
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-800">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>References & Data Sources（出典・参考文献・参照サイト）</span>
        </div>
        <p className="text-[11px] text-stone-600 leading-relaxed">
          本アプリ内の過去問データ・学習カリキュラム・要点整理は、以下の公的機関および信頼性の高い学習リソースを参照して編纂されています。
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {/* 出典1: 高校公民・政治経済 過去問サイト */}
          <li className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs hover:border-amber-300 transition-colors">
            <a
              href="https://k-koumin.com/seikei-kakomon/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                <div className="text-[11px] font-bold text-stone-900 group-hover:text-amber-700 transition-colors flex items-center justify-between gap-1">
                  <span>高校公民 政治経済過去問</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0" />
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  センター試験・共通テストの政治経済過去問および詳細解説
                </div>
              </div>
              <div className="text-[10px] text-amber-700/80 font-mono mt-2 truncate">
                https://k-koumin.com/seikei-kakomon/
              </div>
            </a>
          </li>

          {/* 出典2: イチゴドリル 政治経済プリント */}
          <li className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs hover:border-amber-300 transition-colors">
            <a
              href="https://ichigo-drill.jp/seikei-print"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                <div className="text-[11px] font-bold text-stone-900 group-hover:text-amber-700 transition-colors flex items-center justify-between gap-1">
                  <span>イチゴドリル 政治経済プリント</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0" />
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  高校政治・経済の要点整理プリント・重要用語一問一答
                </div>
              </div>
              <div className="text-[10px] text-amber-700/80 font-mono mt-2 truncate">
                https://ichigo-drill.jp/seikei-print
              </div>
            </a>
          </li>

          {/* 出典3: 大学入試センター */}
          <li className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs hover:border-amber-300 transition-colors">
            <a
              href="https://www.dnc.ac.jp/kyotsu/kakomondai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                <div className="text-[11px] font-bold text-stone-900 group-hover:text-amber-700 transition-colors flex items-center justify-between gap-1">
                  <span>大学入試センター（DNC）過去問題</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0" />
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  共通テスト「公共、政治・経済」「政治・経済」本試・追試・試作問題
                </div>
              </div>
              <div className="text-[10px] text-amber-700/80 font-mono mt-2 truncate">
                https://www.dnc.ac.jp/kyotsu/kakomondai/
              </div>
            </a>
          </li>

          {/* 出典4: ノビタスタディ */}
          <li className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs hover:border-amber-300 transition-colors">
            <a
              href="https://novita-study.com/2327/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full group"
            >
              <div>
                <div className="text-[11px] font-bold text-stone-900 group-hover:text-amber-700 transition-colors flex items-center justify-between gap-1">
                  <span>ノビタスタディ 政治経済</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0" />
                </div>
                <div className="text-[10px] text-stone-500 mt-1">
                  政治・経済の単元別要点まとめ・共通テスト頻出度分析
                </div>
              </div>
              <div className="text-[10px] text-amber-700/80 font-mono mt-2 truncate">
                https://novita-study.com/2327/
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* 開発・AI技術クレジット */}
      <div className="bg-stone-50/80 rounded-xl p-4 border border-stone-200/80 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>AI Development & Technologies</span>
        </div>
        <p className="text-[11px] text-stone-500 leading-relaxed">
          本アプリケーションは、最先端の生成AIモデルを活用したカリキュラム構造化・問題検証・UI構築プロセスを通じて開発されています。
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {/* Google AI Studio */}
          <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-stone-200 shadow-2xs text-[11px] font-medium text-stone-800">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
            <span>Google AI Studio</span>
          </div>

          {/* Claude (Anthropic) */}
          <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-stone-200 shadow-2xs text-[11px] font-medium text-stone-800">
            <svg className="w-3.5 h-3.5 text-[#D97757]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.75v7.8L12 19.5 6 15.75V7.95l6-3.75z" />
            </svg>
            <span>Claude (Anthropic)</span>
          </div>

          {/* ChatGPT (OpenAI) */}
          <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-stone-200 shadow-2xs text-[11px] font-medium text-stone-800">
            <svg className="w-3.5 h-3.5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1684a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zM20.187 4.505a4.4755 4.4755 0 0 1 .5346 3.0137l-.142-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0L9.1731 8.0438V5.7114a.0804.0804 0 0 1 .0332-.0615L14.26 2.767a4.4992 4.4992 0 0 1 5.927 1.738zM8.3984 15.2282l-2.02-1.1684a.0757.0757 0 0 1-.038-.052V8.4252a4.4992 4.4992 0 0 1 7.371-3.4539l-.142.0805L8.7911 7.81a.7948.7948 0 0 0-.3927.6813v6.7369zm1.0932-3.2366l3.3543-1.9357 3.3543 1.9357v3.8715l-3.3543 1.9357-3.3543-1.9357z" />
            </svg>
            <span>ChatGPT (OpenAI)</span>
          </div>
        </div>
      </div>

      {/* 著作権・免責事項 */}
      <div className="text-center space-y-1.5 text-[10px] text-stone-400">
        <div className="flex items-center justify-center gap-1 text-stone-500">
          <ShieldCheck className="w-3 h-3 text-stone-400" />
          <span>共通テスト「公共、政治・経済」「政治・経済」受験生向け学習支援ツール</span>
        </div>
        <p>© 2026 共通テスト政治・経済 マスター演習 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

