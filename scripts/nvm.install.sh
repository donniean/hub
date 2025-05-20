#!/usr/bin/env bash

set -e

PREFIX="[nvm-install]"

echo "$PREFIX Fetching the latest nvm version..."

# https://github.com/nvm-sh/nvm

TAG=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest |
  grep -o '"tag_name": "[^"]*' | cut -d'"' -f4)

echo "$PREFIX Latest nvm version: $TAG"

# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

INSTALL_CMD="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/$TAG/install.sh | bash"

echo "$PREFIX Running install command"
echo

echo "$INSTALL_CMD"
echo

eval "$INSTALL_CMD"

echo
echo "$PREFIX nvm installation or update complete."
