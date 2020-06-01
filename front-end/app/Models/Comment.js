export default class Comment {
  constructor(data) {
    this.description = data.description;
    this.id = data.id;
    this.author = data.author;
    this.created =
      "" ||
      new Date(data.createdAt).toLocaleDateString("eu-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    this.edited = "" || data.updatedAt;
    this.upvotes = 0 || data.upvotes;
    this.downvotes = 0 || data.downvotes;
    this.postId = data.postId;
  }

  get Template() {
    return /*html*/ `
      <!-- COMMENT TEMPLATE -->
      <div class="row d-flex bg-light border opacity rounded mx-5 mb-1">
        <div class="col-3 text-right pr-1 align-self-center">
          <div>
            ${this.upvotes}&nbsp;
            <i
              class="far fa-arrow-alt-circle-up text-success action"
              onclick="app.commentsController.upvote('${this.id}')"
            ></i>
          </div>
          <div>
            ${this.downvotes}&nbsp;
            <i
              class="far fa-arrow-alt-circle-down text-danger action"
              onclick="app.commentsController.downvote('${this.id}')"
            ></i>
          </div>
        </div>
        <div class="col-8 d-flex align-self-center justify-content-between pl-2">
          <span>${this.description}&nbsp; ~${this.author} <span class="text-muted font-weight-lighter">(${this.created})</span></span>
          <span class="align-self-center"
            ><i
              class="fa fa-trash-alt text-danger action pl-3 pr-0"
              onclick="app.commentsController.removeComment('${this.id}')"
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>
      <!-- END CARD TEMPLATE -->
    `;
  }
}
