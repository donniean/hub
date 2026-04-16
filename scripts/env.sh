#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

command -V ast-grep
type -a ast-grep
ast-grep --version

command -V bash
type -a bash
bash --version

command -V curl
type -a curl
curl --version

command -V fd
type -a fd
fd --version

command -V gh
type -a gh
gh --version
gh auth status

command -V git
type -a git
git --version

command -V jq
type -a jq
jq --version

command -V rg
type -a rg
rg --version

command -V uv
type -a uv
uv --version

command -V yq
type -a yq
yq --version

command -V zsh
type -a zsh
zsh --version

npx --yes --package=@playwright/cli@latest playwright-cli --version
