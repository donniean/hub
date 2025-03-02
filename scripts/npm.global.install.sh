#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm install --global \
  @donniean/configs \
  concurrently \
  npm-check-updates \
  serve \
  sort-package-json \
  tsx

# http-server
# npm-check

cd "$original_dir" || exit
