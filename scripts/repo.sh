#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%dT%H:%M:%S%z'

npx --yes envinfo

git remote --verbose
git branch --show-current

eza --tree --all --group-directories-first --git-ignore

bat --paging=never --style=full \
  .vscode/settings.json \
  .nvmrc \
  package.json \
  tsconfig.base.json \
  tsconfig.app.json \
  tsconfig.node.json \
  tsconfig.json \
  eslint.config.mjs
