function customInstanceof(object, constructor) {
  const constructorPrototype = constructor.prototype;

  while (true) {
    if (object.__proto__ === null) {
      return false;
    }

    if (object.__proto__ === constructorPrototype) {
      return true;
    }

    object = object.__proto__;
  }
}

export { customInstanceof };
