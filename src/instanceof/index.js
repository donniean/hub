function customInstanceof(object, constructor) {
  const constructorPrototype = constructor.prototype;

  while (true) {
    // eslint-disable-next-line no-proto
    if (object.__proto__ === null) {
      return false;
    }

    // eslint-disable-next-line no-proto
    if (object.__proto__ === constructorPrototype) {
      return true;
    }

    // eslint-disable-next-line no-proto,no-param-reassign
    object = object.__proto__;
  }
}

export { customInstanceof };
