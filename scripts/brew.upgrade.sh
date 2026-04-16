#!/usr/bin/env bash

set -euo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

brew update

brew outdated
brew outdated --cask --greedy

brew upgrade --display-times --dry-run
brew upgrade --display-times --cask --greedy --dry-run

brew upgrade --display-times
brew upgrade --display-times --cask --greedy

brew autoremove
brew cleanup
