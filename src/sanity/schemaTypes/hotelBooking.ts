import { defineField, defineType } from "sanity";

export const hotelBookingType = defineType({
  name: "hotelBooking",
  title: "ペットホテル予約管理",
  type: "document",
  fields: [
    defineField({
      name: "petName",
      title: "ペット名",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "chartNumber",
      title: "カルテ番号",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkInDate",
      title: "チェックイン日",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkOutDate",
      title: "チェックアウト日",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "roomType",
      title: "部屋タイプ",
      type: "string",
      options: {
        list: [
          { title: "猫舎", value: "cat" },
          { title: "犬舎小", value: "dogSmall" },
          { title: "犬舎大", value: "dogLarge" },
          { title: "エキゾチック", value: "exotic" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "petName",
      subtitle: "chartNumber",
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title} 様`,
        subtitle: `カルテNo: ${subtitle}`,
      };
    },
  },
});
