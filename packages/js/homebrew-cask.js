// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'brew cask install',
  uninstallCommand: 'brew cask install',
  installList: [
    { name: 'cheatsheet' },
    { name: 'fork' },
    { name: 'thunder' },
    { name: 'webstorm' },
  ],
};

init(config);
