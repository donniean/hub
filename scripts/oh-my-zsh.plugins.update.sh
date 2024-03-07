#!/usr/bin/env bash

original_dir=$(pwd)

cd "${ZSH_CUSTOM:=~/.oh-my-zsh/custom}"/plugins/zsh-completions && git pull

cd "${ZSH_CUSTOM:=~/.oh-my-zsh/custom}"/plugins/zsh-autosuggestions && git pull

cd "${ZSH_CUSTOM:=~/.oh-my-zsh/custom}"/plugins/zsh-syntax-highlighting && git pull

cd "${ZSH_CUSTOM:=~/.oh-my-zsh/custom}"/plugins/zsh-better-npm-completion && git pull

cd "$original_dir" || exit
