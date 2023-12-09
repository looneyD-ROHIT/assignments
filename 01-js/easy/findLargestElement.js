/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  const maximum = numbers.reduce((maximum, num) => {
    return num > maximum ? num : maximum;
  }, Number.NEGATIVE_INFINITY);
  return maximum === Number.NEGATIVE_INFINITY ? undefined : maximum;
}

module.exports = findLargestElement;