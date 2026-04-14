#!/usr/bin/env bash

bat --paging=never --style=full \
  ~/.codex/config.toml \
  ~/.codex/AGENTS.md

npx --yes skills list --global
