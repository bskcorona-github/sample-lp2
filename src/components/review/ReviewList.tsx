"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ReviewListProps {
  activityId: string;
}

// 仮のレビューデータ
const reviews = {
  snorkeling: [
    {
      id: 1,
      name: "田中さん",
      rating: 5,
      date: "2023-09-15",
      comment:
        "初めてのシュノーケリングでしたが、インストラクターの方が丁寧に教えてくれたので安心して楽しむことができました。沢山の魚を見ることができて最高の思い出になりました！",
    },
    {
      id: 2,
      name: "佐藤さん",
      rating: 4,
      date: "2023-08-22",
      comment:
        "天気も良く、透明度の高い海で気持ちよく泳げました。インストラクターの説明も丁寧でした。ただ、他のグループと一緒になって少し混雑していたので星4つです。",
    },
    {
      id: 3,
      name: "鈴木さん",
      rating: 5,
      date: "2023-07-30",
      comment:
        "家族で参加しました。子どもたちも大喜びで、スタッフの方々の対応も素晴らしかったです。また来年も利用したいと思います！",
    },
  ],
  diving: [
    {
      id: 1,
      name: "山田さん",
      rating: 5,
      date: "2023-09-08",
      comment:
        "ダイビングは初めてでしたが、とても丁寧に教えていただいて安心でした。沖縄の海の美しさに感動しました。また挑戦したいと思います！",
    },
    {
      id: 2,
      name: "伊藤さん",
      rating: 4,
      date: "2023-08-15",
      comment:
        "インストラクターの方の説明が分かりやすく、安心して潜ることができました。水中写真も撮ってくれて良い思い出になりました。",
    },
  ],
  jetski: [
    {
      id: 1,
      name: "高橋さん",
      rating: 5,
      date: "2023-09-05",
      comment:
        "爽快感抜群でした！インストラクターの方の説明も丁寧で、初めてでも安心して楽しめました。ぜひまた来たいです。",
    },
    {
      id: 2,
      name: "渡辺さん",
      rating: 5,
      date: "2023-08-20",
      comment:
        "友人と一緒に参加しましたが、とても楽しかったです。スタッフの方も親切で、安全面もしっかりしていました。",
    },
    {
      id: 3,
      name: "小林さん",
      rating: 4,
      date: "2023-07-12",
      comment:
        "海の上を駆け抜ける感覚が最高でした。もう少し長い時間乗れたらもっと良かったです。",
    },
  ],
};

const ReviewList = ({ activityId }: ReviewListProps) => {
  const activityReviews = reviews[activityId as keyof typeof reviews] || [];

  if (activityReviews.length === 0) {
    return (
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">お客様の声</h2>
        <p className="text-text-light">まだレビューはありません。</p>
      </div>
    );
  }

  // 平均評価を計算
  const averageRating =
    activityReviews.reduce((acc, review) => acc + review.rating, 0) /
    activityReviews.length;

  // 星評価を表示するコンポーネント
  const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">お客様の声</h2>
        <div className="flex items-center">
          <StarRating rating={averageRating} />
          <span className="ml-2 font-semibold">{averageRating.toFixed(1)}</span>
          <span className="ml-2 text-text-light">
            ({activityReviews.length}件)
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {activityReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div className="ml-3">
                <div className="font-semibold">{review.name}</div>
                <div className="flex items-center">
                  <StarRating rating={review.rating} />
                  <span className="ml-2 text-sm text-text-light">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-text-light mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
