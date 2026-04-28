import { Metadata } from "next";
import { Banknote, Syringe, Bug, Heart, Info, AlertTriangle, Building2, Scissors, Stethoscope, ChevronRight } from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { faqsByCategoryQuery } from "@/lib/sanity/queries";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "料金表 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の料金案内。診察料、予防接種、避妊・去勢手術、ペットホテル、予防薬などの料金を掲載しています。滋賀県東近江市湖東。",
};

const consultationFees = [
  { name: "初診料", price: "1,650円" },
  { name: "再診料", price: "880円" },
];

const vaccinePrices = [
  { name: "狂犬病予防注射", price: "3,300円", target: "犬" },
  { name: "混合ワクチン（5種）", price: "6,600円", target: "犬" },
  { name: "混合ワクチン（8種）", price: "8,800円", target: "犬" },
  { name: "混合ワクチン（3種）", price: "4,400円", target: "猫" },
  { name: "混合ワクチン（5種）", price: "6,600円", target: "猫" },
  { name: "フェレット用ワクチン", price: "4,400円", target: "フェレット" },
];

const surgeryPrices = [
  { name: "猫・去勢手術（オス）", price: "16,500円", target: "猫" },
  { name: "猫・避妊手術（メス）", price: "27,500円", target: "猫" },
  { name: "犬・去勢手術（オス）", price: "22,000円〜", target: "犬" },
  { name: "犬・避妊手術（メス）", price: "33,000円〜", target: "犬" },
  { name: "うさぎ・去勢手術（オス）", price: "22,000円", target: "うさぎ" },
  { name: "うさぎ・避妊手術（メス）", price: "38,500円", target: "うさぎ" },
];

const hotelPrices = [
  { name: "猫舎", price: "4,950円", note: "1泊あたり" },
  { name: "犬舎小", price: "4,950円", note: "1泊あたり / 15kgまで" },
  { name: "犬舎大", price: "6,600円", note: "1泊あたり / 大型犬" },
  { name: "エキゾ（小型ケージ）", price: "3,300円", note: "1泊あたり / ハムスター等" },
  { name: "エキゾ（大型ケージ）", price: "4,950円", note: "1泊あたり / うさぎ等" },
];

const preventionPrices = [
  { name: "フィラリア検査", price: "2,200円", target: "犬" },
  { name: "フィラリア予防薬", price: "770円〜", target: "犬・猫・フェレット" },
  { name: "ノミ・マダニ予防薬", price: "1,100円〜", target: "犬・猫" },
];

export default async function PricingPage() {
  const faqs = await client.fetch(faqsByCategoryQuery, { category: "pricing" });

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <Banknote className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">料金案内</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            大切な家族の健康管理を、<br />
            分かりやすく安心の価格設定でサポートします。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section id="consultation" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 border border-primary-100">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">診察料</h2>
            </div>
            <div className="bg-white rounded-[40px] shadow-sm border border-soft-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-soft-50">
                {consultationFees.map((item, index) => (
                  <div key={index} className="p-8 flex justify-between items-center hover:bg-soft-50 transition-colors">
                    <span className="font-bold text-gray-800 text-lg">{item.name}</span>
                    <span className="font-black text-primary-600 text-2xl">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="surgery" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 border border-primary-100">
                <Scissors className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">避妊・去勢手術</h2>
            </div>
            <div className="bg-white rounded-[40px] shadow-sm border border-soft-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm">
                    <th className="p-6 font-bold">項目</th>
                    <th className="p-6 font-bold text-right">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-soft-50">
                  {surgeryPrices.map((item, index) => (
                    <tr key={index} className="hover:bg-soft-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-800">{item.name}</div>
                      </td>
                      <td className="p-6 font-black text-primary-600 text-right text-lg">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="hotel" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 border border-primary-100">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">ペットホテル</h2>
            </div>
            <div className="bg-white rounded-[40px] shadow-sm border border-soft-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-soft-50">
                  {hotelPrices.map((item, index) => (
                    <tr key={index} className="hover:bg-soft-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-400 font-medium">{item.note}</div>
                      </td>
                      <td className="p-6 font-black text-primary-600 text-right text-lg">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="prevention-fees" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-accent-600 border border-accent-100">
                <Bug className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">フィラリア・ノミ・ダニ予防</h2>
            </div>
            <div className="bg-white rounded-[40px] shadow-sm border border-soft-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-soft-50">
                  {preventionPrices.map((item, index) => (
                    <tr key={index} className="hover:bg-soft-50 transition-colors">
                      <td className="p-6 font-bold text-gray-800">{item.name} <span className="text-xs text-gray-400 ml-2 font-medium">({item.target})</span></td>
                      <td className="p-6 font-black text-accent-600 text-right text-lg">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-10 rounded-[60px] shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Info className="w-24 h-24" />
             </div>
             <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
               <AlertTriangle className="w-6 h-6 text-accent-400" />
               診療に関する注意事項
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed opacity-90">
                <div className="space-y-4">
                   <p className="font-bold text-lg text-primary-400">お支払いについて</p>
                   <p>現金、各種クレジットカード、電子マネー、QRコード決済（PayPay等）がご利用いただけます。</p>
                   <p>ペット保険（アニコム、アイペット）の窓口精算にも対応しております。</p>
                </div>
                <div className="space-y-4">
                   <p className="font-bold text-lg text-primary-400">時間外診療について</p>
                   <p>可能な限り対応いたしますが、事前にお電話にてご確認ください。別途時間外手数料を申し受けます。</p>
                </div>
             </div>
          </section>

          {/* FAQ Section */}
          <FaqSection 
            items={faqs} 
            title="料金・お支払いに関するよくある質問"
          />

          <div className="text-center pt-8">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-black hover:bg-primary-50 px-10 py-5 rounded-full border-2 border-primary-600 transition-all"
            >
              ← 診療案内へ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
