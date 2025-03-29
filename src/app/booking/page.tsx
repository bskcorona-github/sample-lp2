"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/booking/BookingForm";

// アクティビティデータの型
type Activity = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  slug: string;
};

export default function BookingPage() {
  // 選択されたアクティビティIDを追跡するstate
  const [selectedActivityId, setSelectedActivityId] = useState<number | null>(
    null
  );

  // 実際にはデータベースから取得または検索パラメータから取得
  const activities = [
    {
      id: 1,
      name: "ジェットスキー",
      description:
        "沖縄の美しい海で爽快なジェットスキー体験をお楽しみください。初心者でも安心の丁寧なレクチャー付き。",
      price: 8000,
      duration: 60,
      image: "/images/jet-ski.jpg",
      slug: "jet-ski",
    },
    {
      id: 2,
      name: "シュノーケリング",
      description:
        "色とりどりの熱帯魚や美しいサンゴ礁を間近で観察できます。インストラクターが丁寧にガイドします。",
      price: 5000,
      duration: 120,
      image: "/images/snorkeling.jpg",
      slug: "snorkeling",
    },
    {
      id: 3,
      name: "ダイビング",
      description:
        "沖縄の海の美しさを本格的に体験できるダイビング。ライセンスがなくても楽しめる体験コースあり。",
      price: 12000,
      duration: 180,
      image: "/images/diving.jpg",
      slug: "diving",
    },
    {
      id: 4,
      name: "バナナボート",
      description:
        "グループで楽しめる人気アクティビティ。スリル満点の体験をご家族やお友達と一緒にお楽しみください。",
      price: 4000,
      duration: 30,
      image: "/images/banana-boat.jpg",
      slug: "banana-boat",
    },
  ];

  // 選択されたアクティビティの情報を取得
  const selectedActivity = selectedActivityId
    ? activities.find((activity) => activity.id === selectedActivityId)
    : null;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              アクティビティ予約
            </h1>
            <p className="text-gray-600 text-center">
              沖縄の美しい海でのアクティビティをご予約いただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                アクティビティを選択
              </h2>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`border rounded-md p-4 cursor-pointer transition-colors
                      ${
                        selectedActivityId === activity.id
                          ? "border-ocean-blue-600 bg-ocean-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-ocean-blue-500"
                      }`}
                    onClick={() => {
                      setSelectedActivityId(activity.id);
                      console.log("選択されたアクティビティ:", activity);
                    }}
                  >
                    <div className="flex items-center">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
                        <Image
                          src={activity.image}
                          alt={activity.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-ocean-blue-700">
                          {activity.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          所要時間: {activity.duration}分
                        </p>
                        <p className="font-bold text-ocean-blue-600">
                          ¥{activity.price.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/activity/${activity.slug}`}
                          className="text-sm text-ocean-blue-600 hover:underline"
                        >
                          詳細
                        </Link>
                      </div>
                    </div>
                    {selectedActivityId === activity.id && (
                      <div className="mt-2 text-ocean-blue-600 text-sm flex items-center">
                        <svg
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        選択中
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <BookingForm selectedActivity={selectedActivity} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
              予約に関する注意事項
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-ocean-blue-600 mr-2 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>予約は、空き状況により承れない場合がございます。</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-ocean-blue-600 mr-2 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  予約のキャンセルは、予約日の3日前までにお願いいたします。それ以降のキャンセルについては、キャンセル料が発生いたします。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-ocean-blue-600 mr-2 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  天候不良による中止の場合は、全額返金または日程変更にて対応いたします。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-ocean-blue-600 mr-2 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  お子様や妊娠中の方、体調不良の方のご参加はご遠慮いただく場合がございます。
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-ocean-blue-600 mr-2 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  ご予約後、確認メールをお送りいたします。当日は印刷したメールまたはスマートフォンでご提示ください。
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              予約に関するお問い合わせは下記までご連絡ください。
            </p>
            <p className="font-bold text-ocean-blue-800 mb-6">
              電話: 098-XXX-XXXX / メール: info@example.com
            </p>
            <Link href="/" className="btn-secondary">
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
