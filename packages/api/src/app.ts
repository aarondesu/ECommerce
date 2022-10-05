/* eslint-disable no-param-reassign */
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Logger } from 'pino';
import { DataSource } from 'typeorm';
import MongoStore from 'connect-mongo';

import AppDataSource from './database';
import { RouterInterface } from './interfaces/router';
import { DATABASE_NAME, MONGO_URL, SESSION_SECRET_KEY } from './config';
import logger from './lib/logger';
import errorMiddleWare from './middlewares/error.middleware';

class ExpressApp {
  app: express.Application;

  dataSource: DataSource;

  logger: Logger;

  constructor(routes: RouterInterface[]) {
    this.app = express();

    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorMiddleWare();

    this.logger = logger;
  }

  initializeDatabase() {
    logger.info('Initializing database...');

    this.dataSource = AppDataSource;
    this.dataSource
      .initialize()
      .then(() => logger.info('Database Initialized!'))
      .catch((error) => logger.error(error));
  }

  initializeRoutes(routes: RouterInterface[]) {
    routes.forEach((route) => {
      route.app = this;
      this.app.use(`/api${route.path}`, route.router);
    });
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors({ origin: '*', credentials: true }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      session({
        secret: SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
          mongoUrl: MONGO_URL,
          dbName: DATABASE_NAME,
          ttl: 88490,
          autoRemove: 'interval',
          autoRemoveInterval: 10,
          crypto: {
            secret: SESSION_SECRET_KEY,
          },
        }),
      }),
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  initializeErrorMiddleWare() {
    this.app.use(errorMiddleWare);
  }

  listen(port) {
    this.app.listen(port, () => {
      this.logger.info(`Backend server started. Listening on port ${port as string}`);
    });
  }
}

export default ExpressApp;
