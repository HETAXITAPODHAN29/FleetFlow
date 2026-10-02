const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      model: "Tata Ace",
      number: "GJ01AB1234",
      driver: "Rahul",
      location: "Ahmedabad",
      fuel: 78,
      status: "Active"
    },
    {
      id: 2,
      model: "Ashok Leyland",
      number: "GJ05CD5678",
      driver: "Amit",
      location: "Surat",
      fuel: 62,
      status: "Maintenance"
    }
  ]);
});

module.exports = router;