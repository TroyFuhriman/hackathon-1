import store from "../store.js";

// @ts-ignore
const postsApi = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 3000
})

class PostsService { }

const postsService = new PostsService();
export default postsService;
