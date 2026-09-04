#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

xcode-select --print-path
xcodebuild -version
pkgutil --pkg-info=com.apple.pkg.CLTools_Executables
xcrun --sdk macosx --show-sdk-path
xcrun --sdk macosx --show-sdk-version

npx --yes envinfo@latest

printf 'SHELL=%s\n' "${SHELL-}"
printf 'PATH=%s\n' "${PATH-}"
printf 'LANG=%s\n' "${LANG-}"
printf 'LC_ALL=%s\n' "${LC_ALL-}"
printf 'TERM=%s\n' "${TERM-}"

items=(
  ast-grep
  bash
  bat
  clang
  curl
  docker
  docker-compose
  eza
  fd
  fnm
  gh
  git
  jq
  make
  mas
  node
  npm
  npx
  pnpm
  python3
  rg
  ruby
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

printenv | LC_ALL=C sort | awk -F= '
BEGIN { IGNORECASE=1 }
$1 ~ /(TOKEN|SECRET|PASS(WOR)?D|API[_-]?KEY|PRIVATE[_-]?KEY|ACCESS[_-]?KEY|SESSION|COOKIE|AUTH|BEARER|CREDENTIAL|AWS_|GCP_|AZURE_|SSH_|GITHUB_|OPENAI_|ANTHROPIC_|GOOGLE_)/ {
  print $1 "=<redacted>"
  next
}
{ print }
'

bat --paging=never --style=full \
  "$HOME/.zprofile" \
  "$HOME/.zshenv" \
  "$HOME/.zshrc"

fnm list
npm ls --global --depth=0

gh auth status
