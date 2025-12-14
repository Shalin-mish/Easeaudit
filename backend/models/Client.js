import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Client", clientSchema);
