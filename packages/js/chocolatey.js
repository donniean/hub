const config = {
  elementId: 'wrapper',
  installCommand: 'choco install',
  uninstallCommand: 'choco uninstall',
  installList: [{ name: 'chocolateygui' }, { name: 'nodejs.install' }],
  uninstallList: []
};

init(config);
