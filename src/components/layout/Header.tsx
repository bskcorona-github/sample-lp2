import Link from "next/link";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              サンプルサイト２
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
            <Link
              href="/activities"
              className="hover:text-accent transition-colors"
            >
              アクティビティ
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              当サイトについて
            </Link>
            <Link
              href="/reviews"
              className="hover:text-accent transition-colors"
            >
              お客様の声
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="hover:text-accent transition-colors"
            >
              <FaCalendarAlt className="inline mr-1" />
              予約状況
            </Link>
            <Link href="/login" className="hover:text-accent transition-colors">
              <FaUser className="inline mr-1" />
              ログイン
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
