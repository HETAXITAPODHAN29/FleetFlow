const express = require("express");

const {
  getVehicles,
  getVehicleById,
  createVehicle,
  deleteVehicle
} = require("../controllers/VehicleController");

const router = express.Router();

// GET all vehicles
router.get("/", getVehicles);

// GET vehicle by ID
router.get("/:id", getVehicleById);

// CREATE vehicle
router.post("/", createVehicle);

// DELETE vehicle
router.delete("/:id", deleteVehicle);

module.exports = router;