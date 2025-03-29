"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BookingForm from "@/components/booking/BookingForm";

type Params = {
  params: {
    slug: string;
  };
};

// 本来はデータベースやAPIから取得するデータ
const activitiesData = [
  {
    id: 1,
    name: "ジェットスキー",
    description:
      "沖縄の美しい海で爽快なジェットスキー体験をお楽しみください。初心者でも安心の丁寧なレクチャー付き。",
    longDescription: `
      沖縄の青い海を思い切り楽しめるジェットスキーツアー。経験豊富なインストラクターが基本操作から丁寧に指導するので、初めての方でも安心してお楽しみいただけます。
      
      爽快な風を感じながら、沖縄の絶景を海上から満喫できる貴重な体験です。友達や家族と一緒に、忘れられない思い出を作りましょう。
      
      ツアーでは、安全面の説明から始まり、基本的な操作方法をレクチャー。その後、インストラクターと一緒に実際に海上へ出発します。美しいサンゴ礁のあるエリアや絶景ポイントを巡るコースをお楽しみいただけます。
    `,
    price: 8000,
    duration: 60,
    image: "/images/jet-ski.jpg",
    slug: "jet-ski",
    features: [
      "初心者歓迎・レクチャー付き",
      "最大2名乗車可能（追加料金なし）",
      "ライフジャケット完備",
      "防水カメラレンタル可能（別料金）",
      "温水シャワー・更衣室完備",
    ],
    schedule: ["9:00-10:00", "11:00-12:00", "13:00-14:00", "15:00-16:00"],
  },
  {
    id: 2,
    name: "シュノーケリング",
    description:
      "色とりどりの熱帯魚や美しいサンゴ礁を間近で観察できます。インストラクターが丁寧にガイドします。",
    longDescription: `
      沖縄の美しい海の中を、シュノーケリングで探検しませんか？熱帯魚の群れや色鮮やかなサンゴ礁が広がる水中世界を、間近でご覧いただけます。
      
      経験豊富なガイドが海の生き物や地形について解説しながら、安全に楽しめるようサポートします。水中カメラのレンタルも可能で、素敵な思い出を写真に残すこともできます。
      
      初心者の方には浮き輪タイプの補助具も用意していますので、泳ぎが得意でない方も安心してご参加いただけます。家族での参加も大歓迎です。
    `,
    price: 5000,
    duration: 120,
    image: "/images/snorkeling.jpg",
    slug: "snorkeling",
    features: [
      "初心者・子供向けコース有り",
      "ウェットスーツ・シュノーケル器材レンタル込み",
      "水中カメラレンタル可能（別料金）",
      "温水シャワー・更衣室完備",
      "ビーチからのエントリーで安心",
    ],
    schedule: ["9:30-11:30", "13:00-15:00"],
  },
  {
    id: 3,
    name: "ダイビング",
    description:
      "沖縄の海の美しさを本格的に体験できるダイビング。ライセンスがなくても楽しめる体験コースあり。",
    longDescription: `
      沖縄の美しい海の魅力を最大限に体験できるダイビングツアー。ライセンスをお持ちの方はもちろん、初めての方でも体験ダイビングでその魅力を味わえます。
      
      体験ダイビングでは、経験豊富なインストラクターが1対1でサポート。水中での呼吸方法や基本的な動き方を丁寧に指導し、安全に海中散歩を楽しめます。
      
      ライセンスホルダーの方には、沖縄の人気ダイビングスポットへご案内。様々な海洋生物との出会いや、神秘的な地形の探索など、忘れられない体験をお約束します。
    `,
    price: 12000,
    duration: 180,
    image: "/images/diving.jpg",
    slug: "diving",
    features: [
      "体験ダイビング（ライセンス不要）",
      "ファンダイビング（ライセンス保持者向け）",
      "器材レンタル込み",
      "少人数制で安心",
      "ウェットスーツ・マスク・フィン完備",
    ],
    schedule: ["9:00-12:00", "13:00-16:00"],
  },
  {
    id: 4,
    name: "バナナボート",
    description:
      "グループで楽しめる人気アクティビティ。スリル満点の体験をご家族やお友達と一緒にお楽しみください。",
    longDescription: `
      みんなで楽しむなら、バナナボートがおすすめ！最大6名まで乗船可能なので、ご家族やお友達と一緒にお楽しみいただけます。
      
      モーターボートで引っ張られるバナナ型のボートに乗り、波を越えながらスリル満点の体験をお楽しみください。もちろん、スピードの調整も可能ですので、小さなお子様連れでも安心です。
      
      転覆しても安全に楽しめるよう、全員にライフジャケットを着用していただきます。夏の沖縄の思い出作りに、ぜひチャレンジしてみてください！
    `,
    price: 4000,
    duration: 30,
    image: "/images/banana-boat.jpg",
    slug: "banana-boat",
    features: [
      "最大6名まで乗船可能",
      "ライフジャケット完備",
      "スピード調整可能",
      "グループ割引あり",
      "子供向けの安全コースあり",
    ],
    schedule: [
      "10:00-10:30",
      "11:00-11:30",
      "13:00-13:30",
      "14:00-14:30",
      "15:00-15:30",
    ],
  },
];

export default function ActivityDetailPage({ params }: Params) {
  // slugに基づいてアクティビティを検索
  const activity = activitiesData.find((act) => act.slug === params.slug);

  // アクティビティが見つからない場合は404ページを表示
  if (!activity) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-80 w-full">
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-ocean-blue-800 mb-2">
                {activity.name}
              </h1>
              <div className="flex items-center justify-between mb-4">
                <p className="text-ocean-blue-600 font-bold text-xl">
                  ¥{activity.price.toLocaleString()}／人
                </p>
                <p className="bg-ocean-blue-100 text-ocean-blue-800 px-3 py-1 rounded-full text-sm">
                  所要時間: {activity.duration}分
                </p>
              </div>
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <p className="text-gray-700 whitespace-pre-line">
                  {activity.longDescription}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-ocean-blue-700 mb-3">
                  特徴
                </h2>
                <ul className="space-y-2">
                  {activity.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-ocean-blue-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-ocean-blue-700 mb-3">
                  開催時間
                </h2>
                <div className="flex flex-wrap gap-2">
                  {activity.schedule.map((time, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <Link
                  href="/booking"
                  className="text-ocean-blue-600 hover:underline"
                >
                  &larr; 予約ページに戻る
                </Link>
                <Link
                  href={`/booking?activity=${activity.slug}`}
                  className="btn-primary"
                >
                  このアクティビティを予約する
                </Link>
              </div>
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
