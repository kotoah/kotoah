import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative my-10 h-96 w-full">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "ブログ画像"}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-10 mb-4 text-primary-700">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-8 mb-3 text-primary-600">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
  },
};

export function CustomPortableText({ value }: { value: any[] }) {
  return <PortableText value={value} components={components} />;
}
