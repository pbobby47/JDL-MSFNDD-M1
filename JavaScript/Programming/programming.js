// ! ============== NUMBERS =================
// ? WAP to check the number even or not.
/*
let n = 10;

if (n % 2 == 0) {
  console.log("even number");
}
*/

// ? WAP to check the number odd or not.
/*
let n = 10;

if (n % 2 == 1) {
  console.log("odd number");
}
*/

// ? WAP to print 3 table till the number provided.
/*
let n = 10;

for (let i = 1; i <= n; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
*/

// ? Find the length of a number.
// ~ Case 1:
/*
let number = 456123;

let number_string = number.toString();

console.log(number);
console.log(number_string);
console.log(number_string.length);
*/

// ~ Case 2:
/*
var num = 123456;
var len = 0;
while (num > 0) {
  num = parseInt(num / 10);
  len++;
}
console.log(len);
*/

// ? WAP to log the factorial of a number.
/*
let value = 1;
for (let i = 1; i <= 5; i++){
    value *= i;
}

console.log(value);
*/

// ? WAP to get the sum of digit's factorial of a number.
// Ex: 456 ---> 4! + 5! + 6! = how much?

// ~ Case 1: with type casting
/*
let n = 456;
let n_string = n.toString();
let sum = 0;

for (let num of n_string) {
  // get the factorial
  let num_number = Number(num);
  let fact = 1;

  for (let i = 1; i <= num_number; i++) {
    fact *= i;
  }

  sum += fact;
}

console.log(sum);
*/

// ~ Case 2: without type casting
/*
let n = 456;
let sum = 0;

while (n > 0) {
  last_digit = n % 10;
  // fact starts
  let fact = 1;
  for (let i = 1; i <= last_digit; i++) {
    fact *= i;
  }

  sum += fact;
  // fact ends
  n = parseInt(n / 10);
}
console.log(sum);
*/

// ? WAP to find the sum of even digits in a number
// Ex: 45678513 --> 4 + 6 + 8 = how much?
/*
let n = 45678513;
let sum = 0;

while (n > 0) {
  last_digit = n % 10;

  // checking even or not
  if (last_digit % 2 == 0) {
    sum += last_digit;
  }

  n = parseInt(n / 10);
}

console.log(sum);
*/

// ? WAP to find the odd of even digits in a number
// Ex: 45678513  ---> 5 + 7 + 5 + 1 + 3 = how much?
/*
let n = 45678513;
let sum = 0;

while (n > 0) {
  last_digit = n % 10;

  // checking odd or not
  if (last_digit % 2 == 1) {
    sum += last_digit;
  }

  n = parseInt(n / 10);
}

console.log(sum);
*/

// ? WAP to find the number is palindrome or not
// ~ Case 1: with type casting
/*
let n = 121;
// let rev = n.toString();
// rev = rev.split("");
// rev = rev.reverse();
// rev = rev.join("");
// rev = Number(rev);

let rev = n.toString().split("").reverse().join("");

console.log(rev);
if (n == rev) {
  console.log("Palindrome number");
} else {
  console.log("Not a palindrome Number");
}
*/

// ~ Case 2: without type casting
/*
let n = 121;
let n_copy = 121;
let rev = 0;

while (n > 0) {
  last_digit = n % 10;

  rev = rev * 10 + last_digit;

  n = parseInt(n / 10);
}
console.log(rev);

if (n_copy == rev) {
  console.log("Palindrome number");
} else {
  console.log("Not a palindrome Number");
}
*/

// ? WAP to find the largest number amount 3 numbers without using inbuilt methods.
// Ex: n1 = 10 , n2 = 20 , n3 = 30 ----> n3.

// ? WAP to find the largest number amount 5 numbers without using inbuilt methods.

// ? WAP to check if the number is Armstrong number or Not.
// Ex: 153 ---> 1**3 + 5**3 + 3**3 = 153 then its an armstrong number.
/*
let n = 90;
let n_copy = n;
let n_length = n.toString().length;
let sum = 0;

while (n > 0) {
  last_digit = n % 10;

  sum += last_digit ** n_length;

  n = parseInt(n / 10);
}

if (sum == n_copy) {
  console.log(n_copy, "is an armstrong number");
} else {
  console.log(n_copy, "is not an armstrong number");
}
*/

