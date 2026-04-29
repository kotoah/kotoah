import { Stethoscope, Activity, Syringe, HeartPulse, Search, ClipboardCheck, PawPrint, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "診療案内 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の診療内容。一般診療（内科・外科）、予防医療、エキゾチックアニマルの専門診療など、大切な家族の健康を幅広くサポートします。",
};

const services = [
  {
    title: "一般診療",
    icon: <Stethoscope className="w-8 h-8" />,
    description: "内科全般、皮膚科、耳鼻科など、日常的な体調不良から慢性疾患まで幅広く診察いたします。",
    details: ["消化器疾患", "皮膚・アレルギー症状", "循環器疾患", "泌尿器疾患"],
    color: "bg-primary-500",
  },
  {
    title: "予防医療",
    icon: <Syringe className="w-8 h-8" />,
    description: "混合ワクチン、狂犬病予防注射、フィラリア・ノミ・ダニ予防など、病気を未然に防ぐお手伝いをします。",
    details: ["定期予防接種", "フィラリア予防", "寄生虫駆除", "抗体検査"],
    color: "bg-accent-500",
  },
  {
    title: "エキゾチック診療",
    icon: <PawPrint className="w-8 h-8" />,
    description: "うさぎ、ハムスター、デグーなどのエキゾチックアニマル特有の疾患に対し、専門的な知見を持って診察します。",
    details: ["歯のトラブル（不正咬合）", "消化器停滞", "皮膚疾患", "飼育相談"],
    color: "bg-primary-600",
  },
  {
    title: "健康診断（ペットドック）",
    icon: <Search className="w-8 h-8" />,
    description: "言葉を話せない動物たちの病気を早期発見するため、定期的な健康診断をお勧めしています。",
    details: ["血液検査", "レントゲン検査", "超音波検査", "尿・便検査"],
    color: "bg-accent-600",
  },
];

const steps = [
  {
    no: "01",
    title: "受付",
    description: "初診の方は保険証やワクチン証明書、これまでの経過が分かるメモ等があればお持ちください。",
  },
  {
    no: "02",
    title: "問診・診察",
    description: "飼い主様から詳しくお話を伺い、動物たちの状態を丁寧に確認します。不安なことは何でもお話しください。",
  },
  {
    no: "03",
    title: "検査・治療",
    description: "必要に応じて検査を行い、病状を説明した上で、最適な治療プランをご提案します。",
  },
  {
    no: "04",
    title: "お会計・お薬",
    description: "お会計の際に、お薬の飲ませ方や今後のケアについて分かりやすくご説明いたします。",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-soft-cream pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
            Medical Services
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">診療案内</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            大切な家族が一日でも長く、元気に過ごせるように。<br />
            最新の知識と技術、そして真心を込めた診察をお約束します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-gray-900 shadow-[8px_8px_0px_#111827] p-8 md:p-12 group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className={`${service.color} w-16 h-16 flex items-center justify-center text-white mb-8 border-2 border-gray-900 shadow-[4px_4px_0px_#111827]`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {service.details.map((detail, dIndex) => (
                  <li key={dIndex} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-none rotate-45" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                {service.title === "一般診療" && (
                  <Link 
                    href="/services/general"
                    className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 border-2 border-primary-700 font-black hover:bg-primary-200 transition-all text-sm"
                  >
                    一般診療について詳しく
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {service.title === "予防医療" && (
                  <Link 
                    href="/services/prevention"
                    className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-6 py-3 border-2 border-accent-700 font-black hover:bg-accent-200 transition-all text-sm"
                  >
                    予防医療について詳しく
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {service.title === "エキゾチック診療" && (
                  <Link 
                    href="/services/exotic"
                    className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 border-2 border-primary-700 font-black hover:bg-primary-200 transition-all text-sm"
                  >
                    エキゾチック診療について詳しく
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {service.title === "健康診断（ペットドック）" && (
                  <Link 
                    href="/services/checkup"
                    className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-6 py-3 border-2 border-accent-700 font-black hover:bg-accent-200 transition-all text-sm"
                  >
                    健康診断について詳しく
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Flow */}
      <section className="py-24 bg-white rounded-[80px] mx-4 border-t border-soft-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-6">診療の流れ</h2>
            <div className="w-20 h-2 bg-accent-500 mx-auto" />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center p-6 group">
                  <div className="w-16 h-16 bg-soft-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-50 group-hover:border-primary-500 group-hover:border-solid transition-all">
                    <span className="text-2xl font-black text-gray-400 group-hover:text-primary-600">{step.no}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-14 left-[80%] w-full h-[2px] border-t-2 border-dashed border-gray-200 -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Animals Link */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="bg-primary-50 p-12 rounded-[40px] lg:rounded-[60px] border-4 border-dashed border-primary-200">
          <h2 className="text-2xl font-black text-primary-800 mb-6">診察対象動物について</h2>
          <p className="text-primary-700 mb-10 max-w-xl mx-auto font-bold">
            犬・猫はもちろん、うさぎ・ハムスター・フェレットなどのエキゾチックアニマルまで幅広く対応しております。
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["犬", "猫", "うさぎ", "ハムスター", "モルモット", "デグー", "フェレット", "ハリネズミ"].map((animal) => (
              <span key={animal} className="bg-white px-4 py-2 border-2 border-primary-500 text-primary-700 font-bold text-sm shadow-[2px_2px_0px_#16a34a]">
                {animal}
              </span>
            ))}
          </div>
          <p className="mt-8 text-gray-400 text-sm italic">※鳥類・爬虫類の診察は現在行っておりません。</p>
        </div>
      </section>
    </div>
  );
}
