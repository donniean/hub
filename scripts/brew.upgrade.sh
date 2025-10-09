#!/usr/bin/env bash

brew update

brew outdated
brew outdated --cask --greedy

brew upgrade
brew upgrade --cask --greedy

brew autoremove
brew cleanup
