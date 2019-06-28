const config = {
  elementId: 'wrapper',
  installCommand: 'npm install -g',
  uninstallCommand: 'npm uninstall -g',
  installList: [
    { name: 'babel-eslint' },
    { name: 'create-react-app' },
    { name: 'htmlhint' },
    { name: 'http-server' },
    { name: 'npm' },
    { name: 'npm-check' },
    { name: 'npm-check-updates' },
    { name: 'prettier' },
    { name: 'serve' },
    { name: 'stylelint' },
    { name: 'typescript' }
  ],
  uninstallList: [
    { name: 'react-devtools' },
    { name: 'react-native-cli' },
    { name: 'vorlon' }
  ],
  url: 'https://npms.io/search?q='
};

/* global init */
init(config);
