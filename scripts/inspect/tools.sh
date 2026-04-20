#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

brew config
brew doctor

brew tap-info
brew tap

brew list --formula --versions
brew list --formula --installed-on-request
brew list --formula --installed-as-dependency
brew list --pinned
brew leaves
brew leaves --installed-on-request
brew list --cask --versions

items=(
  ast-grep
  bash
  bat
  codex
  curl
  eza
  fd
  fnm
  gh
  git
  jq
  mas
  node
  npm
  npx
  pnpm
  rg
  uv
  yarn
  yq
  zoxide
  zsh
)

for item in "${items[@]}"; do
  (
    type -a "$item"
    "$item" --version
  )
done

bat --paging=never --style=full \
  "$HOME/.zprofile" \
  "$HOME/.zshrc"

fnm list
npm ls --global --depth=0

gh auth status

npx --yes --package=@playwright/cli@latest playwright-cli --version
