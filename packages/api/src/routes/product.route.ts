import { Router } from 'express';
import passport from 'passport';
import ExpressApp from 'src/app';
import ProductController from '../controllers/product.controller';
import { RouterInterface } from '../interfaces/router';

class ProductRoute implements RouterInterface {
  path?: string = '/products';

  router: Router = Router();

  app: ExpressApp;

  productController: ProductController = new ProductController();

  constructor() {
    /**
     * Creates product
     * /api/products/create
     */
    this.router.post(
      '/create',
      [passport.authenticate('jwt', { session: false })],
      [this.productController.create],
    );
    /**
     * Gets product information
     * /api/products/:productid
     */
    this.router.get('/:id', [this.productController.get]);
    /**
     * Updates product information
     * /api/products/update/:productId
     */
    this.router.post(
      '/update/:id',
      [passport.authenticate('jwt', { session: false })],
      [this.productController.update],
    );
    /**
     * Removes product
     * /api/products/remove/:productId
     */
    this.router.get(
      '/remove/:id',
      [passport.authenticate('jwt', { session: false })],
      [this.productController.remove],
    );
  }
}

export default ProductRoute;
