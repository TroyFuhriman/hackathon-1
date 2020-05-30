export default class Comment {
  constructor(data) {
    this.description = data.description;
    this.id = data.id;
    this.author = data.author;
    this.created = "" || data.createdAt;
    this.edited = "" || data.updatedAt;
    this.upvotes = 0 || data.upvotes;
    this.downvotes = 0 || data.downvotes;
    this.postId = data.postId;
  }

  get Template() {
    return /*html*/ `
          <!-- COMMENT TEMPLATE -->
          <div class="row d-flex border-top mx-5">
          <div class="col-3 text-right">
            <div>
              <i
                class="far fa-arrow-alt-circle-up text-success action"
                onclick="app.commentsController.upvote('${this.id}')"
              ></i>
              ${this.upvotes}
            </div>
            <div>
              <i
                class="far fa-arrow-alt-circle-down text-danger action"
                onclick="app.commentsController.downvote('${this.id}')"
              ></i>
              ${this.downvotes}
            </div>
          </div>
          <div class="col-8 d-flex align-self-center justify-content-between">
            <span>${this.description}&nbsp; ~${this.author}</span>
            <span><i class="fa fa-trash-alt text-danger action" onclick="app.commentsController.removeComment('${this.id}')"aria-hidden="true"></i></span>
          </div>
        </div>
        <!-- END CARD TEMPLATE -->
    `;
  }
}
