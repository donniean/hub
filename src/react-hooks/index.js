const states = [];
let count = 0;

function useState(defaultState) {
  const index = count;
  const setState = value => {
    states[index] = value;
  };

  count += 1;
  states[index] = states[index] || defaultState;

  return [states[index], setState];
}

export { useState };
