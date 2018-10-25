import express from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';

export class usersRouter {

  private router: express.Router;

  constructor() {
    this.router = express.Router();
    this.addRoutes();
  }

  private addRoutes(): void {
    this.router.get("/", (_req: Request, res: Response, _next: NextFunction): express.Router => {
      res.send("respond with a resource");
      return this.router;
    })
  }

  public getRoutes(): express.Router {
    return this.router;
  }
}