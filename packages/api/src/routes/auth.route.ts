import { Router } from 'express';

import ExpressApp from '../app';
import { RouterInterface } from '../interfaces/router';
import AuthController from '../controllers/auth.controller';

export default class AuthRoute implements RouterInterface {
  public path?: string = '/auth';

  public router: Router = Router();

  public app: ExpressApp;

  public authController: AuthController = new AuthController();

  constructor() {
    this.router.post('/register', [this.authController.register]);
    this.router.post('/login', [this.authController.login]);
  }
}