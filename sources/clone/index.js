function cloneDeep(target) {
  if (typeof target === 'object') {
    const shadow = Array.isArray(target) ? [] : {};
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in target) {
      shadow[key] = cloneDeep(target[key]);
    }
    return shadow;
  }
  return target;
}

module.exports = { cloneDeep };
