import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;   // 🔥 THIS LINE WAS MISSING / WRONG
