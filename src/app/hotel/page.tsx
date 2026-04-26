import { client } from "@/lib/sanity/client";
import { hotelAvailabilityQuery, faqsByCategoryQuery } from "@/lib/sanity/queries";
import { Building2, Banknote, Calendar, Clock, AlertTriangle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import HotelBookingForm from "@/components/shared/HotelBookingForm";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "ペットホテル | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院のペットホテル。猫舎、犬舎（小・大）を完備し、獣医師・愛玩動物看護師が見守る安心の宿泊環境を提供します。滋賀県東近江市湖東。",
};

interface Booking {
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
}

export default async function HotelPage() {
  const todayDate = new Date();
  const todayStr = todayDate.toISOString().split('T')[0];
  
  const weekDays = [...Array(60)].map((_, i) => {
    const d = new Date();
    d.setDate(todayDate.getDate() + i);
    return {
      dateStr: d.toISOString().split('T')[0],
      displayDay: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      dayOfWeek: d.toLocaleDateString('ja-JP', { weekday: 'short' }),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    };
  });

  const months = weekDays.reduce((acc, day) => {
    const key = `${day.year}年${day.month}月`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(day);
    return acc;
  }, {} as Record<string, typeof weekDays>);

  const endDateStr = weekDays[59].dateStr;
  const [bookings, faqs]: [Booking[], any] = await Promise.all([
    client.fetch(hotelAvailabilityQuery, { startDate: todayStr, endDate: endDateStr }),
    client.fetch(faqsByCategoryQuery, { category: "hotel" })
  ]);

  const getBookingCount = (date: string, type: string) => {
    return bookings.filter(b => 
      b.roomType === type && 
      date >= b.checkInDate && 
      date <= b.checkOutDate
    ).length;
  };

  const roomTypes = [
    { label: "猫舎", value: "cat", price: "4,950円", capacity: 3, note: "" },
    { label: "犬舎小", value: "dogSmall", price: "4,950円", capacity: 3, note: "目安：15kgまで" },
    { label: "犬舎大", value: "dogLarge", price: "6,600円", capacity: 1, note: "大型犬または広めのお部屋" },
  ];

  const exoticPrices = [
    { label: "エキゾ（小型ケージ）", price: "3,300円", note: "ハムスターなど" },
    { label: "エキゾ（大型ケージ）", price: "4,950円", note: "うさぎ・モルモット・フェレットなど" },
  ];

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <Building2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">ペットホテル</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            獣医師のいる安心感。<br />
            大切な家族がリラックスして過ごせる環境を提供します。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3 border-l-8 border-primary-500 pl-6">
                <Calendar className="w-8 h-8 text-primary-600" />
                空き状況（2ヶ月先まで）
              </h2>
              <div className="space-y-12">
                {Object.entries(months).map(([monthLabel, days]) => (
                  <div key={monthLabel} className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100 overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <div className="w-2 h-6 bg-primary-400 rounded-full" />
                      {monthLabel}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse min-w-[800px]">
                        <thead>
                          <tr>
                            <th className="p-3 border-b bg-gray-50 text-left sticky left-0 z-10">部屋タイプ</th>
                            {days.map(day => (
                              <th key={day.dateStr} className={`p-2 border-b text-center min-w-[40px] ${day.isWeekend ? 'text-red-500 bg-red-50/30' : ''}`}>
                                <div className="text-[10px]">{day.dayOfWeek}</div>
                                <div className="font-bold">{day.displayDay}</div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {roomTypes.map(type => (
                            <tr key={type.value}>
                              <td className="p-3 border-b font-black text-gray-700 sticky left-0 bg-white z-10">{type.label}</td>
                              {days.map(day => {
                                const count = getBookingCount(day.dateStr, type.value);
                                const isFull = count >= type.capacity;
                                return (
                                  <td key={day.dateStr} className="p-2 border-b text-center">
                                    {isFull ? (
                                      <span className="text-red-500 font-bold">満</span>
                                    ) : (
                                      <span className="text-green-500 font-bold text-xs">○</span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                          <tr>
                            <td className="p-3 border-b font-black text-gray-700 sticky left-0 bg-white z-10">エキゾ</td>
                            <td colSpan={days.length} className="p-3 border-b text-center text-gray-400 font-bold text-[10px] italic bg-gray-50/50">
                              要相談
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3 border-l-8 border-accent-500 pl-6">
                <Banknote className="w-8 h-8 text-accent-600" />
                ご利用料金
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {roomTypes.map(type => (
                  <div key={type.value} className="bg-white p-8 border-4 border-gray-900 shadow-[6px_6px_0px_#111827] text-center flex flex-col">
                    <h3 className="text-xl font-black mb-2">{type.label}</h3>
                    {type.note && <p className="text-[10px] font-bold text-accent-600 mb-4">{type.note}</p>}
                    <div className="mt-auto">
                      <p className="text-3xl font-black text-primary-600 mb-2">{type.price}</p>
                      <p className="text-xs text-gray-400">1泊あたり（税込）</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exoticPrices.map((item, index) => (
                  <div key={index} className="bg-white p-6 border-4 border-gray-900 shadow-[6px_6px_0px_#111827] text-center flex flex-col">
                    <h3 className="text-lg font-black mb-1">{item.label}</h3>
                    <p className="text-[10px] font-bold text-accent-600 mb-3">{item.note}</p>
                    <div className="mt-auto">
                      <p className="text-2xl font-black text-primary-600 mb-1">{item.price}</p>
                      <p className="text-[10px] text-gray-400">1泊あたり（税込）</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2 text-sm text-gray-500 font-medium">
                <p>※犬舎小をご希望の場合でも、実際の体の大きさや性格等により、犬舎大でのご案内となる可能性がございます。あらかじめご了承ください。</p>
                <p>※お預かり中の投薬が必要な場合は、別途投薬料（薬剤1種につき110円・税込）がかかります。</p>
                <p>※エキゾチックアニマルの料金はあくまで目安です。空き状況や詳細な料金については、種類や飼育環境（ケージサイズ）により異なりますので、必ず事前にお電話にてお問い合わせください。</p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-100">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary-600" />
                チェックイン・アウト
              </h3>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>診察時間内にお越しください。</p>
                <div className="bg-soft-50 p-4 rounded-2xl">
                  <p className="font-bold text-gray-900 mb-1">午前：9:00 - 12:00</p>
                  <p className="font-bold text-gray-900">午後：16:00 - 19:00</p>
                  <p className="text-xs text-accent-600 mt-2">※水曜日は休診日のため対応できません。</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-[40px] border-2 border-red-100">
              <h3 className="text-xl font-black text-red-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                ご利用にあたって
              </h3>
              <ul className="space-y-4 text-sm text-red-800 font-medium">
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>ホテルのみの利用でも、安全にお預かりするために事前の診察を原則お願いしております。その際に同意書の記載をお願いします。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>これまでに当院を利用されたことがある方は、ホテル当日に同意書の記載をお願いします。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>1年以内の混合ワクチン接種、および1ヶ月以内のノミ・ダニ予防が必須条件となります。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>普段食べている食事を回数分に小分けにしてお持ちください。</p>
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0">●</span>
                  <p>完全予約制です。下部のフォームよりお申し込みください。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">Reservation</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">宿泊予約のお申し込み</h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              以下のフォームより、ご宿泊の希望日程をお知らせください。<br />
              内容を確認後、当院スタッフより折り返しご連絡させていただきます。
            </p>
          </div>
          <HotelBookingForm />
        </section>

        {/* FAQ Section */}
        <div className="mt-24">
          <FaqSection 
            items={faqs} 
            title="ペットホテルに関するよくある質問"
            description="宿泊に関するご不安や疑問はこちらをご確認ください。"
          />
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 font-black hover:bg-primary-50 px-8 py-4 rounded-full border-2 border-primary-600 transition-all"
          >
            ← ホームへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
