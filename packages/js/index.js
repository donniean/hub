const array = [
  { name: 'Homebrew', url: 'homebrew.html' },
  { name: 'Homebrew Cask', url: 'homebrew-cask.html' },
  { name: 'Scoop', url: 'scoop.html' },
  // { name: 'Chocolatey', url: 'chocolatey.html' },
  { name: 'npm', url: 'npm.html' }
];

const list = array.map(
  ({ name, url }) =>
    `
    <li class="link-container">
      ${url.trim() ? `<a href="${url}">${name}</a>` : `<span>${name}</span>`}
    </li>
    `
);
const html = `<ul>${list.join('').trim()}</ul>`;
document.getElementById('wrapper').innerHTML = html;
