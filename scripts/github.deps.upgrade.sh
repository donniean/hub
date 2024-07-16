#!/usr/bin/env bash

original_dir=$(pwd)

pr() {
  cd "$HOME"/repos/"$1" || exit

  # checkout and pull
  git checkout main
  git branch -D chore
  git pull --all --prune

  # upgrade dependencies
  git checkout -b chore
  ncu --upgrade
  rm -rf node_modules
  rm package-lock.json
  npm install

  # commit and push
  git commit --all --signoff --gpg-sign --message 'chore: bump dependencies'
  git push --set-upstream origin chore

  # create and merge Pull Request
  gh pr create --fill
  # pr_output=$(gh pr create --fill)
  # pr_url=$(echo "$pr_output" | grep -o 'https://github\.com/[^ ]*')
  gh pr merge --auto --squash
  gh pr view --web
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
