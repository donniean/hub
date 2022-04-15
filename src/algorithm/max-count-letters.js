/* cspell:disable-next-line */
const str1 = 'abbcccdddd'; // { d: 4 }
/* cspell:disable-next-line */
const str2 = 'aaaabbcccc'; // { a: 4, c: 4 }

function getLetterCount(str = '') {
  const res = {};
  const letters = str.split('');

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
}

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

const res1 = getMaxCountLetters(str1);
const res2 = getMaxCountLetters(str2);

console.log(res1);
console.log(res2);
