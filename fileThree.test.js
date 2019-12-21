// This test suite is for fileThree.js
const chunkArr = require("./fileThree");

// Test 1 - use toBeDefined() for checking existence
test("Test 1: chunkArray func existed", () => {
  expect(chunkArr).toBeDefined();
});

// Test 2 - check return data correct or not
test("Test 2: chunk an arr of 10 values with leng of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArr(numbers, len);

  expect(chunkedArr).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

// Test 3 - check return data correct or not
test("Test 3: chunk an arr of 3 values with leng of 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArr(numbers, len);

  expect(chunkedArr).toStrictEqual([[1], [2], [3]]);
});
