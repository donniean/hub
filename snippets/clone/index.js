function cloneDeep(target) {
  if (typeof target === 'object') {
    const shadow = Array.isArray(target) ? [] : {};

    for (const key in target) {
      shadow[key] = cloneDeep(target[key]);
    }
    return shadow;
  }
  return target;
}

export { cloneDeep };
