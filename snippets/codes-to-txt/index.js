const path = require('path');
const fs = require('fs');
const strip = require('strip-comments');

const filesPath = path.resolve(__dirname, 'src');

const readdir = new Promise((resolve, reject) => {
  fs.readdir(filesPath, (err, files) => {
    if (err) {
      reject(err);
    } else {
      resolve(files);
    }
  });
});

readdir
  .then(files => {
    let readFiles = [];
    const re = /((\.html)|(\.css)|(\.js))$/i;
    for (const file of files) {
      if (re.test(file)) {
        const filePath = path.resolve(filesPath, file);
        const readFile = new Promise((resolve, reject) => {
          fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
              reject(err);
            } else {
              data = strip(data);
              resolve(data);
            }
          });
        });
        readFiles.push(readFile);
      }
    }
    return readFiles;
  })
  .then(readFiles => {
    Promise.all(readFiles)
      .then(list => getCode(list))
      .then(code => {
        const data = sliceCode(code);
        fs.writeFile('./dist/codes.txt', data, err => {
          if (err) {
            console.error(err);
          } else {
            console.log('write file success');
          }
        });
      })
      .catch(err => {
        console.error(err);
      });
  })
  .catch(err => {
    console.error(err);
  });

function getCode(list) {
  let arr = [];
  for (const data of list) {
    arr.push(handleText(data));
  }
  arr.push(`alert('成功退出登录')
exit();
  `);
  return arr.join('\n');
}

function handleText(data) {
  const rows = data.split(/\n|\r|\n\r|\r\n/);
  let newRows = [];
  rows.forEach(row => {
    const str = row.trim();
    if (str) {
      newRows.push(str);
    }
  });
  return newRows.join('\n');
}

function sliceCode(code) {
  const rows = code.split(/\n|\r|\n\r|\r\n/);
  const { length } = rows;
  const max = 5000;
  let newRows = rows;
  if (length > max) {
    newRows = [
      ...rows.slice(0, max / 2),
      ...rows.slice(length - 1 - max / 2, length - 1)
    ];
  }
  console.log(newRows.length);
  return newRows.join('\n');
}
