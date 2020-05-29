import store from "../store.js";

// @ts-ignore
const commentsApi = axios.create({
  baseURL: "//localhost:3000/api/comments",
  timeout: 3000
})

class CommentsService { }

const commentsService = new CommentsService();
export default commentsService;
