import { Request, Response, Router } from "express";
import movieController from "../controllers/movies.controller"

export class movieRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/",movieController.getMovies);
    this.router.post("/",movieController.postMovie);
    this.router.delete("/:id",movieController.deleteMovie);
  }
}