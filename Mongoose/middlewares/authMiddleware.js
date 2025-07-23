const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    let tokenreceived = req.headers.authorization.split(" ")[1];

    let decoded = jwt.verify(tokenreceived, process.env.SECRET_KEY);

    console.log(decoded);
    // res.send(decoded);

    req.body.userId = decoded.id; // here we will get error because of undefined.userId = something is not possible.

    next();
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
    });
  }
};
