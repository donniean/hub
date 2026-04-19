#!/usr/bin/env bash

set -euo pipefail

export PS4=$'\n+CMD [\D{%Y-%m-%dT%H:%M:%S%z}] [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

brew tap-info
brew tap

brew update

brew outdated --formula --verbose
brew outdated --cask --greedy --verbose

brew upgrade --formula --display-times --dry-run
brew upgrade --cask --greedy --display-times --dry-run

brew upgrade --formula --display-times
brew upgrade --cask --greedy --display-times

brew autoremove
brew cleanup
