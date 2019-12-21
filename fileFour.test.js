// This test suite is for fileFour.js
const isAnagram = require("./fileFour");

// Test 1 - use toBeDefined() for checking existence as a func (more details than previous existence checking)
test("Test 1: isAnagram func existed", () => {
  expect(typeof isAnagram).toStrictEqual("function");
});

// Test 2 - use toBeTruthy() to check data
test("Test 2: cinema is an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

// Test 3 - use toBeTruthy() to check data
test("Dormitory is an anagram of dirty room##", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

// Test 4 - use toBeFalsy() to check data
test("Hello is not an anagram of aloha", () => {
  expect(isAnagram("Hello", "aloha")).toBeFalsy();
});
