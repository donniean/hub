#!/usr/bin/env bash

basePath=$(
  cd "$(dirname "$0")" || exit
  pwd
)

source "${basePath}"/brew.upgrade.sh

# source "${basePath}"/mas.upgrade.sh

source "${basePath}"/nvm.install.sh

source "${basePath}"/npm.global.update.sh

source "${basePath}"/github.repos.update.sh
