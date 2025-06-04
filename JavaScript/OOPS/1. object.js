// ! 1. Object Literals
var obj = {
  sname: "Sahil",
  age: 20,
  course: "Node JS",
};
console.log(obj);

// ! 2. new keyword
var obj = new Object();
console.log(obj);

obj.sname = "Ajit";
obj.age = 20;
obj.course = "Node JS";

console.log(obj);

// ! construction function (ES5)  / class (ES6)
function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}
let s1 = new Student("Rahul", 21, "Node JS");
console.log(s1);
//  class (ES6) -  will see in class.js file
