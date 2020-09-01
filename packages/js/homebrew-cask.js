// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'brew cask install',
  uninstallCommand: 'brew cask install',
  installList: [
    {
      name: 'clash-for-windows',
    },
    {
      name: 'fork',
    },
    {
      name: 'notion',
    },
    {
      name: 'smartsvn',
    },
    {
      name: 'thunder',
    },
    {
      name: 'webstorm',
    },
  ],
};

init(config);
