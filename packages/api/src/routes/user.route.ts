import { Router } from 'express';
import ExpressApp from 'src/app';
import { RouterInterface } from '../interfaces/router';

export default class UserRoute implements RouterInterface {
  public path?: string = '/users';

  public router: Router = Router();

  public app: ExpressApp;
}
