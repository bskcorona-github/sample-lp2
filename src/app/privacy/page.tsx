import React from "react";
import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 沖縄マリンアクティビティ",
  description:
    "沖縄マリンアクティビティのプライバシーポリシーです。お客様の個人情報の取り扱いについて説明しています。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              プライバシーポリシー
            </h1>
            <p className="text-gray-600">
              お客様の個人情報の取り扱いについて説明します。
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                1. 基本方針
              </h2>
              <p className="text-gray-700 mb-4">
                株式会社沖縄マリンアクティビティ（以下「当社」といいます）は、お客様の個人情報を大切に保護することが社会的責務であると考え、個人情報の保護に関する法律および関連法令を遵守し、以下のプライバシーポリシーに基づいて個人情報の適切な取り扱いを行います。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                2. 個人情報の定義
              </h2>
              <p className="text-gray-700 mb-4">
                本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができるものを含む）を指します。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                3. 個人情報の収集方法
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、以下の方法により個人情報を収集します：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>ウェブサイトからの予約・お問い合わせフォームの入力</li>
                <li>電話、メールによるお問い合わせ</li>
                <li>アクティビティ参加時の申込書記入</li>
                <li>アンケートへの回答</li>
                <li>SNSを通じたコミュニケーション</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                4. 収集する個人情報の項目
              </h2>
              <p className="text-gray-700 mb-4">
                当社が収集する主な個人情報は以下の通りです：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>氏名</li>
                <li>生年月日</li>
                <li>住所</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>クレジットカード情報（決済時）</li>
                <li>
                  健康状態に関する情報（アクティビティの安全性確保のため）
                </li>
                <li>アクティビティ中に撮影した写真・動画</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                5. 個人情報の利用目的
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、収集した個人情報を以下の目的で利用します：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>予約管理および予約確認の連絡</li>
                <li>サービス提供（アクティビティの実施）</li>
                <li>代金の請求・決済処理</li>
                <li>お問い合わせへの対応</li>
                <li>アクティビティ実施における安全管理</li>
                <li>当社サービスに関するお知らせ・キャンペーン情報の提供</li>
                <li>サービス品質向上のための分析</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                6. 個人情報の第三者提供
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
                </li>
                <li>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                7. 個人情報の安全管理
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。また、個人情報を取り扱う従業員に対して、個人情報保護に関する教育・啓発活動を実施します。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                8. 個人情報の開示・訂正・削除
              </h2>
              <p className="text-gray-700 mb-4">
                お客様は、当社が保有するご自身の個人情報について、開示、訂正、削除、利用停止を請求することができます。請求を行う場合は、本人確認のための書類を添えて、下記の「お問い合わせ先」までご連絡ください。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                9. Cookieの使用について
              </h2>
              <p className="text-gray-700 mb-4">
                当社ウェブサイトでは、サイトの利便性向上、アクセス解析のためにCookieを使用しています。Cookieの受け入れを希望されない場合は、ブラウザの設定で拒否することが可能です。ただし、一部のサービスが正常に機能しなくなる可能性があります。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                10. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトに掲載することにより公表します。
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-12">
            <p className="text-gray-700 mb-3">
              本プライバシーポリシーの最終更新日：2023年8月1日
            </p>
            <p className="text-gray-700">
              お問い合わせ先：個人情報保護管理責任者
              <br />
              株式会社沖縄マリンアクティビティ 個人情報保護担当
              <br />
              住所：沖縄県那覇市○○町1-2-3
              <br />
              電話番号：098-XXX-XXXX
              <br />
              メールアドレス：privacy@example.com
            </p>
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
