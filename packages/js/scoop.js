const config = {
  elementId: 'wrapper',
  installCommand: 'scoop install',
  uninstallCommand: 'scoop uninstall',
  installList: [
    { name: 'git' },
    { name: 'git-lfs' },
    { name: 'nginx' },
    { name: 'openssh' },
    { name: 'yarn' }
  ],
  uninstallList: []
};

init(config);
