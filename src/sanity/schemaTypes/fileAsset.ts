import { defineField, defineType } from "sanity";
import { CopyFileUrl } from "../components/CopyFileUrl";

export const fileAssetType = defineType({
  name: "fileAsset",
  title: "ファイル素材（PDF・ドキュメント）",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ファイルの名前（管理用）",
      type: "string",
      description: "何のファイルか分かる名前を付けてください（例：2026年フィラリアガイドライン）",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "ファイルアップロード",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx,.xls,.xlsx",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "copyHelper",
      title: "URLの取得",
      type: "string",
      components: {
        input: CopyFileUrl,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
