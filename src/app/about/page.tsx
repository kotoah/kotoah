import Image from "next/image";
import { Heart, ShieldCheck, Clock, MapPin, Phone, PawPrint } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "当院について | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の理念、院長紹介、および施設案内。私たちは大切な家族であるペットの健康と、飼い主様の安心を第一に考えています。",
};

export default function AboutPage() {
  return (
    <div className="bg-soft-cream pb-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100/30 rounded-l-full hidden lg:block" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
              About Our Hospital
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              言葉を話せない<br />
              <span className="text-primary-600">小さな家族</span>のために。
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              湖東どうぶつ病院は、地域に根ざしたホームドクターとして、最新の知見に基づいた優しい医療を提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-primary-500 pl-6">当院の理念</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">どうぶつに優しい医療</h3>
                  <p className="text-gray-600">
                    過度なストレスを与えないよう、優しく、丁寧な診察を心がけています。
                    特にデリケートなエキゾチックアニマルの診療にも細心の注意を払います。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">飼い主様との対話を大切に</h3>
                  <p className="text-gray-600">
                    病状や治療方針について分かりやすく説明し、飼い主様が納得して選択できるようサポートします。
                    不安なことは何でもご相談ください。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <PawPrint className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">地域社会への貢献</h3>
                  <p className="text-gray-600">
                    湖東地域の皆様の大切な家族の健康を守ることで、安心で豊かな暮らしを支えたいと考えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-white rounded-[60px] shadow-2xl overflow-hidden border-8 border-white relative z-10">
              <div className="absolute inset-0 bg-primary-100/20 flex items-center justify-center">
                 <PawPrint className="w-32 h-32 text-primary-100 rotate-12" />
                 <span className="absolute bottom-8 left-8 right-8 text-center text-primary-800 font-bold bg-white/80 backdrop-blur-sm p-4 rounded-3xl">
                    院内はリラックスできる空間作りを心がけています
                 </span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full -z-0 opacity-50 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-24 bg-white rounded-[80px] mx-4 shadow-sm border border-soft-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">院長挨拶</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="w-64 h-64 bg-primary-50 rounded-full shrink-0 border-4 border-primary-100 flex items-center justify-center">
                 <PawPrint className="w-24 h-24 text-primary-200" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">院長：◯◯ ◯◯</h3>
                <p className="text-primary-600 font-bold mb-6">Director: First Last</p>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    こんにちは。湖東どうぶつ病院の院長です。
                    私たちは、どうぶつたちが健やかに過ごせるよう、日々の予防から最新の治療まで幅広く対応しています。
                  </p>
                  <p>
                    どうぶつたちは自分の不調を言葉で伝えることができません。
                    だからこそ、私たち専門家と飼い主様がしっかりと連携し、ささいな変化も見逃さないことが大切です。
                  </p>
                  <p>
                    「ここに来て良かった」と思っていただけるよう、スタッフ一同、真心込めて対応させていただきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Info */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-accent-500 pl-6">病院情報</h2>
            <div className="space-y-8 bg-white p-10 rounded-[40px] shadow-sm border border-soft-100">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-accent-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">所在地</h4>
                  <p className="text-gray-600">〒529-1403 滋賀県東近江市湖東</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="w-6 h-6 text-accent-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">電話番号</h4>
                  <p className="text-xl md:text-2xl font-black text-gray-900">00-0000-0000</p>                </div>
              </div>
              <div className="flex items-start gap-6">
                <Clock className="w-6 h-6 text-accent-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">診察時間</h4>
                  <p className="text-gray-600">午前 9:00 - 12:00 / 午後 16:00 - 19:00</p>
                  <p className="text-accent-700 font-bold mt-2">※休診日：水曜日</p>
                  <p className="text-gray-500 text-sm mt-1">※土日・祝日も通常通り診察しております。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto bg-gray-200 rounded-[40px] flex items-center justify-center text-gray-400 font-bold overflow-hidden relative border-8 border-white shadow-xl">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-primary-50 flex flex-col items-center justify-center gap-4">
                <MapPin className="w-16 h-16 text-primary-200" />
                <span className="text-primary-300">Google Map Placeholder</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
