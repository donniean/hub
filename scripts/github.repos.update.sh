#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}] '

original_dir=$(pwd)

func() {
  cd "$HOME"/repos/"$1" || exit
  git checkout main
  git pull --all --prune
  # rm -rf node_modules/
  pnpm install
}

names=(
  hub
  node-app
  react-app
  vault
)

for name in "${names[@]}"; do
  func "$name" &
done

wait

cd "$original_dir" || exit
