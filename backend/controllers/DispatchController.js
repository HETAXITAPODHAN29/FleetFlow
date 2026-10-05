const Dispatch = require("../models/Dispatch");

// GET all dispatches
const getDispatches = async (req, res) => {
  try {
    const dispatches = await Dispatch.find().sort({ createdAt: -1 });
    res.json(dispatches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET one dispatch
const getDispatchById = async (req, res) => {
  try {
    const dispatch = await Dispatch.findById(req.params.id);

    if (!dispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }

    res.json(dispatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE dispatch
const createDispatch = async (req, res) => {
  try {
    const dispatch = await Dispatch.create(req.body);

    res.status(201).json({
      message: "Dispatch created successfully",
      dispatch,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE dispatch
const updateDispatch = async (req, res) => {
  try {
    const dispatch = await Dispatch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!dispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }

    res.json({
      message: "Dispatch updated successfully",
      dispatch,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE dispatch
const deleteDispatch = async (req, res) => {
  try {
    const dispatch = await Dispatch.findByIdAndDelete(req.params.id);

    if (!dispatch) {
      return res.status(404).json({ message: "Dispatch not found" });
    }

    res.json({
      message: "Dispatch deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDispatches,
  getDispatchById,
  createDispatch,
  updateDispatch,
  deleteDispatch,
};