/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Response, Request, NextFunction } from 'express';
import passport from 'passport';

import AuthService from '../services/auth.service';
import Users from '../entities/user.entity';
import { CreateUserDTO } from '../dtos/users.dto';
import HTTPException from '../exceptions/HTTPException';

import '../strategies/local.strategy';
import logger from '../lib/logger';

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
    passport.authenticate('local', (error: Error, user: Users) => {
      if (error) return next(error);
      if (!user) {
        next(new HTTPException(409, 'Invalid credentials'));
      }

      req.login(user, (err) => {
        if (err) return next(err);

        return res.status(200).json(user);
      });
    })(req, res, next);
  };

  public logout = (req: Request, res: Response) => {
    logger.info('Test');
    req.logOut(() => {
      res.status(301).redirect('/');
    });
  };
}
