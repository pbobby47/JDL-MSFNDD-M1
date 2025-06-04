//! In JavaScript everything is an Object.
/*
1. lets create any type of datatype.
2. Every thing contains inbuilt hidden property. (prototype).
*/

var n = 10;
console.log(n);
// n ---> Number ---> Object ---> null
// console.log(Number(456));

let n1 = new Number(10);
console.log(n1);

var s = "Sahil";
console.log(s.split(""));

console.log(String());
// s ---> String ---> Object ---> null

var ar = [10, 20, 30, 40, 50];
console.log(ar);
// ar ---> Array ---> Object ---> null
