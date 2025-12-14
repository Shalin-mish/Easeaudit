import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE article
router.post("/", async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
