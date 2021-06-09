// TODO: immediate
function debounce(func, wait) {
  let timer = null;

  return function fn(...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
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

function throttle2(func, wait) {
  let lastTime = null;

  return function fn(...args) {
    if (new Date().getTime() - lastTime < wait) {
      return;
    }

    lastTime = new Date().getTime();

    func.apply(this, args);
  };
}

module.exports = { debounce, throttle, throttle2 };
