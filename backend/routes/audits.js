import express from "express";
import Audit from "../models/Audit.js";

const router = express.Router();

/* ================== POST AUDIT (ADD DATA) ================== */
router.post("/", async (req, res) => {
  try {
    const audit = await Audit.create(req.body);
    res.status(201).json(audit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* ================== GET ALL AUDITS (OPTIONAL) ================== */
router.get("/", async (req, res) => {
  const audits = await Audit.find();
  res.json(audits);
});

/* ================== DASHBOARD STATS ================== */
router.get("/stats", async (req, res) => {
  try {
    const audits = await Audit.find();

    const empty = () => ({
      completed: 0,
      inProgress: 0,
      pending: 0,
    });

    const stats = {
      total: empty(),
      financial: empty(),
      internal: empty(),
      external: empty(),
      compliance: empty(),
      it: empty(),
      forensic: empty(),
      performance: empty(),
    };

    const monthly = {};

    audits.forEach(a => {
      // status count
      stats.total[a.status]++;
      stats[a.type][a.status]++;

      // month count
      const month = a.date.toLocaleString("default", { month: "short" });
      if (!monthly[month]) {
        monthly[month] = {
          financial: 0,
          internal: 0,
          external: 0,
          compliance: 0,
          it: 0,
          forensic: 0,
          performance: 0,
        };
      }
      monthly[month][a.type]++;
    });

    res.json({
      monthly,
      ...stats,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
