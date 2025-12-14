import mongoose from "mongoose";

export default mongoose.model(
  "Article",
  new mongoose.Schema({
    title: String,
    description: String,
  })
);
