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
/*
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("A new Request received");
  console.log(request.url);
  console.log(request.method);

  let path = request.url.toLocaleLowerCase();

  if (path == "/" || path == "/home") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Home Page </h1>"
    );
  } else if (path == "/about") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is About Page </h1>"
    );
  } else if (path == "/contact") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Contact Page </h1>"
    );
  } else if (path == "/login") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Login Page </h1>"
    );
  } else if (path == "/users") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Users Page </h1>"
    );
  } else if (path == "/products") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Products Page </h1>"
    );
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
*/

// ? Example 3:
// How to return HTML as response.
/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("A new Request received");
  console.log(request.url);
  console.log(request.method);

  let path = request.url.toLocaleLowerCase();

  if (path == "/" || path == "/home") {
    const home = fs.readFileSync("./templates/Home.html", "utf-8");
    response.end(home);
  } else if (path == "/about") {
    const about = fs.readFileSync("./templates/About.html", "utf-8");
    response.end(about);
  }
  // Task - contact page, login page , users page, products page
  else if (path == "/contact") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Contact Page </h1>"
    );
  } else if (path == "/login") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Login Page </h1>"
    );
  } else if (path == "/users") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Users Page </h1>"
    );
  } else if (path == "/products") {
    response.end(
      "<h1 style='text-align:center; color:blue'> This is Products Page </h1>"
    );
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
*/

// ? Example 4:
/* 
- Here we created a common template and we replacing data and sending to the client.
- we learnt about routing types 
    - File based
    - Resourse based
response object methods
  - setHeader
  - statusCode
  - writeHead 
*/
/*
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url.toLowerCase();
  console.log(url);

  if (url == "/" || url == "/home") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "HOME");
    html = html.replaceAll("{{%CONTENT%}}", "HOME");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(html);
  } else if (url == "/testheaders") {
    // syntax: response.setHeader(key, value);
    // res.setHeader("content-type", "text/plain");
    // res.setHeader("sname", "Ajit");
    // res.setHeader("secret-token", "as5d4f35asdg3as5g2Dasdg13a5sg1");

    // res.setHeader("content-type", "text/html");
    // res.setHeader("content-type", "application/json");

    // res.statusCode = 201;

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end("<h1>Testing Response</h1>");
  } else if (url == "/about") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "ABOUT");
    html = html.replaceAll("{{%CONTENT%}}", "ABOUT");

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(html);
  } else if (url == "/contact") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "Contact");
    html = html.replaceAll("{{%CONTENT%}}", "Contact");

    res.end(html);
  } else if (url == "/login") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "Login");
    html = html.replaceAll("{{%CONTENT%}}", "Login");

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(html);
  } else if (url == "/products") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "Products");
    html = html.replaceAll("{{%CONTENT%}}", "Products");

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(html);
  } else if (url == "/users") {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "Users");
    html = html.replaceAll("{{%CONTENT%}}", "Users");

    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(html);
  } else if (url == "/api/products") {
    let products = fs.readFileSync("./data/products.json", "utf-8");

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(products);
  } else if (url == "/api/users") {
    let users = fs.readFileSync("./data/users.json", "utf-8");
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(users);
  } else {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    html = html.replaceAll("{{%TITLE%}}", "Page Not Found");
    html = html.replaceAll("{{%CONTENT%}}", "Error");

    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end(html);
  }
});

const PORT = 8000;
const HOSTNAME = "127.0.0.1";
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server has started ${HOSTNAME}:${PORT}`);
});
*/

// ! ============== Task =================
/*
  - Features
      - Home ✅
      - About ✅
      - Contact ✅
      - Login ✅
      - Products Page ✅
      - GET - Products API Data ✅
      - Users Page ❌ Home Work
      - GET - Users API Data✅
*/
/*
const http = require("http");
const fs = require("fs");

let html = fs.readFileSync("./templates/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
let productsCard = fs.readFileSync("./templates/ProductCard.html", "utf-8");
let productsHTML = fs.readFileSync("./templates/Products.html", "utf-8");

let productsResultArray = products.map(product => {
  let result = productsCard.replaceAll("{{%IMAGELINK%}}", product.image);
  result = result.replaceAll("{{%TITLE%}}", product.title.slice(0, 30) + "...");
  result = result.replaceAll("{{%PRICE%}}", product.price);

  return result;
});

// console.log(productsResultArray.join(""));

const server = http.createServer((req, res) => {
  let url = req.url.toLowerCase();

  if (url == "/" || url == "/home") {
    let result = html.replaceAll("{{%TITLE%}}", "Home");
    result = result.replaceAll("{{%CONTENT%}}", "Home");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/about") {
    let result = html.replaceAll("{{%TITLE%}}", "About");
    result = result.replaceAll("{{%CONTENT%}}", "About");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/contact") {
    let result = html.replaceAll("{{%TITLE%}}", "Contact");
    result = result.replaceAll("{{%CONTENT%}}", "Contact");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/login") {
    let result = html.replaceAll("{{%TITLE%}}", "Login");
    result = result.replaceAll("{{%CONTENT%}}", "Login");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/products") {
    let productsContainer = `
    <section style="display:flex;flex-wrap:wrap;justify-content: center; align-items: center;gap:10px">
    ${productsResultArray.join("")}
    </section>  
    `;

    let result = productsHTML.replaceAll("{{%TITLE%}}", "Products Page");
    result = result.replaceAll("{{%CONTENT%}}", productsContainer);

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/users") {
    let result = html.replaceAll("{{%TITLE%}}", "Users");
    result = result.replaceAll("{{%CONTENT%}}", "Users");

    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end(result);
  } else if (url == "/api/products") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    // res.end({
    //   status: "success",
    //   count: products.length,
    //   data: products,
    // });

    // ! Error:
    //  The "chunk" argument must be of type string or an instance of Buffer or Uint8Array.
    // Received an instance of Object
    // summary: res.end must return only string, so finally we have to convert the object into string and we have return as response.
    // so we have to use JSON.Stringfy();

    res.end(
      JSON.stringify({
        status: "Success",
        count: products.length,
        data: products,
      })
    );
  } else if (url == "/api/users") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "Success",
        count: users.length,
        data: users,
      })
    );
  } else {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.end("<h1>Sorry, Page Not Found..</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started");
});
*/

// ! ================ URL module ============
/*
 - It helps us to parse the request url 
Link: https://nodejs.org/api/url.html#url-strings-and-url-objects
*/
/*
const http = require("http");
const url = require("url");
const fs = require("fs");

// console.log(url);

let products = JSON.parse(fs.readFileSync("./data/products.json", "utf8"));

const server = http.createServer((req, res) => {
  console.log(req.url);

  let parsedURL = url.parse(req.url, true);
  console.log(parsedURL);

  let { query, pathname } = parsedURL;

  if (pathname == "/products") {
    let result = products;

    // filering data based on category
    if (query.category) {
      console.log("before", result);
      result = result.filter(product => product.category == query.category);
      console.log("after", result);
    }

    // filtering data based on id
    if (query.id) {
      result = result.filter(product => product.id == parseInt(query.id));
      // console.log(result);

      if (result.length == 0) {
        res.writeHead(200, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({
            status: "success",
            message: "No Products found with the id provided",
            count: result.length,
            data: result,
          })
        );
      }
    }

    // filering data based on title
    if (query.title) {
      result = result.filter(product => {
        // console.log(product.title);
        return product.title.includes(query.title);
      });
    }

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "success",
        message: "This is Products data",
        count: result.length,
        data: result,
      })
    );
  } else {
    res.end(
      JSON.stringify({
        status: "fail",
        message: "try again with new path address",
      })
    );
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has started");
});
*/

// ! ========== TASK ================

/*
 Same as above do for users data also

 Filtering data based on
  - id
  - email
  - firstname
  - lastname
  - city
*/
