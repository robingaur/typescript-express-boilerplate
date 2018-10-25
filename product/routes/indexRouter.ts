import express from 'express';
import { NextFunction, Request, Response } from 'express-serve-static-core';

export class indexRouter {

  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.addRoutes();
  }

  private addRoutes(): void {
    this.router.get("/", (_req: Request, res: Response, _next: NextFunction): express.Router => {
      res.render("index", { title: "Express" });
      return this.router;
    })
  }

  public getRoutes(): express.Router {
    return this.router;
  }
}