#!/usr/bin/env bash

echo "Time: $(date '+%Y-%m-%d %H:%M:%S %z')"

npx --yes envinfo

echo "Git remote"
git remote --verbose
echo "Current Git Branch"
git branch --show-current
echo

echo "Project Structure"
eza --tree --all --group-directories-first --git-ignore
echo

bat --paging=never --style=full \
  .vscode/settings.json \
  .nvmrc \
  package.json \
  tsconfig.base.json \
  tsconfig.app.json \
  tsconfig.node.json \
  tsconfig.json \
  eslint.config.mjs
