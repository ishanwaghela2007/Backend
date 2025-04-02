import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, default: "pending" }, 
  },
  { timestamps: true }
);

export const Email = mongoose.model("Email", emailSchema);
