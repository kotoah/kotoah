import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "湖東どうぶつ病院 | 地域に寄り添う動物病院",
  description: "滋賀県東近江市の湖東どうぶつ病院。犬、猫、うさぎ、ハムスター、モルモット、デグー、フェレット、ハリネズミを診察。清潔感と優しさのある、地域の方々に信頼されるモダンな病院です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
