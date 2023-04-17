/* cspell: disable-next-line */
/* eslint-disable no-plusplus */

function simRequest(url, { duration = 3000, isSuccess = true } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve({ status: 'success', url, duration });
      } else {
        reject(new Error(`${url} failed`));
      }
    }, duration);
  });
}

function controlPromise(urls, max) {
  const total = urls.length;
  const res = [];
  let sentCount = 0;
  let completedCount = 0;

  return new Promise(resolve => {
    const func = () => {
      const index = sentCount++;
      const url = urls[index];

      if (completedCount >= total) {
        resolve(res);
        return;
      }

      if (url) {
        simRequest(url, {
          duration: (total - index) * 500,
          isSuccess: index % 2 === 0,
        })
          .then(data => {
            if (completedCount < total) {
              completedCount++;
              res[index] = data;
              func();
            }
          })
          .catch(error => {
            if (completedCount < total) {
              completedCount++;
              res[index] = error;
              func();
            }
          });
      }
    };

    while (sentCount < max && sentCount < total) {
      func();
    }
  });
}

controlPromise(['a', 'b', 'c', 'd', 'e', 'f'], 3)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

module.exports = controlPromise;
