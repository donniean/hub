#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%dT%H:%M:%S%z'

base_path=$(
  cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
  pwd -P
)

"${base_path}/brew.upgrade.sh"
"${base_path}/mas.upgrade.sh"
"${base_path}/npm.global.update.sh"
"${base_path}/github.repos.update.sh"
