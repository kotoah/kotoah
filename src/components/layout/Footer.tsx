import { PawPrint, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12 rounded-t-[40px] lg:rounded-t-[60px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                湖東<span className="text-primary-500">どうぶつ病院</span>
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              言葉を話せないどうぶつたちの心の声に耳を傾け、
              飼い主様と一緒に最善のケアを考えていきます。
              お気軽にご相談ください。
            </p>
            <div className="flex gap-4">
               {["Twitter", "Instagram", "Facebook"].map(social => (
                 <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all cursor-pointer">
                   <span className="sr-only">{social}</span>
                   {/* Placeholder for icons */}
                   <div className="w-5 h-5 bg-current opacity-20" />
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">ホーム</Link></li>
              <li><Link href="/news" className="hover:text-primary-400 transition-colors">お知らせ・ブログ</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">当院について</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">診療案内</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-400 transition-colors">料金案内</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">よくある質問</Link></li>
              <li><Link href="/hotel" className="hover:text-primary-400 transition-colors">ペットホテル</Link></li>
              <li><Link href="/order" className="hover:text-primary-400 transition-colors">フード・薬注文</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-white font-bold text-xl mb-8">Access Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-500 shrink-0" />
                <p>〒529-1403<br />滋賀県東近江市湖東</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary-500 shrink-0" />
                <p className="text-xl font-bold text-white">00-0000-0000</p>
              </div>
              <div className="flex items-start gap-4 text-sm">
                <Clock className="w-6 h-6 text-primary-500 shrink-0" />
                <div>
                  <p>9:00 - 12:00 / 16:00 - 19:00</p>
                  <p className="text-gray-500 mt-1">※水曜休診、土日祝も診察中</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Koto Animal Hospital. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
             <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
             <Link href="/site-policy" className="hover:text-white transition-colors">サイトポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
