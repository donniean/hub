# AGENTS.md

## 仓库边界

- 以 [README.md](README.md) 作为仓库用途、目录范围和常用命令的 single source of truth；更细的执行约束以本文件和相关源码为准。
- 本仓库是 public GitHub repository；不要提交或公开私有配置、账号信息、令牌、日志、本机路径输出或未经审查的脚本输出。

## 实现约定

- 修改 TypeScript / JavaScript imports 前，先读取 `tsconfig.json` / `jsconfig.json` 中的 `compilerOptions.paths`。优先使用已配置的 paths alias，避免使用深层相对路径。

## 脚本安全

可以直接读取脚本内容。未经用户明确确认，不要运行以下脚本或等价命令，因为它们会更新本机工具链、切换仓库分支、安装依赖或删除本机数据：

```bash
scripts/update/all.sh
scripts/update/brew.sh
scripts/update/mas.sh
scripts/update/npm-global.sh
scripts/update/repos.sh
scripts/update/skills.sh
scripts/cleanup/codex.sh
```

影响范围：

- [`scripts/update/all.sh`](scripts/update/all.sh) 会串行运行 `brew`、`mas`、global npm packages、global skills 和多个本地 repositories 的更新脚本。
- [`scripts/update/brew.sh`](scripts/update/brew.sh) 会执行 Homebrew update / upgrade / cleanup，并移除不再需要的依赖。
- [`scripts/update/mas.sh`](scripts/update/mas.sh) 会执行 Mac App Store app upgrade。
- [`scripts/update/npm-global.sh`](scripts/update/npm-global.sh) 会更新 global npm packages。
- [`scripts/update/skills.sh`](scripts/update/skills.sh) 会更新 global skills。
- [`scripts/update/repos.sh`](scripts/update/repos.sh) 会切换到 `main`、拉取并安装 `~/repos/hub`、`~/repos/node-app`、`~/repos/react-app`、`~/repos/vault`。
- [`scripts/cleanup/codex.sh`](scripts/cleanup/codex.sh) 会删除本机 Codex archived sessions 和 `~/Documents/Codex`。

[`scripts/inspect/`](scripts/inspect/) 下的脚本主要用于只读排查，但输出可能包含本机环境、shell 配置、Homebrew 信息、global npm packages、GitHub auth 状态、Codex 配置或仓库状态。不要在未审查和脱敏的情况下发布、转发或写入公开 issue / pull request。

## 验证

根据改动范围运行相关检查：

```bash
pnpm run lint
pnpm run test
```

如果检查结果可自动修复，优先运行影响范围最小的 `fix` 命令，而不是无差别运行全仓库修复。

更小范围的检查可按文件类型选择：

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

对应的 `fix` 命令包括：

- `pnpm run lint:md:fix`
- `pnpm run lint:js:fix`
- `pnpm run lint:css:fix`
- `pnpm run lint:format:fix`
- `pnpm run lint:text:fix`
- `pnpm run lint:package-json:fix`

CI 当前只运行 `lint:package-json`、`lint:format`、`lint:css`、`lint:html`、`lint:md`、`lint:text` 和 `lint:spell`。`lint:types`、`lint:js`、`pnpm run test` 和本机维护脚本不在当前 CI 覆盖范围内；相关改动应在本地补充验证。
