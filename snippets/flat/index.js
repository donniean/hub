function flat(array) {
  const res = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      res.push(...flat(item));
    } else {
      res.push(item);
    }
  }

  return res;
}

const a = [1, [2, 3], 4, 5, [6, [7, [8]]]];
const r = flat(a);

console.log(r);

export { flat };
