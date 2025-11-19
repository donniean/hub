#!/usr/bin/env bash

dir_path=$(dirname "$0")

root_path=$(cd "${dir_path}" && cd ../.. && pwd)

export root_path
