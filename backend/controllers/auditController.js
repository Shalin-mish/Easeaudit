import Audit from "../models/Audit.js";

export const getAudits = async (req, res) => {
  try {
    const audits = await Audit.find();
    res.json(audits);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch audits" });
  }
};

export const createAudit = async (req, res) => {
  try {
    const newAudit = await Audit.create(req.body);
    res.json(newAudit);
  } catch (error) {
    res.status(500).json({ message: "Failed to create audit" });
  }
};
