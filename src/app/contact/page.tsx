import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "お問い合わせ | サンプルサイト２",
  description:
    "マリンアクティビティに関するご質問・ご相談はこちらからお問い合わせください。ご予約やプランについてのお問い合わせも承っております。",
};

export default function ContactPage() {
  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h1>お問い合わせ</h1>
        <p className="text-lg text-text-light max-w-3xl mx-auto">
          マリンアクティビティに関するご質問・ご相談はこちらからお問い合わせください。
          通常、24時間以内にご返信いたします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">メッセージを送る</h2>
            <ContactForm />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h3 className="text-xl font-semibold mb-4">お問い合わせ先</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 text-primary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">住所</h4>
                  <address className="not-italic text-text-light">
                    〒900-0000
                    <br />
                    沖縄県那覇市○○町1-1-1
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 text-primary">
                  <FaPhone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">電話番号</h4>
                  <p className="text-text-light">098-123-4567</p>
                  <p className="text-sm text-text-light">
                    （受付時間：9:00〜18:00）
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">メールアドレス</h4>
                  <p className="text-text-light">info@sample-site2.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">営業時間</h3>
            <div className="space-y-2 text-text-light">
              <div className="flex justify-between">
                <span>月曜日 - 金曜日:</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>土曜日:</span>
                <span>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>日曜日・祝日:</span>
                <span>10:00 - 16:00</span>
              </div>
              <p className="mt-4 text-sm">
                ※悪天候時は営業時間を変更する場合がございます。
                公式SNSにて最新情報をご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">アクセス</h2>
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          {/* 実際の地図を埋め込みたい場合は、ここにGoogle Mapsなどを埋め込む */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">ここに地図が表示されます</p>
          </div>
        </div>
      </div>
    </div>
  );
}
