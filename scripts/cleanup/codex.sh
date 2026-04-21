#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

TARGET_DIR="${HOME}/.codex/archived_sessions/"

eza --tree --all --group-directories-first "${TARGET_DIR}"
rm -rf "${TARGET_DIR}"