// ? WAP to check the number is a strong number or not.
// A strong number is a number where the sum of the factorial of each digit equals the original number.
// For example, 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145.
/*
let n = 45;
let n_copy = n;
let sum = 0;

while (n > 0) {
  let last_digit = n % 10;
  let fact = 1;

  for (let i = 1; i <= last_digit; i++) {
    fact *= i;
  }

  sum += fact;
  n = parseInt(n / 10);
}

if (n_copy == sum) {
  console.log(n_copy, "is a strong number");
} else {
  console.log(n_copy, "is not a strong number");
}
*/

// ? WAP to check the number is a perfect number or not
// A perfect number is a positive integer that is equal to the sum of its proper divisors,
// that is, the sum of its positive divisors excluding the number itself.
// For instance, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// 6, 28, 496, and 8128
/*
let n = 496;
let sum = 0;

for (let i = 1; i <= n / 2; i++) {
  if (n % i === 0) {
    sum += i;
  }
}

if (n == sum) {
  console.log(n, "is a perfect number");
} else {
  console.log(n, "is not a perfect number");
}
*/

// ? WAP to check the number is a prime number or not
// It is a number must be divisible by 1 and itself only.
/*
let n = 37;
let count = 0;
if (n <= 1) {
  console.log(n, "is not a prime number");
} else if (n == 2 || n == 3) {
  console.log(n, "is a prime number");
} else {
  for (let i = 2; i <= n / 2; i++) {
    // console.log(i);

    if (n % i == 0) {
      console.log(n, "is not a prime number");
      // console.log(n, "is divisible by", i);
      count++;
      break;
    }
  }

  if (count == 0) {
    console.log(n, "is a prime number");
  }
}
*/

// ? WAP to print Fibonacci Series till n number.
/*
let n = 500;

let a = 0;
let b = 1;

for (let i = 0; i <= n; i++) {
  sum = a + b;

  a = b;
  b = sum;

  if (a > n) {
    break;
  }

  console.log(a);
}
*/

// ? WAP to print FizzBuzz till n number.
// Rule: if number % 3 ===0 then Fizz
// Rule: if number % 5 ===0 then Buzz
// Rule: if number % 3 ===0  and number % 5 ===0 then FizzBuzz
// Rule: if not same number as string.
/*
let n = 50;
let ar = [];

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    ar.push("FizzBuzz");
  } else if (i % 3 === 0) {
    ar.push("Fizz");
  } else if (i % 5 === 0) {
    ar.push("Buzz");
  } else {
    ar.push(i);
  }
}
console.log(ar);
*/

// ! ============== STRINGS =================
// ? i/o ---> "JavaScript";
// ? o/p ---> "tpircSavaJ";
// ~ With inbuilt Functions
/*!
let input = "JavaScript";
// let input_ar = input.split("");
// let reverse_ar = input_ar.reverse();
// let reverse_str = reverse_ar.join("");

let result = input.split("").reverse().join("");
console.log(result);
*/

// ~ Without inbuilt Functions
/*
let input = "JavaScript";
let result = "";

for (let char of input) {
  result = char + result;
}
console.log(result);
*/

// ? i/o ---> "JavaScript";
// ? o/p ---> "JvSrp";
// hint ---> print even index characters
/*
let input = "JavaScript";
let output = "";
for (let i = 0; i < input.length; i++) {
  console.log("I am looping ", i);
  if (i % 2 == 0) {
    // console.log(i, input[i]);
    output += input[i];
  }
}

console.log(output);
*/
/*
let input = "JavaScript";
let output = "";
for (let i = 0; i < input.length; i = i + 2) {
  console.log(i, input[i]);

  output += input[i];
}

console.log(output);
*/

// ? i/o ---> "JavaScript is the Best";
// ? o/p ---> "JavaScript+is+the+Best";
/*
let input = "JavaScript is the Best";

output = input.replaceAll(" ", "+");
console.log(output);
*/
/*
let input = "JavaScript is the Best";
let output = "";
for (let char of input) {
  if (char == " ") {
    output += "+";
  } else {
    output += char;
  }
}

console.log(output);
*/

// ? i/o ---> "I Love JavaScript";
// ? o/p ---> "JavaScript Love I";
// ~ With inbuilt Functions
/*
let input = "I Love JavaScript";

let output = input.split(" ");
output = output.reverse();
output = output.join(" ");
console.log(output);
*/

// ~ Without inbuilt Functions
/*
let input = "I Love JavaScript ";
let output = "";

let word = "";

for (let char of input) {
  if (char == " ") {
    output = word + " " + output;

    word = "";
  } else {
    word += char;
  }
}
console.log(output);
*/

