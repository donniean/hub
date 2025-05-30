function quickSort(data) {
  const { length } = data;

  if (length <= 1) {
    return data;
  }

  const pivotIndex = 0;
  const left = [];
  const right = [];
  const [pivot] = data.splice(pivotIndex, 1);

  for (const value of data) {
    if (value < pivot) {
      left.push(value);
    } else {
      right.push(value);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

export { quickSort };
