import { Request, Response, NextFunction } from 'express';
import {} from '../dtos/users.dto';
import UserService from '../services/user.service';

class UserController {
  userService: UserService = new UserService();

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  // update = (req: Request, res: Response, next: NextFunction) => {};
}

export default UserController;
