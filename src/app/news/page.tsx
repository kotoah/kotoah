import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { searchPostsQuery, allCategoriesQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import { Metadata } from "next";
import { PawPrint, Search, X, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "お知らせ・ブログ | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院からのお知らせやブログの一覧です。大切なペットの健康情報や、休診日のご案内などを掲載しています。",
};

interface NewsPageProps {
  searchParams: Promise<{ 
    category?: string;
    q?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const { category: categorySlug, q: searchQuery } = await searchParams;
  
  // 記事とカテゴリ一覧を同時に取得
  const [posts, categories] = await Promise.all([
    client.fetch(searchPostsQuery, { 
      categorySlug: categorySlug || null, 
      searchQuery: searchQuery ? `*${searchQuery}*` : null 
    }),
    client.fetch(allCategoriesQuery)
  ]);

  // 現在のカテゴリ名を取得
  const currentCategory = categorySlug 
    ? categories.find((c: any) => c.slug === categorySlug)
    : null;

  return (
    <div className="py-24 bg-soft-cream min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-black tracking-widest uppercase text-sm mb-4 block">Our Journal</span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">
            {categorySlug ? `${currentCategory?.title}の記事一覧` : "お知らせ・ブログ"}
          </h1>
          
          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Keyword Search */}
            <form action="/news" className="relative max-w-2xl mx-auto group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                name="q"
                defaultValue={searchQuery}
                placeholder="キーワードで記事を検索..." 
                className="w-full bg-white border-4 border-transparent shadow-xl rounded-full py-5 pl-16 pr-24 outline-none focus:border-primary-100 transition-all text-lg font-medium"
              />
              {categorySlug && <input type="hidden" name="category" value={categorySlug} />}
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-md shadow-primary-100"
              >
                検索
              </button>
            </form>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/news"
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${!categorySlug ? 'bg-primary-600 border-primary-600 text-white shadow-md' : 'bg-white border-soft-100 text-gray-500 hover:border-primary-200'}`}
              >
                すべて
              </Link>
              {categories.map((cat: any) => (
                <Link 
                  key={cat._id}
                  href={`/news?category=${cat.slug}${searchQuery ? `&q=${searchQuery}` : ''}`}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${categorySlug === cat.slug ? 'bg-primary-600 border-primary-600 text-white shadow-md' : 'bg-white border-soft-100 text-gray-500 hover:border-primary-200'}`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            {/* Active Filters Display */}
            {(categorySlug || searchQuery) && (
              <div className="flex items-center justify-center gap-4 pt-4">
                <p className="text-sm text-gray-400">
                  <span className="font-bold text-gray-900">{posts.length}</span> 件の記事が見つかりました
                </p>
                <Link href="/news" className="flex items-center gap-1 text-sm font-bold text-red-500 hover:underline">
                  <X className="w-4 h-4" /> 検索をリセット
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.filter((post: SanityPost) => post.slug?.current).map((post: SanityPost) => (
              <Link key={post._id} href={`/news/${post.slug.current}`} className="group h-full">
                <article className="bg-white rounded-[60px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full border border-soft-100 flex flex-col">
                  <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300">
                        <PawPrint className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      <span className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-xs font-black text-primary-700 shadow-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                      </span>
                      {post.categories && post.categories.filter(Boolean).map((cat, i) => (
                        <span key={i} className="bg-primary-600 text-white px-5 py-2 rounded-full text-xs font-black shadow-md uppercase tracking-wider">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h2 className="text-2xl font-black text-gray-900 line-clamp-2 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed line-clamp-3 mb-8 text-sm font-medium">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-primary-600 font-black text-sm uppercase tracking-widest">
                      記事を読む
                      <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[80px] border-4 border-dashed border-soft-100 shadow-inner">
            <div className="w-24 h-24 bg-soft-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-12 h-12 text-soft-200" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">お探しの記事は見つかりませんでした</h3>
            <p className="text-gray-500 font-medium mb-12 max-w-md mx-auto leading-relaxed">
              キーワードを変えて検索するか、カテゴリを選択し直してみてください。
            </p>
            <Link href="/news" className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg">
              すべてのお知らせを表示する
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
