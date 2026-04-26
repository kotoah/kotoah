import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "カテゴリ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "カテゴリ名",
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
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "説明",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "アイコン画像",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isAnimal",
      title: "診察対象動物として表示する",
      type: "boolean",
      initialValue: false,
      description: "オンにすると、トップページの『診察対象動物』セクションに表示されます。",
    }),
    defineField({
      name: "order",
      title: "表示順",
      type: "number",
      description: "数字が小さいほど先に表示されます（例：犬=1, 猫=2...）",
      initialValue: 0,
    }),
  ],
});
