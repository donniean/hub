import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'choco install -y',
  uninstallCommand: 'choco uninstall',
  installList: [{ name: 'chocolateygui' }],
};

init(config);
