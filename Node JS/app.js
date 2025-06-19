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
    - Resource based
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
  // boolean true - It helps to parse query string in to query object.
  console.log(parsedURL);

  let { query, pathname } = parsedURL;

  if (pathname == "/api/products") {
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

// ! A small update as we are working with api data start with /api/xxxx

// ! ================ Task ===============
/*
  - Requirement
    - Products Page
        - Here list all the products and use a button "view more"
        - by clicking on "view more" button navigate to single product page

    - Users Page
        - Here list all the users and use a button "view more"
        - by clicking on "view more" button navigate to single user page

    - single product page
        - with all possible information
        - use a button "show all products"
        - by clicking on "show all products" navigate to products page

    - single user page
        - with all possible information
        - use a button "show all users"
        - by clicking on "show all users" navigate to users page

    - GET - Products Page
    - GET - Single Product Page, filtering based on id
    - GET - Users Page
    - GET - Single User Page, filtering based on id
*/
/*
const http = require("http");
const fs = require("fs");
const url = require("url");

let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

const productCard = fs.readFileSync("./templates/ProductCard.html", "utf-8");
const SingleProductCard = fs.readFileSync(
  "./templates/SingleProductCard.html",
  "utf-8"
);

console.log(productCard);

const server = http.createServer((req, res) => {
  let parsedURL = url.parse(req.url, true);
  console.log(parsedURL);

  let { pathname, query } = parsedURL;

  if (pathname === "/" || pathname == "/dashboard") {
    res.end("<h1>This is Dashboard</h1>");
  }

  // Route for products html data
  else if (pathname === "/products") {
    let result = products; // 20 products

    res.writeHead(200, {
      "content-type": "text/html",
    });

    if (query.id) {
      result = result.filter(product => product.id == query.id);
      let productshtmlArray = result.map(product => {
        let item = SingleProductCard.replace("{{%IMAGELINK%}}", product.image);
        item = item.replace("{{%TITLE%}}", product.title);
        item = item.replace("{{%PRICE%}}", product.price);
        item = item.replace("{{%ID%}}", product.id);

        return item;
      });

      let productsContainer = `
    <section style="display:flex;flex-wrap:wrap;justify-content: center;flex-direction:column; align-items: center;gap:10px">
    ${productshtmlArray.join("")}
    </section>
    `;

      res.end(productsContainer);
    } // 1 product
    else {
      //? html code
      let productshtmlArray = result.map(product => {
        let item = productCard.replace("{{%IMAGELINK%}}", product.image);
        item = item.replace("{{%TITLE%}}", product.title);
        item = item.replace("{{%PRICE%}}", product.price);
        item = item.replace("{{%ID%}}", product.id);

        return item;
      });

      console.log(productshtmlArray);
      console.log(productshtmlArray.length);

      let productsContainer = `
    <section style="display:flex;flex-wrap:wrap;justify-content: center; align-items: center;gap:10px">
    ${productshtmlArray.join("")}
    </section>
    `;

      res.end(productsContainer);
    }
  } else if (pathname === "/users") {
    res.end("<h1>This is Products</h1>");
  }

  // Route for products api data
  else if (pathname === "/api/products") {
    let result = products;

    if (query.id) {
      result = result.filter(product => product.id == query.id);
    }

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "success",
        count: result.length,
        data: result,
      })
    );
  }

  // Route for users api data
  else if (pathname === "/api/users") {
    res.end("<h1>This is Products</h1>");
  } else {
    res.end("<h1 style='color:red'>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has started on 127.0.0.1:8000");
});
*/

// ! ============= Events ================
/*
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  res.end("Hii world");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has started");
});

server.on("close", () => {
  console.log("Server has closed");
});

setTimeout(() => {
  server.close();
}, 10000);
*/

// ! ============ Custom Events ===============
// Steps to be followed
/*!
// ? Step 1:
const events = require("events");

const MyEmitter = new events.EventEmitter();
console.log(MyEmitter);

// ? Step 2:
// register events
MyEmitter.on("someEventName", () => {
  console.log("SomeEventName Callback executed");
});

// ? Step 3:
MyEmitter.emit("someEventName");

console.log(MyEmitter);
*/

// ? Example 1:
/*
const events = require("events");
const MyEmitter = new events.EventEmitter();

MyEmitter.on("sayHii", () => {
  console.log("I am saying 'Hii'");
});

MyEmitter.on("sayBye", () => {
  console.log("I am saying 'Bye'");
});

MyEmitter.emit("sayHii");
MyEmitter.emit("sayHii");
MyEmitter.emit("sayBye");
*/

// ? Example 2:
/*
const events = require("events");
const MyEmitter = new events.EventEmitter();

// Register events
MyEmitter.on("sayHii", () => {
  console.log("I am saying 'Hii'");
});

MyEmitter.on("sayHii", () => {
  console.log("I am saying 'Hii' From callback 2");
});

MyEmitter.on("sayHii", () => {
  console.log("I am saying 'Hii' From callback 3");
});

MyEmitter.on("sayBye", () => {
  console.log("I am saying 'Bye'");
});

MyEmitter.on("greet", (name, course, fee, discount) => {
  console.log(`
    Hello ${name}, you have opted for ${course} course, which has a discount of ${discount} on ${fee}
    `);
});

MyEmitter.on("greet", (name, course, fee, discount) => {
  console.log("Another Operation,  i am performing for greet");
  console.log(
    `A new users details stored in database , name : ${name}, course: ${course}, fee: ${fee}, discount : ${discount}`
  );
});

// call/emit events
MyEmitter.emit("sayHii");
MyEmitter.emit("sayHii");
MyEmitter.emit("sayBye");
MyEmitter.emit("greet", "Manav", "Node JS", 500, 50);
MyEmitter.emit("greet", "Rahul", "React JS", 600, 40);

console.log(MyEmitter);
*/

// ? Example 3:
/*
const events = require("events");

const myEmitter = new events.EventEmitter();

let counter = 0;

myEmitter.on("increment_counter", () => {
  console.log("increment_counter event triggered");
  counter += 1;
  console.log("Counter value:", counter);
});

myEmitter.on("reset_counter", () => {
  console.log("reset_counter event triggered");
  counter = 0;
  console.log("Counter value:", counter);
});

myEmitter.on("decrement_counter", () => {
  console.log("decrement_counter event triggered");
  counter -= 1;
  console.log("Counter value:", counter);
});

console.log(counter);
myEmitter.emit("increment_counter");
myEmitter.emit("increment_counter");
myEmitter.emit("increment_counter");
myEmitter.emit("increment_counter");
myEmitter.emit("decrement_counter");
myEmitter.emit("decrement_counter");
myEmitter.emit("reset_counter");
*/

// ? Example 5:
/*
const events = require("events");
const myEmitter = new events.EventEmitter();

let user = {
  userName: "guest",
};

myEmitter.on("login", (userName, userEmail, userPassword) => {
  user = { ...user, userName, userEmail, userPassword };

  console.log("user login successful");
});

myEmitter.on("logout", () => {
  user = {};
  console.log("logout done");
});

myEmitter.on("getdetails", () => {
  console.log("user details are", user);
});

console.log(user);

myEmitter.emit("login", "Ajit", "a@gmail.com", "#123");
myEmitter.emit("getdetails");
myEmitter.emit("logout");
myEmitter.emit("getdetails");

console.log(myEmitter);
*/

// ? Methods:
/*
emitter.addListener(eventName, listener)
emitter.on(eventName, listener)
emitter.emit(eventName[, ...args])
emitter.listeners(eventName)
emitter.off(eventName, listener)
myEmitter.removeListener("eventName", callback);

---------------

addListener(): Similar to on(), adds a listener.
removeListener(): Removes a specific listener for a given event.
removeAllListeners(): Removes all listeners for a given event or all listeners if no event is specified.
once(): Adds a listener that will only be called once.
setMaxListeners(): Sets the maximum number of listeners allowed for one event.
listeners(): Returns an array of listeners for the specified event. 
listenerCount(): Returns the number of listeners for the specified event. 
*/
/*
const events = require("events");
const myEmitter = new events.EventEmitter();

myEmitter.addListener("login", () => {
  console.log("login....");
});

myEmitter.on("login", () => {
  console.log("login....");
});

function sendGreetMessage() {
  console.log("I am from sendGreetMessage function");
}

function addDataToDatabase() {
  console.log("I am from addDataToDatabase function");
}

function addInDiscordChannel() {
  console.log("I am from addInDiscordChannel function");
}

function randomX() {
  console.log("I am from randomX function");
}

myEmitter.on("login", sendGreetMessage);
myEmitter.on("login", addDataToDatabase);
myEmitter.on("login", addInDiscordChannel);
myEmitter.on("login", randomX);

console.log(myEmitter);
console.log(myEmitter.listeners("login"));

myEmitter.removeListener("login", randomX);
myEmitter.removeListener("login", addInDiscordChannel);

console.log(myEmitter);
*/

// ! ============= OS Module =============
/*
os.platform(): Returns the operating system platform (e.g., 'win32', 'darwin', 'linux').
os.arch(): Returns the CPU architecture (e.g., 'x64', 'arm64').
os.cpus(): Returns an array of objects containing information about each logical CPU core.
os.totalmem(): Returns the total system memory in bytes.
os.freemem(): Returns the amount of free system memory in bytes. 
os.networkInterfaces(): Returns an object containing network interfaces that have been assigned a network address. 
os.userInfo(): Returns information about the current user.
os.hostname(): Returns the hostname of the operating system.
os.homedir(): Returns the path to the home directory of the current user. 
os.tmpdir(): Returns the path to the operating system's default temporary file directory.
*/

/*
const os = require("os");
console.log(os);
*/
/*
const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024), "GB");
console.log("Hostname:", os.hostname());
console.log("User:", os.userInfo());
*/

// ! ============== Streams =================
// ? creating huge amount of data
// const fs = require("fs");

// let data = "I am the data \n";

// fs.writeFileSync("./data/large_data.txt", data.repeat(100000));

// ! ============== Readable Streams =================
// ? Case 1:
/*
  - createReadStream()
  - events
      - data
      - end
*/
/*!
const fs = require("fs");

let readStream = fs.createReadStream("./data/large_data.txt", {
  encoding: "utf-8",
  highWaterMark: 1500,
});
// console.log(readStream);

readStream.on("data", chunk => {
  console.log("New Chunk of Data is received");
  // console.log(chunk);
  console.log(chunk.length);
});

readStream.on("end", () => {
  console.log("End of All Chunks");
});
*/

// ? Case 2:
/*
  - events 
      - readable
  - methods
      - read()
*/
/*!
const fs = require("fs");

let readStream = fs.createReadStream("./data/large_data.txt", {
  encoding: "utf-8",
  highWaterMark: 1500,
});
// console.log(readStream);

let chunkCount = 0;

readStream.on("readable", () => {
  let chunk = "";
  chunkCount++;

  // console.log("New Chunk data is: ", readStream.read());

  while ((chunk = readStream.read()) != null) {
    // enter here
    console.log(chunk.length);
    console.log(chunkCount);
  }
});

readStream.on("end", () => {
  console.log("End of All Chunks");
});
*/

// ! ============== Writable Streams =================
// ? Case 1:
/*
const fs = require("fs");

const writeStream = fs.createWriteStream("./data/output_file.txt", "utf-8");

writeStream.write("I am the new Chunk 1 \n");
writeStream.write("I am the new Chunk 2 \n");
writeStream.write("I am the new Chunk 3 \n");
writeStream.write("I am the new Chunk 4 \n");
writeStream.write("I am the new Chunk 5 \n");

writeStream.end("End of Chunks");

writeStream.on("drain", () => {
  console.log("data draining");
});

writeStream.on("finish", () => {
  console.log("Write streaming is completed");
});

console.log(writeStream);
*/

// ? Case 2:
/*
const fs = require("fs");

const writeStream = fs.createWriteStream("./data/output_file.txt", "utf-8");

setTimeout(() => {
  writeStream.write("I am the new Chunk 1 \n");
}, 1000);

setTimeout(() => {
  writeStream.write("I am the new Chunk 2 \n");
}, 3000);

setTimeout(() => {
  writeStream.write("I am the new Chunk 3 \n");
}, 5000);

setTimeout(() => {
  writeStream.write("I am the new Chunk 4 \n");
}, 7000);

setTimeout(() => {
  writeStream.write("I am the new Chunk 5 \n");
}, 9000);

setTimeout(() => {
  writeStream.end("End of Chunks");
}, 11000);

writeStream.on("drain", () => {
  console.log("data draining");
});

writeStream.on("finish", () => {
  console.log("Write streaming is completed");
});

// to observe the file last line ---> tail -f pathaddress
*/

// ? pipe method
/*
const fs = require("fs");

const readStream = fs.createReadStream("./data/large_data.txt", "utf-8");
const writeStream = fs.createWriteStream(
  "./data/another_large_file.txt",
  "utf-8"
);

readStream.pipe(writeStream);
*/

// ! ==================== Path Module ==================
// It helps us to work with directories and files regarding the path.
// The node:path module provides utilities for working with file and directory paths
/*
const path = require("path");
// console.log(path);

// ? basename:
console.log("basename :", path.basename("./data/products.json"));
console.log("basename :", path.basename("./templates/ProductCard.html"));

// ? dirname:
console.log("dirname :", path.dirname("./data/products.json"));
console.log("dirname :", path.dirname("./templates/ProductCard.html"));

// ? extname:
console.log("extname :", path.extname("./data/users.json"));
console.log("extname :", path.extname("./data/large_data.txt"));

// console.log(__dirname)
// console.log(__filename);

// ? join:
// It will join the path adddress provided.

console.log("Joined Path:", path.join("/pathA", "/pathB", "/pathC"));
console.log(
  "Joined Path:",
  path.join("/data", "/usersData", "/regularUsers", "/data.json")
);
console.log(
  "Joined Path:",
  path.join("/data", "/usersData/regularUsers", "/data.json")
);

console.log(
  "Joined Path:",
  path.join("data", "usersData/regularUsers", "data.json")
);

// ? resolve:
// It will do the task as same as join method.
// The only difference is
// Join method result ----> relative path
// resolve method result ----> absolute path
// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

console.log("Resolved Path:", path.resolve("./data/products.json"));
console.log(
  "Resolved Path:",
  path.resolve("./user-defined modules/calculator.js")
);
console.log(
  "Resolved Path:",
  path.resolve("/folderA", "folderB", "folderC", "xyz.txt")
);
console.log(
  "Resolved Path:",
  path.resolve("./folderA", "folderB", "folderC", "xyz.txt")
);

// ? relative:
// The path.relative() method returns the relative path from from to to based on the current working directory

console.log(
  "relative path:",
  path.relative("./data/products.json", "./data/users.json")
);

console.log(
  "relative path:",
  path.relative(
    "./user-defined modules/calculator.js",
    "./templates/SIngleProductCard.html"
  )
);

console.log(
  "relative path:",
  path.relative("./data/large_data.txt", "./data/output_file.txt")
);

// ? normalize:
// The path.normalize() method normalizes the given path, resolving '..' and '.' segments.

// path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// Returns: 'C:\\temp\\foo\\'

console.log(
  "normalize :",
  path.normalize(
    "./node_modules/call-bound/index.js/../package.json/../index.d.ts"
  )
);

// ? isAbsolute:
// It will check the path address is absolute or relative.

// path.isAbsolute('//server');    // true
// path.isAbsolute('\\\\server');  // true
// path.isAbsolute('C:/foo/..');   // true
// path.isAbsolute('C:\\foo\\..'); // true
// path.isAbsolute('bar\\baz');    // false
// path.isAbsolute('bar/baz');     // false
// path.isAbsolute('.');           // false

console.log("isAbsoulte :", path.isAbsolute("./data/another_large_file.txt")); // false

console.log("isAbsoulte :", path.isAbsolute("/data/another_large_file.txt")); // true

console.log("isAbsoulte :", path.isAbsolute("data/another_large_file.txt")); // false

// ? parse:
// The path.parse() method returns an object whose properties represent significant elements of the path.
// It will convert a path into an object.

console.log("parsed Path:", path.parse("./data/products.json"));
console.log("parsed Path:", path.parse("./templates/index.html"));

// ? format:
// It is reverse to a parse method
// It will convert an object into path.
// The path.format() method returns a path string from an object. This is the opposite of path.parse().

console.log(
  "format to path:",
  path.format({
    root: "",
    dir: "./data",
    base: "products.json",
    ext: ".json",
    name: "products",
  })
);

console.log(
  "format to path:",
  path.format({
    root: "",
    dir: "./templates",
    base: "index.html",
    ext: ".html",
    name: "index",
  })
);
*/

// ! ======================== Event Loop In Node JS ========================
/*!
----- Phases Overview ------
- timers: 
  this phase executes callbacks scheduled by setTimeout() and setInterval().
- pending callbacks: 
  executes I/O callbacks deferred to the next loop iteration.
- idle, prepare: 
  only used internally.
- poll: 
  retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- check: 
  setImmediate() callbacks are invoked here.
- close callbacks: 
  some close callbacks, e.g. socket.on('close', ...)

  // ! Reference: 
 1. https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

 2. https://www.builder.io/blog/visual-guide-to-nodejs-event-loop

 3. https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fspkr1vcojuaf9ho0yy06.png

  */

// ? Case 1:
/*
console.log("start");
var app = "This is my app";
console.log(app);
function A() {
  var a = 10;
  console.log(a);
  console.log("I am function A");
}

function B() {
  var b = 20;
  console.log(b);
  A();
  console.log("I am function B");
}

function C() {
  var c = 30;
  console.log(c);
  B();
  console.log("I am function C");
}

function D() {
  var d = 40;
  console.log(d);
  C();
  console.log("I am function D");
}

D();

console.log("end");
*/

// ? Case 2:
// Synchronous Tasks
/*
function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

sayHii();
sayBye();

console.log(a);
console.log(b);
*/

// ? Case 3:
// Synchronous Tasks + Timers
/*
function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

setTimeout(function Timeer2() {
  console.log("I am timer 2s");
}, 2000);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

setInterval(function IntervalTimer1_5() {
  console.log("I am Interval 1.5s ");
}, 1500);

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

sayHii();
sayBye();

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setTimeout(function Timer5() {
  console.log("I am timer 5s");
}, 5000);

console.log(a);
console.log(b);
*/

// ? Case 4:
// Synchronous Tasks + Timer phase + poll phase
/*
const fs = require("fs");

function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

fs.readFile("./data/products.json", () => {
  console.log("I am from Fs Callback function");
});

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

sayHii();
sayBye();

console.log(a);
console.log(b);
*/

// ? Case 5:
// Synchronous Tasks + Timer phase + poll phase + check phase
/*
const fs = require("fs");

setImmediate(() => {
  console.log("I am setImmediate Callback - 1 ");
});

function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

setImmediate(() => {
  console.log("I am setImmediate Callback - 2 ");
});

fs.readFile("./data/products.json", () => {
  console.log("I am from Fs Callback function");
});

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setImmediate(() => {
  console.log("I am setImmediate Callback - 3 ");
});

sayHii();
sayBye();

console.log(a);
console.log(b);
*/

// ? Case 6:
// Synchronous Tasks + Timer phase + poll phase + check phase + micro Task Queue (process.nextTick)
/*
const fs = require("fs");

setImmediate(() => {
  console.log("I am setImmediate Callback - 1 ");
});

function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

function sayBye() {
  console.log("I am function Bye");
}

var b = 20;

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 0");
});

setImmediate(() => {
  console.log("I am setImmediate Callback - 2 ");
});

fs.readFile("./data/products.json", () => {
  console.log("I am from Fs Callback function");
});

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 1");
});

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setImmediate(() => {
  console.log("I am setImmediate Callback - 3 ");
});

sayHii();
sayBye();

console.log(a);
console.log(b);

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 2");
});
*/

// ? Case 7:
// Synchronous Tasks + Timer phase + poll phase + check phase + micro Task Queue (process.nextTick) +  micro Task Queue (promise callbacks)

const fs = require("fs");

setImmediate(() => {
  console.log("I am setImmediate Callback - 1 ");
});

function sayHii() {
  console.log("I am function Hii");
}

var a = 10;

setTimeout(function Timer0() {
  console.log("I am timer 0s");
}, 0);

function sayBye() {
  console.log("I am function Bye");
}

Promise.resolve().then(() => {
  console.log("I am Promise Resolve callback - 2");
});

var b = 20;

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 0");
});

setImmediate(() => {
  console.log("I am setImmediate Callback - 2 ");
});

fs.readFile("./data/products.json", () => {
  console.log("I am from Fs Callback function");
});

setTimeout(function Timer3() {
  console.log("I am timer 3s");
}, 3000);

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 1");
});

setTimeout(function Timer1() {
  console.log("I am timer 1s");
}, 1000);

setImmediate(() => {
  console.log("I am setImmediate Callback - 3 ");
});

sayHii();
sayBye();

console.log(a);
console.log(b);

process.nextTick(() => {
  console.log("I am process.nextTick Callback - 2");
});

Promise.resolve().then(() => {
  console.log("I am Promise Resolve callback - 2");
});
