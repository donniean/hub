function debounce(func, wait) {
  let id = null;

  return function fn(...args) {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function throttle(func, wait) {
  let isExec = true;

  return function fn(...args) {
    if (!isExec) {
      return;
    }

    isExec = false;

    func.apply(this, args);

    setTimeout(() => {
      isExec = true;
    }, wait);
  };
}

export { debounce, throttle };
