# AGENTS.md

## 仓库边界

- 以 [README.md](README.md) 作为仓库用途、目录范围和常用命令的 single source of truth；更细的执行约束以本文件和相关源码为准。

## 实现约定

- 修改 TypeScript / JavaScript imports 前，先读取 `tsconfig.json` / `jsconfig.json` 中的 `compilerOptions.paths`。优先使用已配置的 paths alias，避免使用深层相对路径。

## 生成文档

- 除非用户明确要求一次性手改，否则不要只手动修改 `configs.md` 中的生成命令块。

## CLI 与构建

- CLI 名称是 `configs-md`，源码入口是 [`src/cli.ts`](src/cli.ts)。
- 发布后的 executable wrapper 是 [`bin/cli.js`](bin/cli.js)，它依赖 `dist/cli.js`。
- 构建配置位于 [`tsup.config.ts`](tsup.config.ts)，输出 ESM 和 type declarations。
- 修改 CLI 参数、输出行为或 API exports 时，同步检查 [`src/cli.ts`](src/cli.ts)、[`src/api.ts`](src/api.ts)、[`bin/cli.js`](bin/cli.js)、[`package.json`](package.json) 的 `bin` / `exports` 字段和 [`configs.md`](configs.md)。

## 验证

根据改动范围运行相关检查：

```bash
pnpm run lint
pnpm run test
pnpm run build
```

如果检查结果可自动修复，优先运行影响范围最小的 `fix` 命令，而不是无差别运行全仓库修复。

涉及 `src/configs/`、`src/api.ts`、`src/scripts.ts` 或生成输出时，额外运行：

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
- `pnpm run lint:package-json:fix`。

CI 当前在 pull requests to `main` 上运行 lint、test 和 build。

## Release

未经用户明确确认，不要运行 release 或 publish 命令。

涉及 release 时，使用既有 Changesets scripts：

```bash
pnpm run changeset:add
pnpm run changeset:version
pnpm run changeset:publish
```
