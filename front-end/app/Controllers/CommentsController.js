// import PostsService from "../";
import store from "../store.js";
import commentsService from "../Services/CommentsService.js";

//Private
function _draw() {
  let comments = store.State.comments;
  console.log(comments)
  let template = ""
  comments.forEach(c => document.getElementById(c.postId).innerHTML = template += c.Template)
}

//Public
export default class CommentsController {
  constructor() {
    store.subscribe("comments", _draw);
  }

  getComments(postId) {
    commentsService.getComments(postId)
  }

  addComment(event, postId) {
    event.preventDefault();
    var form = event.target;
    var commentObj = {
      description: form.description.value,
      author: form.author.value,
      postId: postId,
    };
    console.log(commentObj);
    commentsService.addComment(commentObj);
    form.reset();
  }

  upvote(commentId) {
    commentsService.upvote(commentId);
  }
  downvote(commentId) {
    commentsService.downvote(commentId);
  }

  removeComment(commentId) {
    commentsService.removeComment(commentId);
  }
}
