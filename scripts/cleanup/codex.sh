#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

target_dirs=(
  "${HOME}/.codex/archived_sessions"
  "${HOME}/Documents/Codex"
)

for target_dir in "${target_dirs[@]}"; do
  if [[ ! -d "${target_dir}" ]]; then
    echo "Directory does not exist: ${target_dir}"
    continue
  fi

  eza --tree --all --group-directories-first "${target_dir}"

  rm -rf "${target_dir}"
done
