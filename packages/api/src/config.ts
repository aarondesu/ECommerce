/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';

dotenv.config();

export const AppConfig = {
  port: process.env.PORT,
  mongoDBURL: process.env.MONGO_URL,
  secretKey: process.env.SECRET_KEY,
};
