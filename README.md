# node-app

[![Version](https://img.shields.io/npm/v/@donniean/node-app.svg)](https://www.npmjs.com/package/@donniean/node-app) [![License: MIT](https://img.shields.io/github/license/donniean/node-app)](https://github.com/donniean/node-app/blob/main/LICENSE) [![CI](https://github.com/donniean/node-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/ci.yaml) [![Release](https://github.com/donniean/node-app/actions/workflows/release.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/release.yaml)

A personal GitHub Template repository，用于沉淀 Node.js CLI + Node.js API + npm package starter / template / example / demo / scaffold。

当前保留的实际示例是 `configs-md`：它根据 `src/configs/` 中的配置定义生成 Markdown 文档，用于维护常见项目工具的 setup 和 clean commands。

## 内容范围

- `.changeset/`：Changesets release 配置。
- `bin/cli.js`：发布后使用的 CLI wrapper，指向构建产物 `dist/cli.js`。
- `src/configs/`：工具配置定义，是生成 `configs.md` 的主要来源。
- `src/models/`、`src/helpers/`、`src/utils/`：schema、command builder 和通用 utilities。
- `src/api.ts`：Markdown 生成 API，导出 `getMarkdown`、`writeMarkdown` 和 `writeMarkdownWithDefaults`。
- `src/cli.ts`：`configs-md` 的 Commander CLI 入口。
- `configs.md`：由 `pnpm run docs` 生成的配置文档。

## 环境要求

- Node.js 和 pnpm 版本以 [`.nvmrc`](.nvmrc)、[`package.json`](package.json) 的 `packageManager` / `engines` 字段为准。
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

开发 CLI：

```bash
pnpm run dev --help
pnpm run dev --file configs.md
```

## 生成文档

`configs.md` 根据 `src/configs/` 下的配置定义生成的文档，默认输出文件名来自 `src/models/configs.constants.ts`。

更新配置文档时，优先修改 `src/configs/` 中的配置定义，然后运行：

```bash
pnpm run docs
```

生成的 `files.download` commands 当前从[`donniean/react-app`](https://github.com/donniean/react-app) 的 `main` 分支读取共享配置文件：

```text
https://raw.githubusercontent.com/donniean/react-app/main/
```

## Release

本仓库使用 Changesets 管理版本和发布。`release.yaml` 在 push to `main` 后运行 build，并通过 `changesets/action` 创建 release pull request 或发布到 npm。

## License

[MIT](LICENSE)
