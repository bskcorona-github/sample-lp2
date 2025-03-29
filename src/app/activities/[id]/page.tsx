import { notFound } from "next/navigation";
import ReservationForm from "@/components/reservation/ReservationForm";
// ReviewListコンポーネントを一時的に除外

// 仮のデータを用意
const activities = [
  {
    id: "snorkeling",
    name: "シュノーケリング",
    description:
      "美しいサンゴ礁と熱帯魚の世界を覗いてみませんか？初心者でも安心して楽しめます。",
    fullDescription: `
      沖縄の透明度抜群の海で、カラフルな熱帯魚たちと一緒に泳ぐ体験をしてみませんか？
      
      当店のシュノーケリングツアーでは、経験豊富なインストラクターが丁寧にレクチャーしますので、初めての方でも安心してお楽しみいただけます。
      
      沖縄本島屈指の美しいポイントへご案内し、色とりどりのサンゴ礁や熱帯魚の群れを間近でご覧いただけます。
      
      ※天候や海況により、ツアー内容の変更や中止になる場合がございます。
    `,
    price: 5000,
    duration: 2,
    image: "bg-primary-light",
    location: "沖縄県恩納村",
    included: [
      "器材レンタル（マスク、スノーケル、フィン）",
      "ウェットスーツ",
      "保険",
      "写真データ（ツアー後にメールでお送りします）",
    ],
    schedule: [
      "9:00 集合・受付",
      "9:15 装備の説明と着用方法",
      "9:45 安全レクチャー",
      "10:00 ビーチでシュノーケリング（約1時間）",
      "11:15 シャワー・着替え",
      "11:30 解散",
    ],
    capacity: 10,
  },
  {
    id: "diving",
    name: "ダイビング",
    description:
      "豊かな海中世界を体験してください。ライセンスをお持ちの方もそうでない方も参加可能です。",
    fullDescription: `
      沖縄の美しい海を、もっと深く体験してみませんか？
      
      当店のダイビングツアーでは、ライセンスをお持ちの方も、初めての方も参加いただけます。初めての方には、安全に楽しむための基本的な知識と技術をじっくりとお教えします。
      
      ライセンスをお持ちの方には、沖縄屈指のダイビングポイントへご案内し、様々な海洋生物との出会いをお楽しみいただけます。
      
      ※健康上の理由でご参加いただけない場合がございます。事前にご相談ください。
    `,
    price: 12000,
    duration: 3,
    image: "bg-primary",
    location: "沖縄県恩納村",
    included: [
      "ダイビング器材一式",
      "ウェットスーツ",
      "保険",
      "ドリンク",
      "写真データ（ツアー後にメールでお送りします）",
    ],
    schedule: [
      "8:30 集合・受付",
      "8:45 装備の説明と着用方法",
      "9:15 安全レクチャー（初心者の方は基本技術講習）",
      "10:00 ボートでポイントへ移動",
      "10:30 1本目のダイビング（約40分）",
      "11:30 休憩・ドリンクタイム",
      "12:30 2本目のダイビング（約40分）",
      "13:30 帰港",
      "14:00 シャワー・着替え",
      "14:30 解散",
    ],
    capacity: 6,
  },
  // 他のアクティビティも同様に定義
  {
    id: "jetski",
    name: "ジェットスキー",
    description:
      "爽快な風を感じながら沖縄の海を駆け抜けましょう。スリル満点のマリンスポーツです。",
    fullDescription: `
      沖縄の海を爽快に駆け抜けるジェットスキーツアーです。
      
      美しい海の上を時速60km以上で駆け抜ける爽快感は、他では味わえない体験です。初めての方でも、経験豊富なインストラクターが丁寧に操作方法をお教えしますので、安心してお楽しみいただけます。
      
      ※18歳未満の方は保護者の同伴が必要です。
      ※飲酒されている方はご参加いただけません。
    `,
    price: 8000,
    duration: 1,
    image: "bg-secondary",
    location: "沖縄県北谷町",
    included: ["ジェットスキーレンタル", "ライフジャケット", "保険"],
    schedule: [
      "10:00/13:00/15:00 集合・受付（ご予約時間により異なります）",
      "操作説明・安全レクチャー（約15分）",
      "ジェットスキー体験（約30分）",
      "シャワー・着替え",
      "解散",
    ],
    capacity: 4,
  },
  // 他のアクティビティも同様に定義
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const activity = activities.find((a) => a.id === params.id);

  if (!activity) {
    return {
      title: "アクティビティが見つかりません | サンプルサイト２",
      description: "お探しのアクティビティは見つかりませんでした。",
    };
  }

  return {
    title: `${activity.name} | サンプルサイト２`,
    description: `沖縄で${activity.name}を体験しませんか？${activity.description}`,
  };
}

interface ActivityPageProps {
  params: {
    id: string;
  };
}

export default function ActivityDetailPage({ params }: ActivityPageProps) {
  const activity = activities.find((a) => a.id === params.id);

  if (!activity) {
    notFound();
  }

  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div
            className={`relative h-80 md:h-96 mb-6 ${activity.image} rounded-lg`}
          >
            {/* プレースホルダー画像の代わりに背景色で対応 */}
          </div>

          <h1>{activity.name}</h1>

          <div className="flex items-center text-text-light text-lg mb-4">
            <span className="mr-6">所要時間: {activity.duration}時間</span>
            <span>場所: {activity.location}</span>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-4">アクティビティ詳細</h2>
            <div className="whitespace-pre-line text-text-light">
              {activity.fullDescription}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">含まれるもの</h3>
              <ul className="list-disc pl-5 text-text-light">
                {activity.included.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">スケジュール</h3>
              <ol className="list-decimal pl-5 text-text-light">
                {activity.schedule.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ReviewListコンポーネントを一時的にコメントアウト */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">お客様の声</h2>
            <p className="text-text-light">
              準備中です。しばらくお待ちください。
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card sticky top-8">
            <h3 className="text-xl font-semibold mb-4">予約する</h3>
            <div className="mb-6">
              <p className="text-2xl font-bold text-primary-dark">
                ¥{activity.price.toLocaleString()}〜
              </p>
              <p className="text-sm text-text-light">1名様料金（税込）</p>
            </div>

            <ReservationForm
              activityId={activity.id}
              price={activity.price}
              capacity={activity.capacity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
