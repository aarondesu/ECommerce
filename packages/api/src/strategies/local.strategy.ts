import passport from 'passport';
import passportLocal from 'passport-local';
import CryptoJS from 'crypto-js';
import Users from '../entities/user.entity';

import { PASSWORD_SECRET_KEY } from '../config';

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy({ usernameField: 'username' }, (username: string, pass: string, done) => {
    Users.findOne({ where: { username } })
      .then((user) => {
        if (!user) return done(undefined, { message: 'User does not exist!' });

        const hashedPassword = CryptoJS.AES.decrypt(user.password, PASSWORD_SECRET_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (pass !== originalPassword) return done(undefined, { message: 'Password is invalid!' });

        const { password, ...others } = user;

        return done(undefined, others as Users);
      })
      .catch((error) => done(error));
  }),
);
