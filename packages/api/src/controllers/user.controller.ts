import { Request, Response, NextFunction } from 'express';
import { GetUserDTO } from '../dtos/users.dto';
import UserService from '../services/user.service';

class UserController {
  userService: UserService = new UserService();

  get = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = req.body as GetUserDTO;

    try {
      const user = await this.userService.getUser(userDTO);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  // update = (req: Request, res: Response, next: NextFunction) => {};
}

export default UserController;
