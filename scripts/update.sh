#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

script_dir=$(
  cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P
)

bash "${script_dir}/brew.upgrade.sh"
bash "${script_dir}/mas.update.sh"
bash "${script_dir}/npm.global.update.sh"
bash "${script_dir}/repos.update.sh"
