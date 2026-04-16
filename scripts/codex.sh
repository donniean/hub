#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%d %H:%M:%S %z'

bat --paging=never --style=full \
  ~/.codex/config.toml \
  ~/.codex/AGENTS.md

npx --yes skills list --global
