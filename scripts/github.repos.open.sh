#!/usr/bin/env bash

original_dir=$(pwd)

pr() {
  cd "$HOME"/repos/"$1" || exit
  gh pr list --web
}

names=(
  collections
  configs
  next-app
  react-app
  styles
)

for name in "${names[@]}"; do
  pr "$name" &
done

wait

cd "$original_dir" || exit
