import { Metadata } from "next";
import { Bug, ShieldCheck, AlertTriangle, Info, Heart, CheckCircle2, ChevronRight, Thermometer, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ノミ・マダニ予防について | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のノミ・マダニ予防について。寄生によるリスク、予防薬の種類、通年予防の重要性などを詳しくご案内します。",
};

export default function FleaTickPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-emerald-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold mb-6 border border-white/30 uppercase tracking-widest">
            Flea & Tick Prevention
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">ノミ・マダニ予防のご案内</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            たかが小さな虫、と侮ってはいけません。<br />
            ノミやマダニは、深刻な病気を運んでくる恐ろしい存在です。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Why Prevention is Important */}
            <div className="bg-emerald-900 text-white p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-emerald-300" />
                  なぜ予防が必要なの？
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-emerald-100 leading-relaxed font-bold">
                      ノミやマダニは吸血による痒みだけでなく、命に関わる恐ろしい「感染症」を媒介します。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        </div>
                        <p className="text-sm text-emerald-50 leading-relaxed font-bold">
                          重度のアレルギー性皮膚炎の原因になります。
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        </div>
                        <p className="text-sm text-emerald-50 leading-relaxed font-bold">
                          SFTSなど、人にもうつる危険な病気を運びます。
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        </div>
                        <p className="text-sm text-emerald-50 leading-relaxed font-bold">
                          室内は暖かい環境なため、冬でも繁殖を続けます。
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-800/50 p-8 rounded-3xl border border-emerald-700">
                    <p className="text-xs text-emerald-200 leading-relaxed font-bold italic">
                      「外に出ないから大丈夫」という油断は禁物です。飼い主様の衣類に付着して侵入したり、一度家に入り込むと卵を産んで爆発的に増えてしまいます。1年を通した継続的な予防が、家族の健康を守る鍵となります。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risks Section */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-emerald-500 pl-6">寄生によるリスク</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Flea Risk */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <Bug className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900">ノミの脅威</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">ノミアレルギー性皮膚炎</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">一度のアレルギー反応で、激しい痒みや湿疹を引き起こします。</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">瓜実条虫（サナダムシ）</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">ノミを飲み込むことで感染し、お腹の中で寄生虫が育ちます。</p>
                    </div>
                  </div>
                </div>

                {/* Tick Risk */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
                      <Bug className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900">マダニの脅威</h3>
                  </div>
                  <div className="space-y-4">
                    <Link href="/services/prevention/sfts" className="block group">
                      <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 group-hover:bg-rose-100 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-4 h-4 text-rose-600" />
                        </div>
                        <h4 className="font-black text-rose-800 mb-2 text-sm flex items-center gap-2">
                          SFTS（重症熱性血小板減少症候群）
                          <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded-full">要注意</span>
                        </h4>
                        <p className="text-xs text-rose-900/70 leading-relaxed pr-6">マダニが運ぶウイルスによる病気で、人にも感染し、最悪の場合死に至る極めて危険な病気です。</p>
                        <div className="mt-3 text-[10px] font-bold text-rose-600 flex items-center gap-1">
                          詳しく見る <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">バベシア症</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">赤血球を破壊し、激しい貧血を引き起こす命に関わる病気です。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention Methods */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-emerald-500 pl-6">予防薬の種類</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                当院では、ペットの性格や飼い主様のライフスタイルに合わせて選べるよう、様々なタイプの予防薬をご用意しています。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Sparkles className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-black text-emerald-900">おやつタイプ</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">高い嗜好性があり、おやつ感覚で簡単に投与できます。シャンプーの制限もありません。</p>
                </div>
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Thermometer className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-black text-emerald-900">スポットタイプ</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">首筋に薬を垂らすタイプです。お薬を飲むのが苦手な子にも適しています。</p>
                </div>
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Heart className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-black text-emerald-900">オールインワン</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">フィラリア予防とお腹の虫、ノミ・マダニを一度にまとめて予防できます。</p>
                </div>
              </div>
            </div>

            {/* Year-round prevention */}
            <div className="bg-gray-900 p-8 md:p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-emerald-400" />
                通年予防のおすすめ
              </h2>
              <div className="space-y-6 text-emerald-100 leading-relaxed font-bold">
                <p>
                  滋賀県内でも、最近は暖冬の影響や住宅環境の変化により、冬場でもノミやマダニの活動が確認されています。
                </p>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                  <p className="text-sm">
                    春から秋だけでなく、<strong>「1年を通した（通年）予防」</strong>を行うことで、お家の中での繁殖リスクをゼロに近づけ、ご家族の安全も守ることができます。
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar / FAQ */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Caution */}
            <div className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-lg">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                もし見つけたら
              </h2>
              <div className="space-y-6 text-sm">
                <div className="bg-white/20 p-5 rounded-xl border border-white/20">
                  <h3 className="font-black mb-2 italic underline">絶対に無理に抜かないで！</h3>
                  <p className="leading-relaxed opacity-90">
                    マダニを見つけても、手やピンセットで無理に引っ張らないでください。頭部が皮膚に残って化膿したり、病原体を体内に送り込んでしまう危険があります。
                  </p>
                </div>
                <div className="bg-emerald-700 p-5 rounded-2xl font-bold">
                  <p className="mb-2">すぐにご来院ください。</p>
                  <p className="text-[10px] opacity-80 mb-4">
                    専用の器具で安全に取り除き、適切な処置を行います。
                  </p>
                  <Link href="/services/prevention/sfts" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[10px] transition-all border border-white/20">
                    <Info className="w-3 h-3" /> SFTSについて詳しく
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-emerald-500" />
                よくある質問
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-emerald-600 mb-1">Q. 市販薬との違いは？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    動物病院で処方する「医薬品」は、市販薬に比べて駆除スピードや持続性、安全性が格段に高く、確実な予防が可能です。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-600 mb-1">Q. 室内飼いでも必要？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    はい。ノミはベランダや玄関から入り込みます。一度室内で繁殖すると全滅させるのは大変なため、予防が一番の対策です。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 text-center">
              <p className="text-emerald-800 font-black mb-4">予防のご相談</p>
              <Link href="/contact" className="bg-emerald-600 text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
                お問い合わせはこちら <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
