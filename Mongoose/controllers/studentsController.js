const studentModel = require("./../models/studentModel");
const bcrypt = require("bcrypt");

// ? Create Student
exports.createStudent = async (req, res) => {
  try {
    let { password } = req.body;

    let hashedPassword = await bcrypt.hash(password, 10);

    // let doc = new studentModel({
    //   ...req.body,
    //   password: hashedPassword,
    // });

    // doc.save();

    let doc = await studentModel.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      status: true,
      message: "A new student created successfully",
      data: doc,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error: error,
    });
  }
};

// ? Read All Student
exports.getAllStudents = (req, res) => {
  res.send("Hii, I am from get all students");
};

// ? Read Single Student
exports.getSingleStudent = (req, res) => {
  res.send("Hii, I am from get single student");
};

// ? Update Student
exports.updateStudent = (req, res) => {
  res.send("Hii, I am from update student");
};

// ? Delete Student
exports.deleteStudent = (req, res) => {
  res.send("Hii, I am from delete student");
};

// ? Delete Student
exports.deleteAllStudents = async (req, res) => {
  await studentModel.deleteMany();

  res.json({
    status: true,
    message: "Deleted all students data",
  });
};
