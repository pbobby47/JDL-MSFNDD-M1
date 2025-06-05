// ! ========= readline Module ==========
/*
This module helps us to get the user input.
It is an in built module provided by Node Js
It's not required to install anything. 
*/

/*! 
// ? Step 1: Import
const readline = require("readline");
// console.log(readline);

// ? Step 2:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// console.log(rl);

// ? step 3:
rl.question("What is your Name: ", name => {
  console.log(name);

  rl.close();
});
*/

// ? Example 1:
// take user input - userName, userEmail, userCourse.
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your Name : ", userName => {
  console.log(userName);

  rl.question("What is your Email : ", userEmail => {
    console.log(userEmail);

    rl.question("What is you Course: ", userCourse => {
      console.log(userCourse);
      rl.close();
    });
  });
});
*/

// ? Example 2:
// user input ---> numberOne , numberTwo then perform sum then course and print
/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Number 1: ", numberOne => {
  console.log(numberOne);

  rl.question("Enter Number 2: ", numberTwo => {
    console.log(numberTwo);

    let sum = parseInt(numberOne) + parseInt(numberTwo);
    console.log(sum);

    rl.question("Course Name: ", course => {
      console.log(course);

      rl.close();
    });
  });
});

// Emitting an event
rl.on("close", () => {
  console.log("Thank You for your Responses...");
});
*/

// ! ====== prompt-sync =====
/*
It helps us to take user input
It is a third party module
To install --> npm i prompt-sync
*/

// ? Example 1:
/*
const ps = require("prompt-sync");
// console.log(ps);

const prompt = ps({
  sigint: true,
});
// console.log(prompt);

let userName = prompt("Enter Your Name: ");
console.log(userName);

let userEmail = prompt("Enter Your Email: ");
console.log(userEmail);

let userPassword = prompt("Enter Your Password: ");
console.log(userPassword);
*/

// ? Example 2:
/*
const prompt = require("prompt-sync")({
  sigint: true,
});

let numberOne = parseInt(prompt("Enter Number One: "));
let numberTwo = parseInt(prompt("Enter Number Two: "));

console.log(numberOne);
console.log(numberTwo);
*/

// ! ========== fs module =======
/*
It helps us to work with file system.
We can create, read, update, delete the files / folders and etc information provided.

It is an inbuilt module
*/

// const fs = require("fs");
// console.log(fs);

// ~ readFileSync():
// let input = fs.readFileSync("./data.txt", "utf-8");
// console.log(input);

// ~ writeFileSync():
// let content = "Hello Ajit";
// fs.writeFileSync("./data.txt", content);
// fs.writeFileSync("./result.txt", content);

// ~ appendFileSync():
// let content = `I am the new Data ${new Date()} \n`;
// fs.appendFileSync("./data.txt", content);

// ~ task
// read the data of data.txt file and keep in result.txt file.
// let input = fs.readFileSync("./data.txt", "utf-8");

// fs.appendFileSync("./result.txt", input);

// ~ task
// read the user input and store in result.txt file

// const prompt = require("prompt-sync")({ sigint: true });

// let input = prompt("Enter data to store in result file: ");
// fs.appendFileSync("./result.txt", `${input} \n`);

// ~ unlinkSync():
// fs.unlinkSync("./result.txt");

// ~ copyFileSync():
// fs.copyFileSync("./data.txt", "./data-copy.txt")

// ~ renameSync():
// fs.renameSync("./data-copy.txt", "result.txt");

// ~ task
// get jsondata and apply looping on it.

// let productsData = fs.readFileSync("./products.json", "utf-8");
// console.log(productsData);

// let jsProductsData = JSON.parse(productsData);
// console.log(jsProductsData);

// ~ task
// checkout this by entering different datatypes

// const prompt = require("prompt-sync")({ sigint: true });

// let input = JSON.parse(prompt("Enter data to store in result file: "));

// console.log(input);
