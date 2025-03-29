import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaStar, FaComments, FaWater } from "react-icons/fa";

// 画像パスを変更
const heroImage = "/images/placeholder-hero.jpg";
const activityImage1 = "/images/placeholder-activity-1.jpg";
const activityImage2 = "/images/placeholder-activity-2.jpg";
const activityImage3 = "/images/placeholder-activity-3.jpg";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-dark">
          {/* プレースホルダー画像がない場合は背景色で対応 */}
          <div className="absolute inset-0 bg-primary-dark/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            沖縄で最高のマリンアクティビティ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            青く透き通った海で、忘れられない思い出を作りましょう。
            初心者から上級者まで楽しめる多彩なプランをご用意しています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/activities" className="btn-primary text-lg px-8 py-3">
              アクティビティを見る
            </Link>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:text-primary hover:bg-white text-lg px-8 py-3"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* アクティビティセクション */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              人気のアクティビティ
            </h2>
            <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
              沖縄の美しい海を満喫できる様々なアクティビティをご用意しています。
              あなたの冒険を今すぐ始めましょう！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* アクティビティカード1 */}
            <div className="card overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-48 bg-primary-light">
                {/* プレースホルダー画像の代わりに背景色 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">シュノーケリング</h3>
                <p className="text-text-light mb-4">
                  美しいサンゴ礁と熱帯魚の世界を覗いてみませんか？初心者でも安心して楽しめます。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-dark font-bold text-lg">
                    ¥5,000〜
                  </span>
                  <Link href="/activities/snorkeling" className="btn-primary">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>

            {/* アクティビティカード2 */}
            <div className="card overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-48 bg-primary">
                {/* プレースホルダー画像の代わりに背景色 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">ダイビング</h3>
                <p className="text-text-light mb-4">
                  豊かな海中世界を体験してください。ライセンスをお持ちの方もそうでない方も参加可能です。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-dark font-bold text-lg">
                    ¥12,000〜
                  </span>
                  <Link href="/activities/diving" className="btn-primary">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>

            {/* アクティビティカード3 */}
            <div className="card overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-48 bg-secondary">
                {/* プレースホルダー画像の代わりに背景色 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">ジェットスキー</h3>
                <p className="text-text-light mb-4">
                  爽快な風を感じながら沖縄の海を駆け抜けましょう。スリル満点のマリンスポーツです。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-dark font-bold text-lg">
                    ¥8,000〜
                  </span>
                  <Link href="/activities/jetski" className="btn-primary">
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/activities"
              className="btn-secondary text-lg px-8 py-3"
            >
              すべてのアクティビティを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              私たちの特徴
            </h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              地元のプロが案内する安心のマリンツアー。あなたの素晴らしい体験をサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mx-auto mb-4 flex justify-center">
                <FaWater className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                豊富な経験
              </h3>
              <p>10年以上の実績を持つインストラクターがサポートします。</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mx-auto mb-4 flex justify-center">
                <FaCalendarAlt className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                簡単予約
              </h3>
              <p>
                オンラインでいつでも簡単に予約できるシステムを導入しています。
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mx-auto mb-4 flex justify-center">
                <FaStar className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                高品質サービス
              </h3>
              <p>お客様満足度98％を誇る高品質なサービスをご提供します。</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mx-auto mb-4 flex justify-center">
                <FaComments className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                丁寧なサポート
              </h3>
              <p>初めての方でも安心して参加できるよう丁寧にご案内します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">お客様の声</h2>
            <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
              実際に体験されたお客様からいただいた感想です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">田中さん</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-text-light">
                初めてのシュノーケリングでしたが、インストラクターの方が丁寧に教えてくれたので安心して楽しむことができました。沢山の魚を見ることができて最高の思い出になりました！
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">佐藤さん</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-text-light">
                家族でジェットスキーを体験しました。子どもたちも大喜びで、スタッフの方々の対応も素晴らしかったです。また来年も利用したいと思います！
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">小林さん</h4>
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-text-light">
                ダイビングは初めてでしたが、とても丁寧に教えていただいて安心でした。沖縄の海の美しさに感動しました。また挑戦したいと思います！
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews" className="btn-secondary text-lg px-8 py-3">
              すべての口コミを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            今すぐ沖縄の海を体験しましょう！
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            忘れられない思い出作りをサポートします。簡単予約で、あなたの冒険を始めましょう。
          </p>
          <Link href="/activities" className="btn-secondary text-lg px-8 py-3">
            予約する
          </Link>
        </div>
      </section>
    </>
  );
}
