import { Router } from 'express';
import ExpressApp from 'src/app';
import ProductController from '../controllers/product.controller';
import { RouterInterface } from '../interfaces/router';

class ProductRoute implements RouterInterface {
  path?: string = '/products';

  router: Router = Router();

  app: ExpressApp;

  productController: ProductController = new ProductController();

  constructor() {
    this.router.post('/create', [this.productController.create]);
    this.router.get('/:id', [this.productController.get]);
    this.router.post('/update/:id', [this.productController.update]);
    this.router.get('/remove/:id', [this.productController.remove]);
  }
}

export default ProductRoute;
