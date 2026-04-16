#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

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
