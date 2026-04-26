import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { encyclopediaPostsQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import { Metadata } from "next";
import { BookOpen, PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "病気図鑑 | 湖東どうぶつ病院",
  description: "湖東どうぶつ病院の病気図鑑。犬、猫、エキゾチックアニマルの様々な疾患について、獣医師が分かりやすく解説します。滋賀県東近江市湖東。",
};

export default async function DictionaryPage() {
  const posts: SanityPost[] = await client.fetch(encyclopediaPostsQuery);

  // カテゴリごとにグループ化（1つの記事が複数カテゴリにある場合は両方に表示）
  const categoriesMap: Record<string, SanityPost[]> = {};
  
  posts.forEach(post => {
    const cats = post.categories && post.categories.length > 0 ? post.categories : ["その他"];
    cats.forEach(cat => {
      if (!categoriesMap[cat]) categoriesMap[cat] = [];
      // 重複を避けるためのチェックは不要（セクションが異なるため）
      categoriesMap[cat].push(post);
    });
  });

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 text-white border border-white/30">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">病気図鑑</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-bold leading-relaxed">
            大切な家族の「もしも」の時に。<br />
            病気や症状、予防について分かりやすく解説します。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {posts.length > 0 ? (
          <div className="space-y-20">
            {Object.entries(categoriesMap).map(([category, categoryPosts]) => (
              <section key={category}>
                <div className="flex items-center gap-4 mb-10 border-b-4 border-primary-100 pb-4">
                  <div className="bg-primary-500 text-white p-2 rounded-xl">
                    <PawPrint className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">{category}</h2>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-primary-600 border border-primary-100 ml-auto">
                    {categoryPosts.length} 記事
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPosts.map((post) => (
                    <Link key={`${category}-${post._id}`} href={`/news/${post.slug.current}`} className="group">
                      <article className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all h-full border border-soft-100 flex flex-col">
                        <div className="relative h-48 w-full bg-gray-100">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-300">
                              <BookOpen className="w-12 h-12" />
                            </div>
                          )}
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-4 group-hover:text-primary-600 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="mt-auto flex items-center text-primary-600 font-bold text-sm">
                            詳しく見る
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[40px] border-4 border-dashed border-soft-200">
            <BookOpen className="w-16 h-16 text-soft-200 mx-auto mb-6" />
            <p className="text-xl font-bold text-gray-400">現在、図鑑記事を準備中です。</p>
          </div>
        )}
      </div>
    </div>
  );
}
