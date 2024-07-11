#!/usr/bin/env bash

original_dir=$(pwd)

pr() {
  cd "$HOME"/repos/"$1" || exit
  git checkout -b chore
  ncu --upgrade
  rm -rf node_modules
  rm package-lock.json
  npm install
  git commit --all --signoff --gpg-sign --message 'chore: bump dependencies'
  git push --set-upstream origin chore
  open "https://github.com/donniean/$1/compare/main...chore"
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
