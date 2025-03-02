#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm uninstall --global \
  @donniean/configs \
  concurrently \
  corepack \
  npm-check-updates \
  serve \
  sort-package-json \
  tsx

# npm uninstall --global npm

cd "$original_dir" || exit