// ? i/o ---> "Hello World";
// ? o/p ---> { H : 1, e : 1, l : 3, o : 2, W : 1, r : 1 , d : 1 };
// Hint: count of each character
/*
let input = "Hello World";

let output = {};

for (let char of input) {
  console.log(char);

  if (char == " ") {
    continue;
  }

  if (output.hasOwnProperty(char)) { // output[char] is also a valid logic
    output[char] += 1;
  } else {
    output[char] = 1;
  }
}

console.log(output);
*/

// ? i/o ---> "JavaScriIIIpt";
// ? o/p ---> "aaiIII";
//  Hint: print only vowels
/*
let input = "JavaScriIIIpt";

let output = "";

for (let char of input) {
  if ("aeiouAEIOU".includes(char)) {
    output += char;
  }
}

console.log(output);
*/
// console.log("Manav".includes("a"));

// ? i/o ---> "JavaScript is the best";
// ? o/p ---> {a : 2 , i : 2, e : 2};
// Hint: Vowels count.
/*
let input = "JavaScript is the best";
let output = {};
for (let char of input) {
  // checking vowel or not
  if ("aeiouAEIOU".includes(char)) {
    console.log(char);

    // count logic
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
}

console.log(output);
*/

// ? WAP to find the largest substring of the string.
// Ex: "I Love JavaScript" ---> "JavaScript"
/*
let input = "I Love JavaScript, WEBTECHNOLOGY";
let ar = input.split(" ");
console.log(ar);

let largest_substring = "";

for (let element of ar) {
  if (element.length > largest_substring.length) {
    largest_substring = element;
  }
}

console.log(largest_substring);
*/
/*
let input = "Node JS Loves JavaScript, WEBTECHNOLOGY ";

let largest_substring = "";

let word = "";

for (let char of input) {
  if (char === " ") {
    // console.log("The word is ", word);

    // update largest_substring

    if (word.length > largest_substring.length) {
      largest_substring = word;
    }

    // console.log(largest_substring);
    word = "";
  } else {
    word += char;
  }
}

console.log(largest_substring);
*/

// ? WAP to remove all the spaces from the string without inbuilt functions.
// Ex: "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid";
// output: "JavaScriptJavaScriptJavaScriptIdon'tLikeJavaScript,butJavaScriptLovesme,Ican'tavoid";
/*
let input =
  "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid";

let output = "";
for (let char of input) {
  if (char != " ") {
    output += char;
  }
}

console.log(output);
*/

// ? WAP to get the count of each word
// Ex: "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid";
// output : {JavaScript: 5, I : 2, ...so on };
/*
let input =
  "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid";

let ar = input.split(" ");
// console.log(ar);

let output = {};

for (let element of ar) {
  // console.log(element);

  if (output[element]) {
    output[element] += 1;
  } else {
    output[element] = 1;
  }
}

console.log(output);
*/
/*
let input =
  "JavaScript JavaScript JavaScript I don't Like JavaScript, but JavaScript Loves me, I can't avoid ";

let output = {};

let word = "";

for (let char of input) {
  // console.log(char);

  if (char === " ") {
    console.log(word);

    // count logic
    if (output[word]) {
      output[word] += 1;
    } else {
      output[word] = 1;
    }

    word = "";
  } else {
    word += char;
  }
}
// console.log(word);

console.log(output);
*/

// ? WAP to convert the string into lowercases.
/*
let s = "I - Love - JavaScript !!! ";

console.log(s.toLowerCase());
*/
/*
let s = "I - Love - JavaScript !!! ";
let result = "";

for (let i = 0; i < s.length; i++) {
  let charCode = s.charCodeAt(i);

  if (65 <= charCode && charCode <= 90) {
    console.log(charCode);

    result += String.fromCharCode(charCode + 32);
  } else {
    result += s[i];
  }
}

console.log(result);
*/

// ? WAP to convert the string into uppercases.

// ? WAP to reverse each word in a sentence.
// Ex: i/o ---> "I Love JavaScript";
// Ex: o/p ---> "I evoL ptircSavaJ";
/*
let input = "I Love JavaScript";
let output = "";

let ar = input.split(" ");

for (let element of ar) {
  // console.log(element);
  let word = element.split("").reverse().join("");
  // console.log(word);

  output += word;
}

console.log(output);
*/
/*
let input = "I Love JavaScript ";
let output = "";

let word = "";

for (let char of input) {
  // console.log(char);

  if (char == " ") {
    // console.log(word);

    output += word + " ";
    word = "";
  } else {
    word = char + word;
  }
}

console.log(input);
console.log(output);
*/

