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
/*
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

app.patch("/students/:id", (req, res) => {
  console.log(req.body);
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  let index = students.indexOf(studentObj);
  console.log(index);

  let udpatedObj = { ...studentObj, ...req.body };
  console.log(udpatedObj);

  students[index] = udpatedObj;

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student Details Udpated in Students.json file");
  });

  res.status(202).json({
    status: "Success",
    message: "Student details upated Successfully",
    data: {
      prevData: studentObj,
      updatedData: udpatedObj,
    },
  });
});

app.delete("/students/:id", (req, res) => {
  let id = req.params.id * 1;

  let index = students.findIndex(obj => obj.id == id);
  console.log(index);

  students.splice(index, 1);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student details removed from student.json file");
  });

  res.status(200).json({
    status: "Success",
    message: "Student details deleted Succefully",
  });
});

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? =====  Refactoring Code  =====
/*!
const fs = require("fs");
const express = require("express");
const app = express();

let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));

app.use(express.json()); // Parsing JSON into JS.

// ? Route Handlers
let getAllStudents = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "All Students details are here",
    count: students.length,
    data: students,
  });
};

let addNewStudent = (req, res) => {
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
};

let getSingleStudent = (req, res) => {
  console.log(req.params);

  let id = req.params.id * 1;

  let student = students.find(obj => obj.id == id);
  // console.log(student);

  res.status(200).json({
    status: "success",
    message: `Student details with id : ${id}`,
    data: student,
  });
};

let updateStudent = (req, res) => {
  console.log(req.body);
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  let index = students.indexOf(studentObj);
  console.log(index);

  let udpatedObj = { ...studentObj, ...req.body };
  console.log(udpatedObj);

  students[index] = udpatedObj;

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student Details Udpated in Students.json file");
  });

  res.status(202).json({
    status: "Success",
    message: "Student details upated Successfully",
    data: {
      prevData: studentObj,
      updatedData: udpatedObj,
    },
  });
};

let deleteStudent = (req, res) => {
  let id = req.params.id * 1;

  let index = students.findIndex(obj => obj.id == id);
  console.log(index);

  students.splice(index, 1);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student details removed from student.json file");
  });

  res.status(200).json({
    status: "Success",
    message: "Student details deleted Succefully",
  });
};

// ? Routes
// app.get("/students", getAllStudents);
// app.post("/students", addNewStudent);
// app.get("/students/:id", getSingleStudent);
// app.patch("/students/:id", updateStudent);
// app.delete("/students/:id", deleteStudent);

// ? app.route():
// It will provide the common route for all methods
// later we can chain the methods

app.route("/students").get(getAllStudents).post(addNewStudent);

app
  .route("/students/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ================== Middlewares =================
/*
  - https://expressjs.com/en/guide/writing-middleware.html
  - https://miro.medium.com/v2/resize:fit:1400/1*ptNjzuT0m2BQ9YpQTVwVLg.png
  - https://media.geeksforgeeks.org/wp-content/uploads/20211007175759/MiddlewareChaining.png
*/

