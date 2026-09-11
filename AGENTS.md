# AGENTS.md

## Scope

- Repository purpose, current directories, and common commands are documented in [README.md](README.md) as the single source of truth; this file contains only repository constraints for coding agents.
- Do not commit or disclose private configuration, account information, tokens, logs, local paths, or script output that has not been reviewed.

## Conventions

- Before changing TypeScript or JavaScript imports, identify the relevant `tsconfig.json` / `jsconfig.json` for the edited file and resolve its effective `compilerOptions`, including any configured `paths`, by following the `extends` chain when present; in solution-style TypeScript setups, use `references` only to find the leaf project config. Use relative imports within the same feature/module/package, and prefer existing configured path aliases for established cross-boundary imports, but only when all relevant tooling for that code path supports the same alias resolution.

## Scripts

Reading scripts is allowed. Running the following update scripts or equivalent maintenance commands requires explicit user authorization covering their effects. Reuse authorization already given for the operation; inspection and source edits can proceed independently.

- [`scripts/update/all.sh`](scripts/update/all.sh) runs the Homebrew, Mac App Store, global npm package, global skill, and local repository update scripts in sequence.
- [`scripts/update/brew.sh`](scripts/update/brew.sh) runs Homebrew update, upgrade, and cleanup tasks, and removes dependencies that are no longer needed.
- [`scripts/update/mas.sh`](scripts/update/mas.sh) upgrades Mac App Store apps.
- [`scripts/update/npm-global.sh`](scripts/update/npm-global.sh) updates global npm packages.
- [`scripts/update/pnpm-refresh.sh`](scripts/update/pnpm-refresh.sh) removes the repository-root `node_modules` directory, regenerates `pnpm-lock.yaml`, resets pnpm build approvals in the configured local repositories, reinstalls dependencies without a frozen lockfile, approves all discovered builds, commits and pushes all resulting changes, creates pull requests and opens their pages in the browser, and force-deletes the local update branches.
- [`scripts/update/skills.sh`](scripts/update/skills.sh) updates global skills.
- [`scripts/update/repos.sh`](scripts/update/repos.sh) switches the local repositories listed in the script to `main`, pulls changes, and installs dependencies.

Scripts under [`scripts/inspect/`](scripts/inspect/) are intended for read-only diagnostics, but their output may include local environment details, shell configuration, Homebrew information, global npm packages, GitHub authentication state, Codex configuration, or repository status. Do not publish, forward, or write that output into a public issue or pull request without review and redaction.

## GitHub Workflows

- [`.github/workflows/ci.yaml`](.github/workflows/ci.yaml) is the CI workflow for this repository.
- [`.github/workflows/dependencies.bump.yaml`](.github/workflows/dependencies.bump.yaml), [`.github/workflows/pull-requests.auto-merge.yaml`](.github/workflows/pull-requests.auto-merge.yaml), and [`.github/workflows/pull-requests.auto-update.yaml`](.github/workflows/pull-requests.auto-update.yaml) are also reusable workflows used by other personal repositories through `workflow_call`.
- Before modifying reusable workflows, check this repository's behavior and known callers. Do not infer caller secrets, permissions, or trigger conditions before reading the caller workflow configurations.

## Verification

- For Markdown-only edits, run Oxfmt, Markdownlint, AutoCorrect, and CSpell on changed files. Use `pnpm exec` with file paths when scripts hardcode the repository scope; retain tool configuration and scope fixes likewise.
- For behavior changes, choose relevant lint, type checks, and tests from [`package.json`](package.json). `test` aliases `test:unit`; run one. Expand for cross-cutting changes; repeat passing checks only for relevant edits, failures, or unresolved concerns.
- CI covers Oxfmt, Stylelint, HTML Validate, Markdownlint, AutoCorrect, and CSpell. Validate affected types, JavaScript, tests, and scripts locally, within the script authorization boundary above.
- Full `lint` also runs Knip, Oxlint, and type checking. Legacy snippets currently omit Oxlint from default validation; the target remains fixing or migrating them to meet that standard.
