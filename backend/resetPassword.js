const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

const mongoURI =
  process.env.MONGO_URI ||
  "mongodb://127.0.0.1:27017/fleetflow";

const resetPassword = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = await User.findOneAndUpdate(
      { email: "hetaxi@gmail.com" },
      { password: hashedPassword },
      { new: true }
    );

    if (!user) {
      console.log("User not found");
      return;
    }

    console.log("Password updated successfully!");
    console.log("Email: hetaxi@gmail.com");
    console.log("Password: 123456");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

resetPassword();