// ? Case 1:
/*
const express = require("express");
const app = express();

app.use(express.json());

app.post(
  "/",
  (req, res, next) => {
    console.log("I am executing Middleware function 1");
    console.log(req.body);

    req.body.name = "Sahil";
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 2");
    req.body.email = "s@gmail.com";
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 3");
    req.body.contact = 85520683412;
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 4");
    req.body.requestedAt = Date.now();
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 5");
    console.log(req.body);
    res.send("Ok");
  },
  (req, res, next) => {
    console.log("I am executing Middleware function 6");
  }
);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 2:
/*!
const express = require("express");
const app = express();

let myLoggerMiddleware = (req, res, next) => {
  console.log("I am myLoggerMiddleware ");

  next();
};

let requestedAt = (req, res, next) => {
  console.log("I am requestedAt middleware");
  req.body = { time: new Date() };

  next();
};

let finalResponseMiddleware = (req, res) => {
  console.log("I am finalResponseMiddleware");

  console.log(req.body);
  res.send("ok");
};

// app.get("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.post("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.patch("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
// app.delete("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);

// It will work for all http methods
// app.use("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);
app.all("/", myLoggerMiddleware, requestedAt, finalResponseMiddleware);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 3:
// app.use() vs app.all()
/*!
const express = require("express");
const app = express();

let logger = (req, res, next) => {
  console.log("I am logger middleware");
  next();
};

let requestedAt = (req, res, next) => {
  console.log("I am requestedAt middleware");
  next();
};

// If the url starts with provided path then all middlewares will execute.
// Here method can be anything
// app.use("/", logger, requestedAt, (req, res, next) => {
//   console.log("I am final Response middleware");
//   res.send("Ok");
// });

app.use(logger, requestedAt, (req, res) => {
  res.send("Ok");
});

// If the url strictly matches with provided path then only all middlewares will execute.
// Here method can be anything
// app.all("/", logger, requestedAt, (req, res, next) => {
//   console.log("I am final Response middleware");
//   res.send("Ok");
// });

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ===================== Task ============================
/*
- add middleware which sends request time
- just for logging

    GET 
        - /students
        - /students/:id

    POST 
        - /students
            - using middleware add createdAt feild in req.body object
            - this have store in students.json file too.
            - Validate email and mobile number 
                - if exists show student already existing
                - else add.

    PATCH
        - /students/:id
            - using middleware add updatedAt feild in req.body object
            - this have store in students.json file too.

    DELETE
        - /students/:id
          - create one file name students_deleted_data.json
          - Using middle add the deleted students data in the above file.
*/
/*
const fs = require("fs");
const express = require("express");
const app = express();

let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));
let deleteStudents = JSON.parse(
  fs.readFileSync("./data/students_deleted_data.json", "utf-8")
);

// ? Middlewares
app.use(express.json()); // Parsing JSON into JS.

app.use((req, res, next) => {
  console.log("A new Request Received at : ", new Date());

  next();
});

// ? Middleware functions
let createdAt = (req, res, next) => {
  console.log("Before - ", req.body);

  // req.body.createdAt = new Date();
  // req.body = { createdAt: new Date() };

  req.body = { ...req.body, createdAt: new Date() };

  console.log("After - ", req.body);

  next();
};

let updatedAt = (req, res, next) => {
  console.log("Before - ", req.body);

  // req.body.createdAt = new Date();
  // req.body = { createdAt: new Date() };

  req.body = { ...req.body, updatedAt: new Date() };

  console.log("After - ", req.body);

  next();
};

let deletedStudentsMiddleware = (req, res, next) => {
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  deleteStudents.push(studentObj);

  fs.writeFile(
    "./data/students_deleted_data.json",
    JSON.stringify(deleteStudents),
    () => {
      console.log("Deleted Students Details are updated into json file");
    }
  );

  next();
};

let validateStudent = (req, res, next) => {
  console.log("I am validateStudent middlware");

  let gmail = req.body.gmail;
  let contact = req.body.contact;

  if (!gmail) {
    res.json({
      status: "Fail",
      reason: "Gmail is Mandatory",
    });
  } else if (!contact) {
    res.json({
      status: "Fail",
      reason: "Contact is Mandatory",
    });
  } else {
    let student = students.find(
      obj => obj.gmail == gmail || obj.contact == contact
    );

    if (student) {
      res.json({
        status: "fail",
        reason: "Gmail or Mobile No is already Existing",
      });
    } else {
      next();
    }
  }
};

// ? Route Handlers
let getAllStudents = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "All Students details are here",
    count: students.length,
    data: students,
  });
};

let addNewStudent = (req, res) => {
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
};

let getSingleStudent = (req, res) => {
  console.log(req.params);

  let id = req.params.id * 1;

  let student = students.find(obj => obj.id == id);
  // console.log(student);

  res.status(200).json({
    status: "success",
    message: `Student details with id : ${id}`,
    data: student,
  });
};

let updateStudent = (req, res) => {
  console.log(req.body);
  let id = req.params.id * 1;

  let studentObj = students.find(obj => obj.id == id);
  console.log(studentObj);

  let index = students.indexOf(studentObj);
  console.log(index);

  let udpatedObj = { ...studentObj, ...req.body };
  console.log(udpatedObj);

  students[index] = udpatedObj;

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student Details Udpated in Students.json file");
  });

  res.status(202).json({
    status: "Success",
    message: "Student details upated Successfully",
    data: {
      prevData: studentObj,
      updatedData: udpatedObj,
    },
  });
};

let deleteStudent = (req, res) => {
  let id = req.params.id * 1;

  let index = students.findIndex(obj => obj.id == id);
  console.log(index);

  students.splice(index, 1);

  fs.writeFile("./data/students.json", JSON.stringify(students), () => {
    console.log("Student details removed from student.json file");
  });

  res.status(200).json({
    status: "Success",
    message: "Student details deleted Succefully",
  });
};

// ? Routes
app
  .route("/students")
  .get(getAllStudents)
  .post(createdAt, validateStudent, addNewStudent);

app
  .route("/students/:id")
  .get(getSingleStudent)
  .patch(updatedAt, updateStudent)
  .delete(deletedStudentsMiddleware, deleteStudent);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ! ============== Patterns of Middlewares =============
/*
app.get(m1 , m2, m3, ...)
app.use(m1 , m2, m3, ...)
app.all(m1 , m2, m3, ...)
app.use([m1 , m2, m3, ...]);
app.use("/", [m1 , m2, m3, ...]);
app.use("/", initialMiddlware,  [m1 , m2, m3, ...]);
app.use("/", initialMiddlware, [m1 , m2, m3, ...], lastMidddleware);
app.use("/", initialMiddlware, [m1 , m2], lastMidddleware);
*/

