import Link from "next/link";

export const metadata = {
  title: "アクティビティ一覧 | サンプルサイト２",
  description:
    "沖縄の美しい海で楽しめる様々なマリンアクティビティをご紹介します。ダイビング、シュノーケリング、ジェットスキーなど、初心者から上級者まで楽しめるプランをご用意しています。",
};

const activities = [
  {
    id: "snorkeling",
    name: "シュノーケリング",
    description:
      "美しいサンゴ礁と熱帯魚の世界を覗いてみませんか？初心者でも安心して楽しめます。",
    price: 5000,
    duration: 2,
    image: "bg-primary-light",
    location: "沖縄県恩納村",
  },
  {
    id: "diving",
    name: "ダイビング",
    description:
      "豊かな海中世界を体験してください。ライセンスをお持ちの方もそうでない方も参加可能です。",
    price: 12000,
    duration: 3,
    image: "bg-primary",
    location: "沖縄県恩納村",
  },
  {
    id: "jetski",
    name: "ジェットスキー",
    description:
      "爽快な風を感じながら沖縄の海を駆け抜けましょう。スリル満点のマリンスポーツです。",
    price: 8000,
    duration: 1,
    image: "bg-secondary",
    location: "沖縄県北谷町",
  },
  {
    id: "parasailing",
    name: "パラセーリング",
    description:
      "空から沖縄の海を一望できる特別な体験。美しい景色をお楽しみいただけます。",
    price: 7000,
    duration: 1,
    image: "bg-accent",
    location: "沖縄県恩納村",
  },
  {
    id: "sup",
    name: "SUP（スタンドアップパドル）",
    description:
      "穏やかな海の上を優雅に進む新感覚のマリンスポーツ。初心者でも簡単に楽しめます。",
    price: 6000,
    duration: 2,
    image: "bg-primary-light",
    location: "沖縄県読谷村",
  },
  {
    id: "seawalk",
    name: "シーウォーク",
    description:
      "特殊なヘルメットを着用して海中散歩。泳げない方でも海の中の世界を体験できます。",
    price: 10000,
    duration: 2,
    image: "bg-primary-dark",
    location: "沖縄県恩納村",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h1>アクティビティ一覧</h1>
        <p className="text-lg text-text-light max-w-3xl mx-auto">
          沖縄の美しい海で楽しめる様々なマリンアクティビティをご紹介します。
          あなたにぴったりのアクティビティを見つけましょう！
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="card overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className={`relative h-48 ${activity.image}`}>
              {/* プレースホルダー画像の代わりに背景色で対応 */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{activity.name}</h3>
              <div className="flex items-center text-text-light text-sm mb-2">
                <span className="mr-4">所要時間: {activity.duration}時間</span>
                <span>場所: {activity.location}</span>
              </div>
              <p className="text-text-light mb-4">{activity.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-dark font-bold text-lg">
                  ¥{activity.price.toLocaleString()}〜
                </span>
                <Link
                  href={`/activities/${activity.id}`}
                  className="btn-primary"
                >
                  詳細・予約
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
