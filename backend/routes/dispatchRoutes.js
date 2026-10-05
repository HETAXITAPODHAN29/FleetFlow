const express = require("express");

const {
  getDispatches,
  getDispatchById,
  createDispatch,
  updateDispatch,
  deleteDispatch,
} = require("../controllers/DispatchController");

const router = express.Router();

router.get("/", getDispatches);
router.get("/:id", getDispatchById);
router.post("/", createDispatch);
router.put("/:id", updateDispatch);
router.delete("/:id", deleteDispatch);

module.exports = router;
