// import { JwtPayload } from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy, StrategyOptions } from 'passport-jwt';

import { JWT_SECRET_KEY } from '../config';
import Users from '../entities/user.entity';

interface Payload {
  id: string;
  password: string;
}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET_KEY,
} as StrategyOptions;

passport.use(
  new JWTStrategy(options, (payload: Payload, done) => {
    Users.getRepository()
      .findOne({ where: { id: payload.id } })
      .then((user) => {
        if (user) {
          const { id, username, isAdmin } = user;
          return done(null, { id, username, isAdmin });
        }

        return done(null, false);
      })
      .catch((error) => done(error, false));
  }),
);
