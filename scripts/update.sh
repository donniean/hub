#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

base_path=$(
  cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
  pwd -P
)

bash "${base_path}/brew.upgrade.sh"
bash "${base_path}/mas.update.sh"
bash "${base_path}/npm.global.update.sh"
bash "${base_path}/repos.update.sh"
