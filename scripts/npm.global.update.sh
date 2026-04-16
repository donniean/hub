#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%d %H:%M:%S %z'

original_dir=$(pwd)

cd "$HOME" || exit

npm list --global

npm outdated --global

npm update --global

cd "$original_dir" || exit
