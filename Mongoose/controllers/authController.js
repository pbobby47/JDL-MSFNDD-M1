const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./../models/userModel");

const signUpUser = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        status: false,
        message: "Enter something in body",
      });
    }

    if (!req.body.userName) {
      res.status(400).json({
        status: false,
        message: "userName is required",
      });
    }

    if (!req.body.userEmail) {
      res.status(400).json({
        status: false,
        message: "userEmail is required",
      });
    }

    if (!req.body.password) {
      res.status(400).json({
        status: false,
        message: "password is required",
      });
    }

    let { userName, userEmail, password } = req.body;

    // Encrypt Password
    let encyptedPassword = await bcrypt.hash(password, 10);

    // Store the data in database

    let user = await userModel.create({
      userName,
      userEmail,
      password: encyptedPassword,
    });

    res.status(201).json({
      status: true,
      message: "A new User Added",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        status: false,
        message: "Enter something in body",
      });
    }

    if (!req.body.userEmail) {
      return res.status(400).json({
        status: false,
        message: "userEmail is required",
      });
    }

    if (!req.body.password) {
      return res.status(400).json({
        status: false,
        message: "password is required",
      });
    }

    let { userEmail, password } = req.body;

    //   Get the user details
    let user = await userModel.findOne({ userEmail }); // it will return user object.

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "user not found",
      });
    }

    //   Verify the password
    let isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      res.status(400).json({
        satus: false,
        message: "Password is incorrect",
      });
    }

    //   generate a token based on id
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    //   store in the localstore or cookies
    res.status(200).json({
      status: true,
      message: "user login successful",
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const profilePage = (req, res) => {
  let userId = req.body.userId;
  res.status(200).json({
    staus: "true",
    message: `current user is ${userId}`,
  });
};

module.exports = { signUpUser, loginUser, profilePage };
