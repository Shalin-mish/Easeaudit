import express from "express";
import Audit from "../models/Audit.js";

const router = express.Router();

// GET all audits
router.get("/", async (req, res) => {
  try {
    const audits = await Audit.find();
    res.json(audits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE audit
router.post("/", async (req, res) => {
  try {
    const audit = new Audit(req.body);
    await audit.save();
    res.json(audit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
