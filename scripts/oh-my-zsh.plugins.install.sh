#!/usr/bin/env bash

plugins_dir="${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}"/plugins

git clone \
  https://github.com/zsh-users/zsh-completions \
  "$plugins_dir"/zsh-completions
fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src

git clone \
  https://github.com/zsh-users/zsh-autosuggestions \
  "$plugins_dir"/zsh-autosuggestions

git clone \
  https://github.com/zsh-users/zsh-syntax-highlighting \
  "$plugins_dir"/zsh-syntax-highlighting

git clone \
  https://github.com/lukechilds/zsh-better-npm-completion \
  "$plugins_dir"/zsh-better-npm-completion
