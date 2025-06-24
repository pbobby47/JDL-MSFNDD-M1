// ! ==== Express JS ====
/*
- Express is Fast, unopinionated, minimalist web framework for Node.js
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Installation:
    - npm init
    - npm install express
*/

// ? Case 1:
/*!
const express = require("express");
const app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

// Routing
// Syntax: app.METHOD(PATH, HANDLER)

app.get("/", (req, res) => {
  res.send("<h1>I am Dashboard Page</h1>");
});

app.listen(8000, "127.0.0.1", () => {
  console.log("server has started");
});
*/

// ? Case 2:
// === Testing Api's using POSTMAN ===
/*
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to fakestoreapi");
});

app.get("/products", (req, res) => {
  res.send("All Products details are here");
});

app.get("/products/10", (req, res) => {
  res.send("Product with an id 10 details are here");
});

app.get("/users", (req, res) => {
  res.send("All users details are here");
});

app.get("/users/10", (req, res) => {
  res.send("user with an id 10 details are here");
});

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ====  Fake Store API Example using POSTMAN ====
// ? Case 1:
/*
const express = require("express");
const app = express();
const fs = require("fs");

let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

// Static Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to FakeStoreAPI</h1>");
});

app.get("/products", (req, res) => {
  res.send("<h1>Here All Products Page will display</h1>");
});

app.get("/users", (req, res) => {
  res.send("<h1>Here All Users Page will display</h1>");
});

app.get("/products/10", (req, res) => {
  res.send("<h1>Here Single Product Page will display</h1>");
});

app.get("/users/10", (req, res) => {
  res.send("<h1>Here Single User Page will display</h1>");
});

// API Routes
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.get("/api/v1/products/10", (req, res) => {
  res.json(products);
});

app.get("/api/v1/users/10", (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 2:
/*
const express = require("express");
const app = express();
const fs = require("fs");

let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

//  ROUTE HANDLERS
let RootRouteHandler = (req, res) => {
  res.send("<h1>Welcome to FakeStoreAPI</h1>");
};

let ProductsPageHandler = (req, res) => {
  res.send("<h1>Here All Products Page will display</h1>");
};

let UsersPageHandler = (req, res) => {
  res.send("<h1>Here All Users Page will display</h1>");
};

let SingleProductPageHandler = (req, res) => {
  res.send("<h1>Here Single Product Page will display</h1>");
};

let SingleUserPageHandler = (req, res) => {
  res.send("<h1>Here Single User Page will display</h1>");
};

let api_products = (req, res) => {
  res.json(products);
};

let api_users = (req, res) => {
  res.json(users);
};

let api_single_product = (req, res) => {
  res.json(products);
};

let api_single_user = (req, res) => {
  res.json(users);
};

app
  .get("/", RootRouteHandler)
  .get("/products", ProductsPageHandler)
  .get("/users", UsersPageHandler)
  .get("/products/10", SingleProductPageHandler)
  .get("/users/10", SingleUserPageHandler)
  .get("/api/v1/products", api_products)
  .get("/api/v1/users", api_users)
  .get("/api/v1/products/10", api_single_product)
  .get("/api/v1/users/10", api_single_user);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 3:
// Performed all CRUD operations on Products data
/*
const express = require("express");
const app = express();
const fs = require("fs");

let products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

//  ROUTE HANDLERS
let baseHandler = (req, res) => {
  res.json({
    status: "success",
    data: "Root Data",
  });
};

let getAllProducts = (req, res) => {
  res.json({
    status: "success",
    count: products.length,
    data: products,
  });
};

let getSingleProduct = (req, res) => {
  let product = products.find(obj => obj.id == 10);

  res.json({
    status: "success",
    // count: product.length, // because we used find method
    data: product,
  });
};

let createProduct = (req, res) => {
  res.json({
    status: "success",
    message: "New products Added Successfuly",
  });
};

let updateProduct = (req, res) => {
  res.json({
    status: "success",
    message: "Products Updated Successfuly",
  });
};

let deleteProduct = (req, res) => {
  res.json({
    status: "success",
    message: "Product Deleted Successfuly",
  });
};

//  ROUTES
app
  .get("/", baseHandler)
  .get("/api/v1/products", getAllProducts)
  .post("/api/v1/products", createProduct)
  .get("/api/v1/products/10", getSingleProduct)
  .patch("/api/v1/update_product", updateProduct)
  .delete("/api/v1/delete_product", deleteProduct);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ======== Route Path Matching ========
// app.METHOD(Path, Handler);
/*
  ? , + , * , [] , ()

  ? - is optional
  + - previous character for n no.of times
  * - any characters
  [] - It will provide a range
      - [a-m]
      - [0-9]
      - [0-5]
  () - it will group the characters.

 - To consider optional routes we have to use 
      - ? in v4
      - {} in v5

  - app.get(["/admin", "/owner", "/partner"], (req, res) => {
        res.send("Now you are in Admin / owner / partner view");
    });


  - To pass any character , we have to use 
     - * in v4
     - /*splat in v5
*/
/*!
const express = require("express");
const app = express();

// app.get("/pro(ducts)?", () => {});

// app.get("/*splat", (req, res) => {
//   res.send("ok");
// });

app.get("/product{s}", (req, res) => {
  res.send("Routing matching with product{s} route");
});

app.get("/hello{world}", (req, res) => {
  res.send("Routing matching with /hello{world} route");
});

app.get("/user{dashboard}", (req, res) => {
  res.send("Routing matching with /user{dashboard} route");
});

app.get("/sahil/", (req, res) => {
  res.send("sahil is included in path");
});

// app.get("/buz+", (req, res) => {
//   res.send("Route matching to buz / buzz / buzzz / buzzzz / ...")
// })

// app.get("/hello+world", (req, res) => {
//   res.send(
//     "Route matching to helloworld / hellooworld / helloooworld / hellooooworld / helloooooworld / ..."
//   );
// });

app.get(["/admin", "/owner", "/partner"], (req, res) => {
  res.send("Now you are in Admin / owner / partner view");
});

app.listen(8000, () => {
  console.log("Server has started...");
});
*/

