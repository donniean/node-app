# node-app

[![Version](https://img.shields.io/npm/v/@donniean/node-app.svg)](https://www.npmjs.com/package/@donniean/node-app) [![License: MIT](https://img.shields.io/github/license/donniean/node-app)](https://github.com/donniean/node-app/blob/main/LICENSE) [![CI](https://github.com/donniean/node-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/ci.yaml) [![Release](https://github.com/donniean/node-app/actions/workflows/release.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/release.yaml)

一个个人自用的 public template repository，用于沉淀可复用的 Node.js CLI、Node.js API 和 npm package starter / template / example / demo / scaffold。

当前仓库同时保留一个可构建、可发布的示例 package [`@donniean/node-app`](package.json)，并提供 `configs-md` CLI。该 CLI 根据 [`src/configs/`](src/configs/) 中的配置定义生成 Markdown 文档，用于维护常见项目工具的 setup 和 clean commands。

由本 template 生成的新项目不限定为个人自用，可按个人、团队或公司场景继续调整。

## 当前内容

- [`.changeset/`](.changeset/)：Changesets release 配置。
- [`bin/cli.js`](bin/cli.js)：发布后的 executable wrapper，指向构建产物 `dist/cli.js`。
- [`src/cli.ts`](src/cli.ts)：`configs-md` 的 Commander CLI 入口。
- [`src/api.ts`](src/api.ts)：Markdown 生成 API，导出 `getMarkdown`、`writeMarkdown` 和 `writeMarkdownWithDefaults`。
- [`src/index.ts`](src/index.ts)：package export 入口，当前导出 [`src/api.ts`](src/api.ts)。
- [`src/configs/`](src/configs/)：工具配置定义，是生成 [`configs.md`](configs.md) 的主要来源。
- [`src/models/`](src/models/)、[`src/helpers/`](src/helpers/)、[`src/utils/`](src/utils/)：schema、command builder、路径解析、package metadata 读取和通用 utilities。
- [`configs.md`](configs.md)：由 `pnpm run docs` 生成的配置文档。

由本 template 生成正式项目时，应按实际项目目标替换、裁剪或删除示例 CLI、API、配置生成逻辑和占位结构。当前目录和 `configs-md` 示例不代表所有下游项目都必须保留的约定。

## 环境要求

- Node.js 版本以 [`.nvmrc`](.nvmrc) 和 [`package.json`](package.json) 的 `engines.node` 字段为准。
- pnpm 版本以 [`package.json`](package.json) 的 `packageManager` 和 `engines.pnpm` 字段为准。
- 使用 `pnpm`。`preinstall` 会通过 `only-allow` 阻止其他 package manager。

## 常用命令

```bash
pnpm install
pnpm run build
pnpm run docs
pnpm run lint
pnpm run lint:fix
pnpm run test
```

本地调试 CLI：

```bash
pnpm run dev --help
pnpm run dev --file configs.md
```

构建后暴露的入口：

- CLI：`configs-md`
- API：`@donniean/node-app`

## 生成文档

[`configs.md`](configs.md) 是生成产物，当前 [`README.md`](README.md) 是手写项目说明。更新配置文档时，优先修改 [`src/configs/`](src/configs/) 中的配置定义，然后运行：

```bash
pnpm run docs
```

默认输出文件名来自 [`src/models/configs.constants.ts`](src/models/configs.constants.ts)。生成的 `files.download` commands 当前从 [`donniean/react-app`](https://github.com/donniean/react-app) 的 `main` 分支读取共享配置文件，而不是从本仓库读取：

```text
https://raw.githubusercontent.com/donniean/react-app/main/
```

涉及 [`src/configs/`](src/configs/)、[`src/helpers/`](src/helpers/)、[`src/models/`](src/models/) 或 [`src/api.ts`](src/api.ts) 的改动时，应检查 [`configs.md`](configs.md) 是否需要重新生成。

## Release

本仓库使用 Changesets 管理版本和发布。[`release.yaml`](.github/workflows/release.yaml) 在 push to `main` 后运行 build，并通过 `changesets/action` 创建 release pull request 或发布到 npm。

手动维护 release 时使用既有 scripts：

```bash
pnpm run changeset:add
pnpm run changeset:version
pnpm run changeset:publish
```

## License

[MIT](LICENSE)
