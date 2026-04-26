import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "フード・薬の注文一覧",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "ステータス",
      type: "string",
      options: {
        list: [
          { title: "未対応", value: "new" },
          { title: "手配中", value: "processing" },
          { title: "受取可能", value: "ready" },
          { title: "受取済み", value: "completed" },
          { title: "キャンセル", value: "cancelled" },
        ],
      },
      initialValue: "new",
    }),
    defineField({ name: "ownerName", title: "飼い主名", type: "string" }),
    defineField({ name: "phoneNumber", title: "電話番号", type: "string" }),
    defineField({ name: "petName", title: "ペット名", type: "string" }),
    defineField({ name: "chartNumber", title: "カルテ番号", type: "string" }),
    defineField({
      name: "orderType",
      title: "注文種類",
      type: "string",
      options: {
        list: [
          { title: "フードのみ", value: "food" },
          { title: "薬のみ", value: "medicine" },
          { title: "両方", value: "both" },
        ],
      },
    }),
    defineField({ name: "orderItems", title: "注文内容詳細", type: "text", description: "フードの商品名や薬の名前、数量などを記入" }),
    defineField({ name: "pickupDate", title: "受取希望日", type: "date" }),
    defineField({ name: "message", title: "備考・ご要望", type: "text" }),
  ],
  preview: {
    select: {
      title: "ownerName",
      subtitle: "orderItems",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      const statusLabels: Record<string, string> = {
        new: "🔴未対応",
        processing: "🟡手配中",
        ready: "🟢受取可",
        completed: "⚪受取済",
        cancelled: "❌取消",
      };
      return {
        title: `${statusLabels[status] || ""} ${title} 様`,
        subtitle: subtitle,
      };
    },
  },
});
