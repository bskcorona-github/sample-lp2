import React from "react";
import Link from "next/link";

export const metadata = {
  title: "利用規約 | 沖縄マリンアクティビティ",
  description:
    "沖縄マリンアクティビティの利用規約です。サービスをご利用いただく前に必ずお読みください。",
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">利用規約</h1>
            <p className="text-gray-600">
              本サービスをご利用いただく前に、以下の利用規約をよくお読みください。
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第1条（総則）
              </h2>
              <p className="text-gray-700 mb-4">
                本規約は、株式会社沖縄マリンアクティビティ（以下「当社」といいます）が提供するマリンアクティビティサービス（以下「本サービス」といいます）の利用に関する条件を定めるものであり、本サービスを利用するすべての方（以下「利用者」といいます）に適用されます。
              </p>
              <p className="text-gray-700">
                利用者は、本規約に同意した上で本サービスを利用するものとし、本サービスを利用した時点で本規約に同意したものとみなします。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第2条（予約とキャンセル）
              </h2>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  本サービスの予約は、当社ウェブサイト、電話、または提携代理店を通じて行うことができます。
                </li>
                <li>
                  予約が成立した場合、当社から予約確認メールを送信します。予約確認メールを受け取っていない場合は、予約が完了していない可能性がありますので、当社までお問い合わせください。
                </li>
                <li>
                  予約のキャンセルは、以下のキャンセルポリシーに基づきキャンセル料が発生します：
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>予約日の7日前まで：キャンセル料なし</li>
                    <li>予約日の6日前〜3日前：予約金額の30%</li>
                    <li>予約日の2日前：予約金額の50%</li>
                    <li>前日・当日のキャンセル：予約金額の100%</li>
                  </ul>
                </li>
                <li>
                  天候や海況の悪化により当社が安全にアクティビティを実施できないと判断した場合は、キャンセル料は発生せず、全額返金または日程変更の対応をいたします。
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第3条（安全確保と免責）
              </h2>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  利用者は、本サービス利用にあたり、当社スタッフの指示に従うものとします。指示に従わない場合、サービスの提供を中止することがあります。
                </li>
                <li>
                  利用者は、以下の事項に該当する場合、本サービスを利用できません：
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>飲酒している場合</li>
                    <li>妊娠中の場合</li>
                    <li>
                      健康上の問題がある場合（心臓疾患、呼吸器疾患、てんかん等）
                    </li>
                    <li>
                      その他、当社が安全上の理由でサービス提供が困難と判断した場合
                    </li>
                  </ul>
                </li>
                <li>
                  本サービスの性質上、一定のリスクが伴います。当社は安全管理に最大限の注意を払いますが、利用者の故意または過失、当社の責めに帰さない事由による事故については、当社は責任を負いません。
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第4条（料金と支払い）
              </h2>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>
                  本サービスの料金は、当社ウェブサイトに掲載された金額とします。特別キャンペーンや割引が適用される場合は、その条件に従います。
                </li>
                <li>
                  支払いは、クレジットカード、銀行振込、または当日現金にて承ります。
                </li>
                <li>
                  クレジットカード情報は、セキュリティ保護のため暗号化され、適切に管理されます。
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第5条（写真・映像の使用）
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本サービス提供中に撮影した写真や映像を、当社ウェブサイト、SNS、パンフレット等の広告宣伝物に使用することがあります。利用者が写真・映像の使用を希望しない場合は、事前にその旨をお申し出ください。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第6条（個人情報の取り扱い）
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、利用者の個人情報を適切に管理し、本サービスの提供、アフターフォロー、当社からのお知らせ等の目的以外には使用しません。詳細は「プライバシーポリシー」をご確認ください。
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第7条（規約の変更）
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-ocean-blue-800">
                第8条（準拠法と管轄裁判所）
              </h2>
              <p className="text-gray-700 mb-4">
                本規約の解釈および適用は日本法に準拠するものとし、本サービスに関連して生じた紛争については、那覇地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-12">
            <p className="text-gray-700 mb-3">
              本規約の最終更新日：2023年8月1日
            </p>
            <p className="text-gray-700">
              お問い合わせ先：株式会社沖縄マリンアクティビティ
              <br />
              電話番号：098-XXX-XXXX
              <br />
              メールアドレス：info@example.com
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
