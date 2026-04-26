'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, User, Phone, Dog, Hash, Calendar, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function OrderForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 実際にはSanity API等との連携
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setError('送信中にエラーが発生しました。お電話にてお問い合わせください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return <div className="h-96 bg-white/50 animate-pulse rounded-[40px]" />;

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[40px] shadow-xl text-center border-4 border-primary-500">
        <CheckCircle2 className="w-20 h-20 text-primary-500 mx-auto mb-6" />
        <h3 className="text-2xl font-black text-gray-900 mb-4">注文を承りました</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          内容を確認し、準備が整いましたらスタッフよりご連絡を差し上げます。<br />
          通常2〜3診療日ほどお時間をいただいております。
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary-600 font-bold hover:underline"
        >
          続けて注文を行う
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-primary-50 border-2 border-primary-100 p-6 rounded-3xl flex gap-4">
        <Clock className="w-6 h-6 text-primary-600 shrink-0" />
        <div className="text-sm text-primary-800 leading-relaxed">
          <p className="font-black mb-1">受取についてのご案内</p>
          <p>
            在庫状況によりお取り寄せとなる場合がございます。準備が整い次第、こちらからお電話またはメールでご連絡いたしますので、それ以降のご来院をお願いいたします。
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-soft-100 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 基本情報 */}
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
          </div>
        </div>

        {/* 注文内容 */}
        <div className="space-y-6">
          <h4 className="font-black text-gray-900 flex items-center gap-2 border-b-2 border-primary-100 pb-2">
            <ShoppingBag className="w-5 h-5 text-primary-500" />
            注文内容
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">種類 <span className="text-red-500">*</span></label>
              <select name="orderType" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all bg-white">
                <option value="food">フードのみ</option>
                <option value="medicine">薬のみ（継続処方）</option>
                <option value="both">両方</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">受取希望時期</label>
              <input type="date" name="pickupDate" className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" />
              <p className="text-[10px] text-gray-400 mt-2">※準備にお時間をいただくため、数日後の余裕を持った日程をご記入ください。</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              注文内容詳細 <span className="text-red-500">*</span>
            </label>
            <textarea 
              name="orderItems" 
              required 
              rows={4} 
              className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all resize-none" 
              placeholder="フード名（メーカー・サイズ・個数）や、お薬の名前・個数をご記入ください。"
            ></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary-500" />
            備考・ご要望
          </label>
          <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all resize-none" placeholder="その他、スタッフへの伝達事項があればご記入ください。"></textarea>
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
          {isSubmitting ? '送信中...' : 'この内容で注文する'}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
