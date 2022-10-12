/* eslint-disable no-param-reassign */
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { Logger } from 'pino';
import { DataSource } from 'typeorm';
import { TypeormStore } from 'connect-typeorm';
import helmet from 'helmet';
import CryptoJS from 'crypto-js';

import AppDataSource from './database';
import { RouterInterface } from './interfaces/router';
import { NODE_ENV, PASSWORD_SECRET_KEY, SESSION_SECRET_KEY } from './config';
import logger from './lib/logger';
import errorMiddleWare from './middlewares/error.middleware';
import Sessions from './entities/session.entity';
import Users, { UserRole } from './entities/user.entity';

class ExpressApp {
  app: express.Application;

  dataSource: DataSource;

  logger: Logger;

  constructor() {
    this.app = express();
    this.logger = logger;
  }

  async initialize(routes: RouterInterface[]) {
    await this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorMiddleWare();
    this.initializeAdminAccount();
  }

  async initializeDatabase() {
    logger.info('Initializing database...');

    try {
      this.dataSource = AppDataSource;
      await this.dataSource.initialize();

      logger.info('Database initialized!');
    } catch (error) {
      logger.error(error);
    }
  }

  initializeRoutes(routes: RouterInterface[]) {
    routes.forEach((route) => {
      this.app.use(`/api${route.path}`, route.router);
    });
  }

  initializeMiddlewares() {
    const sessionsRepo = Sessions.getRepository();

    this.app.use(express.json());
    this.app.use(cors({ origin: '*', credentials: true }));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      session({
        secret: SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        store: new TypeormStore({
          cleanupLimit: 2,
          limitSubquery: false,
          ttl: 86400,
        }).connect(sessionsRepo),
      }),
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  initializeErrorMiddleWare() {
    this.app.use(errorMiddleWare);
  }

  initializeAdminAccount() {
    // Check if admin user has been created
    logger.info('Checking for an admin account...');
    const result = Users.findOneBy({ username: 'admin', email: 'admin@ecommerce.com' });
    result
      .then(async (admin) => {
        if (admin) return admin;

        logger.info('No admin account detected! Creating one...');
        let user = new Users();
        user.username = 'admin';
        user.password = CryptoJS.AES.encrypt('password', PASSWORD_SECRET_KEY).toString();
        user.firstName = 'admin';
        user.lastName = 'admin';
        user.email = 'admin@ecommerce.com';
        user.role = UserRole.ADMIN;

        user = await user.save();
        logger.info('Successfully created admin account!');

        return user;
      })
      .catch((error) => {
        throw new Error(error as string);
      });
  }

  listen(port) {
    this.app.listen(port, () => {
      this.logger.info(`Backend server started. Listening on port ${port as string}`);
      this.logger.info(`Running api server in '${NODE_ENV}' mode`);
    });
  }
}

export default ExpressApp;
