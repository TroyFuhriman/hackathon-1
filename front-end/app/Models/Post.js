export default class Post {
    constructor(data) {
        this.title = data.title
        this.author = data.author
        this.genre = data.genre
        this.imgUrl = data.imgUrl
        this.upVote = data.upvote || 0
        this.downVote = data.downvote || 0
        this.id = data.id
        this.created = data.createdAt
        this.edited = data.updatedAt
    }

    get Template() {
        return /*html*/ `
    <div class="col-3 mt-3">
    <div type="button" onclick="app.postsController.upVote('${this.id}')">upvote ${this.upVote}</div>
    <div type="button" onclick="app.postsController.downVote('${this.id}')">downvote ${this.downVote}
    </div>
</div>
<div class="col mt-3">
    <div class="row justify-content-start">
        <div class="offset-1 col-6">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body d-flex justify-content-between">
                <span>
                    <span class="card-text">Genre: ${this.genre}</span>
                    <span class="card-text">Author: ${this.author}</span>
                </span>
                <span>    
                    <span type="button" onclick="app.postsController.deletePost('${this.id}')"><i class="fa fa-times text-danger" aria-hidden="true"></i></span>
                </span>
                    </div>
            </div>
        </div>
    </div>
</div>
<div class="col-12 text-center">
    <h4>Top Comment</h4>
    <p>actual top comment</p>
    <div>
        <form onsubmit="app.postsController.newComment(event, '${this.id}')">
            <input type="text" name="text" placeholder="comment">
            <button class="btn btn-success" type="submit">add comment</button>
        </form>
        <button class="btn btn-success">view all comments</button>
    </div>
</div>
<div id="comments">
</div>
    `
    }
}