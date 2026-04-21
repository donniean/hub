#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

target_dir="${HOME}/.codex/archived_sessions"

if [[ ! -d "${target_dir}" ]]; then
  echo "Directory does not exist: ${target_dir}"
  exit 0
fi

eza --tree --all --group-directories-first "${target_dir}"

rm -rf "${target_dir}"
