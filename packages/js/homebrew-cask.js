import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'brew cask install',
  uninstallCommand: 'brew cask install',
  installList: [{ name: 'smartsvn' }, { name: 'sourcetree' }],
};

init(config);
