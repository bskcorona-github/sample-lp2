import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "サンプルサイト２ | 沖縄マリンアクティビティ",
  description:
    "沖縄の美しい海でマリンアクティビティを楽しみませんか？ダイビング、シュノーケリング、ジェットスキーなど様々なアクティビティをご用意しています。",
  keywords:
    "沖縄, マリンアクティビティ, ダイビング, シュノーケリング, 海遊び, ビーチ, 予約",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
