# hub

[![License: MIT](https://img.shields.io/github/license/donniean/hub)](https://github.com/donniean/hub/blob/main/LICENSE)
[![CI](https://github.com/donniean/hub/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/hub/actions/workflows/ci.yaml)

A personal public collection，不是单一 app、service 或 npm package。主要内容包括 workflows、小型应用、本机维护脚本和代码片段等。

## 内容范围

- `.github/workflows/`：可复用和自动化 workflows。
- `apps/`：小型应用和实验代码。
- `scripts/`：本机检查、更新和清理脚本。
- `snippets/`：可复用或练习用代码片段。

## 环境要求

Node.js 和 package manager 版本以 [`.nvmrc`](.nvmrc) 与 [`package.json`](package.json) 的 `packageManager` / `engines` 字段为准。

## 常用命令

```bash
pnpm install
pnpm run lint
pnpm run test
pnpm run serve
```

`pnpm run serve` 会启动 `apps/playground/` 的静态服务。

## License

MIT
