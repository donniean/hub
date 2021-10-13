function curry(fn, args) {
  return function func(...innerArgs) {
    let finalArgs = [...innerArgs];
    if (args) {
      finalArgs = [...args, ...innerArgs];
    }
    if (finalArgs.length < fn.length) {
      return curry(fn, finalArgs);
    }

    return fn.call(this, ...finalArgs);
  };
}

const add = (a, b, c) => a + b + c;
const sum = curry(add);

const res = sum(1)(2)(3);

console.log(res);

module.exports = curry;
