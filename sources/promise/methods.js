/* eslint-disable camelcase */

Promise.first = function first(promises = []) {
  const { length } = promises;

  return new Promise((resolve, reject) => {
    let count = 0;

    promises.forEach((promise) => {
      promise.then(resolve).catch(() => {
        count += 1;
        if (count === length) {
          reject(new Error('no resolved'));
        }
      });
    });
  });
};

Promise.last = function last(promises = []) {
  const { length } = promises;

  return new Promise((resolve, reject) => {
    let count = 0;

    promises.forEach((promise) => {
      promise
        .then(() => {
          count += 1;
          if (count === length) {
            resolve(promise);
          }
        })
        .catch(() => {
          count += 1;
          if (count === length) {
            reject(promise);
          }
        });
    });
  });
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

const promise_100 = sleep(false, 100);
const promise_200 = sleep(true, 200);
const promise_300 = sleep(true, 300);
const promise_400 = sleep(false, 400);
const promise_500 = sleep(true, 500);
const promise_600 = sleep(false, 600);
const promises = [
  promise_600,
  promise_200,
  promise_500,
  promise_300,
  promise_400,
  promise_100,
];

Promise.first(promises)
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason);
  });

Promise.last(promises)
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason);
  });
