#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}] '

basePath=$(
  cd "$(dirname "$0")" || exit
  pwd
)

source "${basePath}"/brew.upgrade.sh

source "${basePath}"/mas.upgrade.sh

source "${basePath}"/npm.global.update.sh

source "${basePath}"/github.repos.update.sh
