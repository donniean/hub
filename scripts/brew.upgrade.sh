#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

brew update

brew outdated --formula
brew outdated --cask --greedy

brew upgrade --display-times --greedy --dry-run
brew upgrade --display-times --greedy

brew cleanup
