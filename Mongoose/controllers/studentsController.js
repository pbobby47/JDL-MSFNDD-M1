const studentModel = require("./../models/studentModel");
const bcrypt = require("bcrypt");

// ? Create Student
exports.createStudent = async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({
        status: false,
        message: "Password is required",
      });
    }

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

// ? Read All Students
exports.getAllStudents = async (req, res) => {
  try {
    let students = await studentModel.find();

    res.status(200).json({
      satus: true,
      message: "All students details",
      count: students.length,
      data: students,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

// ? Read Single Student
exports.getSingleStudent = async (req, res) => {
  try {
    // let student = await studentModel.findOne({ _id: req.params.id });
    let student = await studentModel.findById(req.params.id);

    res.status(200).json({
      status: true,
      message: "Details of single student",
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

// ? Update Student
exports.updateStudent = async (req, res) => {
  try {
    // let updatedStudent = await studentModel.updateOne(
    //   { _id: req.params.id },
    //   {
    //     $set: {
    //       ...req.body,
    //     },
    //   }
    // );

    let updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      status: true,
      message: "Updated Successfully",
      data: updatedStudent,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

// ? Delete Student
exports.deleteStudent = async (req, res) => {
  await studentModel.findByIdAndDelete(req.params.id);

  res.json({
    status: true,
    message: "Deleted student data",
  });
};

// ? Delete Students
exports.deleteAllStudents = async (req, res) => {
  await studentModel.deleteMany();

  res.json({
    status: true,
    message: "Deleted all students data",
  });
};
