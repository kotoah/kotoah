import { defineField, defineType } from "sanity";
import { CopyHtmlTag } from "../components/CopyHtmlTag";
import { AiAltTextGenerator } from "../components/AiAltTextGenerator";

export const imageAssetType = defineType({
  name: "imageAsset",
  title: "画像素材（ブログ・HTML用）",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "画像の名前（管理用）",
      type: "string",
      description: "何の画像か分かる名前を付けてください（例：狂犬病ワクチンのポスター）",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "画像アップロード",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "代替テキスト（自動生成対応）",
      type: "string",
      description: "画像の内容を説明する文章です。SEOに効果があります。",
      components: {
        input: AiAltTextGenerator,
      },
    }),
    defineField({
      name: "copyHelper",
      title: "HTMLタグの取得",
      type: "string",
      components: {
        input: CopyHtmlTag,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
