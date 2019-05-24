hljs.initHighlightingOnLoad();

function getCodeWrapper(code) {
  return `<pre><code class="shell">${code}</code></pre>`;
}

const list = [
  {
    name: 'babel-eslint',
    isInstalled: true
  },
  {
    name: 'create-react-app',
    isInstalled: true
  },
  {
    name: 'eslint',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-html',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-jquery',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-node',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-react',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-react-hooks',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-react-native',
    isInstalled: true
  },
  {
    name: 'eslint-plugin-vue',
    isInstalled: true
  },
  {
    name: 'htmlhint',
    isInstalled: true
  },
  {
    name: 'http-server',
    isInstalled: true
  },
  {
    name: 'npm',
    isInstalled: true
  },
  {
    name: 'npm-check',
    isInstalled: true
  },
  {
    name: 'npm-check-updates',
    isInstalled: true
  },
  {
    name: 'prettier',
    isInstalled: true
  },
  {
    name: 'react-devtools',
    isInstalled: false
  },
  {
    name: 'react-native-cli',
    isInstalled: false
  },
  {
    name: 'react-native-rename',
    isInstalled: false
  },
  {
    name: 'stylelint',
    isInstalled: true
  },
  {
    name: 'typescript',
    isInstalled: true
  },
  {
    name: 'vorlon',
    isInstalled: true
  }
];

const installedCommand = 'npm i -g';
let installedList = [];
let installedTotal = installedCommand;

const uninstalledCommand = 'npm un -g';
let uninstalledList = [];
let uninstalledTotal = uninstalledCommand;

for (let item of list) {
  const { name, isInstalled } = item;
  let code = '';
  let link = `<a href="https://npms.io/search?q=${name}" target="_blank">${name}</a>`;
  if (isInstalled) {
    code = `${installedCommand} ${link}`;
    installedList.push(`<li>${getCodeWrapper(code)}</li>`);
    installedTotal += ` ${name}`;
  } else {
    code = `${uninstalledCommand} ${link}`;
    uninstalledList.push(`<li>${getCodeWrapper(code)}</li>`);
    uninstalledTotal += ` ${name}`;
  }
}
installedTotal = getCodeWrapper(installedTotal);
uninstalledTotal = getCodeWrapper(uninstalledTotal);

document.getElementById('installed-total').innerHTML = installedTotal.trim();
document.getElementById('installed-list').innerHTML = installedList
  .join('')
  .trim();
document.getElementById(
  'uninstalled-total'
).innerHTML = uninstalledTotal.trim();
document.getElementById('uninstalled-list').innerHTML = uninstalledList
  .join('')
  .trim();
