#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

xcode-select --print-path
xcodebuild -version
pkgutil --pkg-info=com.apple.pkg.CLTools_Executables

xcrun --sdk macosx --show-sdk-path
xcrun --sdk macosx --show-sdk-version
xcrun --find clang
xcrun clang --version

npx --yes envinfo@latest

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

brew config
brew doctor

items=(
  ast-grep
  bash
  bat
  brew
  chezmoi
  clang
  curl
  docker
  eza
  fd
  fnm
  gh
  git
  gpg
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
  tesseract
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

docker compose version

fnm list
npm ls --global --depth=0

gh auth status
