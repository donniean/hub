const config = {
  elementId: 'wrapper',
  installCommand: 'choco install -y',
  uninstallCommand: 'choco uninstall',
  installList: [{ name: 'chocolateygui' }, { name: 'nodejs.install' }],
  uninstallList: []
};

init(config);
