  const mongoose = require("mongoose");

const dispatchSchema = new mongoose.Schema(
  {
    tripId: {
      type: String,
      required: true,
      unique: true,
    },

    source: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
    },

    driver: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    departureTime: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Scheduled", "In Transit", "Completed"],
      default: "Scheduled",
    },

    priority: {
      type: String,
      enum: ["Low", "Normal", "High"],
      default: "Normal",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dispatch", dispatchSchema);