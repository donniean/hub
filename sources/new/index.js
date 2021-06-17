function customNew(Func, ...args) {
  // 1. 创建一个空的简单 JavaScript 对象（即{}）
  const object = {};

  // 2. 将空对象的原型赋值为构造器函数的原型
  // eslint-disable-next-line no-proto
  object.__proto__ = Func.prototype;

  // 3. 更改构造器函数内部 this，将其指向新创建的空对象
  const ret = Func.apply(object, args);

  // 4. 如果该函数没有返回对象，则返回 this
  return ret instanceof Object ? ret : object;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showName = function sayName() {
  console.log(this.name);
};

const jack = customNew(Person, 'jack', 20);
console.log(jack);
jack.showName();

module.exports = customNew;
