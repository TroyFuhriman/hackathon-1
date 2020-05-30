// import PostsService from "../";
import store from "../store.js";
import commentsService from "../Services/CommentsService.js";

//Private
function _draw() {
  let comments = store.State.comments;
  let posts = store.State.posts
  console.log(comments)
  let template = ""
  comments.forEach(c => document.getElementById(c.postId).innerHTML = template +=
    `<div class="row d-flex">
      <div class="col-3">
        <div>
          <i
            class="far fa-arrow-alt-circle-up text-success"
            onclick="app.commentsController.upvote('${c.id}')"
          ></i>
      ${c.upvotes}
        </div>
        <div>
          <i
            class="far fa-arrow-alt-circle-down text-danger"
            onclick="app.commentsController.downvote('${c.id}')"
          ></i>
      ${c.downvotes}
        </div>
      </div>
      <div class="col-8">
        <span>${c.description}</span>
        <span>~${c.author}</span>
      </div>
    </div>`)

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
