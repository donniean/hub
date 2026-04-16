#!/usr/bin/env bash

set -x

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%dT%H:%M:%S%z'

mas outdated

mas upgrade
