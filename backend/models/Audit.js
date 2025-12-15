import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      "financial",
      "internal",
      "external",
      "compliance",
      "it",
      "forensic",
      "performance",
    ],
    required: true,
  },
  status: {
    type: String,
    enum: ["completed", "inProgress", "pending"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Audit", auditSchema);
