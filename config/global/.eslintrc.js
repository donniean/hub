const config = {
  env: {
    browser: true
    /* node: true,
    commonjs: true,
    es6: true,
    amd: true,
    jquery: true,
    'react-native/react-native': true */
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:react/recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    parser: 'babel-eslint'
  },
  // parser: 'babel-eslint',
  globals: {
    appcan: false
  },
  plugins: [
    'html',
    'jquery',
    'node',
    'react',
    'react-hooks',
    'react-native',
    'vue'
  ],
  rules: {
    'no-compare-neg-zero': 'warn',
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    complexity: 'warn',
    curly: 'warn',
    'default-case': 'error',
    'no-empty-function': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-useless-call': 'warn',
    'init-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    // 'no-undef': 'off',
    // 'no-unused-vars': 'off',
    // 'no-use-before-define': 'off',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: 'error',
    'node/no-unsupported-features/es-builtins': [
      'error',
      {
        version: '>=10.0.0',
        ignores: []
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=10.0.0',
        ignores: ['modules']
      }
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=10.0.0',
        ignores: []
      }
    ],
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error'
  },
  overrides: [
    {
      files: ['webpack.*.js'],
      rules: {
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};

module.exports = config;
