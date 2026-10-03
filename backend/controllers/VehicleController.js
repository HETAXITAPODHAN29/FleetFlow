const Vehicle = require("../models/Vehicle");

// GET all vehicles
const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching vehicles",
      error: error.message
    });
  }
};

// GET one vehicle
const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found"
      });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching vehicle",
      error: error.message
    });
  }
};

// ADD vehicle
const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);

    res.status(201).json({
      message: "Vehicle created successfully",
      vehicle
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating vehicle",
      error: error.message
    });
  }
};

// DELETE vehicle
const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found"
      });
    }

    res.status(200).json({
      message: "Vehicle deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting vehicle",
      error: error.message
    });
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  deleteVehicle
};