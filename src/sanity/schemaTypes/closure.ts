import { defineField, defineType } from "sanity";

export const closureType = defineType({
  name: "closure",
  title: "臨時休診・時間変更",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "日付",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "休診種別",
      type: "string",
      options: {
        list: [
          { title: "終日休診", value: "allDay" },
          { title: "午前休診", value: "morning" },
          { title: "午後休診", value: "afternoon" },
          { title: "その他（備考参照）", value: "other" },
        ],
      },
      initialValue: "allDay",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reason",
      title: "理由・備考",
      type: "string",
      placeholder: "例：祝日のため、研修のため",
    }),
  ],
  preview: {
    select: {
      title: "date",
      subtitle: "reason",
      type: "type",
    },
    prepare({ title, subtitle, type }) {
      const typeLabels: any = {
        allDay: "終日休診",
        morning: "午前休診",
        afternoon: "午後休診",
        other: "時間変更あり",
      };
      return {
        title: `${title} (${typeLabels[type]})`,
        subtitle: subtitle,
      };
    },
  },
});
