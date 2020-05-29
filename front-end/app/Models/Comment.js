export default class Comment {
  constructor(data) {
    this.description = data.description;
    this.id = data.id;
    this.author = data.author;
    this.created = "" || data.createdAt;
    this.edited = "" || data.updatedAt;
    this.upvotes = 0 || data.upvotes;
    this.downvotes = 0 || data.downvotes;
    this.postId = data.postId
  }

  get Template() {
    return /*html*/ `
          <!-- COMMENT TEMPLATE -->
          <div class="row d-flex">
          <div class="col-3">
            <div>
              <i
                class="far fa-arrow-alt-circle-up text-success"
                onclick="app.commentsController.upvote('${this.id}')"
              ></i>
              ${this.upvotes}
            </div>
            <div>
              <i
                class="far fa-arrow-alt-circle-down text-danger"
                onclick="app.commentsController.downvote('${this.id}')"
              ></i>
              ${this.downvotes}
            </div>
          </div>
          <div class="col-8">
            <span>${this.description}</span>
            <span>~${this.author}</span>
          </div>
        </div>
        <!-- END CARD TEMPLATE -->
    `;
  }
}
