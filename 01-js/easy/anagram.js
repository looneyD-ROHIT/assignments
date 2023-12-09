/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1 = str1.length, len2 = str2.length;
  if (len1 !== len2) return false;
  let str1Arr = str1.toLowerCase().split('').sort();
  let str2Arr = str2.toLowerCase().split('').sort();
  for (let i = 0; i < len1; i++) {
    if (str1Arr[i] !== str2Arr[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
