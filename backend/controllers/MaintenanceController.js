const Maintenance = require("../models/Maintenance");

// GET all maintenance records
const getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.find().sort({ createdAt: -1 });
    res.json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one maintenance record
const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }

    res.json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE maintenance record
const createMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);

    res.status(201).json({
      message: "Maintenance record created successfully",
      maintenance,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE maintenance record
const updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }

    res.json({
      message: "Maintenance record updated successfully",
      maintenance,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE maintenance record
const deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }

    res.json({
      message: "Maintenance record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMaintenance,
  getMaintenanceById,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
};