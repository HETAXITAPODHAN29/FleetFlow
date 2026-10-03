const Driver = require("../models/driver");

// GET all drivers
const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();

    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch drivers",
      error: error.message,
    });
  }
};

// GET one driver
const getDriver = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch driver",
      error: error.message,
    });
  }
};

// CREATE driver
const createDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);

    res.status(201).json({
      message: "Driver created successfully",
      driver: driver,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create driver",
      error: error.message,
    });
  }
};

// UPDATE driver
const updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      message: "Driver updated successfully",
      driver: driver,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update driver",
      error: error.message,
    });
  }
};

// DELETE driver
const deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      message: "Driver deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete driver",
      error: error.message,
    });
  }
};

// Export all functions
module.exports = {
  getDrivers,
  getDriver,
  createDriver,
  updateDriver,
  deleteDriver,
};