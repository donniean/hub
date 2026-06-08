# AGENTS.md

## Scope

- Repository purpose, current directories, and common commands are documented in [README.md](README.md) as the single source of truth; this file contains only repository constraints for coding agents.
- Do not commit or disclose private configuration, account information, tokens, logs, local paths, or script output that has not been reviewed.

## Conventions

- Before changing TypeScript or JavaScript imports, identify the relevant `tsconfig.json` / `jsconfig.json` for the edited file and resolve its effective `compilerOptions`, including any configured `paths`, by following the `extends` chain when present; in solution-style TypeScript setups, use `references` only to find the leaf project config. Use relative imports within the same feature/module/package, and prefer existing configured path aliases for established cross-boundary imports, but only when all relevant tooling for that code path supports the same alias resolution.

## Scripts

Reading scripts is allowed. Without explicit user confirmation, do not run the following scripts or equivalent commands because they update the local toolchain, switch branches in local repositories, install dependencies, or delete local data:

```bash
scripts/update/all.sh
scripts/update/brew.sh
scripts/update/mas.sh
scripts/update/npm-global.sh
scripts/update/repos.sh
scripts/update/skills.sh
scripts/cleanup/codex.sh
```

Impact summary:

- [`scripts/update/all.sh`](scripts/update/all.sh) runs the Homebrew, Mac App Store, global npm package, global skill, and local repository update scripts in sequence.
- [`scripts/update/brew.sh`](scripts/update/brew.sh) runs Homebrew update, upgrade, and cleanup tasks, and removes dependencies that are no longer needed.
- [`scripts/update/mas.sh`](scripts/update/mas.sh) upgrades Mac App Store apps.
- [`scripts/update/npm-global.sh`](scripts/update/npm-global.sh) updates global npm packages.
- [`scripts/update/skills.sh`](scripts/update/skills.sh) updates global skills.
- [`scripts/update/repos.sh`](scripts/update/repos.sh) switches the local repositories listed in the script to `main`, pulls changes, and installs dependencies.
- [`scripts/cleanup/codex.sh`](scripts/cleanup/codex.sh) deletes the local Codex output directories listed in the script.

Scripts under [`scripts/inspect/`](scripts/inspect/) are intended for read-only diagnostics, but their output may include local environment details, shell configuration, Homebrew information, global npm packages, GitHub authentication state, Codex configuration, or repository status. Do not publish, forward, or write that output into a public issue or pull request without review and redaction.

## GitHub Workflows

- [`.github/workflows/ci.yaml`](.github/workflows/ci.yaml) is the CI workflow for this repository.
- [`.github/workflows/dependencies.bump.yaml`](.github/workflows/dependencies.bump.yaml), [`.github/workflows/pull-requests.auto-merge.yaml`](.github/workflows/pull-requests.auto-merge.yaml), and [`.github/workflows/pull-requests.auto-update.yaml`](.github/workflows/pull-requests.auto-update.yaml) are also reusable workflows used by other personal repositories through `workflow_call`.
- Before modifying reusable workflows, check this repository's behavior and known callers. Do not infer caller secrets, permissions, or trigger conditions before reading the caller workflow configurations.

## Verification

Run checks relevant to the change scope:

```bash
pnpm run lint:md
pnpm run lint:format
pnpm run lint:spell
pnpm run lint:text
pnpm run test
```

`pnpm run lint` includes `lint:js`. `lint:js` is not part of the current default validation for legacy snippets; the long-term target is to fix those snippets or migrate them to TypeScript so they meet the JavaScript linting standard.

If check results can be fixed automatically, prefer the smallest relevant `fix` command instead of running a full-repository fix indiscriminately.

Use smaller checks by file type when possible:

```bash
pnpm run lint:md
pnpm run lint:js
pnpm run lint:types
pnpm run lint:css
pnpm run lint:html
pnpm run lint:format
pnpm run lint:spell
pnpm run lint:text
pnpm run lint:package-json
```

Matching `fix` commands include:

- `pnpm run lint:md:fix`
- `pnpm run lint:js:fix`
- `pnpm run lint:css:fix`
- `pnpm run lint:format:fix`
- `pnpm run lint:text:fix`
- `pnpm run lint:package-json:fix`

CI currently runs only `lint:package-json`, `lint:format`, `lint:css`, `lint:html`, `lint:md`, `lint:text`, and `lint:spell`. `lint:types`, `lint:js`, `pnpm run test`, and local maintenance scripts are not covered by the current CI; validate related changes locally.
