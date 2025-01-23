#!/usr/bin/env bash

original_dir=$(pwd)

func() {
  cd "$HOME"/repos/"$1" || exit
  gh pr list --web
}

names=(
  collections
  configs
  react-app
)

for name in "${names[@]}"; do
  func "$name" &
done

wait

cd "$original_dir" || exit
