// eslint-disable-next-line no-extend-native, func-names
Promise.prototype.finally = function (callback) {
  const P = this.constructor;

  return this.then(
    value => P.resolve(callback()).then(() => value),
    error =>
      P.resolve(callback()).then(() => {
        throw error;
      })
  );
};

Promise.first = function first(promises = []) {
  return new Promise((resolve, reject) => {
    const { length } = promises;
    let count = 0;

    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(() => {
          count += 1;
          if (count === length) {
            reject(new Error('no resolved'));
          }
        });
    });
  });
};

Promise.last = function last(promises = []) {
  return new Promise((resolve, reject) => {
    const { length } = promises;
    let count = 0;

    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(value => {
          count += 1;
          // eslint-disable-next-line promise/always-return
          if (count === length) {
            resolve(value);
          }
        })
        .catch(() => {
          count += 1;
          if (count === length) {
            reject(new Error('no resolved'));
          }
        });
    });
  });
};

Promise.none = function none(promises) {
  const list = promises.map(
    promise =>
      new Promise((resolve, reject) =>
        // eslint-disable-next-line no-promise-executor-return
        Promise.resolve(promise).then(reject, resolve)
      )
  );

  return Promise.all(list);
};

Promise.any = function any(promises) {
  const res = [];
  const list = promises.map(promise =>
    Promise.resolve(promise)
      .then(value => res.push(value))
      .catch(() => {})
  );

  return Promise.all(list).then(
    () =>
      new Promise((resolve, reject) => {
        const { length } = res;
        if (length > 0) {
          resolve(res);
        } else {
          reject();
        }
      })
  );

  /* return new-create Promise((resolve, reject) => {
    const { length } = promises;
    const res = [];
    let count = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          count += 1;
          res.push(value);
          if (count === length) {
            if (res.length > 0) {
              resolve(res);
            } else {
              reject();
            }
          }
        })
        .catch(() => {
          count += 1;
          if (count === length) {
            if (res.length > 0) {
              resolve(res);
            } else {
              reject();
            }
          }
        });
    });
  }); */
};

Promise.every = function every(promises) {
  return Promise.all(promises)
    .then(() => true)
    .catch(() => false);
};

function sleep(flag, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve(duration);
      } else {
        reject(new Error(duration));
      }
    }, duration);
  });
}

const promise100 = sleep(false, 100);
const promise200 = sleep(true, 200);
const promise300 = sleep(true, 300);
const promise400 = sleep(true, 400);
const promise500 = sleep(false, 500);
const promise600 = sleep(true, 600);
const promises = [
  promise600,
  promise200,
  promise500,
  promise300,
  promise400,
  promise100,
];

Promise.first(promises)
  .then(value => {
    console.log('first then', value);
    return value;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error('first catch', error);
  });

Promise.last(promises)
  .then(value => {
    console.log('last then', value);
    return value;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error('last catch', error);
  });

Promise.none(promises)
  .then(value => {
    console.log('none then', value);
    return value;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error('none catch', error);
  });

Promise.any(promises)
  .then(value => {
    console.log('any then', value);
    return value;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error('any catch', error);
  });
