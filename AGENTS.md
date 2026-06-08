# AGENTS.md

## 仓库边界

- 本仓库是个人自用的 public GitHub template repository，也是当前可构建、可发布的 npm package。修改时同时检查当前 `@donniean/node-app` package / `configs-md` CLI 行为和 template 复用场景。
- 由本 template 生成的新项目不限定为个人自用；不要把当前仓库的「个人自用」边界写成下游项目的固定约束。
- 由本 template 生成正式项目时，示例 CLI、API、配置生成逻辑和占位结构可以按项目目标替换、裁剪或删除。不要把当前示例当成所有下游项目都必须保留的约定。
- 以 [README.md](README.md) 作为仓库用途、当前目录和常用命令的 single source of truth。`AGENTS.md` 只维护 coding agent 需要执行的仓库约束。
- 当前没有 `docs/` 目录；不要为了满足文档清单创建空文档。[`configs.md`](configs.md) 是生成产物，不属于手写 `docs/**/*.md`。

## 事实来源

- [`package.json`](package.json)：package name、scripts、`bin`、`exports`、`files`、`packageManager` 和 `engines`。
- [`.nvmrc`](.nvmrc)：本地开发和 GitHub Actions 使用的 Node.js version file。
- [`pnpm-workspace.yaml`](pnpm-workspace.yaml)：pnpm workspace、`engineStrict`、`minimumReleaseAge` 和 allowed build dependencies。
- [`tsconfig.json`](tsconfig.json)：TypeScript compiler options 和 `@/*` path alias。
- [`tsup.config.ts`](tsup.config.ts)：ESM bundle 和 type declaration 输出。
- [`.github/workflows/`](.github/workflows/)：CI、release、dependency bump、pull request auto-merge 和 auto-update 行为。
- [`src/models/configs.constants.ts`](src/models/configs.constants.ts)：`configs.md` 的默认输出文件名和 `files.download` base URL。

## 实现规则

- 使用 `pnpm`。`preinstall` 会通过 `only-allow` 阻止其他 package manager。
- 修改 TypeScript / JavaScript imports 前，先读取 [`tsconfig.json`](tsconfig.json) 的 `compilerOptions.paths`。优先使用 `@/*` alias，避免深层相对路径。
- CLI 名称是 `configs-md`，源码入口是 [`src/cli.ts`](src/cli.ts)，发布后的 executable wrapper 是 [`bin/cli.js`](bin/cli.js)。
- API export 入口是 [`src/index.ts`](src/index.ts)，当前导出 [`src/api.ts`](src/api.ts)。
- 构建输出由 [`tsup.config.ts`](tsup.config.ts) 管理，当前输出 ESM 和 type declarations。
- 修改 CLI 参数、输出行为、API exports 或 package 入口时，同步检查 [`src/cli.ts`](src/cli.ts)、[`src/api.ts`](src/api.ts)、[`src/index.ts`](src/index.ts)、[`bin/cli.js`](bin/cli.js)、[`package.json`](package.json) 的 `bin` / `exports` / `files` 字段和 [`configs.md`](configs.md)。

## 生成文档

- [`configs.md`](configs.md) 是由 `pnpm run docs` 生成的文档。除非用户明确要求一次性手改，否则不要只手动修改生成命令块。
- `lint-staged` 会在 staged TypeScript 改动时运行 `pnpm run docs` 并重新加入 [`configs.md`](configs.md)。如果手动处理相关改动，也应检查生成 diff 是否符合预期。
- 生成的 `files.download` commands 使用 [`src/models/configs.constants.ts`](src/models/configs.constants.ts) 中的 `CONFIG_BASE_URL`，当前指向 `https://raw.githubusercontent.com/donniean/react-app/main/`。修改下载来源时，同步检查生成结果和 README 说明。
- 默认输出文件名来自 [`src/models/configs.constants.ts`](src/models/configs.constants.ts) 中的 `DEFAULT_OUTPUT_FILE_NAME`。修改输出目标时，同步检查 `package.json` 的 `docs` / `postdocs` scripts、[`lint-staged.config.mjs`](lint-staged.config.mjs) 和 `README` 说明。

## 验证

根据改动范围运行相关检查：

```bash
pnpm run lint
pnpm run test
pnpm run build
```

如果检查结果可自动修复，优先运行影响范围最小的 `fix` 命令，而不是无差别运行全仓库修复。

涉及 `src/configs/`、`src/api.ts`、`src/scripts.ts`、`src/helpers/`、`src/models/` 或生成输出时，额外运行并检查生成 diff：

```bash
pnpm run docs
```

更小范围的检查可按文件类型选择：

```bash
pnpm run lint:md
pnpm run lint:js
pnpm run lint:types
pnpm run lint:format
pnpm run lint:spell
pnpm run lint:text
pnpm run lint:package-json
```

对应的 `fix` 命令包括：

- `pnpm run lint:md:fix`
- `pnpm run lint:js:fix`
- `pnpm run lint:format:fix`
- `pnpm run lint:text:fix`
- `pnpm run lint:package-json:fix`

CI 当前在 pull requests to `main` 上运行 lint、test 和 build。

## Release

未经用户明确确认，不要运行 release 或 publish 命令。

涉及 release 时，使用既有 Changesets scripts：

```bash
pnpm run changeset:add
pnpm run changeset:version
pnpm run changeset:publish
```
