#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

(
  cd "$HOME/repos" || exit

  fnm use default

  node --version
  npm --version

  npm ls --global --depth=0
  npm outdated --global

  npm update --global --dry-run
  npm update --global
)
