const path = require('path');
const fs = require('fs');

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
        fs.writeFile('code.txt', code, err => {
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
  arr.push(`
alert('成功退出登录')
exit();
  `);
  return arr.join('\n');
}

function handleText(data) {
  const rows = data.split(/\n|\r|\n\r|\r\n/);
  console.log(rows.length);
  let newRows = [];
  for (let row of rows) {
    row.trim() && newRows.push(row);
  }
  return newRows.join('\n');
}
