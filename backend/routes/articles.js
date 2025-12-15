import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

/* MAIN ARTICLES */
router.get("/", async (req, res) => {
  const articles = await Article.find({ status: "onWork" });
  res.json(articles);
});

/* AVAILABLE ARTICLES */
router.get("/available", async (req, res) => {
  const available = await Article.find({ status: "available" });
  res.json(available);
});

/* STATUS COUNTS */
router.get("/status", async (req, res) => {
  const total = await Article.countDocuments();
  const onWork = await Article.countDocuments({ status: "onWork" });
  const available = await Article.countDocuments({ status: "available" });
  const onLeave = await Article.countDocuments({ status: "onLeave" });

  res.json({
    onWork: Math.round((onWork / total) * 100),
    available: Math.round((available / total) * 100),
    onLeave: Math.round((onLeave / total) * 100),
  });
});

/* ADD ARTICLE */
router.post("/", async (req, res) => {
  const article = await Article.create(req.body);
  res.json(article);
});

export default router;
