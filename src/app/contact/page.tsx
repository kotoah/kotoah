import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院へのお問い合わせページです。診察やペットホテル、採用に関するご質問などを受け付けております。お急ぎの場合はお電話にてお問い合わせください。",
};

export default function ContactPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">お問い合わせ</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            ご不明な点やご相談がございましたら、<br className="hidden md:block" />
            お電話または以下のフォームよりお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100">
              <h2 className="text-xl font-black text-gray-900 mb-8 border-l-4 border-primary-500 pl-4">お電話でのお問い合わせ</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">電話番号</p>
                    <p className="text-2xl font-black text-gray-900">00-0000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">受付時間</p>
                    <p className="text-gray-900 font-bold leading-relaxed">
                      9:00 - 12:00 / 16:00 - 19:00<br />
                      <span className="text-accent-600 text-xs">※水曜日休診</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-2xl">
                ※緊急の場合や、当日・翌日の予約確認などは必ずお電話にてご連絡ください。
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-[40px] border-2 border-dashed border-primary-200">
              <h2 className="text-xl font-black text-primary-800 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                所在地
              </h2>
              <p className="text-sm text-primary-700 leading-relaxed font-bold">
                〒529-1403<br />
                滋賀県東近江市湖東
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
