/* 1 */
function getMaxCountLetters(str = '') {
  const letters = [...str];
  const counter = {};
  const maxLetters = new Set();
  let maxCount = 0;

  for (const letter of letters) {
    if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }

    if (counter[letter] > maxCount) {
      maxCount = counter[letter];
      maxLetters.clear();
      maxLetters.add(letter);
    } else if (counter[letter] === maxCount) {
      maxLetters.add(letter);
    }
  }

  const res = {};

  for (const letter of maxLetters) {
    res[letter] = maxCount;
  }

  return res;
}

/* 2 */
/* function getLetterCount(str = '') {
  const res = {};
  const letters = [...str];

  letters.forEach((letter) => {
    if (res[letter]) {
      res[letter] += 1;
    } else {
      res[letter] = 1;
    }
  });

  return res;
}

function getMaxCountLetters(str = '') {
  const counter = getLetterCount(str);

  let maxCountLetters = [];
  let maxCount = 0;

  Object.entries(counter).forEach(([letter, count]) => {
    if (maxCount < count) {
      maxCount = count;
      maxCountLetters = [letter];
    } else if (maxCount === count) {
      maxCountLetters.push(letter);
    }
  });

  const res = {};
  maxCountLetters.forEach((letter) => {
    res[letter] = maxCount;
  });

  return res;
} */

/* 3 */
/* function getMaxCountLetters(str = '') {
  const counter = getLetterCount(str);
  const arr = Object.entries(counter).map(([letter, count]) => ({
    letter,
    count,
  }));

  arr.sort((a, b) => b.count - a.count);
  const maxCount = arr.length > 0 ? arr[0].count : 0;
  const maxCountList = arr.filter(({ count }) => count === maxCount);

  const res = {};

  maxCountList.forEach(({ letter, count }) => {
    res[letter] = count;
  });

  return res;
} */

/* cSpell: disable-next-line */
const str1 = 'abbcccdddd'; // { d: 4 }
/* cSpell: disable-next-line */
const str2 = 'aaaabbcccc'; // { a: 4, c: 4 }

const res1 = getMaxCountLetters(str1);
const res2 = getMaxCountLetters(str2);

console.log(res1);
console.log(res2);
