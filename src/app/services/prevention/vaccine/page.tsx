import { Metadata } from "next";
import { Syringe, ShieldCheck, AlertTriangle, Clock, Info, Heart, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ワクチン接種について | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のワクチン接種（狂犬病・混合ワクチン）について。接種スケジュール、ワクチンの種類、アレルギー反応への対応などを詳しくご案内します。",
};

export default function VaccinePage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-primary-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold mb-6 border border-white/30 uppercase tracking-widest">
            Vaccination Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">ワクチン接種のご案内</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            大切な家族を恐ろしい感染症から守るために。<br />
            当院では、エビデンスに基づいた適切なワクチンプログラムを提案しています。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Significance */}
            <div className="bg-primary-900 text-white p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-primary-300" />
                  なぜワクチンが必要なの？
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-primary-100 leading-relaxed font-bold">
                      ワクチンは、一度かかると命に関わる恐ろしい感染症から、大切な家族を守るための「盾」です。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-primary-300" />
                        </div>
                        <p className="text-sm text-primary-50 leading-relaxed font-bold">
                          重症化・死亡のリスクを大幅に減らすことができます。
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-primary-300" />
                        </div>
                        <p className="text-sm text-primary-50 leading-relaxed font-bold">
                          他の子（動物）への感染拡大を防ぐことができます。
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-primary-300" />
                        </div>
                        <p className="text-sm text-primary-50 leading-relaxed font-bold">
                          一部の感染症は人にもうつるため、ご家族を守ることにも繋がります。
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary-800/50 p-8 rounded-3xl border border-primary-700">
                    <p className="text-xs text-primary-200 leading-relaxed font-bold italic">
                      「外に出ないから大丈夫」と思っていても、ウイルスや細菌は飼い主様の靴や衣類、あるいは窓から入り込んだ蚊やネズミなどを介して家の中に侵入することがあります。定期的な予防で、目に見えない脅威から家族を守りましょう。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dog Vaccines */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-primary-500 pl-6">ワンちゃんのワクチン</h2>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary-600">狂犬病予防注射（法律で義務付け）</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    生後91日以上のワンちゃんは、年に1回の接種が法律で義務付けられています。狂犬病は人にも感染し、発症するとほぼ100%死亡する極めて恐ろしい人獣共通感染症です。
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary-600">混合ワクチン（5種〜）</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">ジステンパー</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">高熱や鼻水、目やに、神経症状（痙攣など）を引き起こし、致死率が非常に高い病気です。</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">パルボウイルス感染症</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">激しい嘔吐と血便を伴う腸炎を引き起こします。伝染力が極めて強く、命を落とす危険が高い病気です。</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">アデノウイルス感染症（肝炎・呼吸器）</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">肝臓にダメージを与えたり（肝炎）、咳や熱などの呼吸器症状を引き起こします。</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-black text-gray-900 mb-2 text-sm">パライフルエンザ</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">いわゆる「ケンネルコフ」の主要な原因となるウイルスで、激しい咳や発熱を引き起こします。</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary-600 flex items-center gap-2">
                    レプトスピラ予防（追加推奨）
                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">人獣共通感染症</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    ネズミなどの野生動物の尿を通じて感染します。腎不全や肝不全を引き起こし、犬だけでなく<strong>人にも感染して重症化する</strong>可能性がある恐ろしい病気です。
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    ※お散歩コースに草むらや田畑がある場合、当院ではレプトスピラを含むワクチンの接種を強く推奨しています。
                  </p>
                </div>
              </div>
            </div>

            {/* Cat Vaccines */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-accent-500 pl-6">ネコちゃんのワクチン</h2>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-accent-600">3種混合ワクチン</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-accent-50/50 p-6 rounded-2xl border border-accent-100">
                      <h4 className="font-black text-accent-900 mb-2 text-sm">猫ヘルペスウイルス（鼻気管炎）</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">激しいくしゃみ、鼻水、結膜炎（目やに）を引き起こす、いわゆる「猫風邪」の代表格です。</p>
                    </div>
                    <div className="bg-accent-50/50 p-6 rounded-2xl border border-accent-100">
                      <h4 className="font-black text-accent-900 mb-2 text-sm">猫カリシウイルス</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">猫風邪症状に加え、口内炎や舌の潰瘍（痛みで食事ができなくなる）を引き起こします。</p>
                    </div>
                    <div className="bg-accent-50/50 p-6 rounded-2xl border border-accent-100">
                      <h4 className="font-black text-accent-900 mb-2 text-sm">猫汎白血球減少症</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">白血球が減少し、激しい下痢や嘔吐を伴います。特に子猫での致死率が非常に高い怖い病気です。</p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent-50 p-6 rounded-2xl border border-accent-100 flex items-start gap-4">
                  <Info className="w-6 h-6 text-accent-600 shrink-0" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    猫白血病ウイルス（FeLV）や猫免疫不全ウイルス（FIV）などのワクチンについても、外出機会や同居猫の状況に合わせて個別に相談を承ります。
                  </p>
                </div>
              </div>
            </div>

            {/* Ferret Vaccines */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-orange-500 pl-6">フェレットちゃんの予防</h2>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-orange-600">犬ジステンパーワクチン</h3>
                  <div className="bg-orange-50/50 p-8 rounded-[2rem] border border-orange-100 space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      フェレットにとって犬ジステンパーは<strong>致死率がほぼ100%</strong>の極めて恐ろしい病気です。
                    </p>
                    <ul className="text-xs text-gray-500 space-y-2 list-disc pl-5">
                      <li>目やに、鼻水、皮膚の炎症（特にアゴ周辺や内股）</li>
                      <li>高熱、食欲不振</li>
                      <li>末期には痙攣などの神経症状</li>
                    </ul>
                    <p className="text-xs text-orange-700 font-bold bg-white/80 p-4 rounded-xl">
                      現在、日本国内にはフェレット専用のワクチンがないため、当院では安全性を考慮し、犬用のワクチンを適切に選択して接種を行っています。
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                    <h4 className="font-black text-orange-800 mb-2 text-sm">接種スケジュール</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-bold">
                      子犬・子猫と同様に、成長に合わせて複数回の初回接種を行い、その後は年に1回の追加接種を推奨しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gray-900 p-8 md:p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary-400" />
                子犬・子猫の接種スケジュール
              </h2>
              <div className="space-y-6 text-primary-100 leading-relaxed">
                <p>
                  お母さんからもらった免疫（移行抗体）が切れるタイミングに合わせて、複数回の接種が必要です。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-primary-400 font-black block mb-2">初回</span>
                    <p className="text-sm font-bold">生後 6〜8週頃</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-primary-400 font-black block mb-2">2回目</span>
                    <p className="text-sm font-bold">その 3〜4週間後</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-primary-400 font-black block mb-2">3回目</span>
                    <p className="text-sm font-bold">さらに 3〜4週間後</p>
                  </div>
                </div>
                <p className="text-xs opacity-70">
                  ※最後に打つワクチンが「生後16週」を超えていることが、確実な免疫獲得のために極めて重要です。
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar / FAQ */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Allergy & Safety */}
            <div className="bg-accent-600 p-8 rounded-[3rem] text-white shadow-lg">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                副反応への備え
              </h2>
              <div className="space-y-6 text-sm">
                <div className="bg-white/20 p-4 rounded-xl border border-white/20">
                  <h3 className="font-black mb-2">直後の観察（15-30分）</h3>
                  <p className="leading-relaxed opacity-90">
                    稀に「アナフィラキシー」という激しいアレルギー反応が起きます。当院では接種後しばらく院内や駐車場での待機をお願いしています。
                  </p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl border border-white/20">
                  <h3 className="font-black mb-2">帰宅後の観察</h3>
                  <p className="leading-relaxed opacity-90">
                    顔の腫れ、嘔吐、ぐったりするなどの症状が出た場合は、すぐにお電話ください。
                  </p>
                </div>
                <div className="bg-accent-700 p-5 rounded-2xl font-bold">
                  <p>「午前中」の接種をおすすめします。</p>
                  <p className="text-[10px] opacity-80 mt-1">
                    万が一副反応が起きても、午後の診療時間内に対応できるため安心です。
                  </p>
                </div>
              </div>
            </div>

            {/* Practical FAQ */}
            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-primary-500" />
                よくある質問
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-primary-600 mb-1">Q. 以前アレルギーが出た場合は？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    抗体価検査で接種の必要性を検討したり、抗ヒスタミン剤の事前投与など、万全の対策をして対応します。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-600 mb-1">Q. 接種当日の散歩・お風呂は？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    激しい運動やシャンプーは控え、ゆったり過ごさせてあげてください。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary-50 p-8 rounded-[3rem] border border-primary-100 text-center">
              <p className="text-primary-800 font-black mb-4">ワクチンの相談をする</p>
              <Link href="/contact" className="bg-primary-600 text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all">
                お問い合わせはこちら <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
