import express from "express";
import Client from "../models/Client.js";
const router = express.Router();

router.get("/", async (_, res) => {
  res.json(await Client.find());
});

router.post("/", async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.json(client);
});

export default router;
