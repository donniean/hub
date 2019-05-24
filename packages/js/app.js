hljs.initHighlightingOnLoad();

function init({
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
  ] = [installCommand, uninstallCommand, [], []];

  for (const item of installList) {
    const { name } = item;
    const link = `<a href="${url}${name}" target="_blank">${name}</a>`;
    const code = `${installCommand} ${url ? link : name}`;
    installCodeList.push(`<li>${getCodeWrapper(code)}</li>`);
    installTotalCommand += ` ${name}`;
  }

  for (const item of uninstallList) {
    const { name } = item;
    const link = `<a href="${url}${name}" target="_blank">${name}</a>`;
    const code = `${uninstallCommand} ${url ? link : name}`;
    uninstallCodeList.push(`<li>${getCodeWrapper(code)}</li>`);
    uninstallTotalCommand += ` ${name}`;
  }

  installTotalCommand = getCodeWrapper(installTotalCommand);
  uninstallTotalCommand = getCodeWrapper(uninstallTotalCommand);

  const html = `
    <div>
      <div>
        <div>${installTotalCommand.trim()}</div>
        <ol>${installCodeList.join('').trim()}</ol>
      </div>
    <div>
      <div>${uninstallTotalCommand.trim()}</div>
      <ol>${uninstallCodeList.join('').trim()}</ol>
      </div>
    </div>
  `;
  document.getElementById('wrapper').innerHTML = html;
}

function getCodeWrapper(code) {
  return `<pre><code class="shell">${code}</code></pre>`;
}
