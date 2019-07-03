/* global hljs */
hljs.initHighlightingOnLoad();

function init({
  elementId,
  installCommand,
  uninstallCommand,
  installList = [],
  alternativeList = [],
  uninstallList = [],
  url
}) {
  let [
    installTotalCommand,
    alternativeTotalCommand,
    uninstallTotalCommand,
    installCodeList,
    alternativeCodeList,
    uninstallCodeList
  ] = ['', '', '', [], [], []];

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

  if (alternativeList.length > 0) {
    alternativeTotalCommand = installCommand;
    for (const item of alternativeList) {
      const { name } = item;
      const link = `<a href="${url}${name}" target="_blank">${name}</a>`;
      const code = `${installCommand} ${url ? link : name}`;
      alternativeCodeList.push(`<li>${getCodeWrapper(code)}</li>`);
      alternativeTotalCommand += ` ${name}`;
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
  alternativeTotalCommand = getCodeWrapper(alternativeTotalCommand);
  uninstallTotalCommand = getCodeWrapper(uninstallTotalCommand);

  const installHtml = `
    <h1>Install</h1>
    <div>
      <div>${installTotalCommand.trim()}</div>
      <ol>${installCodeList.join('').trim()}</ol>
    </div>
  `;
  const alternativeHtml = `
    <h1>Alternative</h1>
    <div>
      <div>${alternativeTotalCommand.trim()}</div>
      <ol>${alternativeCodeList.join('').trim()}</ol>
    </div>
  `;
  const uninstallHtml = `
    <h1>Uninstall</h1>
    <div>
      <div>${uninstallTotalCommand.trim()}</div>
      <ol>${uninstallCodeList.join('').trim()}</ol>
    </div>
  `;
  const html = `
  ${installList.length > 0 ? installHtml : ''}
  ${alternativeList.length > 0 ? alternativeHtml : ''}
  ${uninstallList.length > 0 ? uninstallHtml : ''}
  `;
  document.getElementById(elementId).innerHTML = html.trim();
}

function getCodeWrapper(code) {
  return `<pre><code class="shell">${code}</code></pre>`;
}

export default init;
