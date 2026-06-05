# AGENTS.md

## 仓库边界

- 以 [README.md](README.md) 作为仓库用途与目录范围的 single source of truth。
- 本仓库公开，但部分脚本会读取或修改本机状态。执行前按下面的脚本安全规则处理。

## 脚本安全

可以直接读取脚本内容。未经用户明确确认，不要运行以下脚本或等价命令：

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

- `scripts/update/brew.sh` 会升级 Homebrew formulae / casks，并清理不再需要的依赖和缓存。
- `scripts/update/mas.sh` 会执行 Mac App Store app upgrade。
- `scripts/update/npm-global.sh` 会更新 global npm packages。
- `scripts/update/skills.sh` 会更新 global skills。
- `scripts/update/repos.sh` 会切换并拉取 `~/repos/hub`、`~/repos/node-app`、`~/repos/react-app`、`~/repos/vault`。
- `scripts/cleanup/codex.sh` 会删除本机 Codex archived sessions 和 `~/Documents/Codex`。

`scripts/inspect/tools.sh` 主要是只读检查，但会输出本机环境变量、shell 配置、Homebrew 信息、global npm packages 和 GitHub auth status。不要在未审查输出的情况下把结果发布或转发。

## 验证

根据改动范围运行相关检查：

```bash
pnpm run lint
pnpm run test
```

更小范围的检查可按文件类型选择：

```bash
pnpm run lint:md
pnpm run lint:js
pnpm run lint:types
pnpm run lint:css
pnpm run lint:html
```

CI 当前只运行部分 lint steps，且没有覆盖完整 `pnpm run lint`、`pnpm run test` 或所有本地脚本。涉及未被 CI 覆盖的 JavaScript、TypeScript、CSS、HTML、Markdown 或 shell script 改动时，应在本地补充验证。
