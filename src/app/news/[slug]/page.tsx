import { client } from "@/lib/sanity/client";
import { postBySlugQuery, allPostsQuery, relatedPostsQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import { CustomPortableText } from "@/components/shared/PortableText";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, ArrowRight, PawPrint } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: any = await client.fetch(postBySlugQuery, { slug });
  if (!post) return { title: "記事が見つかりません" };

  return {
    title: `${post.title} | 湖東どうぶつ病院`,
    description: post.excerpt || "湖東どうぶつ病院からのお知らせです。",
  };
}

export async function generateStaticParams() {
  const posts: SanityPost[] = await client.fetch(allPostsQuery);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post: any = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  // 関連記事を取得
  const relatedPosts: SanityPost[] = await client.fetch(relatedPostsQuery, {
    currentId: post._id,
    categoryRefs: post.categoryRefs || []
  });

  return (
    <div className="bg-soft-cream min-h-screen pb-24">
      <article className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-soft-100"
            >
              <ArrowLeft className="w-5 h-5" />
              お知らせ一覧に戻る
            </Link>
          </div>

          <div className="bg-white rounded-[60px] overflow-hidden shadow-xl shadow-primary-900/5 border border-soft-100">
            <header className="p-8 md:p-16 pb-0">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-primary-600 font-bold bg-primary-50 px-4 py-2 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.categories && post.categories.filter(Boolean).map((cat: string, i: number) => (
                  <span key={i} className="bg-white text-gray-500 px-4 py-2 rounded-full text-sm font-bold border border-soft-100">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-12 tracking-tighter">
                {post.title}
              </h1>
              {post.mainImage && (
                <div className="relative aspect-video w-full rounded-[40px] overflow-hidden shadow-2xl mb-16 border-8 border-white">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            <div className="px-8 md:px-16 pb-20">
              <div className="prose-hospital">
                {post.contentFormat === "html" ? (
                  <div dangerouslySetInnerHTML={{ __html: post.htmlBody || "" }} />
                ) : (
                  <CustomPortableText value={post.body} />
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 関連記事セクション */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12 border-b-4 border-primary-100 pb-4">
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter">こちらの記事もおすすめ</h2>
              <PawPrint className="w-8 h-8 text-primary-200" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPosts.map((rPost) => (
                <Link key={rPost._id} href={`/news/${rPost.slug.current}`} className="group">
                  <article className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all h-full border border-soft-100 flex flex-col">
                    <div className="relative h-40 w-full bg-gray-100">
                      {rPost.mainImage ? (
                        <Image
                          src={urlFor(rPost.mainImage).url()}
                          alt={rPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-300">
                          <PawPrint className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold mb-2">
                        <time>{new Date(rPost.publishedAt).toLocaleDateString("ja-JP")}</time>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug mb-4">
                        {rPost.title}
                      </h3>
                      <div className="mt-auto text-primary-600 font-bold text-[10px] flex items-center gap-1">
                        詳しく見る <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
