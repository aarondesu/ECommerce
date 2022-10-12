/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Router } from 'express';
import passport from 'passport';

import { RouterInterface } from '../interfaces/router';
import AuthController from '../controllers/auth.controller';

import '../strategies/local.strategy';
import '../strategies/jwt.strategy';

class AuthRoute implements RouterInterface {
  public path?: string = '/auth';

  public router: Router = Router();

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
     * Check if the user is authorized
     * /api/auth/authorized
     */
    this.router.post(
      '/authorized',
      [passport.authenticate('jwt', { session: false })],
      [this.authController.isAuthorized],
    );
  }
}

export default AuthRoute;
