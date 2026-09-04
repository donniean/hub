#!/usr/bin/env bash

set -uo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

sysctl \
  hw.model \
  machdep.cpu.brand_string \
  hw.physicalcpu \
  hw.logicalcpu \
  hw.memsize

uname -sr
uname -m

sw_vers
