/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-param-reassign */
import express from 'express';
import cors from 'cors';
import { Logger } from 'pino';
import { DataSource } from 'typeorm';

import AppDataSource from './database';
import { RouterInterface } from './interfaces/router';

import logger from './lib/logger';
import errorMiddleWare from './middlewares/error.middleware';

export default class ExpressApp {
  app: express.Application;

  dataSource: DataSource;

  logger: Logger;

  constructor(routes: RouterInterface[]) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors({ origin: '*', credentials: true }));
    this.app.use(express.urlencoded({ extended: true }));
    this.initializeRoutes(routes);
    this.app.use(errorMiddleWare);

    this.logger = logger;
    this.dataSource = AppDataSource;
  }

  initializeRoutes(routes: RouterInterface[]) {
    routes.forEach((route) => {
      route.app = this;
      this.app.use(`/api${route.path}`, route.router);
    });
  }

  listen(port) {
    this.logger.info('Initializing database...');

    this.dataSource
      .initialize()
      .then(() => {
        this.logger.info('Database initialized.');

        this.app.listen(port, () => {
          this.logger.info(`Backend server started. Listening on port ${port as string}`);
        });
      })
      .catch((error) => {
        this.logger.error('Failed to initialize database!');
        this.logger.error(error);
      });
  }
}
