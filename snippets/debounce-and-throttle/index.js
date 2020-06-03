function debounce(func, delay) {
  let id = null;
  return function () {
    clearTimeout(id);
    id = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function throttle(func, delay) {
  let isExec = true;
  return function () {
    if (!isExec) {
      return;
    }
    isExec = false;
    setTimeout(() => {
      func.apply(this, arguments);
      isExec = true;
    }, delay);
  };
}

console.log(debounce, throttle);
