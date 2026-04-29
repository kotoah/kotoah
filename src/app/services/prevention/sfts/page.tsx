import { Metadata } from "next";
import { AlertTriangle, ShieldAlert, Bug, User, Info, CheckCircle2, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SFTS（重症熱性血小板減少症候群）について | 湖東どうぶつ病院",
  description: "マダニが媒介する非常に危険な感染症「SFTS」について。人にもペットにも命に関わるリスク、症状、予防方法について詳しく解説します。",
};

export default function SFTSPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-rose-700 overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services/prevention/flea-tick" className="inline-flex items-center text-rose-100 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5" /> ノミ・マダニ予防に戻る
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold mb-6 border border-white/30 uppercase tracking-widest">
              Critical Awareness
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              SFTS<br />
              <span className="text-2xl md:text-3xl font-bold opacity-90">（重症熱性血小板減少症候群）</span>
            </h1>
            <p className="text-xl text-rose-50 leading-relaxed font-bold max-w-2xl">
              マダニが媒介するウイルスによる感染症です。人にもペットにも命に関わる、極めて警戒が必要な病気です。
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-amber-50 border-2 border-amber-200 p-6 md:p-10 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shrink-0 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-black text-amber-900 mb-2">滋賀県内でも注意が必要です</h2>
            <p className="text-amber-800 leading-relaxed font-medium">
              SFTSは近年、西日本を中心に発生が広がっており、滋賀県でもマダニの活動が盛んな地域では特に注意が必要です。通年の予防が、家族全員の命を守ることにつながります。
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* What is SFTS */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-rose-500 pl-6">SFTSとは何か？</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  SFTS（Severe Fever with Thrombocytopenia Syndrome）は、SFTSウイルスを保有するマダニに刺されることで感染する病気です。
                </p>
                <p>
                  2011年に中国で初めて報告され、日本では2013年に初の国内感染例が確認されました。それ以降、西日本を中心に毎年100名程度の患者が報告されています。
                </p>
                <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                  <h3 className="font-black text-rose-900 mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6" />
                    この病気の恐ろしさ
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold text-rose-800">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-400 rounded-full" />
                      人での致死率は約27%
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-400 rounded-full" />
                      有効なワクチンがない
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-400 rounded-full" />
                      ペットから人へうつる可能性がある
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-400 rounded-full" />
                      一度の刺咬で感染する
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pet Risk Section */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-rose-500 pl-6">ペットへの影響と危険性</h2>
              <p className="mb-10 text-gray-700">
                犬や猫もSFTSウイルスを保有するマダニに刺されると感染・発症します。特に猫の致死率は極めて高いことが分かっています。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                  <div className="relative z-10">
                    <div className="flex items-end gap-2 mb-6">
                      <span className="text-5xl font-black text-rose-500 leading-none">60</span>
                      <span className="text-xl font-bold mb-1">%</span>
                      <span className="text-sm font-bold ml-2 mb-1">猫の致死率</span>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">
                      猫が発症した場合、約6割が命を落とすと報告されています。
                    </p>
                  </div>
                </div>
                <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                  <div className="relative z-10">
                    <div className="flex items-end gap-2 mb-6">
                      <span className="text-5xl font-black text-rose-500 leading-none">40</span>
                      <span className="text-xl font-bold mb-1">%</span>
                      <span className="text-sm font-bold ml-2 mb-1">犬の致死率</span>
                    </div>
                    <p className="text-sm opacity-80 leading-relaxed">
                      犬でも約4割の致死率があり、非常に危険な病気です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-black flex items-center gap-2">
                  <Bug className="w-6 h-6 text-rose-600" />
                  主な症状
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "発熱", desc: "40度近い高熱が出る" },
                    { label: "消化器症状", desc: "食欲低下、元気消失、嘔吐、下痢" },
                    { label: "黄疸 (猫のみ)", desc: "歯茎や皮膚が黄色くなる" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-soft-50 p-6 rounded-2xl border border-soft-100">
                      <p className="font-black text-rose-700 mb-2">{item.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 italic">
                  ※感染しても症状が出ない（不顕性感染）場合もありますが、その場合でもウイルスを排泄し、人への感染源となる可能性があります。
                </p>
              </div>
            </section>

            {/* Zoonosis Section */}
            <section className="bg-rose-900 text-white p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-800 rounded-full -mr-48 -mt-48 opacity-50 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4">
                  <User className="w-10 h-10 text-rose-400" />
                  飼い主様への感染リスク
                </h2>
                <p className="text-lg text-rose-100 mb-10 leading-relaxed font-bold">
                  SFTSは、マダニだけでなく「感染したペット」からも人にうつります。
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-black text-white border-b border-rose-700 pb-2">二次感染のルート</h3>
                    <p className="text-sm text-rose-100 leading-relaxed">
                      発症している動物の<strong>血液、唾液、尿、便</strong>などの体液に直接触れることで感染するリスクがあります。
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-rose-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-rose-400" />
                        </div>
                        <p className="text-sm leading-relaxed">看病中に体液に触れる</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-rose-700 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-rose-400" />
                        </div>
                        <p className="text-sm leading-relaxed">噛まれたり引っ掻かれたりする</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-rose-800/50 p-8 rounded-3xl border border-rose-700">
                    <p className="text-sm leading-relaxed mb-6 font-bold text-rose-200">
                      特に、屋外に出る猫が帰宅後に体調を崩した場合、看病する飼い主様への感染事例が多く報告されています。
                    </p>
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-xs italic">
                      ※2024年には日本で初めて「人から人」への感染事例も報告され、より一層の警戒が必要とされています。
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Section */}
            <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-3xl font-black mb-8 border-l-8 border-rose-500 pl-6">どうすれば防げるのか？</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 h-full">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                      <ShieldAlert className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-emerald-900 mb-4">1. 通年のマダニ予防</h3>
                    <p className="text-sm text-emerald-800/70 leading-relaxed font-bold">
                      最も確実な対策は、動物病院で処方される予防薬を毎月欠かさず投与することです。マダニが吸血してもすぐに駆除されるため、ウイルス感染のリスクを最小限に抑えられます。
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-soft-50 p-8 rounded-[2.5rem] border border-soft-200 h-full">
                    <div className="w-12 h-12 bg-gray-400 rounded-2xl flex items-center justify-center mb-6">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-4">2. 生活習慣での対策</h3>
                    <ul className="text-sm text-gray-600 space-y-3 font-medium">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        猫は完全室内飼育を徹底する
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        散歩中は草むらに入らせない
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        飼い主も長袖・長ズボンを着用する
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        散歩後は体表をチェックする
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-rose-600 p-8 rounded-[3rem] text-white shadow-lg sticky top-8">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                もし見つけたら
              </h2>
              <div className="space-y-6 text-sm">
                <div className="bg-white/20 p-5 rounded-xl border border-white/20">
                  <h3 className="font-black mb-2 italic underline">絶対に手で触らない・潰さない</h3>
                  <p className="leading-relaxed opacity-90">
                    吸血しているマダニを無理に引っ張ると、頭部が残り化膿したり、病原体を体内に逆流させる恐れがあります。また、マダニを潰すとウイルスが飛散する危険があります。
                  </p>
                </div>
                <div className="bg-rose-800 p-5 rounded-2xl font-bold">
                  <p className="text-base mb-2">すぐにご来院ください</p>
                  <p className="text-xs opacity-80 leading-relaxed">
                    当院で安全に除去し、適切な処置を行います。除去後も数週間は体調の変化がないか注意深く観察する必要があります。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-rose-500" />
                Q&A
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-rose-600 mb-1">Q. 室内飼いなら大丈夫？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    いいえ。飼い主様の衣類に付着してマダニが侵入する可能性があります。また、ベランダ等から侵入することもあるため、室内飼いでも予防が必要です。
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-black text-rose-600 mb-1">Q. 疑わしい症状が出たら？</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-bold">
                    ペットに高熱や嘔吐が見られ、マダニの寄生が疑われる場合は、無理に触らず速やかに当院へお電話ください。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 p-8 rounded-[3rem] border border-rose-100">
              <Link href="/contact" className="bg-rose-600 text-white w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-rose-700 transition-all shadow-md">
                予防のご相談・お問い合わせ <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
