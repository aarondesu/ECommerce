import { DataSource } from 'typeorm';
import { AppConfig } from './config';

import Users from './entities/user.entity';
import Products from './entities/product.entity';
import Carts from './entities/cart.entity';
import Orders from './entities/order.entity';
import Reviews from './entities/review.entity';

const datasource = new DataSource({
  type: 'mongodb',
  url: AppConfig.mongoDBURL,
  logging: true,
  database: 'testdb',
  entities: [Users, Products, Carts, Orders, Reviews],
});

export default datasource;
