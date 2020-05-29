import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    genre: { type: String, required: true },
    author: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
