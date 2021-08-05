function add(a, b) {
  const aDecimals = a.toString().split('.')[1] || '';
  const bDecimals = b.toString().split('.')[1] || '';
  const aLength = aDecimals.length;
  const bLength = bDecimals.length;
  const maxLength = Math.max(aLength, bLength);
  // eslint-disable-next-line no-restricted-properties
  const rate = Math.pow(10, maxLength);

  return (a * rate + b * rate) / rate;
}

function random(min, max) {
  console.log(min, max);
}

module.exports = { add, random };
