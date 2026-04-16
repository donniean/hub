#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%d %H:%M:%S %z'

basePath=$(
  cd "$(dirname "$0")" || exit
  pwd
)

source "${basePath}"/brew.upgrade.sh

source "${basePath}"/mas.upgrade.sh

source "${basePath}"/npm.global.update.sh

source "${basePath}"/github.repos.update.sh
