const express = require("express");

const {
  getDrivers,
  getDriver,
  createDriver,
  updateDriver,
  deleteDriver,
} = require("../controllers/DriverController");

const router = express.Router();

// GET all drivers
router.get("/", getDrivers);

// GET one driver
router.get("/:id", getDriver);

// CREATE driver
router.post("/", createDriver);

// UPDATE driver
router.put("/:id", updateDriver);

// DELETE driver
router.delete("/:id", deleteDriver);

module.exports = router;