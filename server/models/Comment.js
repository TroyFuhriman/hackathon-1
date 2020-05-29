import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Comment = new Schema(
  {
    description: { type: String, required: true },
    author: { type: String, required: true },
    postId: { type: ObjectId, ref: "Post", required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
