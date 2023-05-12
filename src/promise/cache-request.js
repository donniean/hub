const requestCache = new Map();

function request(key, { expires = 300 } = {}) {
  const value = requestCache.get(key);

  const func = () => {
    const p = fetch(key)
      .then(res => res.json())
      .catch(error => {
        requestCache.delete(key);
        throw error;
      });
    requestCache.set(key, { timestamp: Date.now(), promise: p });
    return p;
  };

  if (value) {
    const { timestamp, promise } = value;

    if (Date.now() - timestamp < expires) {
      return promise;
    }

    return func();
  }

  return func();
}

setInterval(() => {
  Request('https://api.github.com/search/repositories?q=react')
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(console.error);
}, 500);

export { request };
