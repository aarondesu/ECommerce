import { Request, Response, NextFunction } from 'express';
import {} from '../dtos/users.dto';
import UserService from '../services/user.service';

class UserController {
  userService: UserService = new UserService();

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);
      res.status(200).json({
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  paginate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page } = req.params;
      const {
        key, limit, sort, order,
      } = req.query;

      const { users, pages } = await this.userService.paginate(
        Number(limit) || 20,
        Number(page),
        key as string || '',
        sort as string || '',
        order as string || '',
      );

      res.status(200).json({
        users,
        pages,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
