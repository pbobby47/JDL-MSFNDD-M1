const mongoose = require("mongoose");

//~ link: https://mongoosejs.com/docs/schematypes.html

const studentSchema = new mongoose.Schema(
  {
    sname: {
      type: String,
      required: [true, "sname is required"],
    },
    course: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    skills: [String],
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
