// This file shows an JS obj holding some typical funcs in JS
// That obj will be tested in fileOne.test.js
const axios = require("axios");

const functions = {
  // func with args and return
  add: (num1, num2) => num1 + num2,
  // func with empty arg
  isNull: () => null,
  // func returns something truthy or falsy
  checkValue: x => x,
  // func create sth, a JS obj for example
  createUser: () => {
    const user = { firstName: "Adam", lastName: "Smith" };
    return user;
  },
  // func returning a Promise, typically fetching data from an API endpoint
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error here")
};

module.exports = functions;
