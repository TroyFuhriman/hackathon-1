import ValueSchema from "../models/Value";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Posts = mongoose.model("Post", PostSchema);
  Comments = mongoose.model("Comment", CommentSchema)
}

export const dbContext = new DbContext();
