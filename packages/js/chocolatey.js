const config = {
  elementId: 'wrapper',
  installCommand: 'choco install -y',
  uninstallCommand: 'choco uninstall',
  installList: [{ name: 'chocolateygui' }],
  uninstallList: []
};

init(config);
