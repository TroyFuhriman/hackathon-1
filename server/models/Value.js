import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Value = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Value;
