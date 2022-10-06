import 'reflect-metadata';

import ExpressApp from './App';
import { PORT } from './config';

import UserRoute from './routes/user.route';
import AuthRoute from './routes/auth.route';
import ProductRoute from './routes/product.route';

const app = new ExpressApp([new UserRoute(), new AuthRoute(), new ProductRoute()]);
app.listen(PORT);
