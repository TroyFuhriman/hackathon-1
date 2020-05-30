export default class Post {
    constructor(data) {
        this.title = data.title;
        this.author = data.author;
        this.genre = data.genre;
        this.imgUrl = data.imgUrl;
        this.upvotes = data.upvotes || 0;
        this.downvotes = data.downvotes || 0;
        this.id = data.id;
        this.created = new Date(data.createdAt).toLocaleDateString("eu-US", {
            month: "short",
            day: "numeric",
        });
        this.edited = data.updatedAt;
    }

    get Template() {
        return /*html*/ `
    <div class="row d-flex justify-content-center border border-light"> 
    <div class="col-1 mt-3 text-right d-flex flex-column justify-content-center align-items-center p-0">
        <div class="d-flex align-items-center my-2">
            <div class="font-weight-bold">${this.upvotes}&nbsp;</div>
            <i class="far fa-arrow-alt-circle-up text-success fa-2x action"
            onclick="app.postsController.upvote('${this.id}')"></i>
        </div>
        <div class=" d-flex align-items-center my-2">
            <div class="font-weight-bold">${this.downvotes}&nbsp;</div>
            <i class="far fa-arrow-alt-circle-down text-danger fa-2x action"
             onclick="app.postsController.downvote('${this.id}')"></i>
        </div>
    </div>

    <div class="col-md-6 col-10 mt-3 text-right pr-5">
        <div class="card shadow">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body d-flex justify-content-between">
                <span class="card-text">Genre: ${this.genre} | Posted by: ${this.author} | Created: '${this.created}'</span>
                <span type="button" onclick="app.postsController.deletePost('${this.id}')"><i class="fa fa-trash-alt text-danger action" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
    <div class="col-11 offset-1 text-center mb-3">
        <div class="">
            <form class="my-3 form-inline justify-content-center" onsubmit="app.commentsController.addComment(event, '${this.id}')">
            <input type="text" class="form-control opacity" name="description" required placeholder=" comment...">
                <input type="text" class="form-control opacity" name="author" required placeholder =" your name...">
                <button class="btn btn-primary btn-outline-secondary" type="submit"> add comment</button>
            </form>
            <!-- ADDITIONAL HIDDEN COMMENTS -->
            <div id="${this.id}"></div>
            <!-- END ADDITIONAL HIDDEN COMMENTS -->
            <button class="btn btn-primary btn-outline-secondary mt-2" onclick="app.commentsController.getComments('${this.id}')"> view all comments</button>
            <button class="btn btn-primary btn-outline-secondary mt-2" onclick="app.commentsController.hideComments('${this.id}')"> hide all comments</button>
        </div>
    </div>
    <div id="comments">
    </div>
    </div>
    `;
    }
}

// <!-- COMMENT TEMPLATE -->
// <div class="row d-flex">
// <div class="col-3">
//   <div>
//     <i
//       class="far fa-arrow-alt-circle-up text-success"
//       onclick="app.commentsController.upvote('${this.id}')"
//     ></i>
//     ${this.upvotes}
//   </div>
//   <div>
//     <i
//       class="far fa-arrow-alt-circle-down text-danger"
//       onclick="app.commentsController.downvote('${this.id}')"
//     ></i>
//     ${this.downvotes}
//   </div>
// </div>
// <div class="col-8">
//   <span>${this.description}</span>
//   <span>~${this.author}</span>
// </div>
// </div>
// <!-- END CARD TEMPLATE -->
