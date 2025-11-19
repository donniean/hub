#!/usr/bin/env bash

dir_path=$(dirname "$0")

source "${dir_path}"/../paths.sh

export src_path="${root_path}/resources/vscode/settings.json"

export dest_path="$HOME/Library/Application Support/Code/User/settings.json"
