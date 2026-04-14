#!/usr/bin/env bash

echo "Time: $(date '+%Y-%m-%d %H:%M:%S %z')"
echo "Model: $(sysctl -n hw.model)"
echo "Kernel: $(uname -sr)"
echo "Arch: $(uname -m)"
echo "======"
sw_vers
echo "======"
xcode-select --print-path
xcodebuild -version
pkgutil --pkg-info=com.apple.pkg.CLTools_Executables
echo "======"
npx --yes envinfo
echo "======"
brew config
echo "======"
brew doctor

echo "======"
brew list --versions
echo "======"
brew list --pinned
echo "======"
brew list --formula --installed-on-request
echo "======"
brew list --formula --installed-as-dependency
echo "======"
brew leaves
echo "======"
brew leaves --installed-on-request
echo "======"
brew leaves --installed-as-dependency
echo "======"
brew list --cask --versions

bat --paging=never --style=full \
  ~/.zshrc \
  ~/.zprofile
