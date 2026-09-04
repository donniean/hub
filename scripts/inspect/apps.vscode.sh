#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

brew info --cask visual-studio-code

type -a code

code --status
code --version

code --list-extensions --show-versions | LC_ALL=C sort

bat --paging=never --style=full \
  "$HOME/Library/Application Support/Code/User/settings.json"
