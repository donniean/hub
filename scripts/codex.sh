#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

bat --paging=never --style=full \
  ~/.codex/config.toml \
  ~/.codex/AGENTS.md

npx --yes skills list --global
