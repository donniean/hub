const config = {
  elementId: 'wrapper',
  installCommand: 'choco install',
  uninstallCommand: 'choco uninstall',
  installList: [{ name: 'chocolateygui' }],
  uninstallList: []
};

init(config);
