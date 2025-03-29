import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // アクティビティ情報（実際にはデータベースから取得します）
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

  // レビュー情報（実際にはデータベースから取得します）
  const reviews = [
    {
      id: 1,
      name: "田中 一郎",
      activity: "ジェットスキー",
      rating: 5,
      comment:
        "とても楽しかったです！インストラクターの方も丁寧で安心して体験できました。また絶対来ます！",
      date: "2023-08-15",
    },
    {
      id: 2,
      name: "佐藤 花子",
      activity: "シュノーケリング",
      rating: 4,
      comment:
        "沖縄の海の美しさに感動しました。カラフルな魚がたくさん見れて大満足です。",
      date: "2023-09-22",
    },
    {
      id: 3,
      name: "鈴木 健太",
      activity: "ダイビング",
      rating: 5,
      comment:
        "初めてのダイビングでしたが、丁寧な指導のおかげで安心して楽しめました。水中写真も素晴らしかったです！",
      date: "2023-10-05",
    },
  ];

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="沖縄の美しい海"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            沖縄の美しい海で
            <br />
            最高の体験を
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            ダイビング、ジェットスキー、シュノーケリングなど
            <br />
            様々なマリンアクティビティをご用意
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="btn-primary text-center py-3 px-8 text-lg"
            >
              今すぐ予約する
            </Link>
            <Link
              href="/#activities"
              className="btn-secondary text-center py-3 px-8 text-lg"
            >
              アクティビティを見る
            </Link>
          </div>
        </div>
      </section>

      {/* アクティビティセクション */}
      <section id="activities" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            人気のアクティビティ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-ocean-blue-800">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {activity.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-ocean-blue-600 font-bold">
                        ¥{activity.price.toLocaleString()}
                      </p>
                      <p className="text-gray-500 text-sm">
                        所要時間: {activity.duration}分
                      </p>
                    </div>
                    <Link
                      href={`/activity/${activity.slug}`}
                      className="text-ocean-blue-600 font-medium hover:underline"
                    >
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/activities" className="btn-primary">
              すべてのアクティビティを見る
            </Link>
          </div>
        </div>
      </section>

      {/* マリンショップについて */}
      <section id="about" className="section bg-ocean-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/shop.jpg"
                alt="マリンショップの外観"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                沖縄マリンアクティビティについて
              </h2>
              <p className="text-gray-700 mb-6">
                私たちは沖縄の美しい海を愛し、その魅力を多くの方に体験していただきたいという思いからマリンアクティビティショップを2010年に設立しました。
              </p>
              <p className="text-gray-700 mb-6">
                経験豊富なインストラクターが、安全に配慮しながら、初心者から上級者まで楽しめるプログラムをご用意しています。沖縄の海の美しさを最大限に体験できるよう、私たちがサポートします。
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-ocean-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>経験豊富なインストラクター</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-ocean-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>安全第一の徹底したレクチャー</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-ocean-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>最新の安全機材を完備</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-ocean-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>美しいビーチへのアクセス抜群</span>
                </li>
              </ul>
              <Link href="/about" className="btn-secondary">
                詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* レビューセクション */}
      <section id="reviews" className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            お客様の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
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
          <div className="text-center mt-12">
            <Link href="/reviews" className="btn-secondary">
              すべての口コミを見る
            </Link>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="location" className="section bg-ocean-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            アクセス
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">店舗情報</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">住所</p>
                      <p className="text-gray-600">
                        〒900-0001 沖縄県那覇市○○町1-2-3
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">営業時間</p>
                      <p className="text-gray-600">8:00〜18:00（年中無休）</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">電話番号</p>
                      <p className="text-gray-600">098-XXX-XXXX</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">メールアドレス</p>
                      <p className="text-gray-600">info@example.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">アクセス方法</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">車でお越しの場合</p>
                      <p className="text-gray-600">那覇空港から車で約20分</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-ocean-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">公共交通機関をご利用の場合</p>
                      <p className="text-gray-600">●●駅から徒歩10分</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28635.98636751693!2d127.67956501738669!3d26.212030788318277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56bdf13102165%3A0x75d10ce98e1b8db9!2z5pu85bO2!5e0!3m2!1sja!2sjp!4v1617094822123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-ocean-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            素晴らしい海の体験をお楽しみください
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            沖縄の美しい海で最高のマリンアクティビティを体験しませんか？
            ご予約やお問い合わせをお待ちしております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-ocean-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
            >
              アクティビティを予約する
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-ocean-blue-600 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
