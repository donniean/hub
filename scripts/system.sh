#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}:${FUNCNAME[0]:-main}] '

echo "Time: $(date '+%Y-%m-%d %H:%M:%S %z')"
echo "Model: $(sysctl -n hw.model)"
echo "Kernel: $(uname -sr)"
echo "Arch: $(uname -m)"

sw_vers

xcode-select --print-path
xcodebuild -version
pkgutil --pkg-info=com.apple.pkg.CLTools_Executables

npx --yes envinfo

brew config

brew doctor

brew list --versions
brew list --pinned
brew list --formula --installed-on-request
brew list --formula --installed-as-dependency
brew leaves
brew leaves --installed-on-request
brew leaves --installed-as-dependency
brew list --cask --versions

npm list --global

bat --paging=never --style=full \
  ~/.zprofile \
  ~/.zshrc
