#!/usr/bin/env bash

set -euo pipefail

export PS4='+ [${BASH_SOURCE##*/}:${LINENO}] '

date '+%Y-%m-%d %H:%M:%S %z'

command -V ast-grep
where ast-grep
ast-grep --version

command -V bash
where bash
bash --version

command -V curl
where curl
curl --version

command -V fd
where fd
fd --version

command -V gh
where gh
gh --version
gh auth status

command -V git
where git
git --version

command -V jq
where jq
jq --version

command -V rg
where rg
rg --version

command -V uv
where uv
uv --version

command -V yq
where yq
yq --version

command -V zsh
where zsh
zsh --version

npx --yes --package=@playwright/cli playwright-cli --version
