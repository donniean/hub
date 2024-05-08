#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm install --global \
  @donniean/configs \
  concurrently \
  depcheck \
  npm-check-updates \
  serve \
  sort-package-json \
  ts-node

# http-server
# npm-check

cd "$original_dir" || exit
