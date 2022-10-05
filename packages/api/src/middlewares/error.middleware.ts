import { Request, Response, NextFunction } from 'express';
import HTTPException from '../exceptions/HTTPException';

import logger from '../lib/logger';

const errorMiddleWare = (error: HTTPException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message ${message}`);
    res.status(status).json(message);
  } catch (err) {
    next(err);
  }
};

export default errorMiddleWare;
