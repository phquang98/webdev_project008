// This test suite is for fileTwo.js
const reverseString = require("./fileTwo");

// Test 1 - use toBeDefined() for checking existence
test("Test 1: test if function reverse_str existed", () => {
  expect(reverseString).toBeDefined();
});

// Test 2 - check return data correct or not
test("Test 2: string reversed", () => {
  expect(reverseString("hello")).toStrictEqual("olleh");
});
