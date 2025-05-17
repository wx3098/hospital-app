const express = require("express");
const router = express.Router();
const { MedicalLog } = require("../models");

// CREATE
router.post("/", async (req, res) => {
  try {
    const { date, hospital, cost, medicine, memo } = req.body;
    const newLog = await MedicalLog.create({ date, hospital, cost, medicine, memo });
    res.json(newLog);
  } catch (error) {
    res.status(500).json({ error: "作成エラー", details: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const logs = await MedicalLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "取得エラー", details: error.message });
  }
});

module.exports = router;
