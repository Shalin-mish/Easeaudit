import mongoose from "mongoose";

export default mongoose.model(
  "Audit",
  new mongoose.Schema({
    title: String,
    completed: Number,
    inProgress: Number,
    pending: Number,
  })
);
