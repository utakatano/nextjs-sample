# nextjs-sample

このリポジトリは複数アプリ構成です。

- `apps/corporate-site`: コーポレートサイト用 Next.js アプリ
- `apps/lp`: LP 用 Next.js アプリ

各アプリの学習用メモ:

- `apps/corporate-site/README.md`: 第一階層ファイルと主要ディレクトリの役割を説明
- `apps/lp/README.md`: 第一階層ファイルと主要ディレクトリの役割を説明

依存関係の運用ルール:

- 推奨環境は Node `24.14.1`、npm `11.10.0`
- 許容環境は Node `>=20.9.0 <25`、npm `>=11.10.0 <12`
- Volta を使う場合は `24.14.1` / `11.10.0` を使う
- `nodenv` を使う場合は repo ルートの `.node-version` で `24.14.1` を選べる
- 依存関係は `package.json` で固定バージョンのみを使う
- セットアップは `npm install` ではなく `npm ci` を使う
- `.npmrc` で `ignore-scripts=true`、`engine-strict=true`、`min-release-age=7` を強制している
- 新規公開から 7 日未満のパッケージは通常の更新フローでは入れない
- `min-release-age=7` を維持するため、npm は `11.10.0` 以降が必要

環境準備:

```bash
node -v
npm -v
```

`node` は `>=20.9.0 <25`、`npm` は `>=11.10.0 <12` を満たしてください。

Volta を使う場合の例:

```bash
volta install node@24.14.1 npm@11.10.0
```

`nodenv` を使う場合の例:

```bash
nodenv install 24.14.1
nodenv local 24.14.1
```

`nodenv` は Node の切り替え用なので、npm は別途 `npm -v` で `>=11.10.0 <12` を満たしていることを確認してください。

初回セットアップ:

```bash
cd apps/corporate-site
npm ci
```

```bash
cd apps/lp
npm ci
```

開発サーバー起動:

```bash
cd apps/corporate-site
npm run dev
```

```bash
cd apps/lp
npm run dev
```

ビルド確認:

```bash
cd apps/corporate-site
npm run build
```

```bash
cd apps/lp
npm run build
```

`npm ci` や `npm install` が npm バージョン不足で止まる場合:

- このリポジトリでは `npm >=11.10.0 <12` を前提にしているため、古い npm では install が止まることがある
- まず `npm -v` で現在の npm バージョンを確認する
- Volta を使う場合は `volta install node@24.14.1 npm@11.10.0` のあとに `node -v` と `npm -v` を確認する
- `nodenv` を使う場合は `nodenv local 24.14.1` のあとに `node -v` と `npm -v` を確認する
- `nodenv` で切り替えた Node に古い npm が入っている場合は、npm `11.10.0` 以上になる Node を使うか、npm を更新してから再実行する
- どうしても npm を合わせられない場合は、各 app の `.npmrc` から `min-release-age=7` を一時的に外してセットアップを試す方法もある
- この方法は標準手順ではなく例外対応で、実施した場合はセットアップ後に `.npmrc` を元に戻す

緊急のセキュリティアップデートで `min-release-age=7` を待てない場合:

- 専用 PR で対応する
- 一時的に `min-release-age=0` で検証し、更新後に戻す
- `npm run typecheck`、`npm run lint`、`npm run build` を必ず通す
- lockfile の差分で新規パッケージと取得元を確認する
