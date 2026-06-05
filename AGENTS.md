# AGENTS.md

## 生成文档

- `README.md` 是手写项目概览。
- `configs.md` 是生成文档。
- 应先修改配置定义，再运行 `pnpm run docs`。
- 除非用户明确要求一次性手改，否则不要只手动修改 `configs.md` 中的生成命令块。

生成的 download commands 当前使用以下来源：

```text
https://raw.githubusercontent.com/donniean/react-app/main/
```

如果该来源变化，应修改 generator 并重新生成 `configs.md`。

## 验证

根据改动文件运行相关检查。常用命令：

```bash
pnpm run lint
pnpm run test
pnpm run build
pnpm run docs
```

## Release

未经用户明确确认，不要运行 release 或 publish 命令。

涉及 release 时，使用既有 Changesets scripts：

```bash
pnpm run changeset:add
pnpm run changeset:version
pnpm run changeset:publish
```
