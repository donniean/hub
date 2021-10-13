function getScore(value, fixed = 0) {
  return (value * 100).toFixed(fixed);
}

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const promises = alphabet.map((letter) =>
  fetch(
    `https://api.npms.io/v2/search/suggestions?q=${letter}&size=${100}`
  ).then((res) => res.json())
);

Promise.all(promises).then((res) => {
  let list = [];
  res.forEach((item) => {
    list = [...list, ...item];
  });
  const data = list.sort((a, b) => {
    const scoreA = a.score.final;
    const scoreB = b.score.final;
    if (scoreA < scoreB) {
      return 1;
    }
    if (scoreA > scoreB) {
      return -1;
    }
    return 0;
  });
  const array = data.map((item) => {
    const { package: packageItem, score } = item;
    const { name, links } = packageItem;
    const { npm, repository } = links;
    const { detail, final } = score;
    const { quality, popularity, maintenance } = detail;
    return {
      name,
      npm,
      repository,
      quality,
      popularity,
      maintenance,
      final,
    };
  });
  console.log(JSON.stringify(array));
  const trs = array.map(
    ({ name, repository, quality, popularity, maintenance, final }, index) =>
      `
        <tr>
          <td class="col-no">
            <span>${index + 1}</span>
          </td>
          <td class="col-name">
            <a href="${repository}" target="_black" title="${name}">${name}</a>
          </td>
          <td class="col-score">
            <span title="${quality}">${getScore(quality)}</span>
          </td>
          <td class="col-score">
            <span title="${popularity}">${getScore(popularity)}</span>
          </td>
          <td class="col-score">
            <span title="${maintenance}">${getScore(maintenance)}</span>
          </td>
          <td class="col-score">
            <span title="${final}">${getScore(final)}</span>
          </td>
        </tr>
      `
  );
  document.getElementById('root').innerHTML = `
    <table>
      <thead>
        <tr>
          <th class="col-no">
            <span>No.</span>
          </th>
          <th class="col-name">
            <span>Name</span>
          </th>
          <th class="col-score">
            <span>Quality</span>
          </th>
          <th class="col-score">
            <span>Popularity</span>
          </th>
          <th class="col-score">
            <span>Maintenance</span>
          </th>
          <th class="col-score">
            <span>Final</span>
          </th>
        </tr>
      </thead>
      <tbody>
      ${trs.join('')}
      </tbody>
    </table>
  `;
});

/* function handleName(name = '') {
  const { length } = name;
  if (length > 12) {
    name = name.substr(0, 12) + '...';
  }
  return name;
} */
