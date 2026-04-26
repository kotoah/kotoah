import { defineField, defineType } from "sanity";

export const hotelReservationType = defineType({
  name: "hotelReservation",
  title: "ペットホテル予約申込一覧",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "ステータス",
      type: "string",
      options: {
        list: [
          { title: "未対応", value: "pending" },
          { title: "確認中", value: "processing" },
          { title: "予約確定", value: "confirmed" },
          { title: "キャンセル", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({ name: "ownerName", title: "飼い主名", type: "string" }),
    defineField({ name: "phoneNumber", title: "電話番号", type: "string" }),
    defineField({ name: "email", title: "メールアドレス", type: "string" }),
    defineField({ name: "petName", title: "ペット名", type: "string" }),
    defineField({ name: "chartNumber", title: "カルテ番号", type: "string" }),
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
    }),
    defineField({ name: "checkInDate", title: "チェックイン日", type: "date" }),
    defineField({ name: "checkOutDate", title: "チェックアウト日", type: "date" }),
    defineField({ name: "message", title: "備考・ご要望", type: "text" }),
  ],
  preview: {
    select: {
      title: "ownerName",
      subtitle: "petName",
      date: "checkInDate",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: `${title} 様 (${subtitle})`,
        subtitle: `${date} からの予約申込`,
      };
    },
  },
});
