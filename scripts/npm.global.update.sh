#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

(
  cd "$HOME"

  fnm use default
  node --version

  npm list --global

  npm outdated --global

  npm update --global --dry-run
  npm update --global
)
