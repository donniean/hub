# Configs

## [AutoCorrect](https://github.com/huacnlee/autocorrect)

Install

```shell
npm install --save-dev autocorrect-node

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

## ESLint

References

- <https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/.eslintrc.cjs>
- <https://biomejs.dev/linter/rules-sources/>
- <https://github.com/antfu/eslint-config>
- <https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js>
- <https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/index.js>
