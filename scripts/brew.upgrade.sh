#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

brew update

brew outdated --formula --verbose
brew outdated --cask --greedy --verbose

brew upgrade --display-times --greedy --dry-run
brew upgrade --display-times --greedy

brew autoremove
brew cleanup
