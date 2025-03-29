"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface PaymentFormProps {
  amount: number;
  onPaymentComplete?: (transactionId: string) => void;
  onCancel?: () => void;
}

type PaymentMethod = "CREDIT_CARD" | "ELECTRONIC_PAYMENT";

type FormData = {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
  paymentMethod: PaymentMethod;
};

export default function PaymentForm({
  amount,
  onPaymentComplete,
  onCancel,
}: PaymentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("CREDIT_CARD");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      // 実際にはここで決済処理用のAPIを呼び出す
      console.log("決済データ:", {
        ...data,
        amount,
      });

      // 決済処理の模擬
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 決済成功後に呼び出し元に通知
      if (onPaymentComplete) {
        // 実際にはAPI応答から得られるトランザクションID
        const transactionId = `TXN-${Math.random()
          .toString(36)
          .substring(2, 10)
          .toUpperCase()}`;
        onPaymentComplete(transactionId);
      }
    } catch (error) {
      console.error("決済エラー:", error);
      alert("決済処理中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "") // 空白を削除
      .replace(/(\d{4})/g, "$1 ") // 4桁ごとに空白を追加
      .trim(); // 末尾の空白を削除
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-ocean-blue-800">
        お支払い情報
      </h2>

      <div className="bg-ocean-blue-50 p-4 rounded-md mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">お支払い金額</span>
          <span className="font-bold text-xl text-ocean-blue-700">
            ¥{amount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2 mb-4">
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              paymentMethod === "CREDIT_CARD"
                ? "bg-ocean-blue-100 text-ocean-blue-800 font-medium border-2 border-ocean-blue-400"
                : "bg-gray-100 text-gray-700 border border-gray-300"
            }`}
            onClick={() => setPaymentMethod("CREDIT_CARD")}
          >
            クレジットカード
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              paymentMethod === "ELECTRONIC_PAYMENT"
                ? "bg-ocean-blue-100 text-ocean-blue-800 font-medium border-2 border-ocean-blue-400"
                : "bg-gray-100 text-gray-700 border border-gray-300"
            }`}
            onClick={() => setPaymentMethod("ELECTRONIC_PAYMENT")}
          >
            電子決済
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {paymentMethod === "CREDIT_CARD" ? (
          <>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                カード番号 <span className="text-red-500">*</span>
              </label>
              <input
                id="cardNumber"
                type="text"
                className="input-field"
                placeholder="1234 5678 9012 3456"
                {...register("cardNumber", {
                  required: "カード番号を入力してください",
                  pattern: {
                    value: /^[\d\s]{16,19}$/,
                    message: "有効なカード番号を入力してください",
                  },
                  onChange: (e) => {
                    e.target.value = formatCardNumber(e.target.value);
                  },
                })}
                maxLength={19}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cardNumber.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                カード名義 <span className="text-red-500">*</span>
              </label>
              <input
                id="cardholderName"
                type="text"
                className="input-field"
                placeholder="TARO YAMADA"
                {...register("cardholderName", {
                  required: "カード名義を入力してください",
                })}
              />
              {errors.cardholderName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cardholderName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  有効期限 <span className="text-red-500">*</span>
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  className="input-field"
                  placeholder="MM/YY"
                  {...register("expiryDate", {
                    required: "有効期限を入力してください",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message: "有効期限はMM/YY形式で入力してください",
                    },
                  })}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expiryDate.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  セキュリティコード <span className="text-red-500">*</span>
                </label>
                <input
                  id="cvv"
                  type="text"
                  className="input-field"
                  placeholder="123"
                  {...register("cvv", {
                    required: "セキュリティコードを入力してください",
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: "有効なセキュリティコードを入力してください",
                    },
                  })}
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 p-6 rounded-md text-center">
            <p className="text-gray-700 mb-4">
              電子決済を選択しました。決済を続行すると、選択した決済サービスに遷移します。
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="bg-white p-3 rounded-md border border-gray-200">
                <img
                  src="/images/payment-paypay.png"
                  alt="PayPay"
                  className="h-8"
                />
              </div>
              <div className="bg-white p-3 rounded-md border border-gray-200">
                <img
                  src="/images/payment-linepay.png"
                  alt="LINE Pay"
                  className="h-8"
                />
              </div>
              <div className="bg-white p-3 rounded-md border border-gray-200">
                <img
                  src="/images/payment-merpay.png"
                  alt="メルペイ"
                  className="h-8"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              決済サービスでのお支払い手続き完了後、自動的に予約完了画面に戻ります。
            </p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            戻る
          </button>
          <button
            type="submit"
            className="btn-primary px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "処理中..." : "支払いを完了する"}
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          決済情報は安全に処理され、SSL暗号化によって保護されています。
        </p>
      </form>
    </div>
  );
}
