#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

script_dir=$(
  cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P
)

bash "${script_dir}/brew.upgrade.sh"
bash "${script_dir}/mas.update.sh"
bash "${script_dir}/npm.global.update.sh"
bash "${script_dir}/repos.update.sh"
