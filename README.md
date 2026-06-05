# hub

[![License: MIT](https://img.shields.io/github/license/donniean/hub)](https://github.com/donniean/hub/blob/main/LICENSE) [![CI](https://github.com/donniean/hub/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/hub/actions/workflows/ci.yaml)

一个公开的个人集合仓库，用于存放可复用但不需要独立成项目的内容，未来可继续扩展更多不同种类的公开内容。它不是单一 app、service 或 npm package。

## 内容范围

- [`.github/workflows/`](.github/workflows/)：部分是可复用的 workflows，部分是仓库特有的 workflows。
- [`apps/`](apps/)：小型应用、实验代码和可独立查看的页面（例如 [`apps/playground/`](apps/playground/)）。
- [`scripts/`](scripts/)：日常使用和维护的脚本。
- [`snippets/`](snippets/)：学习、练习、面试、实用或可复用的 snippets。

## 环境要求

- Node.js 和 pnpm 版本以 [`.nvmrc`](.nvmrc)、[`package.json`](package.json) 的 `packageManager` / `engines` 字段为准。
- 使用 `pnpm`。`preinstall` 会通过 `only-allow` 阻止其他 package manager。

## 常用命令

```bash
pnpm install
pnpm run lint
pnpm run lint:fix
pnpm run test
pnpm run serve
```

`pnpm run serve` 会启动 `apps/playground/` 的静态服务。

本仓库包含会修改本机状态的 update / cleanup scripts。运行这些脚本前，先阅读 [AGENTS.md](AGENTS.md) 中的安全边界。

## License

[MIT](LICENSE)
