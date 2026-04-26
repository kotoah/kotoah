import { defineField, defineType } from "sanity";
import { Monitor } from "lucide-react";

export const facilityType = defineType({
  name: "facility",
  title: "設備・検査案内",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "設備・検査名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      options: {
        list: [
          { title: "画像診断機器", value: "imaging" },
          { title: "血液・生化学検査", value: "blood" },
          { title: "顕微鏡・その他検査", value: "microscope" },
          { title: "入院・手術設備", value: "surgery" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "写真",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "解説・導入の目的",
      type: "text",
      rows: 4,
      description: "その設備を使ってどのような検査を行うか、飼い主様に分かりやすく記入してください。",
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
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
