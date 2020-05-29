import postsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
  let posts = store.State.posts;
  let template = ""
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
    formdata.reset
  }
}
