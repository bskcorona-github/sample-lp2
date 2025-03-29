import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "会社概要 | 沖縄マリンアクティビティ",
  description:
    "沖縄マリンアクティビティの会社概要ページです。私たちの理念やスタッフ紹介、設備についてご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">会社概要</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              沖縄の美しい海を舞台に、最高のマリンアクティビティ体験を提供しています。安全・安心をモットーに、お客様の思い出作りをサポートします。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src="/images/shop.jpg"
                  alt="沖縄マリンアクティビティ店舗"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-ocean-blue-800">
                  私たちの想い
                </h2>
                <p className="text-gray-700 mb-6">
                  沖縄マリンアクティビティは、2010年の創業以来、沖縄の美しい海の魅力を多くの方々に体験していただくことを目指してきました。私たちは単なるレジャーサービスの提供にとどまらず、海の素晴らしさを感じていただき、海を大切にする気持ちを育むお手伝いをしたいと考えています。
                </p>
                <p className="text-gray-700">
                  スタッフ全員が海を愛する沖縄出身者または長期在住者で構成されており、地元ならではの知識と経験を活かしたサービスを提供しています。安全管理を最優先に、お客様一人ひとりに合わせたきめ細やかなサポートを心がけています。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-ocean-blue-800">
              会社情報
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700 w-1/3">
                      会社名
                    </th>
                    <td className="py-4 px-4 text-gray-700">
                      株式会社沖縄マリンアクティビティ
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      設立
                    </th>
                    <td className="py-4 px-4 text-gray-700">2010年4月</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      代表者
                    </th>
                    <td className="py-4 px-4 text-gray-700">山田 太郎</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      所在地
                    </th>
                    <td className="py-4 px-4 text-gray-700">
                      〒900-0001
                      <br />
                      沖縄県那覇市○○町1-2-3
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      営業時間
                    </th>
                    <td className="py-4 px-4 text-gray-700">
                      8:00～19:00（年中無休）
                      <br />
                      ※荒天時は営業を中止する場合があります
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      事業内容
                    </th>
                    <td className="py-4 px-4 text-gray-700">
                      マリンアクティビティの企画・運営
                      <br />
                      マリン用品のレンタル・販売
                      <br />
                      海洋環境保全活動
                    </td>
                  </tr>
                  <tr>
                    <th className="py-4 px-4 text-left text-ocean-blue-700">
                      資格・認定
                    </th>
                    <td className="py-4 px-4 text-gray-700">
                      PADIダイビングセンター認定
                      <br />
                      沖縄県安全マリンレジャー事業者認定
                      <br />
                      小型船舶操縦士（全スタッフ取得）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-ocean-blue-800">
              スタッフ紹介
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-ocean-blue-200 flex items-center justify-center">
                      <svg
                        className="h-12 w-12 text-ocean-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-ocean-blue-700">
                      {index === 1
                        ? "山田 太郎"
                        : index === 2
                        ? "鈴木 次郎"
                        : "佐藤 三郎"}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {index === 1
                        ? "代表取締役 / ダイビングインストラクター"
                        : index === 2
                        ? "マリンスポーツ責任者"
                        : "安全管理責任者"}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {index === 1
                        ? "20年以上のダイビング経験を持ち、1,000本以上のダイビング実績があります。お客様の安全を第一に考えたツアー運営を心がけています。"
                        : index === 2
                        ? "元プロサーファー。沖縄の海を知り尽くしたマリンスポーツのスペシャリスト。初心者からプロまで、レベルに合わせた指導が得意です。"
                        : "元海上保安官。安全管理のプロフェッショナルとして、全てのアクティビティの安全基準を監修しています。"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/" className="btn-secondary">
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
