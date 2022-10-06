import { Response, Request, NextFunction } from 'express';
import passport from 'passport';

import AuthService from '../services/auth.service';
import Users from '../entities/user.entity';
import { CreateUserDTO } from '../dtos/users.dto';
import HTTPException from '../exceptions/HTTPException';

import '../strategies/local.strategy';

passport.serializeUser((user: Users, done) => done(undefined, user));
passport.deserializeUser((user: Users, done) => done(undefined, user));

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

  public login = (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, consistent-return
    passport.authenticate('local', (error: Error, user: Users) => {
      if (error) return next(error);
      if (!user) {
        next(new HTTPException(409, 'Invalid credentials'));
      } else {
        req.login(user, (err) => {
          if (err) return next(err);

          return res.status(200).json(user);
        });
      }
    })(req, res, next);
  };

  public logout = (req: Request, res: Response, next: NextFunction) => {
    req.session.destroy((error) => {
      if (error) return next(error);
      return res.status(301).json('logout');
    });
  };
}
