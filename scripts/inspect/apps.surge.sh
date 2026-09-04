#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

/Applications/Surge.app/Contents/Applications/surge-cli status
/Applications/Surge.app/Contents/Applications/surge-cli summary
/Applications/Surge.app/Contents/Applications/surge-cli version

/Applications/Surge.app/Contents/Applications/surge-cli module list
/Applications/Surge.app/Contents/Applications/surge-cli feature list
/Applications/Surge.app/Contents/Applications/surge-cli external-resource list

/Applications/Surge.app/Contents/Applications/surge-cli plugin list

/Applications/Surge.app/Contents/Applications/surge-cli dump profile original
/Applications/Surge.app/Contents/Applications/surge-cli dump profile effective
/Applications/Surge.app/Contents/Applications/surge-cli profile diff
