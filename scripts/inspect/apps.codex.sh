#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

brew info codex

type -a codex

codex --version
codex doctor

codex plugin marketplace list --json
codex plugin list --json
codex mcp list --json

bat --paging=never --style=full \
  "$HOME/.codex/config.toml" \
  "$HOME/.codex/AGENTS.md"

npx --yes skills@latest list --global
eza --oneline --all --group-directories-first --git-ignore "$HOME/.agents/skills/"

npx --yes --package=@playwright/cli@latest playwright-cli --version
