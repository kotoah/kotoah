'use client';

import { useState, useEffect } from 'react';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function ContactForm() {
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
        <h3 className="text-2xl font-black text-gray-900 mb-4">お問い合わせを送信しました</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          内容を確認の上、7日以内を目安にスタッフよりご返信させていただきます。<br />
          しばらくお待ちください。
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary-600 font-bold hover:underline"
        >
          続けてお問い合わせを行う
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Notices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50 border-2 border-amber-100 p-6 rounded-3xl flex gap-4">
          <Clock className="w-6 h-6 text-amber-600 shrink-0" />
          <div className="text-sm text-amber-800 leading-relaxed">
            <p className="font-black mb-1">返信の目安</p>
            <p>ご返信まで<strong>7日以内</strong>を目安にお時間をいただいております。お急ぎの場合は直接お電話にてお問い合わせください。</p>
          </div>
        </div>
        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-3xl flex gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
          <div className="text-sm text-red-800 leading-relaxed">
            <p className="font-black mb-1">病気の相談について</p>
            <p>メールフォームでの<strong>病気の診断や治療に関するご相談</strong>は受け付けておりません。必ずペットと一緒にご来院ください。</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-soft-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" name="name" required className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="山田 太郎" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="email" name="email" required className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="example@mail.com" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">電話番号</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="tel" name="phoneNumber" className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all" placeholder="090-1234-5678" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ件名 <span className="text-red-500">*</span></label>
          <select name="subject" required className="w-full px-4 py-3 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all bg-white appearance-none">
            <option value="consultation">診察について</option>
            <option value="hotel">ペットホテルについて</option>
            <option value="recruit">採用について</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea name="message" required rows={6} className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-soft-100 focus:border-primary-500 outline-none transition-all resize-none" placeholder="お問い合わせ内容をご記入ください。"></textarea>
          </div>
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
          {isSubmitting ? '送信中...' : 'お問い合わせを送信する'}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
