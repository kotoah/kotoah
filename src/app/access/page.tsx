import { Metadata } from "next";
import { MapPin, Phone, Clock, Car, Train, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "アクセス・診療時間 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院へのアクセス方法と診療時間のご案内。滋賀県東近江市湖東エリア。駐車場完備。バスや電車での来院方法も掲載しています。",
};

export default function AccessPage() {
  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* 1. Hero Section */}
      <section className="relative py-24 bg-primary-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30 uppercase tracking-widest">
            Access & Hours
          </span>
          <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight">アクセス・診療時間</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            滋賀県東近江市湖東エリアのホームドクターとして。<br />
            皆様が安心してご来院いただけるよう、詳細な地図と時間をご案内します。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. Map Section (Left/Top 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-4 rounded-[40px] shadow-xl border border-soft-100 h-[400px] md:h-[600px] overflow-hidden relative group">
              {/* Google Map Placeholder - 実際にはiframeに置き換え可能 */}
              <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                <MapPin className="w-16 h-16 mb-4 opacity-20" />
                <p className="font-bold">Google Map Placeholder</p>
                <p className="text-sm">滋賀県東近江市湖東</p>
              </div>
              {/* Overlay info */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-primary-50">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-2xl text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-1">湖東どうぶつ病院</h3>
                    <p className="text-gray-500 text-sm font-bold">〒529-1403 滋賀県東近江市湖東</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent-50 p-4 rounded-2xl text-accent-600">
                    <Car className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">お車でお越しの方</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  駐車場を◯台完備しております。病院正面または専用駐車場をご利用ください。
                  湖東インターより約◯分。
                </p>
              </div>

              <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-soft-100 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <Train className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">公共交通機関の方</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  ◯◯線「◯◯駅」よりバスで約◯分。<br />
                  「◯◯」バス停下車、徒歩◯分。
                </p>
              </div>
            </div>
          </div>

          {/* 3. Business Hours Section (Right Column) */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-primary-600">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary-600 p-3 rounded-2xl text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">診療時間</h2>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-400 text-xs font-black uppercase">
                        <th className="py-2">診療時間</th>
                        <th className="py-2 text-center">月〜土</th>
                        <th className="py-2 text-center">日・祝</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-900 font-black">
                      <tr className="border-t border-gray-50">
                        <td className="py-4">午前 9:00 - 12:00</td>
                        <td className="py-4 text-center text-primary-600">○</td>
                        <td className="py-4 text-center text-primary-600">○</td>
                      </tr>
                      <tr className="border-t border-gray-50">
                        <td className="py-4">午後 16:00 - 19:00</td>
                        <td className="py-4 text-center text-primary-600">○</td>
                        <td className="py-4 text-center text-gray-300">×</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-soft-50 p-4 rounded-2xl border border-soft-100">
                    <Info className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 font-bold leading-relaxed">
                      休診日：水曜日・日曜午後・祝日午後<br />
                      ※学会等により臨時休診となる場合がございます。最新の情報は「お知らせ」をご確認ください。
                    </p>
                  </div>
                  <a 
                    href="tel:00-0000-0000"
                    className="flex flex-col items-center justify-center gap-2 bg-primary-600 text-white p-6 rounded-3xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-100"
                  >
                    <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Appointment / Contact</span>
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6" />
                      <span className="text-2xl font-black tracking-tighter">00-0000-0000</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-gray-900 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-accent-400">
                 <Info className="w-6 h-6" />
                 夜間・時間外の対応
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed font-medium">
                 当院は予約優先制となっております。急患の場合は、事前にお電話にて状況をお知らせいただけますと、スムーズな対応が可能です。
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
