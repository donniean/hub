#!/usr/bin/env bash

set -uo pipefail

export PS4='+CMD [${BASH_SOURCE##*/}:${LINENO}] '

set -x

date '+%Y-%m-%dT%H:%M:%S%z'

type -a ast-grep
ast-grep --version

type -a bash
bash --version

type -a curl
curl --version

type -a fd
fd --version

type -a gh
gh --version
gh auth status

type -a git
git --version

type -a jq
jq --version

type -a rg
rg --version

type -a uv
uv --version

type -a yq
yq --version

type -a zsh
zsh --version

npx --yes --package=@playwright/cli@latest playwright-cli --version
