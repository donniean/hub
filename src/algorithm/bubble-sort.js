function bubbleSort(data) {
  const res = [...data];
  const { length } = res;

  // cspell: disable-next-line
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length - 1; i++) {
    // cspell: disable-next-line
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < length - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
      }
    }
  }

  return res;
}

module.exports = bubbleSort;
