import { Metadata } from "next";
import { ShieldCheck, Heart, Bug, AlertTriangle, Info, CheckCircle2, ChevronLeft, ArrowRight, Calendar, Stethoscope, Pill } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "フィラリア予防について | 湖東どうぶつ病院",
  description: "心臓を守る大切な習慣。フィラリア症のリスク、当院の2026年度予防スケジュール、検査の重要性について詳しくご案内します。",
};

export default function HeartwormPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600 overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services/prevention" className="inline-flex items-center text-primary-100 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5" /> 予防医療に戻る
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold mb-6 border border-white/30 uppercase tracking-widest">
              Heartworm Prevention
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              フィラリア予防<br />
              <span className="text-2xl md:text-3xl font-bold opacity-90">心臓を守る、毎月の贈り物。</span>
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed font-bold max-w-2xl">
              蚊が運ぶ恐ろしい寄生虫「フィラリア」。正しい知識と確実な投薬で、100%防げる病気です。
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Important Policy Card */}
        <div className="bg-white border-4 border-primary-500 p-8 md:p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Calendar className="w-48 h-48 text-primary-600" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-primary-500" />
              2026年度 予防スケジュール
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-[2.5rem] border-2 border-primary-100">
                <p className="text-primary-600 font-black text-sm mb-4 uppercase tracking-widest">事前検査の推奨期間</p>
                <p className="text-4xl font-black text-gray-900 mb-4">4月1日 〜 5月31日</p>
                <p className="text-sm text-primary-800/70 font-bold leading-relaxed italic">
                  ※昨シーズンの最後（11月頃）に感染していないかを確認し、安全に投薬を開始するために必須の検査です。
                </p>
              </div>
              <div className="bg-accent-50 p-8 rounded-[2.5rem] border-2 border-accent-100">
                <p className="text-accent-600 font-black text-sm mb-4 uppercase tracking-widest">投薬が必要な期間</p>
                <p className="text-4xl font-black text-gray-900 mb-4">5月 〜 12月</p>
                <p className="text-sm text-accent-800/70 font-bold leading-relaxed italic">
                  ※蚊がいなくなった1ヶ月後まで飲ませることが、予防を完結させるために重要です（計8回）。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* What is Heartworm */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-primary-500 pl-6 text-gray-900">フィラリア症とは？</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-medium">
                <p>
                  フィラリア（犬糸状虫）は、蚊を介して感染する寄生虫です。蚊が吸血する際に、フィラリアの幼虫が体内に侵入します。
                </p>
                <p>
                  放置すると、成長した親虫が心臓や肺の血管に住み着き、心不全、呼吸不全、さらには命に関わる重大な障害を引き起こします。
                </p>
                
                <div className="bg-soft-50 p-8 rounded-3xl border border-soft-100 mt-10">
                  <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                    主な症状（進行した場合）
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      咳が出る・疲れやすくなる
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      お腹が膨らむ（腹水）
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      呼吸が苦しそうになる
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full" />
                      赤い尿（血尿）が出る
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Mystery of the Preventive Drug */}
            <section className="bg-gray-900 text-white p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full -mr-48 -mt-48 opacity-40 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
                  <ShieldCheck className="w-10 h-10 text-primary-400" />
                  「予防」ではなく「駆虫」です
                </h2>
                <p className="text-lg text-primary-100 mb-10 leading-relaxed font-bold">
                  ここが一番の誤解ポイント。フィラリアのお薬は、バリアを張るものではありません。
                </p>
                <div className="space-y-8">
                  <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <p className="leading-relaxed mb-6 font-bold">
                      フィラリア予防薬は、蚊に刺された後に体に入ってきた<strong>幼虫を、1ヶ月に1回まとめて退治するお薬</strong>です。
                    </p>
                    <p className="text-sm opacity-80 font-medium">
                      そのため、最後の1回（12月分）を忘れてしまうと、秋に感染したかもしれない幼虫がそのまま育ってしまい、予防が失敗に終わってしまいます。
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1">なぜ「事前の血液検査」が必要なの？</h4>
                      <p className="text-sm opacity-70">
                        もし心臓に親虫がいる状態で、知らずにお薬を飲んでしまうと、一斉に死滅したミクロフィラリアが原因でショック状態に陥る危険があるからです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cat and Ferret Section */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-accent-500 pl-6 text-gray-900">猫・フェレットの予防</h2>
              <p className="mb-10 text-gray-700 font-medium leading-relaxed">
                「フィラリアは犬の病気」と思われがちですが、実は猫やフェレットにも感染します。
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-accent-50/50 p-8 rounded-[2.5rem] border border-accent-100">
                  <h3 className="font-black text-accent-900 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-accent-500" />
                    猫の場合
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    猫は犬よりも体が小さく、わずか1〜2匹の寄生でも突然死の原因となります。診断が非常に難しいため、毎月の投薬で「させない」ことが唯一の守りです。
                  </p>
                </div>
                <div className="bg-emerald-50/50 p-8 rounded-[2.5rem] border border-emerald-100">
                  <h3 className="font-black text-emerald-900 mb-4 flex items-center gap-2">
                    <Pill className="w-6 h-6 text-emerald-500" />
                    フェレットの場合
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-bold">
                    フェレットは特にフィラリア感受性が高く、感染するとほぼ死に至ります。東近江市のような自然の多い地域では、室内飼いでも必須の予防です。
                  </p>
                </div>
              </div>
            </section>

            {/* Drug Types */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-primary-500 pl-6 text-gray-900">予防薬の種類</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "錠剤・おやつ", icon: <Pill />, desc: "美味しく食べられるおやつタイプが人気です。" },
                  { title: "スポット", icon: <Stethoscope />, desc: "首筋に垂らすタイプ。お薬が苦手な子に。" },
                  { title: "オールインワン", icon: <ShieldCheck />, desc: "フィラリア・ノミ・ダニを一度に予防。" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-soft-50 p-6 rounded-2xl text-center space-y-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-primary-500">
                      {item.icon}
                    </div>
                    <h3 className="font-black text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary-600 p-8 rounded-[3rem] text-white shadow-lg sticky top-8">
              <h2 className="text-xl font-black mb-6">受診のご案内</h2>
              <div className="space-y-6 text-sm font-bold">
                <div className="bg-white/20 p-5 rounded-xl border border-white/20">
                  <p className="mb-2 italic underline">検査のご予約は不要です</p>
                  <p className="leading-relaxed opacity-90">
                    診察時間内に直接ご来院ください。春先は大変混雑いたしますので、4月中の早めの受診をお勧めしております。
                  </p>
                </div>
                <div className="bg-primary-800 p-5 rounded-2xl">
                  <p className="text-base mb-2">費用について</p>
                  <p className="text-xs opacity-80 leading-relaxed mb-4">
                    体重やお薬の種類によって異なります。詳細は料金案内をご確認ください。
                  </p>
                  <Link href="/pricing#prevention-fees" className="inline-flex items-center gap-2 bg-white text-primary-700 px-4 py-2 rounded-xl text-xs hover:bg-primary-50 transition-all shadow-sm">
                    料金表を見る <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-primary-500" />
                Q&A
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-primary-600 mb-1">Q. 蚊を見かけてからでいい？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    お薬を飲むタイミングは「蚊が出始めてから1ヶ月後」が基本ですが、当院の推奨スケジュールに合わせていただければ、最も安全に確実に予防できます。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-black text-primary-600 mb-1">Q. 室内犬でも必要？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    はい。蚊は玄関や網戸の隙間から室内に必ず侵入します。「一度も外に出ない子」でも感染例は多く報告されています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
