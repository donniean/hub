#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%d %H:%M:%S %z'

command -V ast-grep
ast-grep --version

command -V bash
bash --version

command -V curl
curl --version

command -V fd
fd --version

command -V gh
gh --version
gh auth status

command -V git
git --version

command -V jq
jq --version

command -V rg
rg --version

command -V uv
uv --version

command -V yq
yq --version

command -V zsh
zsh --version

npx --yes --package=@playwright/cli playwright-cli --version
