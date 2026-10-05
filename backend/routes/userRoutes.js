const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile/:id", getProfile);
router.put("/profile/:id", updateProfile);

module.exports = router;