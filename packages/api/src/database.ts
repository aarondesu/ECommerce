import { DataSource } from 'typeorm';
import {
  DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, NODE_ENV,
} from './config';

import Users from './entities/user.entity';
import Products from './entities/product.entity';
import Carts from './entities/cart.entity';
import Orders from './entities/order.entity';
import Reviews from './entities/review.entity';
import Sessions from './entities/session.entity';
import Categories from './entities/category.entity';

const datasource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
  logging: NODE_ENV === 'development' ? true : ['error'], // Only log errors on production
  synchronize: true,
  entities: [Users, Products, Carts, Orders, Reviews, Sessions, Categories],
});

export default datasource;