// ! ==================== Types of Middlewares ================
/*
Link: https://expressjs.com/en/guide/using-middleware.html

An Express application can use the following types of middleware:

  - Application-level middleware
  - Router-level middleware
  - Error-handling middleware
  - Built-in middleware
  - Third-party middleware

*/

// ? Case 1:
/*
const express = require("express");
const app = express();
const router = express.Router();

// ROUTE Handlers
let getStudents = (req, res) => {
  res.send("All Students Details are here");
};

let getSingleStudent = (req, res) => {
  res.send("I am from getSingleStudent");
};

let createStudent = (req, res) => {
  res.send("I am from createStudent");
};

let updateStudent = (req, res) => {
  res.send("I am from updateStudent");
};

let deleteStudent = (req, res) => {
  res.send("I am from deleteStudent");
};

// ROUTES:
router.route("/").get(getStudents).post(createStudent);

router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

app.use("/api/v1/students", router);

app.listen(8000, () => {
  console.log("server has started");
});
*/

// ? Case 2:
// Here we created for Trainers, HRS, Students

const express = require("express");
const app = express();
const studentsRouter = express.Router();
const trainersRouter = express.Router();
const hrsRouter = express.Router();

// Student ROUTE Handlers
let getStudents = (req, res) => {
  res.send("All Students Details are here");
};

let getSingleStudent = (req, res) => {
  res.send("I am from getSingleStudent");
};

let createStudent = (req, res) => {
  res.send("I am from createStudent");
};

let updateStudent = (req, res) => {
  res.send("I am from updateStudent");
};

let deleteStudent = (req, res) => {
  res.send("I am from deleteStudent");
};

// Trainer ROUTE Handlers
let getTrainers = (req, res) => {
  res.send("I am from getTrainers");
};

let getSingleTrainer = (req, res) => {
  res.send("I am from getSingleTrainer");
};

let createTrainer = (req, res) => {
  res.send("I am from createTrainer");
};

let updateTrainer = (req, res) => {
  res.send("I am from updateTrainer");
};

let deleteTrainer = (req, res) => {
  res.send("I am from deleteTrainer");
};

// HR ROUTE Handlers
let getHRs = (req, res) => {
  res.send("I am from getHRs");
};

let getSingleHR = (req, res) => {
  res.send("I am from getSingleHR");
};

let createHR = (req, res) => {
  res.send("I am from createHR");
};

let updateHR = (req, res) => {
  res.send("I am from updateHR");
};

let deleteHR = (req, res) => {
  res.send("I am from deleteHR");
};

// Students ROUTES:
studentsRouter.route("/").get(getStudents).post(createStudent);

studentsRouter
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

// Trainers ROUTES:
trainersRouter.route("/").get(getTrainers).post(createTrainer);

trainersRouter
  .route("/:id")
  .get(getSingleTrainer)
  .patch(updateTrainer)
  .delete(deleteTrainer);

// HRS ROUTES:
hrsRouter.route("/").get(getHRs).post(createHR);

hrsRouter.route("/:id").get(getSingleHR).patch(updateHR).delete(deleteHR);

app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/trainers", trainersRouter);
app.use("/api/v1/hr", hrsRouter);

app.listen(8000, () => {
  console.log("server has started");
});
