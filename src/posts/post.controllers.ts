import * as express from "express";
import Post from "./post.interface";

class PostController {
  public path = "/posts";
  public router = express.Router();

  private posts: Post[] = [
    {
      author: "Max Schwarz",
      content: "Hello World Content",
      title: "Hello World Title",
    },
    {
      author: "Mac Emery",
      content: "Hello World Content",
      title: "Hello World Title",
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  };

  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  };
}
