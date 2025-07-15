const express = require("express");
const {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudents,
} = require("./../controllers/studentsController");

const router = express.Router();

router
  .route("/")
  .get(getAllStudents)
  .post(createStudent)
  .delete(deleteAllStudents);

router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
