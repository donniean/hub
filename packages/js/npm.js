const config = {
  installCommand: 'npm install -g',
  uninstallCommand: 'npm uninstall -g',
  installList: [
    { name: 'babel-eslint' },
    { name: 'create-react-app' },
    { name: 'eslint' },
    { name: 'eslint-plugin-html' },
    { name: 'eslint-plugin-jquery' },
    { name: 'eslint-plugin-node' },
    { name: 'eslint-plugin-react' },
    { name: 'eslint-plugin-react-hooks' },
    { name: 'eslint-plugin-react-native' },
    { name: 'eslint-plugin-vue' },
    { name: 'htmlhint' },
    { name: 'http-server' },
    { name: 'npm' },
    { name: 'npm-check' },
    { name: 'npm-check-updates' },
    { name: 'prettier' },
    { name: 'stylelint' },
    { name: 'typescript' },
    { name: 'vorlon' }
  ],
  uninstallList: [
    { name: 'react-devtools' },
    { name: 'react-native-cli' },
    { name: 'react-native-rename' }
  ],
  url: 'https://npms.io/search?q='
};

init(config);
