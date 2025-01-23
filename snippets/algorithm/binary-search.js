function binarySearch(n, target) {
  let left = 0;
  let right = n.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    const value = n[mid];

    if (target === value) {
      return mid;
    }

    if (target < value) {
      right = mid - 1;
    } else if (target > value) {
      left = mid + 1;
    }
  }

  return -1;
}

export { binarySearch };
