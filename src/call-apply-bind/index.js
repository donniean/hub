// eslint-disable-next-line no-extend-native
Function.prototype.customCall = function customCall(context, ...args) {
  const ctx = context || globalThis;
  // eslint-disable-next-line no-param-reassign
  ctx.func = this;
  const res = ctx.func(...args);
  // eslint-disable-next-line no-param-reassign
  delete ctx.func;

  return res;
};

// eslint-disable-next-line no-extend-native
Function.prototype.customApply = function customApply(context, args) {
  const ctx = context || globalThis;
  // eslint-disable-next-line no-param-reassign
  ctx.func = this;
  const res = ctx.func(...args);
  // eslint-disable-next-line no-param-reassign
  delete ctx.func;

  return res;
};

// eslint-disable-next-line no-extend-native
Function.prototype.customBind = function customBind(context, ...args) {
  // eslint-disable-next-line unicorn/no-this-assignment
  const func = this;
  return function fn() {
    return func.customCall(context, ...args);
  };
};

const o1 = {
  a: 1,
  b: 2,
  sum(c = 0, d = 0) {
    return this.a + this.b + c + d;
  },
};

const o2 = {
  a: 10,
  b: 20,
};

console.log(o1.sum.customCall(o2, 1, 2));

console.log(o1.sum.customApply(o2, [1, 2]));

const sum = o1.sum.customBind(o2, 1, 2);
console.log(sum());
