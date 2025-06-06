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

const fs = require("fs");
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

// ~ mkdirSync()
// create a folder with a name "data".

// fs.mkdirSync("./data");

// create a folder with a name "check".

// fs.mkdirSync("./check");

// Create 2 folders f1 and f2 in check folder

// fs.mkdirSync("./check/f1");
// fs.mkdirSync("./check/f2");

// ~ rmdirSync():
// remove f1 folder
// fs.rmdirSync("./check/f1")

// remove f2 folder
// fs.rmdirSync("./check/f2")

// remove check folder
// fs.rmdirSync("./check");

// ~ readdirSync():
// console.log("Files / folders in data is ", fs.readdirSync("./data"));

// console.log("Files / folders in user-defined modules is ", fs.readdirSync("./user-defined modules"));

// console.log(
//   "Files / folders in Node Js is ",
//   fs.readdirSync("./")
// );

// ~ readFile():
// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.readFile("./data2.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// ! ================= http module ===================
/*
- In Node.js, a server refers to a program that listens for incoming network requests (typically HTTP) and sends back responses.
- It's a fundamental part of web application development, enabling communication between clients (like web browsers) and the backend logic.
- Node.js provides built-in modules, notably the http module, to create these servers.

response methods:
  - write() : It will return a piece of data to the client, this method can be used a lot of times.
  Basically, it will send the as chunks(peieces).

  - end() : It indicates end of response. Optionally if we need we can send the data from here also.
*/

// ? Example 1:
/*!
// ? Step 1:
const http = require("http");
// console.log(http);

// ? Step 2:
const server = http.createServer((request, response) => {
  console.log("A new Request recieved...");
  console.log(request.url);

  response.write("Hii, I am Manav From Server \n");
  response.write("Hii, I am Rahul From Server \n");
  response.write("Hii, I am Shivam From Server \n");
  response.write("Hii, I am Sahil From Server \n");

  // response.end("Hello world from my frist Server...");
  response.end("end of response");
});
// console.log(server);

// ? Step 3:
server.listen(8000, "127.0.0.1", () => {
  console.log("server has started on port 8000");
});
*/

// ? Example 2:
/*
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A new Request received");

  response.end("End");
});

const PORT = 8000;
const hostname = "127.0.0.1";

server.listen(PORT); // hostname and callback function are optionals.
*/

// ? Example 3:
/*
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A new Request received");

  // response.end("<h1>Welcome to Node JS Class</h1>");
  response.end(
    `<h1 style="text-align:center; color:red">Welcome to <u>Node JS</u> Class</h1>`
  );
});

const PORT = 8000;
const hostname = "127.0.0.1";

server.listen(PORT, hostname, () => {
  console.log(`Server has started on ${hostname}:${PORT}`);
});
*/

// ! ====== ROUTING in NODE JS =========
/*
- Routing in Node.js involves directing incoming HTTP requests to specific functions or endpoints based on the URL path and HTTP method (e.g., GET, POST).
- This process allows your application to handle different actions, such as displaying content, submitting forms, or interacting with databases, based on the requested URL.
- Request Object (req):
Contains information about the incoming request,
including the URL path (req.url),
HTTP method (req.method),
and headers.
*/

// ? Example 1:
/*
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A new Request received");
  console.log(request.url);
  console.log(request.method);

  let path = request.url;

  if (path == "/" || path == "/home") {
    response.end("This is Index Page");
  } else if (path == "/about") {
    response.end("This is About Page");
  } else {
    response.end("Please request for home or about pages");
  }
});

const PORT = 8000;
const hostname = "127.0.0.1";

server.listen(PORT, hostname, () => {
  console.log(`Server has started on ${hostname}:${PORT}`);
});
*/

// ? Example 2:
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A new Request received");
  console.log(request.url);
  console.log(request.method);

  let path = request.url;

  if (path == "/" || path == "/home") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Home Page </h1>"
    );
  } else if (path == "/about") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is About Page </h1>"
    );
  } else if (path == " /contact") {
    // task
  } else if (path == " /login") {
    // task
  } else if (path == " /users") {
    // task
  } else if (path == " /products") {
    // task
  } else {
    response.end(
      `<h1 style='text-align:center; color:red'> Sorry, Page Not Found </h1>`
    );
  }
});

const PORT = 8000;
const hostname = "127.0.0.1";

server.listen(PORT, hostname, () => {
  console.log(`Server has started on ${hostname}:${PORT}`);
});
