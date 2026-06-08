# hub

[![License: MIT](https://img.shields.io/github/license/donniean/hub)](https://github.com/donniean/hub/blob/main/LICENSE) [![CI](https://github.com/donniean/hub/actions/workflows/ci.yaml/badge.svg)](https://github.com/donniean/hub/actions/workflows/ci.yaml)

A public collection repository for personal use. It stores public material that belongs in version control but does not warrant a standalone repository. The scope is intentionally broad; the current directories describe how the repository is organized today, not fixed long-term categories, and other public material can be added over time.

## Contents

- [`.github/workflows/`](.github/workflows/): GitHub Actions workflows for CI, dependency updates, and pull request automation; some workflows are reusable workflows used by other personal repositories.
- [`apps/`](apps/): Small apps, experiments, and pages that can be viewed independently.
- [`scripts/`](scripts/): Day-to-day maintenance scripts, including environment inspection, local updates, and cleanup tasks.
- [`snippets/`](snippets/): Reusable code and reference snippets for study, practice, interviews, and utilities.

Review the script before running anything under `scripts/`. Update and cleanup scripts may modify the local toolchain, switch branches in other local repositories, install dependencies, or delete local data.

Output from inspection scripts may include local environment details, account state, config paths, or other information that is not suitable for public sharing. Review and redact it before external reuse.

## Requirements

- The Node.js version is defined by [`.nvmrc`](.nvmrc) and `engines.node` in [`package.json`](package.json).
- The pnpm version is defined by `packageManager` and `engines.pnpm` in [`package.json`](package.json).
- Use `pnpm`. `preinstall` enforces this with `only-allow`.

## Commands

```bash
pnpm install
pnpm run lint
pnpm run lint:fix
pnpm run test
pnpm run serve
```

`pnpm run serve` starts a static server for [`apps/playground/`](apps/playground/).

## License

[MIT](LICENSE)
