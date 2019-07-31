import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'npm install -g',
  uninstallCommand: 'npm uninstall -g',
  installList: [
    { name: '@acmilank22/configs' },
    { name: 'create-react-app' },
    { name: 'http-server' },
    { name: 'npm' },
    { name: 'npm-check' },
    { name: 'npm-check-updates' },
    { name: 'serve' },
    { name: 'yo' }
  ],
  alternativeList: [],
  uninstallList: [],
  url: 'https://npms.io/search?q='
};

init(config);
