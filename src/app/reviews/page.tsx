import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReviewForm from "@/components/review/ReviewForm";

export const metadata = {
  title: "口コミ一覧 | 沖縄マリンアクティビティ",
  description:
    "沖縄マリンアクティビティの口コミページです。お客様の声を集めています。",
};

export default function ReviewsPage() {
  // 実際にはデータベースから取得
  const reviews = [
    {
      id: 1,
      name: "田中 一郎",
      activity: "ジェットスキー",
      rating: 5,
      comment:
        "とても楽しかったです！インストラクターの方も丁寧で安心して体験できました。初めてのジェットスキーでしたが、しっかりとレクチャーしていただいたので、怖さもなく楽しめました。海の景色も最高でした。また絶対来ます！",
      date: "2023-08-15",
    },
    {
      id: 2,
      name: "佐藤 花子",
      activity: "シュノーケリング",
      rating: 4,
      comment:
        "沖縄の海の美しさに感動しました。カラフルな魚がたくさん見れて大満足です。インストラクターさんの説明もわかりやすく、初心者の私でも安心して楽しめました。ただ、少し波が高かったのが残念でした。",
      date: "2023-09-22",
    },
    {
      id: 3,
      name: "鈴木 健太",
      activity: "ダイビング",
      rating: 5,
      comment:
        "初めてのダイビングでしたが、丁寧な指導のおかげで安心して楽しめました。水中写真も素晴らしかったです！水中世界は想像以上に美しく、感動しました。スタッフの方々も親切で、次回はもっと深いところにチャレンジしたいと思います。",
      date: "2023-10-05",
    },
    {
      id: 4,
      name: "高橋 博",
      activity: "バナナボート",
      rating: 5,
      comment:
        "家族で参加しましたが、子供たちが大喜びでした。スタッフの方の安全管理もしっかりしていて安心でした。スリル満点の体験で、子供たちだけでなく大人も楽しめました。またぜひ利用したいです！",
      date: "2023-07-30",
    },
    {
      id: 5,
      name: "渡辺 直子",
      activity: "シュノーケリング",
      rating: 4,
      comment:
        "魚の種類が豊富で楽しめました。ガイドさんが魚の名前や特徴を教えてくれて勉強になりました。天気も良く、透明度の高い海で最高の思い出になりました。",
      date: "2023-08-03",
    },
  ];

  // 平均評価を計算
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">お客様の声</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              沖縄マリンアクティビティをご利用いただいたお客様からの口コミです。皆様の貴重なご意見をお待ちしております。
            </p>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md inline-block">
              <div className="flex items-center justify-center mb-2">
                <div className="text-2xl font-bold text-ocean-blue-700 mr-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-6 w-6 ${
                        star <= Math.round(averageRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="ml-2 text-gray-600">
                  ({reviews.length}件の口コミ)
                </div>
              </div>
            </div>
          </div>

          {/* 口コミ一覧 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-ocean-blue-800">
              最新の口コミ
            </h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-ocean-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-ocean-blue-600 font-bold text-lg mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.activity}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 口コミ投稿フォーム */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-ocean-blue-800">
              口コミを投稿する
            </h2>
            <ReviewForm />
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