// ! ======= Request Params, Request Body, Request Query =========
/*!
const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json({
    status: "success",
    data: "All Products",
  });
});

// ? Example 1
// app.get("/products/:x/:y/:z", (req, res) => {
//   console.log(req.params);
//   res.json({
//     status: "success",
//     data: `Single Products with `,
//   });
// });

// ? Example 2
// app.get("/products/:gender/:catergory/:productNumber", (req, res) => {
//   console.log(req.params);
//   res.json({
//     status: "success",
//     data: `Single Products with `,
//   });
// });

// ? Example 3
// app.get("/students/:id", (req, res) => {
//   console.log(req.params);

//   // let id = req.params.id * 1; // type casting ---> string * 1 --> Number
//   let id = +req.params.id; // type casting ---> +string --> Number

//   console.log(id);
//   console.log(typeof id);

//   res.json({
//     status: "success",
//     data: `Single Products with `,
//   });
// });

// ? Example 4:
// creating new student
// app.use(express.json()); // It will parse req.body into JavaScript code.

// app.get("/students", (req, res) => {
//   res.send("All Students Data will be sent");
// });

// app.post("/students", (req, res) => {
//   console.log(req.body);

//   res.send("New Student Added");
// });


// ? Example 5:

app.get("/students", (req, res) => {
  // console.log(req);
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);

  res.send("All Ok");
});

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ========= Students Data Management ============
/*
Routes 
  - GET
      - /students
      - /students/:id

  - POST
      - /students

  - PATCH
      - /students/:id

  - DELETE
      - /students/:id
*/

const fs = require("fs");
const express = require("express");
const app = express();

let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));

app.use(express.json()); // Parsing JSON into JS.

app.get("/students", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "All Students details are here",
    count: students.length,
    data: students,
  });
});

app.post("/students", (req, res) => {
  console.log(req.body);

  let lastStudentID = students[students.length - 1].id;

  let newStudent = { id: lastStudentID + 1, ...req.body };

  students.push(newStudent);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("New Student Added in students.json file");
  });

  res.status(201).json({
    status: "Success",
    message: "A new Student is Added",
    data: newStudent,
  });
});

app.get("/students/:id", (req, res) => {
  console.log(req.params);

  let id = req.params.id * 1;

  let student = students.find(obj => obj.id == id);
  // console.log(student);

  res.status(200).json({
    status: "success",
    message: `Student details with id : ${id}`,
    data: student,
  });
});

app.patch("/students/:id", (req, res) => {});
app.delete("/students/:id", (req, res) => {});

app.listen(8000, () => {
  console.log("server has started");
});
