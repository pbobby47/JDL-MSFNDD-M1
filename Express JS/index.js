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
// === Testing Api's using POSTMAN
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
