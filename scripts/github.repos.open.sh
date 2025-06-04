#!/usr/bin/env bash

set -e

original_dir=$(pwd)

func() {
  cd "$HOME"/repos/"$1" || exit
  gh pr list --web
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
