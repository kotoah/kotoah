import { Metadata } from "next";
import { ShoppingBag, Phone, Clock, AlertTriangle } from "lucide-react";
import OrderForm from "@/components/shared/OrderForm";

export const metadata: Metadata = {
  title: "フード・お薬の注文 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のフード・お薬注文フォームです。事前にご注文いただくことで、スムーズな受け渡しが可能です。滋賀県東近江市湖東。",
};

export default function OrderPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
            Online Order
          </span>
          <h1 className="text-[1.5rem] md:text-5xl font-black mb-6">フード・お薬の注文</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            事前の注文で、待ち時間を短縮。<br />
            準備が整いましたら、病院窓口にてお受け取りいただけます。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Guide Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-8 border-l-4 border-primary-500 pl-4">ご注文の流れ</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-black shrink-0">1</div>
                   <div>
                      <p className="font-bold text-gray-900">フォームから注文</p>
                      <p className="text-sm text-gray-500 mt-1">必要事項を入力して送信してください。</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-black shrink-0">2</div>
                   <div>
                      <p className="font-bold text-gray-900">在庫の確認・手配</p>
                      <p className="text-sm text-gray-500 mt-1">スタッフが内容を確認し、準備（または発注）を行います。</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-black shrink-0">3</div>
                   <div>
                      <p className="font-bold text-gray-900">準備完了のご連絡</p>
                      <p className="text-sm text-gray-500 mt-1">受取が可能になりましたら、お電話またはメールで通知します。</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-black shrink-0">4</div>
                   <div>
                      <p className="font-bold text-gray-900">病院窓口で受取</p>
                      <p className="text-sm text-gray-500 mt-1">診察時間内にご来院ください。</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-[40px] border-2 border-amber-100">
              <h3 className="text-xl font-black text-amber-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
                ご注意事項
              </h3>
              <ul className="space-y-4 text-sm text-amber-800 font-medium">
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>お薬の注文は、当院で継続して処方されているものに限ります。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>新しいお薬の希望や、体調に変化がある場合は、注文ではなく診察をお受けください。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>メーカー欠品等により、通常よりお時間をいただく場合がございます。</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
}
