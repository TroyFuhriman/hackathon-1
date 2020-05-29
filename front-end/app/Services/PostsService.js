import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const postsApi = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 3000
})

class PostsService {
  constructor() {
    this.getPosts()
  }
  getPosts() {
    postsApi.get("")
      .then(res => {
        let data = res.data
        // store.commit("posts", data)
        console.log(data)
      })
  }


  newPost(post) {
    postsApi.post("", new Post(post))
      .then(res => {
        this.getPosts()
      })
  }
}

const postsService = new PostsService();
export default postsService;
