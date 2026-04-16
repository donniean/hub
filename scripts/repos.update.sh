#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

repo_names=(
  hub
  node-app
  react-app
  vault
)

for repo_name in "${repo_names[@]}"; do
  cd "$HOME/repos/$repo_name"

  git switch main
  git pull --all --prune
  # rm -rf node_modules/
  pnpm install
done
