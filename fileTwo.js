// This file contains a typical complex func that will be tested in fileTwo.test.js
const reverseString = str =>
  str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

module.exports = reverseString;
