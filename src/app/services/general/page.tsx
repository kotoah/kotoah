import { Metadata } from "next";
import { Stethoscope, Heart, Activity, Pill, Thermometer, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "一般診療 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の一般診療（内科・外科・皮膚科など）。地域に根ざしたホームドクターとして、丁寧な初期診断と適切な治療プランのご提案を心がけています。",
};

const internalMedicine = [
  { name: "消化器科", desc: "嘔吐、下痢、食欲不振など" },
  { name: "循環器・呼吸器科", desc: "咳、疲れやすい、心雑音など" },
  { name: "皮膚科", desc: "かゆみ、脱毛、赤み、外耳炎など" },
  { name: "泌尿器科", desc: "頻尿、血尿、おしっこが出ないなど" },
  { name: "眼科", desc: "目の充血、目やに、涙が多いなど" },
  { name: "歯科", desc: "口臭、歯石、歯肉炎など" },
];

export default function GeneralServicePage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <Stethoscope className="w-10 h-10" />
          </div>
          <h1 className="text-[1.5rem] md:text-5xl font-black mb-6">一般診療</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            身近なホームドクターとして。<br />
            日々のちょっとした異変も、お気軽にご相談ください。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Philosophy Section */}
          <section className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary-500" />
              診療のコンセプト
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              当院では、ワンちゃん・ネコちゃんをはじめとするご家族が「今、どのような状態で、どのような治療が必要なのか」を飼い主様に分かりやすく説明することを最優先に考えています。
              丁寧な問診と身体検査をベースに、必要な一次診療を提供いたします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-primary-50 p-6 rounded-3xl border border-primary-100 flex items-start gap-4">
                  <Activity className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                  <p className="text-sm text-primary-800 font-bold leading-relaxed">
                    ホームドクターとして、まずは全身の状態を丁寧に確認し、適切な初期診断を追求します。
                  </p>
               </div>
               <div className="bg-accent-50 p-6 rounded-3xl border border-accent-100 flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-accent-600 shrink-0 mt-1" />
                  <p className="text-sm text-accent-800 font-bold leading-relaxed">
                    より高度な検査（CT・MRI等）や特殊な手術が必要な場合は、速やかに専門の二次病院をご紹介します。
                  </p>
               </div>
            </div>
          </section>

          {/* Clinical Departments */}
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-10 text-center tracking-tighter">主な診療科目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internalMedicine.map((dept, index) => (
                <div key={index} className="bg-white p-8 border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col justify-center">
                  <h3 className="text-xl font-black text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-500 text-sm font-medium">{dept.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Surgery Info */}
          <section className="bg-gray-900 text-white p-10 md:p-16 rounded-[60px] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Activity className="w-32 h-32" />
             </div>
             <div className="relative z-10">
                <h2 className="text-3xl font-black mb-8 border-l-4 border-primary-400 pl-6">外科手術について</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                  <p>
                    避妊・去勢手術や、日常的な軟部外科手術（体表のしこりの切除など）に対応しています。
                  </p>
                  <p>
                    手術に際しては、麻酔リスクを確認するための術前検査と、術中・術後の痛みを抑える疼痛管理を丁寧に行い、安全性を第一に考えた一次診療レベルの手術を実施しています。
                  </p>
                  <p className="text-sm border-t border-white/20 pt-4 opacity-80">
                    ※骨折などの整形外科手術や、高度な医療機器を必要とする特殊な手術には対応しておりません。診断の結果、高度な治療が望ましいと判断した場合は、提携する専門施設へ責任を持ってご紹介いたします。
                  </p>
                </div>
                <div className="mt-10">
                   <Link href="/pricing#surgery" className="bg-white text-gray-900 px-8 py-3 rounded-full font-black hover:bg-primary-50 transition-all inline-flex items-center gap-2">
                     手術の料金目安を見る <ChevronRight className="w-5 h-5" />
                   </Link>
                </div>
             </div>
          </section>

          <div className="text-center pt-8">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-black hover:bg-primary-50 px-10 py-5 rounded-full border-2 border-primary-600 transition-all shadow-lg shadow-primary-50"
            >
              ← 診療案内トップへ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="9 5l7 7-7 7"></path>
    </svg>
  );
}
