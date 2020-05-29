import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Comment = new Schema(
  {
    description: { type: String, required: true },
    author: { type: String, required: true },
    postId: { type: ObjectId, ref: "Post", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
