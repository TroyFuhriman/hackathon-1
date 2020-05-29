import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await commentsService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await commentsService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id;
      let data = await commentsService.edit(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await commentsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await commentsService.delete(req.params.id);
      return res.send("Comment Deleted");
    } catch (error) {
      next(error);
    }
  }
}
