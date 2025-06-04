#!/usr/bin/env bash

set -e

original_dir=$(pwd)

func() {
  cd "$HOME"/repos/"$1" || exit

  # update main branch
  git checkout main
  git pull --all --prune

  # bump dependencies
  git checkout -b chore
  npm run ncu:upgrade
  rm -rf node_modules/
  rm package-lock.json
  npm install

  # commit and push
  git commit --all --signoff --gpg-sign --message 'chore: bump dependencies'
  git push --set-upstream origin chore

  # create and merge Pull Request
  gh pr create --fill
  gh pr merge --auto --squash
  # gh pr view --web
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
