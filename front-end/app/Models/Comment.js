export default class Comment {
  constructor(data) {
    this.comment = data.comment
    this.id = data.id
    this.author = data.author
  }

  get Template() {
    return /*html*/`
    <div class="col-12 card">
    <p>${this.comment}</p>
        <h4>${this.author}</h4>
</div>`
  }
}