hljs.initHighlightingOnLoad();

function init({
  elementId,
  installCommand,
  uninstallCommand,
  installList,
  uninstallList,
  url
}) {
  let [
    installTotalCommand,
    uninstallTotalCommand,
    installCodeList,
    uninstallCodeList
  ] = ['', '', [], []];

  if (installList.length > 0) {
    installTotalCommand = installCommand;
    for (const item of installList) {
      const { name } = item;
      const link = `<a href="${url}${name}" target="_blank">${name}</a>`;
      const code = `${installCommand} ${url ? link : name}`;
      installCodeList.push(`<li>${getCodeWrapper(code)}</li>`);
      installTotalCommand += ` ${name}`;
    }
  }

  if (uninstallList.length > 0) {
    uninstallTotalCommand = uninstallCommand;
    for (const item of uninstallList) {
      const { name } = item;
      const link = `<a href="${url}${name}" target="_blank">${name}</a>`;
      const code = `${uninstallCommand} ${url ? link : name}`;
      uninstallCodeList.push(`<li>${getCodeWrapper(code)}</li>`);
      uninstallTotalCommand += ` ${name}`;
    }
  }

  installTotalCommand = getCodeWrapper(installTotalCommand);
  uninstallTotalCommand = getCodeWrapper(uninstallTotalCommand);

  const installHtml = `
    <div>
      <div>${installTotalCommand.trim()}</div>
      <ol>${installCodeList.join('').trim()}</ol>
    </div>
  `;
  const uninstallHtml = `
    <div>
      <div>${uninstallTotalCommand.trim()}</div>
      <ol>${uninstallCodeList.join('').trim()}</ol>
    </div>
  `;
  const html = `
  ${installList.length > 0 ? installHtml : ''}
  ${uninstallList.length > 0 ? uninstallHtml : ''}
  `;
  document.getElementById(elementId).innerHTML = html.trim();
}

function getCodeWrapper(code) {
  return `<pre><code class="shell">${code}</code></pre>`;
}
