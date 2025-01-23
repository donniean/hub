#!/usr/bin/env bash

names=(
  zsh-completions
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-better-npm-completion
)

for name in "${names[@]}"; do
  git -C "${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}"/plugins/"$name" pull &
done

wait
