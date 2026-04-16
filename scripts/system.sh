#!/usr/bin/env bash

set -x

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%dT%H:%M:%S%z'

sysctl -n hw.model
uname -sr
uname -m
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
