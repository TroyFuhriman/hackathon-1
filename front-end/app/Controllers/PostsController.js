import postsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
  let posts = store.State.posts;
  console.log(posts);
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
      title: formdata.title,
      author: formdata.author,
      genre: formdata.genre,
      imgUrl: formdata.url
    }
    postsService.newPost(post)
    formdata.reset
  }
}
