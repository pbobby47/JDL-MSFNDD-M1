// module is one object which points to the current file

// module.sname = "Ajit";
// module.course = "Node Js";
// module.skills = ["Html", "css", "JS"];

// module.exports = "Sahil";
// console.log(module);

// ! ----------------

// var data = "Hello world";
// console.log("First");
// console.log("second");

// function sum(a, b) {
//   console.log(a + b);
// }

// exports = "Sahil";

// console.log(module);

// ! Actual Examples Start from here
// ? Case 1:
/*
let sname = "Manav";
let age = 20;
let course = "Node JS";

module.exports = sname;
module.exports = age;
module.exports = course;
*/

// ? Case 2:
/*
let sname = "Manav";
let age = 20;
let course = "Node JS";

module.exports = {
  sname: sname,
  age: age,
  course: course,
};
*/

// ? Case 3:
/*
let sname = "Manav";
let age = 20;
let course = "Node JS";

module.exports = {
  sname,
  age,
  course,
};
*/

// ? Case 4:
/*
let sname = "Manav";
let age = 20;
let course = "Node JS";

module.exports.sname = sname;
module.exports["age"] = age;
module.exports.course = course;
*/

// ? Case 5:
// exports - Direct assignment is not possible

let sname = "Manav";
let age = 20;
let course = "Node JS";

exports.sname = sname;
exports.age = age;
exports.course = course;

exports.add = (a, b) => {
  return a + b;
};

exports.sub = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  return a / b;
};
