import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async find(query = {}) {
    return await dbContext.Posts.find(query);
  }
  async findById(id) {
    let data = await dbContext.Posts.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(body) {
    return await dbContext.Posts.create(body);
  }
  async edit(update) {
    let data = await dbContext.Posts.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Posts.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid id");
    }
    return data;
  }
}

export const postsService = new PostsService();
