import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { RouterInterface } from '../interfaces/router';

class ProductRoute implements RouterInterface {
  path?: string = '/products';

  router: Router = Router();

  productController: ProductController = new ProductController();

  constructor() {
    /**
     * Creates product
     * /api/products/create
     */
    this.router.post(
      '/create',
      [this.productController.create],
    );
    /**
     * Gets product information
     * /api/products/:productid
     */
    this.router.get('/:id', [this.productController.get]);
    /**
     * Gets products list based on page number
     * /api/products/:limit/:page
     */
    this.router.get('/p/:page', [this.productController.paginate]);
    /**
     * Updates product information
     * /api/products/update/:productId
     */
    this.router.post(
      '/update/',
      [this.productController.update],
    );
    /**
     * Removes product
     * /api/products/remove/:productId
     */
    this.router.get(
      '/remove/:id',
      [this.productController.remove],
    );
  }
}

export default ProductRoute;
