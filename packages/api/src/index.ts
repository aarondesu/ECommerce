import 'reflect-metadata';

import ExpressApp from './App';
import { EXPRESS_PORT } from './config';

import UserRoute from './routes/user.route';
import AuthRoute from './routes/auth.route';
import ProductRoute from './routes/product.route';
import logger from './lib/logger';

const routes = [new UserRoute(), new AuthRoute(), new ProductRoute()];

const app = new ExpressApp();
app
  .initialize(routes)
  .then(() => {
    app.listen(EXPRESS_PORT);
  })
  .catch((err) => {
    logger.error(err);
    process.exit(0);
  });
