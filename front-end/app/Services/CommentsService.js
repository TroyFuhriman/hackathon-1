import store from "../store.js";
import Comment from "../Models/Comment.js"

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

  constructor() {

  }
  async getComments(postId) {
    try {
      let res = await postsApi.get(postId + "/comments");
      let post = store.State.posts.find(p => p.id == postId)
      store.commit("activePost", post)
      let comments = res.data.map(c => new Comment(c))
      store.commit("comments", comments);
    } catch (e) {
      console.error(e);
    }
  }
  async addComment(commentObj) {
    try {
      await commentsApi.post("", commentObj);
      this.getComments(commentObj.postId);
    } catch (e) {
      console.error(e);
    }
  }
  async upvote(commentId) {
    try {
      let comment = store.State.comments.find(c => c.id == commentId);
      comment.upvotes++
      await commentsApi.put(commentId, comment);
      this.getComments(comment.postId)
    } catch (error) {
      console.error(error);
    }
  }
  async downvote(commentId) {
    try {
      let comment = store.State.comments.find(c => c.id == commentId);
      comment.downvotes++;
      await commentsApi.put(commentId, comment);
      this.getComments(comment.postId)
    } catch (error) {
      console.error(error);
    }
  }
  async removeComment(commentId) {
    try {
      let comment = store.State.comments.find(c => c.id == commentId);
      await commentsApi.delete(commentId);
      this.getComments(comment.postId)
    } catch (error) {
      console.error(error);
    }
  }
}


const commentsService = new CommentsService();
export default commentsService;
