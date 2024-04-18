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

  return new Promise((resolve) => {
    const func = () => {
      /* cspell: disable-next-line */
      // eslint-disable-next-line no-plusplus
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
          .then((data) => {
            // eslint-disable-next-line promise/always-return
            if (completedCount < total) {
              /* cspell: disable-next-line */
              // eslint-disable-next-line no-plusplus
              completedCount++;
              res[index] = data;
              func();
            }
          })
          .catch((error) => {
            if (completedCount < total) {
              /* cspell: disable-next-line */
              // eslint-disable-next-line no-plusplus
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
  .then((res) => {
    console.log(res);
    return res;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((error) => {
    console.log(error);
  });

export { controlPromise };
