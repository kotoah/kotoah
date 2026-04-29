import { Metadata } from "next";
import { PawPrint, Heart, Info, ClipboardList, Thermometer, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "エキゾチックアニマル診療 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のエキゾチックアニマル診療。うさぎ、ハムスター、モルモット、デグー、フェレット、ハリネズミなどの専門的な診察と飼育相談を行っています。",
};

const animals = [
  { name: "うさぎ", desc: "不正咬合、胃腸うっ滞、スナッフルなど" },
  { name: "ハムスター", desc: "腫瘍、皮膚疾患、頬袋のトラブルなど" },
  { name: "モルモット・デグー", desc: "ビタミン欠乏、歯の疾患、皮膚病など" },
  { name: "フェレット", desc: "インスリノーマ、副腎疾患、リンパ腫など" },
  { name: "ハリネズミ", desc: "皮膚疾患（ダニ）、ふらつき症候群など" },
];

export default function ExoticServicePage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <PawPrint className="w-10 h-10" />
          </div>
          <h1 className="text-[1.5rem] md:text-5xl font-black mb-6">エキゾチックアニマル診療</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            小さな家族の、大きな安心のために。<br />
            エキゾチックアニマル特有の生態に合わせた診察を行います。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Commitment Section */}
          <section className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100">
            <h2 className="text-2xl font-black text-gray-900 mb-8 border-l-8 border-primary-500 pl-6">当院の取り組み</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                エキゾチックアニマル（犬猫以外の小動物）は、自分の弱みを隠そうとする習性があり、目に見えて症状が出た時には病気が進行していることも少なくありません。
              </p>
              <p>
                当院では、それぞれの動物の生態や解剖学的特徴を深く理解し、身体への負担を考慮した優しい保定と診察を心がけています。
                また、<strong>飼育環境や食事内容</strong>が病気に直結することが多いため、診察時にはこれらについても詳しくお話を伺い、アドバイスさせていただきます。
              </p>
            </div>
          </section>

          {/* Target Animals List */}
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-10 text-center tracking-tighter">診察可能な動物たち</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {animals.map((animal, index) => (
                <div key={index} className="bg-white p-8 border-4 border-gray-900 shadow-[6px_6px_0px_#111827] group hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-black text-primary-600 mb-2">{animal.name}</h3>
                  <p className="text-gray-500 text-sm font-medium">{animal.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-400 text-sm italic">※鳥類・爬虫類・両生類の診察は現在行っておりません。</p>
          </section>

          {/* Advice for Visit */}
          <section className="bg-primary-50 p-10 md:p-16 rounded-[60px] border-2 border-dashed border-primary-200 relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-2xl font-black text-primary-800 mb-8 flex items-center gap-2">
                  <Info className="w-6 h-6" />
                  ご来院時のポイント
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <p className="font-bold text-primary-900 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary-600" />
                        移動のストレスを最小限に
                      </p>
                      <p className="text-sm text-primary-700 leading-relaxed">
                        キャリーケースを布で覆うなどして、温度管理と視界の遮断をお願いします。
                      </p>
                   </div>
                   <div className="space-y-4">
                      <p className="font-bold text-primary-900 flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-primary-600" />
                        情報の持参
                      </p>
                      <p className="text-sm text-primary-700 leading-relaxed">
                        普段の食事、飼育ケージの写真、便（できるだけ新鮮なもの）をお持ちいただくと診断に役立ちます。
                      </p>
                   </div>
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
