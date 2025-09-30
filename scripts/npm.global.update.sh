#!/usr/bin/env bash

original_dir=$(pwd)

cd "$HOME" || exit

npm list --global

npm outdated --global

npm update --global

cd "$original_dir" || exit
