import { Metadata } from "next";
import { ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の個人情報保護方針について。飼い主様と大切なご家族の情報を適切に管理・保護することをお約束します。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-soft-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 text-primary-600">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">プライバシーポリシー</h1>
          <p className="text-gray-500">個人情報の取り扱いについて</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-soft-100">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-8">
              湖東どうぶつ病院（以下、「当院」）は、本ウェブサイト上におけるプライバシー情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」）を定めます。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第1条（個人情報の定義）</h2>
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、およびペットの診療記録と紐付いた飼い主様情報を指します。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第2条（個人情報の収集方法）</h2>
            <p>
              当院は、飼い主様が診察の申し込み、お問い合わせ、または当院のサービスを利用される際に、氏名、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第3条（個人情報を収集・利用する目的）</h2>
            <p>当院が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>動物の診察、治療、および健康管理のため</li>
              <li>飼い主様への連絡、およびフードや医薬品の配送のため</li>
              <li>休診案内や予防情報などの重要なお知らせのため</li>
              <li>お問い合わせへの回答（本人確認を行うことを含む）のため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第4条（利用目的の変更）</h2>
            <p>
              当院は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第5条（個人情報の第三者提供）</h2>
            <p>当院は、次に掲げる場合を除いて、あらかじめ飼い主様の同意を得ることなく、第三者に個人情報を提供することはありません。</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>他の動物病院との連携や二次診療施設への紹介が必要な場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第6条（個人情報の訂正および削除）</h2>
            <p>
              飼い主様は、当院の保有する自己の個人情報が誤った情報である場合には、当院が定める手続きにより、個人情報の訂正、追加または削除を請求することができます。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-primary-500 pl-4">第7条（お問い合わせ窓口）</h2>
            <p className="flex items-center gap-2 mt-4">
              <Mail className="w-5 h-5 text-primary-600" />
              本ポリシーに関するお問い合わせは、当院窓口またはお電話にてお願いいたします。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
