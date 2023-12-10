/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isSpaceOrPunctuation(ch) {
  return ch === ' ' || ch === ',' || ch === '.' || ch === '!' || ch === '?' || ch === '\'' || ch === '\"';
}

function isPalindrome(str) {
  const len = str.length;
  let i = 0, j = len - 1;
  for (; i < j;) {
    let char1 = str[i], char2 = str[j];
    if (isSpaceOrPunctuation(char1)) {
      i++;
      continue;
    }
    if (isSpaceOrPunctuation(char2)) {
      j--;
      continue;
    }
    if (char1.toLowerCase() !== char2.toLowerCase()) {
      return false;
    }
    i++; j--;
  }
  return true;
}

module.exports = isPalindrome;
