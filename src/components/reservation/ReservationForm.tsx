"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock, FaUser, FaYenSign } from "react-icons/fa";

interface ReservationFormProps {
  activityId: string;
  activityName: string;
  price: number;
  capacity: number;
}

const timeSlots = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const ReservationForm = ({
  activityId,
  activityName,
  price,
  capacity,
}: ReservationFormProps) => {
  const router = useRouter();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const [persons, setPersons] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 予約可能な日付の設定（今日から3か月先まで）
  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3);

  // 人数選択のオプションを生成
  const personOptions = [];
  for (let i = 1; i <= capacity; i++) {
    personOptions.push(i);
  }

  // 合計金額の計算
  const totalPrice = price * persons;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // フォームバリデーション
    if (!date) {
      setErrorMessage("日付を選択してください");
      return;
    }
    if (!time) {
      setErrorMessage("時間を選択してください");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // ここで実際には予約情報をAPIに送信する処理を行う
      // const response = await fetch('/api/reservations', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     activityId,
      //     date: date.toISOString(),
      //     time,
      //     persons,
      //     totalPrice,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error('予約に失敗しました');
      // }

      // const data = await response.json();

      // 予約確認ページへリダイレクト
      // router.push(`/checkout/${data.reservationId}`);

      // 現段階ではAPIが実装されていないので、仮のリダイレクト
      router.push(
        `/checkout/preview?activityId=${activityId}&date=${date.toISOString()}&time=${time}&persons=${persons}&totalPrice=${totalPrice}`
      );
    } catch (error) {
      setErrorMessage("予約処理中にエラーが発生しました。再度お試しください。");
      console.error("予約エラー:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md mb-4">
          {errorMessage}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-text mb-2 flex items-center">
          <FaCalendarAlt className="mr-2" />
          日付を選択
        </label>
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => setDate(date)}
          minDate={today}
          maxDate={maxDate}
          dateFormat="yyyy/MM/dd"
          placeholderText="日付を選択してください"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary/20"
        />
      </div>

      <div className="mb-4">
        <label className="block text-text mb-2 flex items-center">
          <FaClock className="mr-2" />
          時間を選択
        </label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary/20"
        >
          <option value="">時間を選択してください</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-text mb-2 flex items-center">
          <FaUser className="mr-2" />
          人数を選択
        </label>
        <select
          value={persons}
          onChange={(e) => setPersons(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary/20"
        >
          {personOptions.map((num) => (
            <option key={num} value={num}>
              {num}名
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 p-3 bg-gray-50 rounded-md border border-gray-200">
        <div className="flex items-center justify-between text-sm text-text-light mb-2">
          <span>料金（1名あたり）</span>
          <span>¥{price.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-text-light mb-2">
          <span>人数</span>
          <span>{persons}名</span>
        </div>
        <div className="border-t border-gray-200 mt-2 pt-2 flex items-center justify-between">
          <span className="font-semibold">合計金額</span>
          <span className="text-primary-dark font-bold">
            ¥{totalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center"
      >
        <FaYenSign className="mr-2" />
        {isSubmitting ? "処理中..." : "予約する"}
      </button>
    </form>
  );
};

export default ReservationForm;
