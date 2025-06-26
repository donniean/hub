#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm install --global \
  @google/gemini-cli \
  tsx

cd "$original_dir" || exit
