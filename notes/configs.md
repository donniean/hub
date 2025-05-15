# Configs

## [CSpell](https://github.com/streetsidesoftware/cspell)

Install

```shell
npm install --save-dev \
  cspell

npm pkg set \
  scripts.lint:spell="cspell lint --no-progress --no-must-find-files --gitignore ."

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.cspell

npm pkg delete \
  scripts.lint:spell

rm \
  cspell.config.mjs
```

## [editorconfig](https://editorconfig.org/)
