#!/usr/bin/env bash

set -e

# https://github.com/nvm-sh/nvm

TAG=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest |
  grep -o '"tag_name": "[^"]*' | cut -d'"' -f4)

# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/"$TAG"/install.sh | bash
