#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

sysctl -n hw.model
sysctl -n machdep.cpu.brand_string
sysctl -n hw.physicalcpu
sysctl -n hw.logicalcpu
sysctl -n hw.memsize

uname -sr
uname -m

sw_vers
