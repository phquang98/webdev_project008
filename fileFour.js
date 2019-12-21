// This file contains another complex func (with a helper func) that will be tested in fileFour.test.js
// anagram means that 2 strings has the exact characters, like hello and helol
function isAnagram(str1, str2) {
  return formatStr(str1) == formatStr(str2);
}

// change a string to a another str ezier for comparison
function formatStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = isAnagram;
