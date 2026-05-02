import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VCN289TSRK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VCN289TSRK');
          `}
        </Script>
      </head>
      <body className={`${inter.className} pb-20 lg:pb-0`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileNavigation />
      </body>
    </html>
  );
}
