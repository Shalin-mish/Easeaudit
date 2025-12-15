import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  name: String,
  task: String,
  deadline: Date,
  past: String,
  status: {
    type: String,
    enum: ["onWork", "available", "onLeave"],
    default: "onWork",
  },
});

export default mongoose.model("Article", articleSchema);
