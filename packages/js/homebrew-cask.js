const config = {
  elementId: 'wrapper',
  installCommand: 'brew cask install',
  uninstallCommand: 'brew cask install',
  installList: [
    { name: 'react-native-debugger' },
    { name: 'smartgit' },
    { name: 'smartsvn' }
  ],
  uninstallList: []
};

init(config);
