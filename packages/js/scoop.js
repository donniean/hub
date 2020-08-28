// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'scoop install',
  uninstallCommand: 'scoop uninstall',
  installList: [
    { name: '7zip' },
    { name: 'fork' },
    { name: 'geekuninstaller' },
    { name: 'git' },
    { name: 'git-lfs' },
    { name: 'nginx' },
    { name: 'nodejs' },
    { name: 'notion' },
    { name: 'openssh' },
    { name: 'smartsvn' },
    { name: 'trafficmonitor' },
    { name: 'yarn' },
  ],
};

init(config);
