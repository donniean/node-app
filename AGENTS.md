# AGENTS.md

## 仓库边界

- 以 [README.md](README.md) 作为仓库用途、目录范围和常用命令的 single source of truth。

## 生成文档

- 除非用户明确要求一次性手改，否则不要只手动修改 `configs.md` 中的生成命令块。

## CLI 与构建

- CLI 名称是 `configs-md`，源码入口是 `src/cli.ts`。
- 发布后的 executable wrapper 是 `bin/cli.js`，它依赖 `dist/cli.js`。
- 构建配置位于 `tsup.config.ts`，输出 ESM 和 type declarations。
- 修改 CLI 参数、输出行为或 API exports 时，同步检查 `src/cli.ts`、`src/api.ts`、`bin/cli.js`、`package.json` 的 `bin` / `exports` 字段和 `configs.md`。

## 工具链

- 源码使用 ESM、TypeScript 和 `@/*` import alias；不要改成 CommonJS 风格入口，除非用户明确要求。

## 验证

根据改动范围运行相关检查：

```bash
pnpm run lint
pnpm run test
pnpm run build
```

涉及 `src/configs/`、`src/api.ts`、`src/scripts.ts` 或生成输出时，额外运行：

```bash
pnpm run docs
```

CI 当前在 pull requests to `main` 上运行 lint、test 和 build。

## Release

未经用户明确确认，不要运行 release 或 publish 命令。

涉及 release 时，使用既有 Changesets scripts：

```bash
pnpm run changeset:add
pnpm run changeset:version
pnpm run changeset:publish
```
