export default class Comment {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.author = data.author
    this.created = data.createdAt
    this.edited = data.updatedAt
    this.upVote = data.upvote || 0
    this.downVote = data.downvote || 0
  }

  get Template() {
    return /*html*/`
    <div class="col-12 card">
    <p>${this.description}</p>
        <h4>${this.author}</h4>
</div>`
  }
}