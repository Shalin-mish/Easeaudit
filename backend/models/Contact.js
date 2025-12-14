import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  address: String,   // region / address
  email: String,
  phone: String,
});

export default mongoose.model("Contact", contactSchema);
