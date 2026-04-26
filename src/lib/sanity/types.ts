import type { PortableTextBlock } from "@portabletext/types";

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  excerpt?: string;
  categories?: string[];
  categorySlugs?: string[];
  postType: "announcement" | "encyclopedia";
  contentFormat?: "richText" | "html";
  htmlBody?: string;
  body: PortableTextBlock[];
}
