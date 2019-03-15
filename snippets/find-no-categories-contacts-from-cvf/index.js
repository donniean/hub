const fs = require('fs');

fs.readFile('./data.vcf', 'utf8', (err, data) => {
  let [list, arr, i] = [[], [], 0];
  const rows = data.trim().split(/\n|\r|\n\r|\r\n/);
  for (const row of rows) {
    const [key, value] = row.split(':');
    if (key === 'BEGIN') {
      arr[i] = [];
    }
    arr[i].push({ [key]: value });
    if (key === 'END') {
      i++;
    }
  }
  for (const items of arr) {
    let obj = {};
    for (const item of items) {
      obj = Object.assign({}, obj, item);
    }
    list.push(obj);
  }
  for (const item of list) {
    const { CATEGORIES, N } = item;
    if (!CATEGORIES) {
      console.log(N);
    }
  }
});
