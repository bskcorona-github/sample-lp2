"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ReviewFormProps {
  activityId?: number;
  activityName?: string;
  onSubmitSuccess?: () => void;
}

type FormData = {
  name: string;
  email: string;
  rating: number;
  comment: string;
};

export default function ReviewForm({
  activityId,
  activityName,
  onSubmitSuccess,
}: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      // 実際にはここでAPIコールを行い、サーバーサイドで口コミを保存する
      console.log("口コミデータ:", {
        ...data,
        activityId,
        rating,
      });

      // 口コミ投稿成功を模擬
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReviewSuccess(true);

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("口コミ投稿エラー:", error);
      alert("口コミの投稿中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
    setValue("rating", selectedRating);
  };

  if (reviewSuccess) {
    return (
      <div className="bg-green-50 p-8 rounded-lg text-center">
        <svg
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          口コミを投稿しました
        </h3>
        <p className="text-green-700 mb-6">
          貴重なご意見をありがとうございます。お客様の声は今後のサービス向上に役立てさせていただきます。
        </p>
        <button onClick={() => setReviewSuccess(false)} className="btn-primary">
          別の口コミを投稿する
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-ocean-blue-800">
        {activityName ? `${activityName}の口コミを投稿` : "口コミ投稿"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="input-field"
            {...register("name", { required: "お名前を入力してください" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="input-field"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "有効なメールアドレスを入力してください",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            評価 <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="text-3xl focus:outline-none"
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                <span
                  className={`${
                    (hoverRating || rating) >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              </button>
            ))}
          </div>
          {rating === 0 && errors.rating && (
            <p className="text-red-500 text-sm mt-1">評価を選択してください</p>
          )}
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            コメント <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            rows={5}
            className="input-field"
            placeholder="ご体験の感想をお聞かせください"
            {...register("comment", {
              required: "コメントを入力してください",
              minLength: {
                value: 10,
                message: "コメントは10文字以上入力してください",
              },
            })}
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="btn-primary w-full py-3 text-lg"
            disabled={isSubmitting || rating === 0}
          >
            {isSubmitting ? "投稿中..." : "口コミを投稿する"}
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            投稿いただいた口コミは公開前に確認させていただきます。
          </p>
        </div>
      </form>
    </div>
  );
}
