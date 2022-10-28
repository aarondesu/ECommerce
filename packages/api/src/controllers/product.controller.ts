import { Request, Response, NextFunction } from 'express';
import { ProductDTO } from '../dtos/product.dto';
import ProductService from '../services/product.service';
import Filter from '../dtos/fitler.dto';

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
      const { id } = req.params;
      const product = await this.productService.findOne(id);

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
      const { id } = req.params;
      await this.productService.remove(id);

      res.status(200).json('deleted');
    } catch (error) {
      next(error);
    }
  };

  paginate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page } = req.params;
      const filter = req.query as unknown as Filter;
      const { products, pages } = await this.productService.findByPaginate(
        Number(filter.limit) || 20,
        Number(page),
        filter.key,
        filter.sort,
        filter.order,
      );

      res.status(200).json({
        products,
        pages,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
