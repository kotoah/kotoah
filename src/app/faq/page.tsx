import { Metadata } from "next";
import { HelpCircle, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { allFaqsQuery } from "@/lib/sanity/queries";
import FaqList from "@/components/shared/FaqList";

export const metadata: Metadata = {
  title: "よくある質問 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のよくある質問。受診方法、駐車場、お支払い、ペットホテル、各種予防など、飼い主様から多く寄せられる質問と回答をまとめています。",
};

export default async function FaqPage() {
  const faqs = await client.fetch(allFaqsQuery);

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">よくある質問</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            ご来院前の不安や疑問を解消。<br />
            キーワードやカテゴリからお探しいただけます。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Interactive FAQ List with Search and Filter */}
          <FaqList initialItems={faqs} />

          {/* Contact Support */}
          <section className="mt-24 bg-white p-10 md:p-16 rounded-[60px] shadow-sm border border-soft-100 text-center">
             <h2 className="text-2xl font-black text-gray-900 mb-6">解決しない場合はこちら</h2>
             <p className="text-gray-500 mb-10 leading-relaxed font-medium">
               その他、ご不明な点がございましたらお電話または<br className="hidden md:block" />
               お問い合わせフォームよりお気軽にご相談ください。
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="tel:00-0000-0000" className="flex items-center justify-center gap-3 bg-primary-50 text-primary-700 px-8 py-4 rounded-2xl font-black border-2 border-primary-100 hover:bg-primary-100 transition-all">
                  <Phone className="w-5 h-5" />
                  00-0000-0000
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-primary-100 hover:bg-primary-700 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  フォームから相談
                </Link>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
