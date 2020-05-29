import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async find(query = {}) {
    return await dbContext.Comments.find(query);
  }
  async findById(id) {
    let data = await dbContext.Comments.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(body) {
    return await dbContext.Comments.create(body);
  }
  async edit(update) {
    let data = await dbContext.Comments.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Comments.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid id");
    }
    return data;
  }
}

export const commentsService = new CommentsService();
