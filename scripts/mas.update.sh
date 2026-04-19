#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

mas list

mas outdated

# for old version
mas upgrade
# mas update
