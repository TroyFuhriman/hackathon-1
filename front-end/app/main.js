import ValuesController from "./Controllers/ValuesController.js";
import PostsController from "./Controllers/PostsController.js";
import CommentsController from "./Controllers/CommentsController.js"
class App {
  constructor() {
    this.valuesController = new ValuesController();
    this.postsController = new PostsController()
    this.commentsController = new CommentsController()

  }
}

window["app"] = new App();
