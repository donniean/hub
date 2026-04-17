#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

(
  cd "$HOME/repos"

  fnm use default

  node --version
  npm --version






  npm ls --global --depth=0
  npm outdated --global

  npm update --global --dry-run
  npm update --global
)
