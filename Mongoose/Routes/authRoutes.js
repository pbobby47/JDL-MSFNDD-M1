const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  signUpUser,
  loginUser,
  profilePage,
} = require("./../controllers/authController");

router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);
router.route("/profile").get(authMiddleware, profilePage);

module.exports = router;
