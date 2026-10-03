const express = require("express");

const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/VehicleController");

const router = express.Router();

// ===============================
// VEHICLE ROUTES
// ===============================

// GET all vehicles
// URL: GET /api/vehicles
router.get("/", getVehicles);

// GET one vehicle by ID
// URL: GET /api/vehicles/:id
router.get("/:id", getVehicle);

// CREATE a new vehicle
// URL: POST /api/vehicles
router.post("/", createVehicle);

// UPDATE an existing vehicle
// URL: PUT /api/vehicles/:id
router.put("/:id", updateVehicle);

// DELETE a vehicle
// URL: DELETE /api/vehicles/:id
router.delete("/:id", deleteVehicle);

module.exports = router;