#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

surge_cli="/Applications/Surge.app/Contents/Applications/surge-cli"

"$surge_cli" status
"$surge_cli" version
"$surge_cli" environment
"$surge_cli" dump summary

"$surge_cli" module list
"$surge_cli" feature list
"$surge_cli" plugin list
"$surge_cli" external-resource list

"$surge_cli" dump policy

"$surge_cli" dump profile original
"$surge_cli" dump profile effective
"$surge_cli" profile diff
