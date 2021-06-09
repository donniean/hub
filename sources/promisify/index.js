const fs = require('fs');

function promisify(func) {
  return function fn(...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  };
}

const f = promisify(fs.stat);

f('.')
  .then((value) => {
    console.log('resolve');
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
