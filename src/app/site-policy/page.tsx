import { Metadata } from "next";
import { FileText, Copyright, AlertTriangle, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "サイトポリシー | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院ウェブサイトの利用規約、著作権、免責事項についてのご案内です。",
};

export default function SitePolicyPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-soft-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-50 rounded-2xl mb-6 text-accent-600">
            <FileText className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">サイトポリシー</h1>
          <p className="text-gray-500">本ウェブサイトのご利用にあたって</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-sm border border-soft-100">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-8">
              このウェブサイトは湖東どうぶつ病院（以下、「当院」）が運営しています。本ウェブサイトをご利用いただく際は、以下の内容をよくお読みいただき、ご同意の上でご利用ください。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-accent-500 pl-4">
              <Copyright className="w-6 h-6 text-accent-600" />
              著作権について
            </h2>
            <p>
              本ウェブサイトに掲載されているすべてのコンテンツ（文章、画像、ロゴ、デザイン等）の著作権は、当院または正当な権利を持つ第三者に帰属します。私的使用など法律で認められた範囲を超えて、無断で使用（複製、送信、配布、改変等）することは禁止されています。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-accent-500 pl-4">
              <AlertTriangle className="w-6 h-6 text-accent-600" />
              免責事項について
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>当院は、本ウェブサイトに掲載する情報について細心の注意を払っておりますが、その正確性、完全性、最新性を保証するものではありません。</li>
              <li>本ウェブサイトに含まれる情報は、一般的な知識の提供を目的としたものであり、獣医師による診察や診断に代わるものではありません。</li>
              <li>本ウェブサイトのご利用により生じた直接的・間接的な損害について、当院は一切の責任を負いません。</li>
              <li>本ウェブサイトの内容は、予告なく変更または削除されることがあります。</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-accent-500 pl-4">
              <LinkIcon className="w-6 h-6 text-accent-600" />
              リンクについて
            </h2>
            <p>
              本ウェブサイトへのリンクは原則として自由ですが、公序良俗に反するサイトや当院の信用を損なう恐れのあるサイトからのリンクはお断りいたします。また、本ウェブサイトからリンクしている第三者のウェブサイトの内容について、当院は責任を負いません。
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3 border-l-4 border-accent-500 pl-4">
              推奨環境
            </h2>
            <p>
              本ウェブサイトを快適にご覧いただくために、最新のブラウザ（Google Chrome, Safari, Microsoft Edge等）での閲覧を推奨いたします。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
