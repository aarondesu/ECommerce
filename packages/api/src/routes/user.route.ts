import { Router } from 'express';

import UserController from '../controllers/user.controller';
import { RouterInterface } from '../interfaces/router';

class UserRoute implements RouterInterface {
  path?: string = '/users';

  router: Router = Router();

  userController: UserController = new UserController();

  constructor() {
    /**
     * Gets user information
     * /api/user/:userId
     */
    this.router.get('/:id', [this.userController.get]);
    // this.router.post('/update/:id', [this.userController.update]);
  }
}

export default UserRoute;
