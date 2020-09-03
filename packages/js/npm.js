// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'npm install -g',
  uninstallCommand: 'npm uninstall -g',
  installList: [
    { name: '@donniean/generator-configs' },
    { name: 'commitizen' },
    { name: 'create-react-app' },
    { name: 'http-server' },
    { name: 'nodemon' },
    { name: 'npm' },
    { name: 'npm-check' },
    { name: 'npm-check-updates' },
    { name: 'serve' },
    { name: 'sort-package-json' },
    { name: 'yo' },
  ],
  alternativeList: [
    { name: '@react-native-community/cli' },
    { name: 'react-native-rename' },
  ],
  uninstallList: [],
  url: 'https://npms.io/search?q=',
};

init(config);
