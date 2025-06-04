// let data = require("./calculator");
// console.log(data);

// ! -------------

// require("./calculator");

// console.log(require);

// ! --------------

// require("./module1")
// require("./module2");

// (function () {
//   let sname = "Manav";
//   console.log(sname);
// })();

// (function () {
//   let sname = "Rahul";
//   console.log(sname);
// })();

// console.log(require("module").wrapper); // IIFE

// ! Actual Examples Start from here
// ? Case 1:
/*
let data = require("./calculator");
console.log(data); // Node JS
*/

// ? Case 2 & 3 & 4:
// let data = require("./calculator");
// console.log(data);

// ? Case 5:
// This pattern when to use:
// - whenever we are passing only data at a time
// - to work as default export
/*
let data = require("./calculator");
console.log(data);

console.log(data.add);

console.log(data.add(10, 20));
console.log(data.sub(10, 5));
console.log(data.multiply(10, 5));
console.log(data.divide(10, 5));
*/

// ? Case 6:
// This pattern is preffered while working with named exports
// It nothing but destructuring only.
let {
  sname,
  age,
  course,
  add,
  sub,
  multiply,
  divide,
} = require("./calculator");

console.log(add(10, 20));
console.log(multiply(10, 20));
