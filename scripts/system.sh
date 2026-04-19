#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

sysctl -n hw.model
uname -sr
uname -m
sw_vers

xcode-select --print-path
xcodebuild -version
pkgutil --pkg-info=com.apple.pkg.CLTools_Executables

npx --yes envinfo@latest

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

zsh --version
bat --paging=never --style=full \
  "$HOME/.zprofile" \
  "$HOME/.zshrc"

fnm --version
fnm list
npm ls --global --depth=0
