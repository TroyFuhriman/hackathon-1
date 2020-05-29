import store from "../store.js";

// @ts-ignore
const commentsApi = axios.create({
  baseURL: "//localhost:3000/api/comments",
  timeout: 3000,
});
// @ts-ignore
const postsApi = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 3000,
});

class CommentsService {
  async getComments(postId) {
    try {
      let res = await postsApi.get(postId + "/comments");
      store.commit(
        "comments",
        res.data.map((c) => new Comment(c))
      );
    } catch (e) {
      console.error(e);
    }
  }
  async addComment(commentObj) {
    try {
      await commentsApi.post("", new Comment(commentObj));
      this.getComments(commentObj.postId);
    } catch (e) {
      console.error(e);
    }
  }
  async upvote(commentId) {
    try {
      let comment = store.State.comment.find((c) => c.id == commentId);
      comment.upvotes++;
      await commentsApi.put(commentId, comment);
      store.commit("comments", comment);
    } catch (error) {
      console.error(error);
    }
  }
  async downvote(commentId) {
    try {
      let comment = store.State.comment.find((c) => c.id == commentId);
      comment.downvotes++;
      await commentsApi.put(commentId, comment);
      store.commit("comments", comment);
    } catch (error) {
      console.error(error);
    }
  }
  async removeComment(commentId) {
    await commentsApi.delete(commentId);
    store.commit("comments", store.State.comment);
  }
}

const commentsService = new CommentsService();
export default commentsService;
