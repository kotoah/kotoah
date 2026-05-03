import { defineField, defineType } from "sanity";
import { AiAltTextGenerator } from "../components/AiAltTextGenerator";

export const postType = defineType({
  name: "post",
  title: "お知らせ・ブログ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "スラッグ",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // スペースをハイフンに
            .slice(0, 96),
      },
    }),
    defineField({
      name: "categories",
      title: "カテゴリ・対象動物",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "symptoms",
      title: "症状・お悩みタグ",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "吐いている・下痢", value: "vomiting-diarrhea" },
          { title: "痒がる・皮膚の赤み", value: "itching-skin" },
          { title: "咳が出る・苦しそう", value: "coughing-breathing" },
          { title: "食欲がない・元気がない", value: "lethargy-appetite" },
          { title: "水をたくさん飲む・尿が多い", value: "polydipsia-polyuria" },
          { title: "足を引きずっている", value: "limping" },
          { title: "しこりがある", value: "lump" },
          { title: "目やに・涙目", value: "eye-discharge" },
          { title: "ワクチン・狂犬病予防", value: "vaccine" },
          { title: "フィラリア・ノミダニ予防", value: "prevention" },
          { title: "爪切り・日常ケア", value: "grooming" },
          { title: "健康診断・ドック", value: "checkup" },
        ],
      },
    }),
    defineField({
      name: "contentFormat",
      title: "本文の形式",
      type: "string",
      options: {
        list: [
          { title: "リッチテキスト（標準）", value: "richText" },
          { title: "HTML直接入力", value: "html" },
        ],
      },
      initialValue: "richText",
    }),
    defineField({
      name: "mainImage",
      title: "メイン画像",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "代替テキスト（自動生成対応）",
          description: "画像の内容を説明する文章です。SEOに効果があります。",
          components: {
            input: AiAltTextGenerator,
          },
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "抜粋",
      type: "text",
      rows: 3,
      description: "一覧ページに表示される短い文章です。",
    }),
    defineField({
      name: "body",
      title: "本文（リッチテキスト）",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "代替テキスト",
            },
          ],
        },
      ],
      hidden: ({ parent }) => parent?.contentFormat === "html",
    }),
    defineField({
      name: "htmlBody",
      title: "本文（HTML）",
      type: "text",
      rows: 20,
      description: "HTMLタグを直接記述できます。外部サイトからの貼り付けなどに利用してください。",
      hidden: ({ parent }) => parent?.contentFormat !== "html",
    }),
    defineField({
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
