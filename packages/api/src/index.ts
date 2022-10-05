import 'reflect-metadata';

import ExpressApp from './App';
import { PORT } from './config';

import UserRoute from './routes/user.route';
import AuthRoute from './routes/auth.route';

const app = new ExpressApp([new UserRoute(), new AuthRoute()]);
app.listen(PORT);
