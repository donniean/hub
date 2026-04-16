#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}] '

original_dir=$(pwd)

cd "$HOME" || exit

npm list --global

npm outdated --global

npm update --global

cd "$original_dir" || exit
