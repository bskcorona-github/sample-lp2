import React from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "沖縄マリンアクティビティ | 最高の海体験を提供",
  description:
    "沖縄の美しい海でダイビング、ジェットスキー、シュノーケリングなどのマリンアクティビティをお楽しみいただけます。初心者から上級者まで安心して体験できるプログラムをご用意しています。",
  keywords:
    "沖縄, マリンアクティビティ, ダイビング, ジェットスキー, シュノーケリング, 海, アクティビティ, 予約",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
