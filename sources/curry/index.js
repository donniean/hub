function curry(fn, args) {
  return function func(...innerArgs) {
    let a = [...innerArgs];
    if (args) {
      a = [...args, ...innerArgs];
    }

    return fn.call(this, ...a);
  };
}

const add = (a, b, c) => a + b + c;
const sum = curry(add);

const res = sum(1)(2)(3);

console.log(res);

module.exports = curry;
