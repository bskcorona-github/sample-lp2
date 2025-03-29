# サンプルサイト２ - マリンアクティビティ予約サイト

マリンアクティビティの予約や管理ができるサンプル LP サイトです。Next.js 14 と Tailwind CSS を使用しています。

## 機能一覧

- **予約機能**: 日付、時間、人数を選択して簡単に予約できます
- **予約状況管理機能**: 管理者は予約状況を確認・管理できます
- **決済機能**: クレジットカードや電子決済に対応（Stripe 連携）
- **口コミ投稿機能**: ユーザーはアクティビティの感想を投稿できます
- **お問い合わせフォーム**: ユーザーからの問い合わせを受け付けます
- **SEO 対策**: 沖縄、マリンアクティビティなどのキーワードでの検索に最適化

## 技術スタック

- **フロントエンド**: Next.js 14, React, TypeScript, Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: MySQL (AWS RDS)
- **認証**: NextAuth.js
- **ORM**: Prisma
- **決済**: Stripe
- **デプロイ**: Vercel

## 環境設定

### 必要条件

- Node.js 18.17.0 以上
- npm 9.6.7 以上

### インストール方法

1. リポジトリをクローンする

```bash
git clone https://github.com/your-username/sample-lp2.git
cd sample-lp2
```

2. 依存パッケージをインストールする

```bash
npm install
```

3. 環境変数を設定する
   `.env`ファイルをプロジェクトのルートに作成し、以下の変数を設定します：

```
DATABASE_URL="mysql://user:password@localhost:3306/marinadb"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
```

4. データベースをセットアップする

```bash
npx prisma db push
```

## 開発サーバーの起動

開発サーバーを起動するには、以下のコマンドを実行します：

```bash
npm run dev
```

http://localhost:3000 にアクセスして、アプリケーションを確認できます。

## ビルドと本番環境での実行

プロジェクトをビルドするには：

```bash
npm run build
```

ビルドしたアプリケーションを実行するには：

```bash
npm start
```

## デプロイ

このプロジェクトは Vercel へのデプロイを想定しています。Vercel にデプロイする際は、必要な環境変数を設定してください。

## ディレクトリ構造

```
sample-lp2/
├── public/            # 静的ファイル
│   └── images/        # 画像ファイル
├── prisma/            # Prismaの設定とスキーマ
├── src/
│   ├── app/           # Next.jsのページコンポーネント
│   ├── components/    # 再利用可能なコンポーネント
│   │   ├── layout/    # レイアウト関連のコンポーネント
│   │   ├── ui/        # 汎用UIコンポーネント
│   │   ├── activity/  # アクティビティ関連のコンポーネント
│   │   ├── reservation/ # 予約関連のコンポーネント
│   │   ├── review/    # レビュー関連のコンポーネント
│   │   └── contact/   # お問い合わせ関連のコンポーネント
│   └── lib/           # ユーティリティ関数やAPIクライアント
│       └── actions/   # サーバーアクション
└── ...
```

## ライセンス

MIT

## 作者

サンプルユーザー
