import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const postsApi = axios.create({
  baseURL: "//localhost:3000/api/posts/",
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
        let newPost = data.map(p => new Post(p))
        store.commit("posts", newPost)
      })
  }

  async


  newPost(post) {
    postsApi.post("", new Post(post))
      .then(res => {
        this.getPosts()
      })
      .catch(e => console.error(e))
  }

  deletePost(id) {
    postsApi.delete(id)
      .then(res => {
        this.getPosts()
        console.log(res)
      })
      .catch(e => console.error(e))
  }

  async downvote(postId) {
    try {
      let post = store.State.posts.find(c => c.id == postId);
      post.downvotes++;
      await postsApi.put(postId, post);
      this.getPosts()
    } catch (error) {
      console.error(error);
    }
  }
  async upvote(postId) {
    try {
      let post = store.State.posts.find(p => p.id == postId);
      post.upvotes++
      await postsApi.put(postId, { upvotes: post.upvotes });
      store.commit("posts", store.State.posts)
    } catch (error) {
      console.error(error);
    }
  }
}

const postsService = new PostsService();
export default postsService;


// todoObj.completed = !todoObj.completed;
// // todoObj.completed
// //   ? (todoObj.completed = false)
// //   : (todoObj.completed = true);
// //console.log(todoObj.completed + "after ternary");
// todoApi.put(todoId, { completed: todoObj.completed }).then((res) => {
//   //this.getTodos();
//   store.commit("todos", store.State.todos);
// });
//     }