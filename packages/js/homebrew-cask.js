// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'brew cask install',
  uninstallCommand: 'brew cask uninstall',
  installList: [
    { name: 'cheatsheet' },
    { name: 'fork' },
    { name: 'thunder' },
    { name: 'webstorm' },
  ],
};

init(config);
