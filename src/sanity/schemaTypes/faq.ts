import { defineField, defineType } from "sanity";
import { HelpCircle } from "lucide-react";

export const faqType = defineType({
  name: "faq",
  title: "よくある質問 (FAQ)",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "質問 (Question)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "回答 (Answer)",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "表示する場所・カテゴリ",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "全般 (General)", value: "general" },
          { title: "診察について", value: "consultation" },
          { title: "ペットホテル", value: "hotel" },
          { title: "健康診断", value: "checkup" },
          { title: "料金・お支払い", value: "pricing" },
          { title: "フード・薬注文", value: "order" },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "order",
      title: "表示順",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "categories.0",
    },
  },
});
