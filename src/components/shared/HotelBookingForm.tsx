'use client';

import { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, Dog, MessageSquare, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function HotelBookingForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [minDate, setMinDate] = useState('');

  // マウント後の処理
  useEffect(() => {
    setIsMounted(true);
    
    // 日付の制限ロジックをマウント時に実行
    const calculateMinDate = () => {
      const today = new Date();
      let d = new Date(today);
      d.setDate(d.getDate() + 1); // 明日以降

      const isInvalid = (date: Date) => {
        let prevClinicDay = new Date(date);
        prevClinicDay.setDate(prevClinicDay.getDate() - 1);
        while (prevClinicDay.getDay() === 3) {
          prevClinicDay.setDate(prevClinicDay.getDate() - 1);
        }
        const todayZero = new Date(today);
        todayZero.setHours(0,0,0,0);
        const prevZero = new Date(prevClinicDay);
        prevZero.setHours(0,0,0,0);
        return prevZero.getTime() <= todayZero.getTime();
      };

      while (isInvalid(d) || d.getDay() === 3) {
        d.setDate(d.getDate() + 1);
      }
      return d.toISOString().split('T')[0];
    };

    setMinDate(calculateMinDate());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 実際にはSanity API等を叩く
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (err) {
      setError('送信中にエラーが発生しました。お電話にてお問い合わせください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  // マウント前は何も表示しない（またはスケルトンを表示）
  if (!isMounted) return <div className="h-96 bg-white/50 animate-pulse rounded-[40px]" />;

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[40px] shadow-xl text-center border-4 border-primary-500">
        <CheckCircle2 className="w-20 h-20 text-primary-500 mx-auto mb-6" />
        <h3 className="text-2xl font-black text-gray-900 mb-4">お申し込みを受け付けました</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          内容を確認の上、スタッフよりお電話またはメールにてご連絡を差し上げます。<br />
          数日経っても連絡がない場合は、お手数ですがお電話にてお問い合わせください。
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary-600 font-bold hover:underline"
        >
          新しい申し込みを行う
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-soft-100 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 飼い主情報 */}
        <div className="space-y-6">
          <h4 className="font-black text-gray-900 flex items-center gap-2 border-b-2 border-primary-100 pb-2">
            <User className="w-5 h-5 text-primary-500" />
            飼い主様情報
          </h4>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
            <input type="text" name="ownerName" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="山田 太郎" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">電話番号 <span className="text-red-500">*</span></label>
            <input type="tel" name="phoneNumber" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="090-1234-5678" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
            <input type="email" name="email" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="example@mail.com" />
          </div>
        </div>

        {/* ペット情報 */}
        <div className="space-y-6">
          <h4 className="font-black text-gray-900 flex items-center gap-2 border-b-2 border-primary-100 pb-2">
            <Dog className="w-5 h-5 text-primary-500" />
            ペットの情報
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">ペット名 <span className="text-red-500">*</span></label>
              <input type="text" name="petName" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="ポチ" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">カルテ番号 <span className="text-red-500">*</span></label>
              <input type="text" name="chartNumber" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="12345" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">部屋タイプ <span className="text-red-500">*</span></label>
            <select name="roomType" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all bg-white">
              <option value="cat">猫舎</option>
              <option value="dogSmall">犬舎小（15kgまで）</option>
              <option value="dogLarge">犬舎大</option>
              <option value="exotic">エキゾチック</option>
            </select>
          </div>
        </div>
      </div>

      {/* 日程情報 */}
      <div className="space-y-6">
        <h4 className="font-black text-gray-900 flex items-center gap-2 border-b-2 border-primary-100 pb-2">
          <Calendar className="w-5 h-5 text-primary-500" />
          ご宿泊日程
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">チェックイン日 <span className="text-red-500">*</span></label>
            <input 
              type="date" 
              name="checkInDate" 
              required 
              min={minDate}
              className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" 
            />
            <p className="text-[10px] text-gray-400 mt-2">※当日および前診療日の予約はWEBからはお受けできません。</p>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">チェックアウト日 <span className="text-red-500">*</span></label>
            <input type="date" name="checkOutDate" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" />
          </div>
        </div>
      </div>

      {/* 備考 */}
      <div className="space-y-4">
        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary-500" />
          備考・ご要望
        </label>
        <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all resize-none" placeholder="食事の回数や、お預かり中の注意事項などがあればご記入ください。"></textarea>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-100 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '予約を申し込む'}
        <Send className="w-5 h-5" />
      </button>

      <p className="text-center text-xs text-gray-400 leading-relaxed">
        ※このフォームは「予約の申し込み」です。スタッフからの返信をもって予約確定となります。<br />
        お急ぎの場合は直接お電話（00-0000-0000）にてお問い合わせください。
      </p>
    </form>
  );
}
