/* 1 */
/* function transformString(str = '') {
  const letters = str.split('');
  const counter = [];

  let prevLetter = '';

  letters.forEach((letter, index) => {
    if (letter === prevLetter) {
      counter[counter.length - 1].count += 1;
    } else {
      counter.push({ letter, count: 1 });
      prevLetter = letter;
    }
  });

  console.log(counter);

  let res = '';

  counter.forEach(({ letter, count }) => {
    res += `${count}${letter}`;
  });

  return res;
} */

/* 2 */
function transformString(str = '') {
  const letters = str.split('');

  let tempLetters = [];
  let res = '';

  letters.forEach((letter, index) => {
    if (tempLetters.includes(letter)) {
      tempLetters.push(letter);
    } else {
      if (index > 0) {
        res += `${tempLetters.length}${tempLetters[0]}`;
      }
      tempLetters = [letter];
    }
  });

  res += `${tempLetters.length}${tempLetters[0]}`;

  return res;
}

/* cspell:disable-next-line */
const str = 'aaabbccdddaa';
const res = transformString(str);

console.log(res); // 3a2b2c3d2a
