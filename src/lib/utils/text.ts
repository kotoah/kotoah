import { PortableTextBlock } from "@portabletext/types";

/**
 * HTML文字列からプレーンテキストを抽出し、指定した長さで切り詰める
 */
export function stripHtmlAndTruncate(html: string, length: number = 100): string {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * PortableText(リッチテキスト)からプレーンテキストを抽出し、切り詰める
 */
export function extractTextFromPortableText(blocks: PortableTextBlock[], length: number = 100): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  
  const text = blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return (block.children as any[]).map(child => child.text).join('');
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * 投稿データから最適な抜粋を取得する
 */
export function getPostExcerpt(post: {
  excerpt?: string;
  contentFormat?: "richText" | "html";
  htmlBody?: string;
  body?: PortableTextBlock[];
}, length: number = 100): string {
  // 1. 手動で入力された抜粋があれば優先
  if (post.excerpt && post.excerpt.trim()) {
    return post.excerpt;
  }

  // 2. 本文形式に合わせて自動抽出
  if (post.contentFormat === "html" && post.htmlBody) {
    return stripHtmlAndTruncate(post.htmlBody, length);
  }

  if (post.body) {
    return extractTextFromPortableText(post.body, length);
  }

  return "";
}
