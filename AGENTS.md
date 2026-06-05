# AGENTS.md

## `scripts`

未经用户明确确认，不要运行以下脚本或等价命令：

- `scripts/update/all.sh`
- `scripts/update/brew.sh`
- `scripts/update/mas.sh`
- `scripts/update/npm-global.sh`
- `scripts/update/repos.sh`
- `scripts/update/skills.sh`
- `scripts/cleanup/codex.sh`

这些脚本可能修改本机软件、global packages、global skills、`~/repos` 下的其他仓库，或本机 Codex 目录。

读取这些脚本可以直接进行；执行前必须先说明预计影响。

## 验证

根据改动文件运行相关检查。常用命令：

```bash
pnpm run lint
pnpm run test
```

CI 当前只运行部分 lint step；如果改动涉及未被 CI 覆盖的脚本、TypeScript 或 JavaScript，应在本地补充相关验证。

## License

[MIT](./LICENSE)
