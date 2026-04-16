#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}] '

brew update

brew outdated
brew outdated --cask --greedy

brew upgrade --dry-run
brew upgrade --cask --greedy --dry-run

brew upgrade
brew upgrade --cask --greedy

brew autoremove
brew cleanup
