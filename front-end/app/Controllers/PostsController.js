import postsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
  let posts = store.State.posts;
  let template = ""
  function compare(a, b) {
    const upvoteA = (a.upvotes - a.downvotes)
    const upvoteB = (b.upvotes - b.downvotes)

    let comparison = 0;
    if (upvoteA < upvoteB) {
      comparison = 1;
    } else if (upvoteA > upvoteB) {
      comparison = -1;
    }
    return comparison;
  }
  posts.sort(compare)
  posts.forEach(p => template += p.Template)
  document.getElementById("posts").innerHTML = template
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _draw);
  }

  newPost(event) {
    event.preventDefault()
    let formdata = event.target
    let post = {
      title: formdata.title.value,
      author: formdata.author.value,
      genre: formdata.genre.value,
      imgUrl: formdata.url.value
    }
    postsService.newPost(post)
    formdata.reset()
  }

  deletePost(id) {
    if (window.confirm("are you sure you want to delete this post?")) {
      postsService.deletePost(id)
    }
  }

  upvote(postId) {
    postsService.upvote(postId)
  }

  downvote(postId) {
    postsService.downvote(postId)
  }
}
