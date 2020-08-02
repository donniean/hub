const { resolve } = require('path');
const { readFileSync, outputFileSync } = require('fs-extra');

const data = readFileSync(resolve('data.csv'), { encoding: 'utf-8' });
const array = data.split(/\n|\r|\n\r|\r\n/);
const list = [];

array.forEach((item) => {
  if (!list.includes(item)) {
    list.push(item);
  }
});

const csv = list.join('\n');
outputFileSync('new-data.csv', csv);
