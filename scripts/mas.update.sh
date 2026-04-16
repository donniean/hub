#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

mas list

mas outdated

if mas --help 2>&1 | grep -qE '^[[:space:]]+update[[:space:]]'; then
  mas update
else
  # for old version
  mas upgrade
fi
