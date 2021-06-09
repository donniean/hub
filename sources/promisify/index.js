function promisify(func) {
  return function fn(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, ...values) => {
        if (err) {
          reject(err);
        } else {
          resolve(...values);
        }
      };

      func.call(this, ...args, callback);
    });
  };
}

function asyncFunc(success) {
  console.log(this);
  setTimeout(() => {
    success(0, 'hello');
  }, 1000);
}

const o = {
  a: 'n',
  p: promisify(asyncFunc),
};

o.p()
  .then((value) => {
    console.log('resolve', value);
  })
  .catch((err) => {
    console.log('reject', err);
  });

module.exports = promisify;
