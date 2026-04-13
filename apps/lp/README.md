# lp

このディレクトリは LP 用の Next.js アプリです。

Next.js 学習者向けに、まずは「`app/` に画面があり、第一階層の設定ファイルがその動きを支えている」と捉えると追いやすいです。

## 最初に見る場所

- `app/page.tsx`: `/` に表示されるトップページです。LP の見た目を組み立てています。
- `app/layout.tsx`: 全ページ共通の HTML 骨組みです。`<html>` や `<body>`、共通のメタ情報を置きます。
- `app/globals.css`: アプリ全体で使う CSS です。
- `app/components/`: ページ内で再利用する部品を置く場所です。
- `app/data/`: 表示テキストや配列データをまとめておく場所です。

## 第一階層のファイルは何をしているか

- `package.json`: アプリ名、依存パッケージ、`npm run dev` などのコマンドを定義します。Next.js プロジェクトの入口になる設定ファイルです。
- `package-lock.json`: インストールした依存関係の正確な組み合わせを固定します。基本は自動生成されるので、手で編集しません。
- `next.config.ts`: Next.js の動作設定です。このアプリでは静的 HTML 出力、`reactStrictMode`、Turbopack のルートを設定しています。
- `tsconfig.json`: TypeScript の型チェック設定です。`@/*` のパスエイリアスもここで定義しています。
- `next-env.d.ts`: Next.js が自動で参照する型定義ファイルです。通常は中身を編集しません。
- `eslint.config.mjs`: ESLint の設定です。コードの書き方や品質ルールを適用します。

## 学習中はどう見るとよいか

1. `package.json` で使えるコマンドを確認する
2. `app/page.tsx` を開いて、どのコンポーネントがページを作っているか読む
3. 気になったコンポーネントを `app/components/` で追う
4. テキストやカードの中身は `app/data/` を見る
5. エラーや補完に関係する設定は `tsconfig.json` と `eslint.config.mjs` を見る

## 通常は編集しないもの

- `.DS_Store`: macOS が作る管理ファイルです。
- `tsconfig.tsbuildinfo`: TypeScript のビルド高速化用キャッシュです。
- `.next/`: Next.js のビルド生成物です。
- `node_modules/`: インストール済み依存パッケージです。

## ビルド後の見方

- `npm run build` を実行すると、静的ファイルが `out/` に出力されます。
- LP は 1 ページ構成なので、まずは `out/index.html` を見ると完成 HTML を確認できます。
- `.next/` は Next.js の内部用ビルド成果物なので、学習用に HTML を見るなら `out/` を確認するのが分かりやすいです。
