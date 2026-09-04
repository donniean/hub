#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

/Applications/Surge.app/Contents/Applications/surge-cli status

/Applications/Surge.app/Contents/Applications/surge-cli version

/Applications/Surge.app/Contents/Applications/surge-cli summary
