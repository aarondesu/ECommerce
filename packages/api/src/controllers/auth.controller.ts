/* eslint-disable no-underscore-dangle */
import { Response, Request, NextFunction } from 'express';

import passport from 'passport';
import jwt from 'jsonwebtoken';

import AuthService from '../services/auth.service';
import Users from '../entities/user.entity';
import { CreateUserDTO, LoginUserDto } from '../dtos/users.dto';
import HTTPException from '../exceptions/HTTPException';
import { JWT_SECRET_KEY } from '../config';

passport.serializeUser((user: Users, done) => done(undefined, user.id));
passport.deserializeUser((id: string, done) => {
  const result = Users.findOneBy({ id });

  result
    .then((user) => {
      if (!user) throw new HTTPException(400, 'Failed to  get user');

      done(null, user);
    })
    .catch(() => done(null, null));
});

export default class AuthController {
  public authService: AuthService = new AuthService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const registerData = req.body as CreateUserDTO;
      const { id, username } = await this.authService.register(registerData);

      const payload = {
        id,
        username,
      };

      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1 days' });

      res.status(201).json({
        user: {
          id,
          username,
        },
        token: `Bearer ${token}`,
      });
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const loginData = req.body as LoginUserDto;
      const { id, username } = await this.authService.login(loginData);

      const payload = {
        id,
        username,
      };

      const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1 days' });

      res.status(200).send({
        user: {
          id,
          username,
        },
        token: `Bearer ${token}`,
      });
    } catch (error) {
      next(error);
    }
  };

  public isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/account/login');
    }
  };

  public logout = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      req.session.destroy((error) => {
        if (error) return next(error);
        return res.status(301).json('logout');
      });
    } else {
      res.status(400).json('No user is logged in!');
    }
  };
}
