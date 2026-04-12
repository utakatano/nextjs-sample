# corporate-site

このディレクトリはコーポレートサイト用の Next.js アプリです。

Next.js 学習者向けに見ると、`app/` がページ本体、`components/` が再利用部品、第一階層のファイル群が開発設定という分担になっています。

## 最初に見る場所

- `app/page.tsx`: `/` に表示されるトップページです。トップのセクション構成を確認できます。
- `app/layout.tsx`: 全ページ共通のレイアウトです。ヘッダーやフッターのような共通枠を理解するときに見ます。
- `app/business/`, `app/news/`, `app/careers/`: それぞれの下層ページを置く App Router のページ群です。
- `components/`: ボタン、カード、レイアウト部品などの再利用コンポーネントです。
- `lib/`: 補助関数を置く場所です。
- `public/`: 画像や SVG などの静的ファイルです。

## 第一階層のファイルは何をしているか

- `package.json`: アプリ名、依存パッケージ、実行コマンドを定義します。`dev` `build` `lint` `typecheck` をここから実行します。
- `package-lock.json`: 依存関係の固定ファイルです。チーム全員で同じバージョンを使うために必要です。
- `next.config.ts`: Next.js の設定ファイルです。このアプリでは Strict Mode と Turbopack のルート設定をしています。
- `tsconfig.json`: TypeScript の設定です。型チェックや `@/*` エイリアスをここで管理します。
- `next-env.d.ts`: Next.js 用の型定義を読み込むためのファイルです。通常は編集しません。
- `eslint.config.mjs`: ESLint のルール設定です。Next.js 向けの推奨ルールを読み込んでいます。

## 学習中はどう見るとよいか

1. `app/page.tsx` を読んで、トップページがどのデータとコンポーネントで組まれているか確認する
2. 下層ページは `app/business/` などを開いて、App Router のディレクトリ構造に慣れる
3. UI 部品は `components/` を追い、どこで再利用されているかを見る
4. 設定の意味が気になったら第一階層の `package.json`、`next.config.ts`、`tsconfig.json` を確認する

## 通常は編集しないもの

- `.DS_Store`: macOS が自動生成する管理ファイルです。
- `tsconfig.tsbuildinfo`: TypeScript のキャッシュです。