// ! ================ ARRAYS ===============

// ? WAP to find the maximum number in an array.
/*
var ar = [10, 50, 30, 80, 90, 40, 20];
// console.log(ar);

var max_number = ar[0];

for (let num of ar) {
  if (num > max_number) {
    max_number = num;
  }
}

console.log(max_number);
*/

// ? WAP to find the minimum number in an array.
/*
var ar = [10, 50, 30, 80, 90, 40, 20, 5, 7];

var min_number = ar[0];

for (let num of ar) {
  if (num < min_number) {
    min_number = num;
  }
}

console.log(min_number);
*/

// ? WAP to remove duplicates from an array.
/*
var ar = [10, 20, 30, 70, 80, 60, 60, 80, 10, 40, 50, 30];
// console.log(ar);

var new_ar = [];

for (let element of ar) {
  if (new_ar.includes(element)) {
    continue;
  }
  new_ar.push(element);
}

console.log(new_ar);
*/
/*
var ar = [10, 20, 30, 70, 80, 60, 60, 80, 10, 40, 50, 30];

var result_obj = {};

for (let i = 0; i < ar.length; i++) {
  if (result_obj[ar[i]]) {
    ar.splice(i, 1);
    i = i - 1;
  } else {
    result_obj[ar[i]] = 1;
  }
}

console.log(result_obj);

console.log(ar);
*/

// ? WAP to merge to arrays without inbuilt functions.
/*
var ar = [10, 20, 30, 40, 50];
var ar2 = [60, 70, 80];

for (let element of ar2) {
  ar.push(element);
}

console.log(ar);
*/

// ? WAP to check 2 arrays are equal or not.
// ? WAP to find the length of an array without length property.
// ? WAP to print the count of each element in an array
// ? WAP to list repeatative elements in an array.
// ? check if an array is subset of another array.

// pending
// Spread, JSON methods

// ? WAP to list all evens at end of an array.
/*
var ar = [10, 20, 30, 50, 45, 75, 86, 98, 11, 15, 14];
console.log(ar);

var new_ar = [];

for (let element of ar) {
  if (element % 2 == 0) {
    console.log(element);

    new_ar.push(element);
  } else {
    new_ar.unshift(element);
  }
}

console.log(new_ar);
*/
/*
var ar = [10, 20, 30, 50, 45, 75, 86, 98, 11, 15, 14];

var odds = [];
var evens = [];

for (let element of ar) {
  if (element % 2 == 0) {
    evens.push(element);
  } else {
    odds.push(element);
  }
}

ar.splice(0, ar.length, ...odds, ...evens);

console.log(ar);
*/

// ! ============= OBJECTS ===============
// ? WAP to find even length key's in an object.
/*
var obj = {
  sname: "sonu",
  age: 22,
  course: "Node JS",
  skills: "MERN Stack",
};

for (let key in obj) {
  if (key.length % 2 == 0) {
    console.log(key);
  }
}
*/

// ? WAP to print string based values stored in an object.
/*
var obj = {
  sname: "sonu",
  age: 22,
  course: "Node JS",
  skills: ["html", "css", "js"],
  dob: 2002,
};

for (let key in obj) {
  if (typeof obj[key] == "string") {
    console.log(obj[key]);
  }
}
*/

// ? WAP to print array based values stored in an object.
/*
var obj = {
  sname: "sonu",
  age: 22,
  course: "Node JS",
  skills: ["html", "css", "js"],
  dob: { year: 2002, month: 10, date: 12 },
};

for (let key in obj) {
  if (Array.isArray(obj[key])) {
    console.log(obj[key]);
  }
}
*/

// ? WAP to print both keys and values in an array format of every property of an object.
/*
var obj = {
  sname: "sonu",
  age: 22,
  course: "Node JS",
  skills: ["html", "css", "js"],
  dob: { year: 2002, month: 10, date: 12 },
};

// console.log(Object.entries(obj));

var result = [];

for (let key in obj) {
  result.push([key, obj[key]]);
}

console.log(result);
*/

// ? WAP to check an object contains nested object or not.
/*
var obj = {
  sname: "sonu",
  age: 22,
  course: "Node JS",
  skills: ["html", "css", "js"],
  dob: { year: 2002, month: 10, date: 12 },
};

for (let key in obj) {
  if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
    console.log(obj[key]);
  }
}
*/

// ? WAP to merge 2 objects
