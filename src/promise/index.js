const STATUS_MAP = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

class CustomPromise {
  constructor(executor) {
    this.status = STATUS_MAP.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === STATUS_MAP.PENDING) {
        this.status = STATUS_MAP.FULFILLED;
        this.value = value;
        this.resolvedCallbacks.forEach((callback) => {
          if (typeof callback === 'function') {
            callback(value);
          }
        });
      }
    };

    const reject = (reason) => {
      if (this.status === STATUS_MAP.PENDING) {
        this.status = STATUS_MAP.REJECTED;
        this.reason = reason;
        this.rejectedCallbacks.forEach((callback) => {
          if (typeof callback === 'function') {
            callback(reason);
          }
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // eslint-disable-next-line unicorn/no-thenable
  then(onFulfilled, onRejected) {
    if (this.status === STATUS_MAP.PENDING) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }

    if (
      this.status === STATUS_MAP.FULFILLED &&
      typeof onFulfilled === 'function'
    ) {
      onFulfilled(this.value);
    }

    if (
      this.status === STATUS_MAP.REJECTED &&
      typeof onRejected === 'function'
    ) {
      onRejected(this.reason);
    }

    // TODO: promise chain
    return this;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}

const p = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(56);
    reject('oops');
  }, 2000);
});

p.then((value) => {
  console.log('then 1', value);
  return value + 1;
})
  .then((value) => {
    console.log('then 2', value);
    return value;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((error) => {
    console.error('catch', error);
  });

export { CustomPromise };
