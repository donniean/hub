# Configs

## [AutoCorrect](https://github.com/huacnlee/autocorrect)

Install

```shell
npm install --save-dev \
  autocorrect-node

npm pkg set \
  scripts.lint:text='autocorrect --lint' \
  scripts.lint:text:fix='autocorrect --fix'

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectrc \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.autocorrectignore
```

Uninstall

```shell
npm pkg delete \
  devDependencies.autocorrect-node \
  scripts.lint:text \
  scripts.lint:text:fix \

rm \
  .autocorrectrc \
  .autocorrectignore
```

## [Commitizen](https://github.com/commitizen-tools/commitizen)

Install

```shell
npm install --save-dev \
  commitizen \
  cz-conventional-changelog

npm pkg set \
  scripts.commit='cz'

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/.cz.json
```

Uninstall

```shell
npm pkg delete \
  devDependencies.commitizen \
  devDependencies.cz-conventional-changelog \
  scripts.commit

rm \
  .cz.json
```

## [commitlint](https://github.com/conventional-changelog/commitlint)

Install

```shell
npm install --save-dev \
  @commitlint/cli \
  @commitlint/config-conventional

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/commitlint.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.@commitlint/cli \
  devDependencies.@commitlint/config-conventional

rm \
  commitlint.config.mjs
```

TODOs

- [ ] <https://commitlint.js.org/guides/local-setup.html>
- [ ] <https://commitlint.js.org/guides/ci-setup.html>

## [CSpell](https://github.com/streetsidesoftware/cspell)

Install

```shell
npm install --save-dev \
  cspell

npm pkg set \
  scripts.lint:spell='cspell lint --no-progress --no-must-find-files --gitignore .'

curl \
  -O https://raw.githubusercontent.com/donniean/react-app/main/cspell.config.mjs
```

Uninstall

```shell
npm pkg delete \
  devDependencies.cspell \
  scripts.lint:spell

rm \
  cspell.config.mjs
```

## [editorconfig](https://editorconfig.org/)

---

## ESLint

References

- <https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/.eslintrc.cjs>
- <https://biomejs.dev/linter/rules-sources/>
- <https://github.com/antfu/eslint-config>
- <https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js>
- <https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js>
