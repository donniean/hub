#!/usr/bin/env bash

basePath=$(
  cd "$(dirname "$0")" || exit
  pwd
)

source "${basePath}"/brew.upgrade.sh

source "${basePath}"/oh-my-zsh.plugins.update.sh

source "${basePath}"/npm.global.update.sh

source "${basePath}"/github.update.sh
