# 沖縄マリンアクティビティウェブサイト

沖縄のマリンアクティビティ予約サイトのランディングページです。

## 技術スタック

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Hook Form

## 実行方法

### 必要条件

- Node.js 18.0.0 以上
- npm 8.0.0 以上

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 にアクセスして、ウェブサイトを表示できます。

### ビルド

```bash
# プロジェクトをビルド
npm run build

# ビルドされたアプリを起動
npm start
```

## 主要ページ

- トップページ (`/`) - アクティビティ一覧
- アクティビティ詳細ページ (`/activity/[slug]`) - 各アクティビティの詳細
- 予約ページ (`/booking`) - アクティビティ予約フォーム
- 支払いページ (`/payment`) - 決済処理
- レビューページ (`/reviews`) - お客様の声
- お問い合わせページ (`/contact`) - お問い合わせフォーム
- 会社概要ページ (`/about`) - 会社情報
- 利用規約ページ (`/terms`) - 利用規約
- プライバシーポリシーページ (`/privacy`) - プライバシーポリシー

## エラー解決方法

もしエラーが発生した場合は、以下の手順を試してください：

1. node_modules を削除して再インストール

```bash
rm -rf node_modules
npm install
```

2. Next.js のキャッシュをクリア

```bash
rm -rf .next
```

3. もし`touch`コマンドなどの Unix 系コマンドを使用する場合は、Git Bash などが必要です。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
