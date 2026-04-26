import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "お問い合わせ一覧",
  type: "document",
  fields: [
    defineField({
      name: "status",
      title: "ステータス",
      type: "string",
      options: {
        list: [
          { title: "未対応", value: "new" },
          { title: "対応中", value: "processing" },
          { title: "返信済み", value: "replied" },
          { title: "完了", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({ name: "name", title: "お名前", type: "string" }),
    defineField({ name: "email", title: "メールアドレス", type: "string" }),
    defineField({ name: "phoneNumber", title: "電話番号", type: "string" }),
    defineField({
      name: "subject",
      title: "件名",
      type: "string",
      options: {
        list: [
          { title: "診察について", value: "consultation" },
          { title: "ペットホテルについて", value: "hotel" },
          { title: "採用について", value: "recruit" },
          { title: "その他", value: "other" },
        ],
      },
    }),
    defineField({ name: "message", title: "お問い合わせ内容", type: "text" }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "subject",
    },
  },
});
