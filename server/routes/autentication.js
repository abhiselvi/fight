const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  register,
  login,
  protectuser,
  protectadmin,
  getUser,
  logoutuser
} = require("../controller/authenticationController");

router.get("/allusers",protectadmin, getAllUsers);
router.get("/:id",protectuser, getUser)
router.post("/register", register);
router.post("/login", login);
router.get('/logout', logoutuser);
module.exports = router;
