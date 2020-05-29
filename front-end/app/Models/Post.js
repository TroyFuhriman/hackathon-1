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
    <div class="col-3">
    <div type="button" onclick="app.postsController.upVote('${this.id}')">upvote ${this.upVote}</div>
    <div type="button" onclick="app.postsController.downVote('${this.id}')">downvote ${this.downVote}
    </div>
</div>
<div class="col">
    <div class="row justify-content-start">
        <div class="offset-1 col-6">
            <div class="card">
                <img class="card-img-top" src="http://placekitten.com/g/200/300" alt="">
                <div class="card-body">
                    <span class="card-text">${this.genre}</span>
                    <span class="card-text">${this.author}</span>
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