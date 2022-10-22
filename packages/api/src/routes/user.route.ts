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
     * /api/users/:userId
     */
    this.router.get('/:id', [this.userController.get]);

    /**
     * Gets users
     * /api/users/p/:page
     */
    this.router.get('/p/:page', [this.userController.paginate]);
    // this.router.post('/update/:id', [this.userController.update]);
  }
}

export default UserRoute;
