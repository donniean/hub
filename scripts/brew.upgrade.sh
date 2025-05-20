#!/usr/bin/env bash

set -e

brew update

brew outdated

brew upgrade

brew upgrade --cask --greedy

brew autoremove

brew cleanup
