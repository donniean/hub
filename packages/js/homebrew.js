// eslint-disable-next-line import/extensions
import init from './app.js';

const config = {
  elementId: 'wrapper',
  installCommand: 'brew install',
  uninstallCommand: 'brew uninstall',
  installList: [
    { name: 'git' },
    { name: 'git-lfs' },
    { name: 'memcached' },
    { name: 'nginx' },
    { name: 'node' },
    { name: 'sshpass' },
    { name: 'tree' },
    { name: 'yarn' },
    { name: 'zsh' },
    { name: 'zsh-completions' },
  ],
};

init(config);
