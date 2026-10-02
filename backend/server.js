const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // 1️⃣ ADD THIS LINE
require("dotenv").config();

const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 2️⃣ ADD THIS MONGODB CONNECTION BLOCK HERE
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/fleetflow";
mongoose.connect(mongoURI)
  .then(() => {
    console.log("🚀 Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Routes
app.use("/api/vehicles", vehicleRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "FleetFlow Backend is running!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`FleetFlow backend running on http://localhost:${PORT}`);
});
