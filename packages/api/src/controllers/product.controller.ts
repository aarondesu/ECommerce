import { Request, Response, NextFunction } from 'express';
import { ProductDTO } from '../dtos/product.dto';
import ProductService from '../services/product.service';

class ProductController {
  productService: ProductService = new ProductService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createProdDTO = req.body as ProductDTO;
      const product = await this.productService.create(createProdDTO);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProdDTO = req.body as ProductDTO;
      const product = await this.productService.findOne(getProdDTO);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateProdDTO = req.body as ProductDTO;
      const product = await this.productService.update(updateProdDTO);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getProdDTO = req.body as ProductDTO;
      await this.productService.remove(getProdDTO);

      res.status(200).json('deleted');
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
