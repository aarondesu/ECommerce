/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';

dotenv.config();

export const {
  EXPRESS_PORT,
  PASSWORD_SECRET_KEY,
  SESSION_SECRET_KEY,
  DATABASE_NAME,
  JWT_SECRET_KEY,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  NODE_ENV,
} = process.env;
