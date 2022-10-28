import { Request, Response, NextFunction } from 'express';
import Filter from '../dtos/fitler.dto';
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
      const filter = req.query as unknown as Filter;

      const { users, pages } = await this.userService.paginate(
        filter.limit || 20,
        Number(page),
        filter.key,
        filter.sort,
        filter.order,
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
