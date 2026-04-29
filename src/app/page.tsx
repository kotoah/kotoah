import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { latestPostsQuery, animalCategoriesQuery, closuresQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import MedicalCalendar from "@/components/shared/MedicalCalendar";
import { 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  PawPrint, 
  Building2, 
  ShoppingBag, 
  Banknote,
  ArrowRight,
  ChevronRight,
  Calendar
} from "lucide-react";

interface Category {
  _id: string;
  title: string;
  slug: string;
  image?: any;
}

export default async function Home() {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split('T')[0];
  const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0).toISOString().split('T')[0];

  const [posts, categories, closures] = await Promise.all([
    client.fetch(latestPostsQuery),
    client.fetch(animalCategoriesQuery),
    client.fetch(closuresQuery, { startDate: startOfMonth, endDate: endOfNextMonth })
  ]);

  return (
    <div className="flex flex-col gap-y-0 bg-soft-cream">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] lg:h-[85vh] flex items-center overflow-hidden bg-primary-50 pt-24 lg:pt-0 pb-12 lg:pb-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100/50 rounded-l-[100px] hidden lg:block -z-0" />
        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-xs font-bold mb-4">
              滋賀県東近江市湖東の動物病院
            </span>
            <h1 className="text-[1.85rem] xs:text-4xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
              言葉を話せない<br />
              <span className="text-primary-600 font-black">小さな家族</span>のために。
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
              犬・猫からエキゾチックアニマルまで。<br className="hidden md:block" />
              地域に根ざした、優しく誠実な医療をお届けします。
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/services" className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2 w-full sm:w-auto">
                診療案内を見る <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold border-2 border-soft-100 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center w-full sm:w-auto">
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Hero Visual for Desktop */}
          <div className="flex-1 relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
               {/* Decorative Shapes */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10" />
               
               {/* Floating Cards */}
               <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-[40px] shadow-xl p-8 flex flex-col items-center justify-center rotate-[-6deg] animate-bounce-slow">
                 <PawPrint className="w-16 h-16 text-primary-500 mb-4" />
                 <span className="font-black text-gray-800">ワンちゃん</span>
               </div>

               <div className="absolute bottom-12 right-0 w-52 h-52 bg-primary-600 rounded-[50px] shadow-2xl p-8 flex flex-col items-center justify-center rotate-[8deg] animate-float">
                 <Heart className="w-16 h-16 text-white mb-4" />
                 <span className="font-black text-white">ネコちゃん</span>
               </div>

               <div className="absolute top-20 right-8 w-40 h-40 bg-accent-500 rounded-[35px] shadow-xl p-6 flex flex-col items-center justify-center rotate-[12deg] animate-pulse-slow">
                 <ShieldCheck className="w-12 h-12 text-white mb-3" />
                 <span className="font-black text-white text-sm">エキゾチック</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-12 lg:py-32 bg-white rounded-t-[40px] lg:rounded-t-[100px] -mt-6 lg:-mt-20 relative z-10 shadow-[-20px_-20px_60px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <span className="text-primary-600 font-black tracking-widest uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight">
                「ここに来てよかった」と<br />思っていただける場所へ。
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                私たちは、飼い主様との対話を何よりも大切にしています。
                病気の治療だけでなく、日々の暮らしの不安や予防のこと、何でも気軽にご相談いただけるホームドクターを目指しています。
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary-600 font-black group">
                当院の理念・スタッフ紹介はこちら
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               <div className="bg-soft-50 aspect-square rounded-3xl flex items-center justify-center">
                 <ShieldCheck className="w-12 h-12 text-primary-300" />
               </div>
               <div className="bg-primary-50 aspect-square rounded-[60px] flex items-center justify-center">
                 <Stethoscope className="w-12 h-12 text-primary-400" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-soft-100 hover:border-primary-200 transition-all group flex items-start md:flex-col gap-6 md:gap-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex-shrink-0 flex items-center justify-center mb-0 md:mb-8 group-hover:bg-primary-500 group-hover:text-white transition-colors">
              <Heart className="w-7 h-7 md:w-8 md:h-8 text-primary-500 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">優しい診察</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                言葉を話せない動物たちの不安を取り除けるよう、優しく丁寧に、時間をかけて向き合います。
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-soft-100 hover:border-accent-200 transition-all group flex items-start md:flex-col gap-6 md:gap-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-accent-50 rounded-2xl flex-shrink-0 flex items-center justify-center mb-0 md:mb-8 group-hover:bg-accent-500 group-hover:text-white transition-colors">
              <Stethoscope className="w-7 h-7 md:w-8 md:h-8 text-accent-500 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">納得のいく説明</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                飼い主様が納得して治療を選択できるよう、専門用語を避け、分かりやすい説明を心がけています。
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-soft-100 hover:border-primary-200 transition-all group flex items-start md:flex-col gap-6 md:gap-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-50 rounded-2xl flex-shrink-0 flex items-center justify-center mb-0 md:mb-8 group-hover:bg-primary-500 group-hover:text-white transition-colors">
              <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-primary-500 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">安心の院内設備</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                常に清潔を保ち、適切にメンテナンスされた検査機器を揃えています。リラックスしてお待ちいただける環境づくりに努めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Hub */}
      <section className="py-16 md:py-24 lg:py-32 bg-soft-cream">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="text-primary-600 font-black tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-[1.75rem] md:text-5xl font-black text-gray-900 mt-4 tracking-tighter">診療・サービス案内</h2>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { title: "一般診療", icon: <Stethoscope />, href: "/services", color: "bg-blue-500", text: "内科・外科などの一般診療。" },
            { title: "予防医療", icon: <ShieldCheck />, href: "/services/prevention", color: "bg-accent-500", text: "ワクチン・フィラリア予防。" },
            { title: "ペットホテル", icon: <Building2 />, href: "/hotel", color: "bg-primary-600", text: "獣医師が見守る安心の宿泊。" },
            { title: "料金案内", icon: <Banknote />, href: "/pricing", color: "bg-gray-800", text: "透明性のある料金体系。" }
          ].map((s) => (
            <Link key={s.title} href={s.href} className="bg-white p-5 md:p-10 rounded-2xl md:rounded-[40px] shadow-sm border border-soft-100 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center group">
              <div className={`${s.color} text-white p-3 md:p-5 rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                {/* Responsive icon size */}
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center child-svg:w-full child-svg:h-full">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-2xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter">{s.title}</h3>
              <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed mb-4 hidden xs:block">{s.text}</p>
              <span className="mt-auto text-primary-600 font-bold text-[10px] md:text-sm flex items-center gap-1">
                詳しく <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Target Animals */}
      <section className="py-12 md:py-24 lg:py-32 bg-primary-600 rounded-[40px] lg:rounded-[100px] mx-4 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-10 md:mb-16">
            <h2 className="text-[1.75rem] md:text-5xl font-black text-white mb-4 tracking-tighter">診察対象動物</h2>
            <p className="text-primary-100 max-w-xl mx-auto font-bold text-sm md:text-base">幅広いエキゾチックアニマルにも対応しております。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category: Category) => (
              <Link 
                key={category._id} 
                href={`/news?category=${category.slug}`}
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 md:p-8 rounded-2xl md:rounded-none text-center hover:bg-white transition-all group relative block"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-white pixel-icon-container text-primary-600 border-primary-600 overflow-hidden relative">
                  {category.image ? (
                    <Image src={urlFor(category.image).url()} alt={category.title} fill className="object-contain p-1 md:p-2" style={{ imageRendering: 'pixelated' }} />
                  ) : (
                    <div className="text-2xl md:text-4xl group-hover:scale-110 transition-transform select-none">🐾</div>
                  )}
                </div>
                <div className="text-base md:text-xl font-black text-white group-hover:text-primary-700 tracking-tighter">{category.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Food & Medicine Order Hub */}
      <section className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-soft-50 rounded-[40px] lg:rounded-[80px] p-6 md:p-20 flex flex-col md:flex-row items-center gap-8 lg:gap-16 border border-soft-100">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-500 text-white rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-primary-100">
                <ShoppingBag className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h2 className="text-2xl lg:text-4xl font-black text-gray-900 tracking-tighter">フード・お薬の注文</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-sm lg:text-lg">
                いつものフードやお薬を、オンラインで事前に注文。
                窓口での待ち時間を短縮し、スムーズにお受け取りいただけます。
              </p>
              <Link href="/order" className="bg-primary-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold hover:bg-primary-700 transition-all shadow-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                注文フォームへ <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 w-full max-w-md bg-white p-8 lg:p-10 rounded-[40px] lg:rounded-[60px] shadow-sm border border-soft-100">
               <ul className="space-y-6">
                 {[
                   { t: "フォームから注文", d: "必要事項をサッと入力" },
                   { t: "準備完了をご連絡", d: "メールまたはお電話で通知" },
                   { t: "病院でお受け取り", d: "診察時間内にお越しください" }
                 ].map((step, i) => (
                   <li key={i} className="flex gap-4 items-start">
                     <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center font-black shrink-0">{i+1}</div>
                     <div>
                        <p className="font-bold text-gray-900">{step.t}</p>
                        <p className="text-sm text-gray-400 mt-1">{step.d}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Calendar & Latest News Hub */}
      <section className="py-16 md:py-24 lg:py-32 bg-soft-cream">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Calendar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-end justify-between border-b-4 border-primary-100 pb-4">
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">診療カレンダー</h2>
              <span className="text-primary-600 font-bold text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 臨時休診のご案内
              </span>
            </div>
            <MedicalCalendar initialClosures={closures} />
          </div>

          {/* Latest News */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-end justify-between border-b-4 border-primary-100 pb-4">
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">最新のお知らせ・ブログ</h2>
              <Link href="/news" className="text-primary-600 font-bold flex items-center gap-1 hover:underline">
                すべて見る <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {posts.filter((post: SanityPost) => post.slug?.current).map((post: SanityPost) => (
                <Link key={post._id} href={`/news/${post.slug.current}`} className="flex gap-6 bg-white p-6 rounded-[32px] border border-soft-100 hover:shadow-xl transition-all group">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-gray-100 shadow-inner">
                    {post.mainImage ? (
                      <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300"><PawPrint className="w-6 h-6" /></div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-bold mb-2">
                      <time>{new Date(post.publishedAt).toLocaleDateString("ja-JP")}</time>
                      {post.categories?.[0] && <span className="text-primary-600">#{post.categories[0]}</span>}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer Call to Action */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-900 mx-4 rounded-b-[40px] lg:rounded-b-[100px] text-center text-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 space-y-10">
            <h2 className="text-[1.75rem] md:text-5xl font-black tracking-tighter leading-tight">
              大切な家族の健康を、<br className="md:hidden" />一緒に守りましょう。
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              滋賀県東近江市湖東。清潔で温かみのある院内で、<br className="hidden md:block" />
              皆様のご来院を心よりお待ちしております。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-3xl">
                  <p className="text-gray-500 text-xs font-bold uppercase mb-2">Call Us</p>
                  <p className="text-2xl font-black tracking-tighter">00-0000-0000</p>
               </div>
               <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-3xl">
                  <p className="text-gray-500 text-xs font-bold uppercase mb-2">Location</p>
                  <p className="text-lg font-bold tracking-tighter">滋賀県東近江市湖東</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
