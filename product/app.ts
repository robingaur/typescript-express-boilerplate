import cookieParser from 'cookie-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express-serve-static-core';
import createError from 'http-errors';
import logger from 'morgan';
import * as path from 'path';
import { indexRouter } from './routes/indexRouter';
import { usersRouter } from './routes/usersRouter';


export class App {
  public app: express.Application;

  constructor() {
    this.app = express()

    //view engine setup
    this.app.set('views', path.join(__dirname, './../views'));
    this.app.set('view engine', 'jade');

    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, './../public')));

    this.app.use('/', new indexRouter().getRoutes());
    this.app.use('/users', new usersRouter().getRoutes());

    // catch 404 and forward to error handler
    this.app.use((_req: Request, _res: Response, next: NextFunction) => {
      next(createError(404));
    })

    // error handler
    this.app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}