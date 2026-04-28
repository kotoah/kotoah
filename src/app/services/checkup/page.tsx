import { Metadata } from "next";
import { Search, HeartPulse, Activity, ClipboardCheck, Clock, FileText, CheckCircle2, Info, PlusCircle } from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { faqsByCategoryQuery } from "@/lib/sanity/queries";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "健康診断（ペットドック） | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の健康診断。血液検査プランから本格的なドック（健診）まで、年間を通じて受診可能な各種コースをご提案します。",
};

const bloodTestPlans = [
  {
    name: "生化学検査プラン",
    items: ["身体検査", "生化学検査（内臓数値のチェック）"],
    note: "手軽に健康状態を確認したい場合に。"
  },
  {
    name: "生化学＋血球計算プラン",
    items: ["身体検査", "生化学検査", "血球計算（貧血や炎症のチェック）"],
    note: "より詳しく血液の状態を把握できます。"
  },
  {
    name: "高齢猫おすすめプラン",
    items: ["身体検査", "生化学検査", "血球計算", "甲状腺ホルモン測定", "心臓マーカー"],
    note: "7歳を過ぎた猫ちゃんに。隠れた疾患を早期発見します。",
    recommended: true
  }
];

const checkupCourses = [
  {
    name: "基本コース",
    target: "若齢〜壮齢期",
    items: ["身体検査", "血液検査（生化学＋血球計算）", "尿検査", "便検査"],
  },
  {
    name: "シニアコース",
    target: "高齢期（7歳以上）",
    items: ["基本コースの全項目", "胸部・腹部レントゲン検査", "腹部超音波検査", "血圧測定"],
  },
];

const optionalItems = [
  "がんマーカー",
  "心臓マーカー",
  "FGF-23（腎臓疾患の早期指標）",
  "甲状腺ホルモン",
];

export default async function CheckupServicePage() {
  const faqs = await client.fetch(faqsByCategoryQuery, { category: "checkup" });

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <Search className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">健康診断（ペットドック）</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            元気な「今」を知ることが、<br />
            明日への一番の安心に繋がります。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-24">
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">血液検査プラン</h2>
              <p className="text-gray-500 font-bold italic">年間を通じていつでも受診可能です</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {bloodTestPlans.map((plan, index) => (
                <div key={index} className={`bg-white p-8 border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col group hover:-translate-y-1 transition-all relative ${plan.recommended ? 'ring-4 ring-primary-400 ring-offset-4 rounded-xl' : ''}`}>
                  {plan.recommended && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-black shadow-lg z-10 whitespace-nowrap uppercase tracking-widest">
                      Recommend
                    </div>
                  )}
                  <h3 className="text-xl font-black text-gray-900 mb-6 border-b-2 border-primary-100 pb-2 leading-tight">{plan.name}</h3>
                  <ul className="space-y-4 flex-1 mb-8">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-bold text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold text-primary-700 bg-primary-50 p-3 rounded-xl border border-primary-100">
                    {plan.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100 relative overflow-hidden">
               <h4 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-2">
                 <PlusCircle className="w-6 h-6 text-accent-500" />
                 追加オプション項目（選択制）
               </h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {optionalItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-soft-50 px-6 py-4 rounded-2xl border border-soft-100 text-gray-700 font-bold text-sm">
                       <div className="w-2 h-2 bg-accent-500 rounded-full" />
                       {item}
                    </div>
                  ))}
               </div>
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">健診コース（ペットドック）</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {checkupCourses.map((course, index) => (
                <div key={index} className="bg-white p-10 border-4 border-gray-900 shadow-[8px_8px_0px_#111827] flex flex-col group hover:-translate-y-1 transition-all">
                  <span className="bg-primary-100 text-primary-700 text-xs font-black px-3 py-1 border-2 border-primary-700 w-fit mb-4 uppercase tracking-wider">{course.target}</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">{course.name}</h3>
                  <ul className="space-y-4 flex-1 mb-8">
                    {course.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-bold text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-white p-8 md:p-12 rounded-[50px] border border-soft-100 shadow-sm">
             <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2 text-xl">
               <Info className="w-6 h-6 text-primary-500" />
               検査に関する大切なご案内
             </h4>
             <ul className="space-y-4 text-sm text-gray-600 font-medium leading-relaxed">
               <li className="flex gap-3">
                  <span className="text-primary-600 font-black shrink-0">●</span>
                  <p>すべての血液検査は外部検査機関を利用するため、結果のご説明までに<strong>数日</strong>お時間をいただきます。</p>
               </li>
               <li className="flex gap-3">
                  <span className="text-primary-600 font-black shrink-0">●</span>
                  <p>正確な数値を測定するため、受診前<strong>12時間以上の絶食</strong>（お水は可）をお願いしております。</p>
               </li>
               <li className="flex gap-3">
                  <span className="text-primary-600 font-black shrink-0">●</span>
                  <p>シニア期のワンちゃん、ネコちゃんには年2回の受診をおすすめしています。</p>
               </li>
             </ul>
          </section>

          {/* FAQ Section */}
          <FaqSection 
            items={faqs} 
            title="健康診断に関するよくある質問"
          />

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
