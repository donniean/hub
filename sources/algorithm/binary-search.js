function binarySearch(nums, target) {
  let [left, mid, right] = [0, 0, nums.length - 1];

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);

    const value = nums[mid];

    if (target > value) {
      left = mid + 1;
    } else if (target < value) {
      right = mid - 1;
    } else if (target === value) {
      return mid;
    }
  }

  return -1;
}

module.exports = binarySearch;
