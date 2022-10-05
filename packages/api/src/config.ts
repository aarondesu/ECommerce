/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT, MONGO_URL, PASSWORD_SECRET_KEY, SESSION_SECRET_KEY, DATABASE_NAME,
} = process.env;
