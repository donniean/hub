# hub

[![License: MIT](https://img.shields.io/github/license/donniean/hub)](https://github.com/donniean/hub/blob/main/LICENSE) [![CI](https://github.com/donniean/hub/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/hub/actions/workflows/ci.yaml)

一个个人自用的公开集合仓库，用于存放任何适合 version control 但不需要独立成仓库的公开内容，并允许后续扩展更多不同类型的公开内容。

## 内容范围

- [`.github/workflows/`](.github/workflows/)：可复用 GitHub Actions workflows，以及本仓库自己的 CI、dependency bump 和 pull request automation。
- [`apps/`](apps/)：小型应用、实验代码和可独立查看的页面。
- [`scripts/`](scripts/)：日常使用和维护脚本，包括只读检查、本机更新和清理脚本。
- [`snippets/`](snippets/)：学习、练习、面试、实用或可复用的 snippets。

运行 `scripts/` 下脚本前先阅读脚本内容；更新和清理脚本可能修改本机环境、切换其他本地仓库分支、安装依赖或删除本机数据。

## 环境要求

- Node.js 版本以 [`.nvmrc`](.nvmrc) 和 [`package.json`](package.json) 的 `engines.node` 字段为准。
- pnpm 版本以 [`package.json`](package.json) 的 `packageManager` 和 `engines.pnpm` 字段为准。
- 使用 `pnpm`。`preinstall` 会通过 `only-allow` 阻止其他 package manager。

## 常用命令

```bash
pnpm install
pnpm run lint
pnpm run lint:fix
pnpm run test
pnpm run serve
```

`pnpm run serve` 会启动 [`apps/playground/`](apps/playground/) 的静态服务。

## License

[MIT](LICENSE)
