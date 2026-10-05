const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const driverRoutes = require("./routes/driverRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dispatchRoutes = require("./routes/dispatchRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/drivers", driverRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/dispatches", dispatchRoutes);
app.use("/api/users", userRoutes);
// MongoDB Connection
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb://127.0.0.1:27017/fleetflow";

mongoose
  .connect(mongoURI)
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
    message: "FleetFlow Backend is running!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `FleetFlow backend running on http://localhost:${PORT}`
  );
});