# node-app

[![Version](https://img.shields.io/npm/v/@donniean/node-app.svg)](https://www.npmjs.com/package/@donniean/node-app) [![License: MIT](https://img.shields.io/github/license/donniean/node-app)](https://github.com/donniean/node-app/blob/main/LICENSE) [![CI](https://github.com/donniean/node-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/ci.yaml) [![Release](https://github.com/donniean/node-app/actions/workflows/release.yaml/badge.svg)](https://github.com/donniean/node-app/actions/workflows/release.yaml)

A personal Node.js CLI / API / npm package starter.

当前示例 CLI `configs-md` 会根据仓库中的配置定义生成 `configs.md`，用于维护常见项目工具的 setup 和 clean commands。

## 环境要求

Node.js 和 package manager 版本以 [`.nvmrc`](.nvmrc) 与 [`package.json`](package.json) 的 `packageManager` / `engines` 字段为准。

## 常用命令

```bash
pnpm install
pnpm run build
pnpm run docs
pnpm run lint
pnpm run test
```

## 生成文档

`configs.md` 是根据 `src/configs/` 下的配置定义生成的文档。

更新方式：

```bash
pnpm run docs
```

生成的 download commands 当前从 [`donniean/react-app`](https://github.com/donniean/react-app) 的 `main` 分支读取共享配置文件。

## Release

本仓库使用 Changesets 管理版本和发布。GitHub Actions 会在 `main` 分支构建后创建 release pull request 或发布到 npm。

## License

[MIT](./LICENSE)
