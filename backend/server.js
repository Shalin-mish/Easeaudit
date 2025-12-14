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

app.use(cors());
app.use(express.json());

app.use("/api/clients", clients);
app.use("/api/articles", articles);
app.use("/api/contacts", contacts);
app.use("/api/audits", audits);

app.get("/", (req, res) => res.send("AuditEase Backend Running"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running")
    )
  )
  .catch(err => console.log(err));
