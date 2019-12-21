// This test suite is dedicated to fileOne.js
const functions = require("./fileOne");

// This part showing pre/post test - tests that run before and after the main testing -----

// beforeEach(() => initDB()); // run before each tests inside this test suite
// afterEach(() => closeDB()); // run after each tests inside this test suite

beforeAll(() => initDB()); // run before the first test, runs only 1 time
afterAll(() => closeDB()); // run after the last test, runs only 1 time

const initDB = () => console.log("db created"); // this func must be run before each test
const closeDB = () => console.log("db closed"); // this func must be run after each test

// How to run a func before some tests
const nameCheck = () => {
  console.log("checking names...");
};

describe("Checking Names", () => {
  beforeEach(() => nameCheck());
  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// This end the part of pre/post tests ----------------------------------------------------

// How a test func look like: test("comment_string_here", (args_or_not) => { logic_here });

// Test 1 - use toBe() for primitive use
test("Test 1: adds 2 + 2 to equals 4", () => {
  expect(functions.add(2, 2)).toBe(4); // matcher toBe
});

// Test 2 - use toBe() for primitive use
test("Test 2: Adds 2 + 2 to not be 5", () => {
  expect(functions.add(2, 2)).not.toBe(5); // matcher toBe
});

// Test 3 - use toBe() for primitive use
test("Test 3: Should be null", () => {
  expect(functions.isNull()).toBeNull(); // matcher toBe
});

// Test 4 - use toBe() for primitive use
test("Test 4: Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy(); // 0, undefined, null
});

// Test 5 - use toStrictEquals() when comparing ref type
// in JS, obj or arr is ref type -> have 2 same objs but actually are completely different, each stored in different memory in system
test("Test 5: user should have data name is Adam Smith", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Adam",
    lastName: "Smith"
  }); // 0, undefined, null
});

// Test 6 - comparison
test("Test 6: should be under 1600", () => {
  const load1 = 800;
  const load2 = 100;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Test 7 - use Regex
test("Test 7: there is no I in the word team", () => {
  expect("team").not.toMatch(/I/i);
});

// Test 8 - 1 example testing with arr
test("Test 8: the array must have ele called admin", () => {
  usernames = ["john", "karen", "admin", "david"];
  expect(usernames).toContain("admin");
});

// Test 9a - test with fetch data from API using Promise test
test("Test 9a: user fetched name should be leanne graham", () => {
  expect.assertions(1); // ??? look this up, must have return or the test will completed before the fetchUser completed
  return functions.fetchUser().then(data => {
    expect(data.name).toStrictEqual("Leanne Graham");
  });
});

// Test 9b - test with fetch data from API using async await test
test("Test 9b: user fetched name should be leanne graham - async await test", async () => {
  expect.assertions(1); // ??? look this up, must have return or the test will completed before the fetchUser completed
  const data = await functions.fetchUser();
  expect(data.name).toStrictEqual("Leanne Graham");
});
