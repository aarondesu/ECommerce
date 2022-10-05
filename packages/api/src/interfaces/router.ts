import { Router } from 'express';
import ExpressApp from '../app';

export interface RouterInterface {
  path?: string;
  router: Router;
  app: ExpressApp;
}
