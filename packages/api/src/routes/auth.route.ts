/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';

import ExpressApp from '../app';
import { RouterInterface } from '../interfaces/router';
import AuthController from '../controllers/auth.controller';

import '../strategies/local.strategy';
import '../strategies/jwt.strategy';

class AuthRoute implements RouterInterface {
  public path?: string = '/auth';

  public router: Router = Router();

  public app: ExpressApp;

  public authController: AuthController = new AuthController();

  constructor() {
    /**
     * Registers user
     * /api/auth/register
     */
    this.router.post('/register', [this.authController.register]);
    /**
     * Login user
     * /api/auth/login
     */
    this.router.post('/login', [this.authController.login]);
    /**
     * Log user out server side
     * /api/auth/logout
     */
    this.router.post('/logout', [this.authController.logout]);
    /**
     * Check if use is logged in server side
     * /api/auth/logou
     */
    this.router.post('/isLoggedin', [this.authController.isLoggedIn]);
  }
}

export default AuthRoute;
