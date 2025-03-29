"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

// アクティビティデータの型
type Activity = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  slug: string;
};

interface BookingFormProps {
  selectedActivity?: Activity | null;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  participants: number;
  date: Date;
  time: string;
  message: string;
};

export default function BookingForm({ selectedActivity }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>();

  const participants = watch("participants") || 1;
  const totalPrice = selectedActivity
    ? selectedActivity.price * participants
    : 0;

  // 利用可能な時間帯（実際にはサーバーサイドで提供する）
  const availableTimes = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      // 実際にはここでAPIコールを行い、サーバーサイドで予約を処理する
      console.log("予約データ:", {
        ...data,
        activityId: selectedActivity?.id,
        activityName: selectedActivity?.name,
        totalPrice,
        date: selectedDate,
      });

      // 予約成功を模擬
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBookingSuccess(true);
    } catch (error) {
      console.error("予約エラー:", error);
      alert("予約処理中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue("date", date as Date);
  };

  if (bookingSuccess) {
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
          予約を受け付けました
        </h3>
        <p className="text-green-700 mb-6">
          ご予約内容の確認メールをお送りしました。ご確認ください。
        </p>
        <button
          onClick={() => setBookingSuccess(false)}
          className="btn-primary"
        >
          別の予約をする
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-ocean-blue-800">
        予約フォーム
      </h2>

      {selectedActivity ? (
        <div className="mb-6 p-4 bg-ocean-blue-50 rounded-md border border-ocean-blue-100">
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-ocean-blue-700">
                {selectedActivity.name}
              </h3>
              <p className="text-sm text-gray-600">
                所要時間: {selectedActivity.duration}分
              </p>
              <p className="font-bold text-ocean-blue-600">
                ¥{selectedActivity.price.toLocaleString()} × {participants}人 =
                ¥{totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mb-6">
          左側からアクティビティを選択してください
        </p>
      )}

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
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className="input-field"
            {...register("phone", { required: "電話番号を入力してください" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              予約日 <span className="text-red-500">*</span>
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              className="input-field"
              placeholderText="日付を選択"
              required
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              時間 <span className="text-red-500">*</span>
            </label>
            <select
              id="time"
              className="input-field"
              {...register("time", { required: "時間を選択してください" })}
            >
              <option value="">時間を選択</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="participants"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            参加人数 <span className="text-red-500">*</span>
          </label>
          <select
            id="participants"
            className="input-field"
            {...register("participants", {
              required: "参加人数を選択してください",
            })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}人
              </option>
            ))}
          </select>
          {errors.participants && (
            <p className="text-red-500 text-sm mt-1">
              {errors.participants.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            メッセージ（任意）
          </label>
          <textarea
            id="message"
            rows={4}
            className="input-field"
            {...register("message")}
            placeholder="特別なリクエストや質問がありましたらご記入ください。"
          ></textarea>
        </div>

        {selectedActivity && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-bold text-ocean-blue-700 mb-2">お支払い金額</h3>
            <div className="flex justify-between items-center">
              <span>
                {selectedActivity.name} × {participants}人
              </span>
              <span className="font-bold">¥{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="btn-primary w-full py-3 text-lg"
            disabled={isSubmitting || !selectedActivity}
          >
            {isSubmitting ? "送信中..." : "予約する"}
          </button>
          {!selectedActivity && (
            <p className="text-sm text-red-500 mt-2 text-center">
              ※予約にはアクティビティの選択が必要です
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
