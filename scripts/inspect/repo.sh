#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

npx --yes envinfo@latest

git status
git remote --verbose
git branch --show-current

pwd

eza --tree --all --level=3 --group-directories-first --git-ignore

bat --paging=never --style=full \
  .vscode/settings.json \
  .nvmrc \
  package.json \
  pnpm-workspace.yaml \
  tsconfig.base.json \
  tsconfig.app.json \
  tsconfig.node.json \
  tsconfig.json \
  eslint.config.mjs
