#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm uninstall --global \
  @google/gemini-cli \
  corepack \
  tsx

# npm uninstall --global npm

cd "$original_dir" || exit
