#!/usr/bin/env bash

set -x

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%dT%H:%M:%S%z'

original_dir=$(pwd)

cd "$HOME" || exit

npm list --global

npm outdated --global

npm update --global

cd "$original_dir" || exit
