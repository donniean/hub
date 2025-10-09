#!/usr/bin/env bash

brew update

brew outdated
brew outdated --cask --greedy

brew upgrade --dry-run
brew upgrade --cask --greedy --dry-run

brew upgrade
brew upgrade --cask --greedy

brew autoremove
brew cleanup
