require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentsRouter = require("./Routes/studentRoutes");

const app = express();
app.use(express.json()); // It will parse the req body into js

// ! Connect to MongoDB server
mongoose
  .connect(process.env.LOCAL_MONGO_DB_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch(err => {
    console.log("db not connected: ", err);
  });

// ! Routes
app.use("/api/v1/students", studentsRouter);
// app.use("/api/v1/trainers", trainersRouter);

app.get("/", (req, res) => {
  res.send("All Ok");
});

app.listen(8000, () => {
  console.log("server has started...");
});
