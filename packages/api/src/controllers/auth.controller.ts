import { Response, Request, NextFunction } from 'express';
import { CreateUserDTO, LoginUserDto } from 'src/dtos/users.dto';
// import HTTPException from 'src/exceptions/HTTPException';

import AuthService from '../services/auth.service';

export default class AuthController {
  public authService: AuthService = new AuthService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const registerData = req.body as CreateUserDTO;
      const newUserData = await this.authService.register(registerData);

      res.status(201).json({ data: newUserData, message: 'register' });
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginData = req.body as LoginUserDto;
      const loginInfo = await this.authService.login(loginData);

      res.status(200).json({ data: loginInfo, message: 'login' });
    } catch (error) {
      next(error);
    }
  };
}
