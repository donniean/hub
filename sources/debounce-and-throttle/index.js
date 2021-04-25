function debounce(func, delay) {
  let id = null;
  return function fn(...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, delay) {
  let isExec = true;
  return function fn(...args) {
    if (!isExec) {
      return;
    }
    isExec = false;
    setTimeout(() => {
      func.apply(this, args);
      isExec = true;
    }, delay);
  };
}

export { debounce, throttle };
