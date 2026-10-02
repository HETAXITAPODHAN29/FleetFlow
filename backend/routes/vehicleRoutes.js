const express = require("express");

const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

// GET all vehicles
router.get("/", getVehicles);

// GET one vehicle
router.get("/:id", getVehicle);

// CREATE vehicle
router.post("/", createVehicle);

// UPDATE vehicle
router.put("/:id", updateVehicle);

// DELETE vehicle
router.delete("/:id", deleteVehicle);

module.exports = router;