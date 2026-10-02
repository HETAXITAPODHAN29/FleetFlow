const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
      unique: true,
    },

    driver: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    fuel: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    status: {
      type: String,
      enum: ["Active", "Maintenance", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);