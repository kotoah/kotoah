import { Metadata } from "next";
import { Syringe, ShieldCheck, Bug, Heart, Calendar, Info, AlertTriangle, CheckCircle2, Banknote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "予防医療について | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の予防医療。フィラリア予防（5月〜12月）、ノミ・マダニ対策（通年推奨）、狂犬病・混合ワクチンなど、滋賀県東近江市の環境に合わせた最適な予防プランをご提案します。",
};

export default function PreventionPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-24 bg-accent-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="grid grid-cols-12 h-full">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border border-white/20 aspect-square" />
              ))}
           </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
            Preventive Care
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">予防医療のご案内</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-bold leading-relaxed">
            病気になってから治すのではなく、<br />
            病気にさせないための「最高のプレゼント」を。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* 1. フィラリア予防 */}
            <section id="heartworm" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-3xl flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    1. フィラリア予防
                    <span className="block text-lg text-primary-600 font-bold mt-1">蚊が運ぶ恐ろしい寄生虫から守る</span>
                  </h2>
                </div>
                <Link 
                  href="/pricing#prevention-fees" 
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-2 rounded-full font-bold border-2 border-primary-100 hover:bg-primary-50 transition-all text-sm shadow-sm"
                >
                  <Banknote className="w-4 h-4" />
                  料金を確認する
                </Link>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100 space-y-10">
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  フィラリア症は、蚊によって媒介される寄生虫が心臓や肺の血管に住み着く病気です。放置すると命に関わりますが、<strong>「毎月1回の投薬」で確実に防げる病気</strong>です。
                </p>

                {/* 2026 Koto Policy */}                <div className="bg-primary-50 p-8 md:p-12 rounded-[40px] border-4 border-primary-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <CheckCircle2 className="w-24 h-24 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-black text-primary-800 mb-8 flex items-center gap-2">
                    当院の2026年フィラリア予防方針
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                      <p className="text-primary-600 font-black text-sm mb-2 uppercase tracking-wider">検査推奨期間</p>
                      <p className="text-3xl font-black text-gray-900">4/1 〜 5/31</p>
                      <p className="text-xs text-gray-400 mt-2">※理想は5月中の検査です</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                      <p className="text-primary-600 font-black text-sm mb-2 uppercase tracking-wider">投薬推奨期間</p>
                      <p className="text-3xl font-black text-gray-900">5月 〜 12月</p>
                      <p className="text-xs text-gray-400 mt-2">※計8回（毎月ほぼ同じ日に）</p>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Section */}
                <div className="space-y-12 pt-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-primary-500 rounded-full" />
                      なぜ「5月の検査」が理想的なのか
                    </h3>
                    <div className="prose prose-primary text-gray-600 leading-relaxed">
                      <p>
                        フィラリア検査は「成虫」を検出する検査です。感染してから成虫になり検出可能になるまで、最短でも5ヶ月以上かかります。
                      </p>
                      <p className="mt-4">
                        昨シーズンの最後（11月頃）に万が一感染していた場合、それを確実に検出するには翌年の5月頃まで待つ必要があるからです。
                        また、検査から投薬開始までの期間を空けすぎないこと（最大1ヶ月以内）も安全性のために重要です。
                      </p>
                    </div>
                  </div>

                  <div className="bg-soft-50 p-8 rounded-[40px] border border-soft-100">
                    <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-accent-600" />
                      知っておきたい「予防薬」の正体
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      フィラリア予防薬は、実は「感染を未然に防ぐバリア」ではなく、体内に侵入した<strong>フィラリアの幼虫をまとめて駆除する「駆虫薬」</strong>です。<br />
                      そのため、蚊がいなくなった1ヶ月後（12月）までしっかり飲ませて、その年に感染した可能性のある幼虫をすべて退治しきることが、予防の完成を意味します。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-black text-gray-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-500" />
                        ワンちゃんの場合
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        投与開始前に<strong>血液検査（抗原検査）</strong>が必須です。万が一感染がある状態で薬を飲むと、副作用のリスク（ミクロフィラリア血症に伴う反応）があるため、毎年の陰性確認を大切にしています。
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-black text-gray-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-500" />
                        猫ちゃん・フェレットちゃんの場合
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        猫やフェレットも感染するため予防は強く推奨されますが、犬と異なり<strong>「少量寄生」</strong>（寄生する数が非常に少ない）という特徴があるため、事前検査は行わず、当日の健康状態や体重測定に基づいて予防薬を処方いたします。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-soft-100 text-xs text-gray-400 leading-relaxed">
                  <p>※当院では安全性と病院のキャパシティを考慮し、4月からの検査受付を行っております。</p>
                  <p>※他院での方針に関するお問い合わせにはお答えできかねますのでご了承ください。</p>
                </div>
              </div>
            </section>

            {/* 2. ノミ・マダニ予防 */}
            <section id="flea-tick" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-accent-500 text-white rounded-3xl flex items-center justify-center shadow-lg">
                  <Bug className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  2. ノミ・マダニ予防
                  <span className="block text-lg text-accent-600 font-bold mt-1">お家の中の安全も守るために</span>
                </h2>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100 space-y-10">
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    ノミやマダニの予防を「草むらに行く時だけ」「夏の間だけ」と考えていませんか？
                    実は、現代の生活環境では<strong>一年を通した継続的なケア</strong>が、家族全員を守るために必要不可欠です。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-accent-600" />
                      なぜ「通年」予防なのか
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-soft-50 p-6 rounded-3xl border border-soft-100">
                        <p className="font-black text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent-500 rounded-full" />
                          冬でも安心できない室内環境
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          ノミは気温13度以上あれば活動・繁殖が可能です。冬場でも暖房の効いた快適な室内は、ノミにとっても「絶好の繁殖場」となります。一度侵入を許すと、卵やさなぎの状態で環境中に潜み、爆発的に増え続けるリスクがあります。
                        </p>
                      </div>
                      <div className="bg-soft-50 p-6 rounded-3xl border border-soft-100">
                        <p className="font-black text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent-500 rounded-full" />
                          滋賀の豊かな自然に潜むマダニ
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          マダニは種類によって活動時期が異なり、実は春や秋、さらには真冬でも活動する種類がいます。東近江周辺のような自然豊かな地域では、お散歩コースのわずかな草むらにもマダニは潜んでおり、常に接触の危険があります。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="bg-red-50 p-8 rounded-[40px] border-2 border-red-100">
                      <h3 className="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        人間への恐ろしい感染症
                      </h3>
                      <p className="text-sm text-red-800 leading-relaxed font-medium">
                        特に注意が必要なのが、マダニが媒介する<strong>SFTS（重症熱性血小板減少症候群）</strong>です。
                        これは動物だけでなく人間にも感染し、<strong>有効な治療薬やワクチンがなく、高い致死率が報告されている非常に危険な病気</strong>です。
                        ペットにマダニを付けないことは、飼い主様自身の命を守ることにも直結します。
                      </p>
                    </div>

                    <div className="bg-accent-500 p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-20">
                         <Bug className="w-24 h-24" />
                      </div>
                      <h3 className="text-xl font-black mb-2">当院の推奨</h3>
                      <p className="text-3xl font-black mb-4 tracking-tighter">12ヶ月（通年）予防</p>
                      <p className="text-sm opacity-90 leading-relaxed font-bold">
                        季節を問わず被害が出るケースがあるため、当院では毎月の継続的な予防を強くおすすめしています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. ワクチン接種 */}
            <section id="vaccine" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-3xl flex items-center justify-center shadow-lg">
                  <Syringe className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                  3. ワクチン接種
                  <span className="block text-lg text-primary-700 font-bold mt-1">目に見えないウイルスから身を守る</span>
                </h2>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-4 border-gray-900 p-8 shadow-[8px_8px_0px_#111827]">
                   <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                     <ShieldCheck className="w-6 h-6 text-primary-600" />
                     狂犬病予防注射
                   </h4>
                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
                     法律で義務付けられている年に1回の予防接種です。
                   </p>
                   <span className="bg-primary-100 text-primary-700 text-xs font-black px-3 py-1 border-2 border-primary-700">対象：犬</span>
                </div>
                <div className="border-4 border-gray-900 p-8 shadow-[8px_8px_0px_#111827]">
                   <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                     <Syringe className="w-6 h-6 text-primary-600" />
                     混合ワクチン
                   </h4>
                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
                     致命的な感染症を防ぐための注射です。生活スタイルに合わせて最適な種類をご提案します。
                   </p>
                   <div className="flex flex-wrap items-center gap-4">
                     <span className="bg-primary-100 text-primary-700 text-xs font-black px-3 py-1 border-2 border-primary-700">対象：犬・猫・フェレット</span>
                     <Link href="/services/prevention/vaccine" className="text-primary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                        詳細を見る <ChevronRight className="w-4 h-4" />
                     </Link>
                   </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gray-900 text-white p-8 rounded-[40px] shadow-xl">
                 <h3 className="text-xl font-black mb-6">クイックメニュー</h3>
                 <nav className="space-y-2">
                   <Link href="#heartworm" className="block p-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">フィラリア予防</Link>
                   <Link href="#flea-tick" className="block p-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">ノミ・マダニ予防</Link>
                   <Link href="#vaccine" className="block p-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">ワクチン接種</Link>
                 </nav>
              </div>

              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100">
                <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary-500" />
                  診察時のご注意
                </h2>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    ワクチン接種後は、稀にアレルギー反応（副反応）が出ることがあります。
                  </p>
                  <p className="bg-primary-50 p-4 rounded-2xl text-primary-700 font-bold">
                    万が一の際にすぐ対応できるよう、できるだけ<strong>午前中にご来院</strong>いただき、午後は様子を見守れる日の接種をお勧めしています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-black hover:bg-primary-50 px-10 py-5 rounded-full border-2 border-primary-600 transition-all shadow-lg shadow-primary-50"
          >
            ← 診療案内トップへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
