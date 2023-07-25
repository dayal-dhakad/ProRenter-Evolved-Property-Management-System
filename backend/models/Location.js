import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Location", locationSchema);
