import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              サンプルサイト２
            </h3>
            <p className="mb-4">
              沖縄の美しい海でマリンアクティビティを満喫しましょう。初心者から上級者まで、様々なレベルに合わせたプランをご用意しています。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-accent transition-colors"
                >
                  アクティビティ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  当サイトについて
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-accent transition-colors"
                >
                  お客様の声
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">お問い合わせ</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-2 mb-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>〒900-0000 沖縄県那覇市○○町1-1-1</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <FaPhone />
                <span>098-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@sample-site2.com</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} サンプルサイト２. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
