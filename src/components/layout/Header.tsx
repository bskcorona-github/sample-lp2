"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="沖縄マリンアクティビティ"
              width={50}
              height={50}
              className="w-auto h-10"
            />
            <span className="text-ocean-blue-700 font-bold text-xl hidden sm:inline-block">
              沖縄マリンアクティビティ
            </span>
          </Link>

          {/* モバイルメニューボタン */}
          <button
            type="button"
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* デスクトップメニュー */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/#activities"
              className="text-gray-700 hover:text-ocean-blue-600 font-medium"
            >
              アクティビティ
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-ocean-blue-600 font-medium"
            >
              マリンショップについて
            </Link>
            <Link
              href="/#reviews"
              className="text-gray-700 hover:text-ocean-blue-600 font-medium"
            >
              口コミ
            </Link>
            <Link
              href="/#location"
              className="text-gray-700 hover:text-ocean-blue-600 font-medium"
            >
              アクセス
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-ocean-blue-600 font-medium"
            >
              お問い合わせ
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="/booking" className="btn-primary">
              今すぐ予約
            </Link>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="pt-4 pb-2 lg:hidden">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#activities"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  アクティビティ
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  マリンショップについて
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  口コミ
                </Link>
              </li>
              <li>
                <Link
                  href="/#location"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  アクセス
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="block py-2 px-4 bg-ocean-blue-600 text-white rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  今すぐ予約
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
