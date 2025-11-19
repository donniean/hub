#!/usr/bin/env bash

dir_path=$(dirname "$0")

source "${dir_path}"/paths.sh

cp "$dest_path" "$src_path"
