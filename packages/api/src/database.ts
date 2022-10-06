import { DataSource } from 'typeorm';
import { DATABASE_NAME, MONGO_URL } from './config';

import Users from './entities/user.entity';
import Products from './entities/product.entity';
import Carts from './entities/cart.entity';
import Orders from './entities/order.entity';
import Reviews from './entities/review.entity';

const datasource = new DataSource({
  type: 'mongodb',
  url: MONGO_URL,
  logging: true,
  database: DATABASE_NAME,
  entities: [Users, Products, Carts, Orders, Reviews],
});

export default datasource;
