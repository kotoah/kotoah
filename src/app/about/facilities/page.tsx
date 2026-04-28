import { Metadata } from "next";
import { Monitor, Camera, Microscope, BedDouble, Info } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { allFacilitiesQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "設備・検査案内 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の院内設備と検査体制。超音波診断装置、デジタルレントゲン、各種血液検査機器など、丁寧な一次診療を実現するための設備をご紹介します。",
};

const CATEGORY_MAP: Record<string, { label: string; icon: any; color: string }> = {
  imaging: { label: "画像診断機器", icon: <Camera className="w-6 h-6" />, color: "bg-blue-500" },
  blood: { label: "血液・生化学検査", icon: <Monitor className="w-6 h-6" />, color: "bg-red-500" },
  microscope: { label: "顕微鏡・その他検査", icon: <Microscope className="w-6 h-6" />, color: "bg-amber-500" },
  surgery: { label: "入院・手術設備", icon: <BedDouble className="w-6 h-6" />, color: "bg-primary-600" },
};

export default async function FacilitiesPage() {
  const facilities = await client.fetch(allFacilitiesQuery);

  // カテゴリごとにグループ化
  const groupedFacilities = facilities.reduce((acc: any, item: any) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <Monitor className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">設備・検査案内</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            大切な家族の「声なき声」を聴くために。<br />
            確かな診断を支える院内設備をご紹介します。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Concept Intro */}
          <section className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-soft-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-black text-gray-900 border-l-8 border-primary-500 pl-6 tracking-tighter">
                当院の検査に関する考え方
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 font-medium">
                <p>
                  動物たちは言葉で不調を伝えることができません。だからこそ、当院では獣医師の五感による診察に加え、適切な検査機器を用いた「客観的なデータ」を重視しています。
                </p>
                <p>
                  CTやMRIといった高度医療機器はございませんが、高性能な超音波診断装置や血液検査機器を駆使し、地域密着型の一次診療施設として「ここで可能な限りの原因特定」を行うことに全力を尽くしています。
                </p>
              </div>
            </div>
            <div className="w-full md:w-64 bg-primary-50 aspect-square rounded-[60px] flex items-center justify-center">
              <div className="bg-white p-6 rounded-full shadow-xl">
                 <Monitor className="w-12 h-12 text-primary-500" />
              </div>
            </div>
          </section>

          {/* Grouped Facilities List */}
          {Object.keys(groupedFacilities).length > 0 ? (
            Object.entries(groupedFacilities).map(([catKey, items]: [string, any]) => (
              <section key={catKey}>
                <div className="flex items-center gap-4 mb-12 border-b-4 border-primary-100 pb-4">
                  <div className={`${CATEGORY_MAP[catKey]?.color || 'bg-gray-500'} text-white p-3 rounded-2xl shadow-lg`}>
                    {CATEGORY_MAP[catKey]?.icon}
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tighter">
                    {CATEGORY_MAP[catKey]?.label || catKey}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {items.map((item: any) => (
                    <div key={item._id} className="bg-white rounded-[50px] overflow-hidden shadow-sm border border-soft-100 group hover:shadow-xl transition-all flex flex-col">
                      <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-10 flex-1">
                        <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[60px] border-4 border-dashed border-soft-100">
               <Info className="w-16 h-16 text-soft-200 mx-auto mb-4" />
               <p className="font-bold text-gray-400 text-lg">現在、設備情報を準備中です。</p>
               <p className="text-gray-300 text-sm mt-2">管理画面より設備を追加してください。</p>
            </div>
          )}

          <div className="text-center pt-12">
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-primary-600 font-black hover:bg-primary-50 px-10 py-5 rounded-full border-2 border-primary-600 transition-all shadow-lg shadow-primary-50"
            >
              ← 当院についてに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
