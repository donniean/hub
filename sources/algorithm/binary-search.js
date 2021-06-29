function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    const value = nums[mid];

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

module.exports = binarySearch;
