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

- The Node.js version is defined by [`.nvmrc`](.nvmrc) and `engines.node` in [`package.json`](package.json). See [Node.js version upgrade](docs/node-version-upgrade.md).
- The required pnpm version is pinned by the `packageManager` in [`package.json`](package.json).

## Commands

```bash
pnpm install
pnpm run lint:markdown
pnpm run format:oxfmt:check
pnpm run lint:spellcheck
pnpm run lint:autocorrect
pnpm run test
pnpm run test:unit
pnpm run test:unit:coverage
pnpm run test:unit:watch
pnpm run test:unit:ui
pnpm run serve
```

`pnpm run lint` includes `lint:knip` and `lint:oxlint`. `lint:oxlint` is not part of the current default validation for legacy snippets; the long-term target is to fix those snippets or migrate them to TypeScript so they meet the JavaScript linting standard.

`pnpm run serve` starts a static server for [`apps/playground/`](apps/playground/).

## Repository Maintenance

[`scripts/update/pnpm-allow-builds.sh`](scripts/update/pnpm-allow-builds.sh) refreshes pnpm build approvals in `hub`, `node-app`, `react-app`, and `vault`. It requires clean local repositories, checks out and updates `main`, installs dependencies, and creates a signed commit and draft pull request for each repository whose `pnpm-workspace.yaml` changes.

The script preserves build decisions for packages that remain in the locked dependency graph, removes stale entries, and runs newly approved dependency build scripts before creating pull requests. Set `REPO_ROOT` to override the default `$HOME/repos` repository root.

```bash
bash scripts/update/pnpm-allow-builds.sh
```

## License

[MIT](LICENSE)
