import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import clients from "./routes/clients.js";
import articles from "./routes/articles.js";
import contacts from "./routes/contacts.js";
import audits from "./routes/audits.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/clients", clients);
app.use("/api/articles", articles);
app.use("/api/contacts", contacts);
app.use("/api/audits", audits);

app.get("/", (req, res) => {
  res.send("AuditEase Backend Running");
});

// ✅ Connect DB FIRST, then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB error:", err.message);
  });
