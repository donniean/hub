import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'scoop install',
  uninstallCommand: 'scoop uninstall',
  installList: [
    { name: '7zip' },
    { name: 'geekuninstaller' },
    { name: 'git' },
    { name: 'git-lfs' },
    { name: 'nginx' },
    { name: 'nodejs' },
    { name: 'openssh' },
    { name: 'smartgit' },
    { name: 'smartsvn' },
    { name: 'trafficmonitor' },
    { name: 'yarn' },
  ],
};

init(config);
