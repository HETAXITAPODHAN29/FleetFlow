const express = require("express");

const {
  getMaintenance,
  getMaintenanceById,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} = require("../controllers/MaintenanceController");

const router = express.Router();

router.get("/", getMaintenance);
router.get("/:id", getMaintenanceById);
router.post("/", createMaintenance);
router.put("/:id", updateMaintenance);
router.delete("/:id", deleteMaintenance);

module.exports = router;