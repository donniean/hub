const config = {
  elementId: 'wrapper',
  installCommand: 'scoop install',
  uninstallCommand: 'scoop uninstall',
  installList: [
    { name: 'geekuninstaller' },
    { name: 'git' },
    { name: 'git-lfs' },
    { name: 'nginx' },
    { name: 'nodejs' },
    { name: 'openssh' },
    { name: 'yarn' }
  ],
  uninstallList: []
};

init(config);
