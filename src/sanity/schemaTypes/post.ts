import { defineField, defineType } from "sanity";

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
