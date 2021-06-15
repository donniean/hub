const STATUS_MAP = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

class CustomPromise {
  constructor(func) {
    this.status = STATUS_MAP.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === STATUS_MAP.PENDING) {
        this.status = STATUS_MAP.FULFILLED;
        this.value = value;
        this.resolvedCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.status === STATUS_MAP.PENDING) {
        this.status = STATUS_MAP.REJECTED;
        this.reason = reason;
        this.rejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      func(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === STATUS_MAP.PENDING) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }

    if (this.status === STATUS_MAP.FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === STATUS_MAP.REJECTED) {
      onRejected(this.reason);
    }

    return this;
  }

  catch(onRejected) {
    this.then(() => {}, onRejected);
  }
}

const p = new CustomPromise((resolve) => {
  setTimeout(() => {
    resolve(56);
    // reject(new Error('oops'));
  }, 2000);
});

p.then((value) => {
  console.log('then 1', value);
  return value + 1;
})
  .then((value) => {
    console.log('then 2', value);
  })
  .catch((err) => {
    console.log('catch', err);
  });

module.exports = CustomPromise;
