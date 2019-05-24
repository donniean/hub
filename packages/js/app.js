hljs.initHighlightingOnLoad();

function getCodeWrapper(code) {
  return `<pre><code class="shell">${code}</code></pre>`;
}

function get({
  installCommand,
  installList,
  uninstallCommand,
  uninstallList
}) {}

const list = [
  {
    name: 'babel-eslint'
  },
  {
    name: 'create-react-app'
  },
  {
    name: 'eslint'
  },
  {
    name: 'eslint-plugin-html'
  },
  {
    name: 'eslint-plugin-jquery'
  },
  {
    name: 'eslint-plugin-node'
  },
  {
    name: 'eslint-plugin-react'
  },
  {
    name: 'eslint-plugin-react-hooks'
  },
  {
    name: 'eslint-plugin-react-native'
  },
  {
    name: 'eslint-plugin-vue'
  },
  {
    name: 'htmlhint'
  },
  {
    name: 'http-server'
  },
  {
    name: 'npm'
  },
  {
    name: 'npm-check'
  },
  {
    name: 'npm-check-updates'
  },
  {
    name: 'prettier'
  },
  {
    name: 'stylelint'
  },
  {
    name: 'typescript'
  },
  {
    name: 'vorlon'
  }
];

const uninstallList = [
  {
    name: 'react-devtools'
  },
  {
    name: 'react-native-cli'
  },
  {
    name: 'react-native-rename'
  }
];

const installCommand = 'npm i -g';
let installedList = [];
let installedTotal = installCommand;

const uninstallCommand = 'npm un -g';
let uninstalledList = [];
let uninstalledTotal = uninstallCommand;

for (let item of list) {
  const { name, isInstalled } = item;
  let code = '';
  let link = `<a href="https://npms.io/search?q=${name}" target="_blank">${name}</a>`;
  if (isInstalled) {
    code = `${installCommand} ${link}`;
    installedList.push(`<li>${getCodeWrapper(code)}</li>`);
    installedTotal += ` ${name}`;
  } else {
    code = `${uninstallCommand} ${link}`;
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
