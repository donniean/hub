const requestCache = new Map();

function Request(key, { expires = 300 } = {}) {
  const value = requestCache.get(key);

  const func = () => {
    const p = fetch(key)
      .then((res) => res.json())
      .catch((error) => {
        requestCache.delete(key);
        return Promise.reject(error);
      });
    requestCache.set(key, { timestamp: new Date().getTime(), promise: p });
    return p;
  };

  if (value) {
    const { timestamp, promise } = value;

    if (new Date().getTime() - timestamp < expires) {
      return promise;
    }

    return func();
  }

  return func();
}

setInterval(() => {
  Request('https://api.github.com/search/repositories?q=react').then((res) => {
    console.log(res);
  });
}, 500);

module.exports = Request;
