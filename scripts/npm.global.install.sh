#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm install --global tsx

# @donniean/configs
# concurrently
# npm-check-updates
# serve
# sort-package-json

cd "$original_dir" || exit
