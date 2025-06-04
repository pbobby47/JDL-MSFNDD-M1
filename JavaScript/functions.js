// ! Recursive Function
// A function calls itself
/*! 
function functionName(params){

    // base condition
    if() { //code };

    // recursive call
    return functionName(updatedparams);
}
*/

// ? Example 1:
// wap to print natural number till n.
/*
var ar = [];
function printNaturals(n) {
  // base condition
  console.log(n);
  ar.unshift(n);
  if (n === 0 || n === 1) {
    return;
  }

  return printNaturals(n - 1);
}

printNaturals(10);
console.log(ar);
*/

// ? Example 2:
// WAP to print factorial of a number.

var fact = 1;
// 1 * 5 = 5
// 5 * 4 = 20
// 20 * 3 = 60
// 60 * 2 = 120
// 120 * 1 = 120

function factorial(n) {
  fact = fact * n;

  if (n == 0 || n == 1) return fact;

  return factorial(n - 1);
}
console.log(factorial(5));

// ! Generator Function
// It helps us to pause the function and it waits for the next() call.
/*! 
function* functionName(){
    // code
    yeild "something"
    yeild "something"
    yeild "something"
}

let f = functionName();

f.next(); // { value: "___", done: bool }

*/
/*
function* greet() {
  yield "Hii";
  yield "Hello";
  yield "Namaste";

  return "Completed";
}

// console.log(greet());

let g = greet();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
*/

var students = [
  { sname: "Manav", course: "React JS" },
  { sname: "Rahul", course: "Node JS" },
  { sname: "Ajit", course: "Express JS" },
];

function* callStudents() {
  for (let student of students) {
    yield student;
  }

  return "All student are done with mock";
}

let s = callStudents();
console.log(s);
console.log(s.next());
console.log(s.next());
console.log(s.next());
