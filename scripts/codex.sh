#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}:${FUNCNAME[0]:-main}] '

bat --paging=never --style=full \
  ~/.codex/config.toml \
  ~/.codex/AGENTS.md

npx --yes skills list --global
