#!/usr/bin/env bash

set -e

PREFIX="[nvm-install]"

echo "$PREFIX Fetching the latest nvm version..."

# https://github.com/nvm-sh/nvm

TAG=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest |
  grep -o '"tag_name": "[^"]*' | cut -d'"' -f4)

echo "$PREFIX Latest nvm version: $TAG"

echo "$PREFIX Downloading and running the official install script..."

# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/"$TAG"/install.sh |
  bash

echo "$PREFIX nvm installation or update complete."

echo "$PREFIX All done."
