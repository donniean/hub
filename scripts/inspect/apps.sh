#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

brew tap-info
brew tap

brew list --formula --versions
brew list --formula --installed-on-request
brew list --formula --no-installed-on-request
brew list --pinned
brew leaves

brew list --cask --versions

mas list

eza --long --group-directories-first /Applications/

if [[ -d "$HOME/Applications" ]]; then
  eza --long --group-directories-first "$HOME/Applications/"
fi
