import { isEmpty } from 'class-validator';

import HTTPException from '../exceptions/HTTPException';
import { ProductDTO } from '../dtos/product.dto';
import Products from '../entities/product.entity';

class ProductService {
  create = async (createProdDTO: ProductDTO) => {
    if (isEmpty(createProdDTO)) throw new HTTPException(401, 'CreateProductDTO is empty!');

    const product = Products.create({
      ...createProdDTO,
    }).save();

    return product;
  };

  findOne = async (getProdDTO: ProductDTO): Promise<Products> => {
    if (isEmpty(getProdDTO)) throw new HTTPException(401, 'CreateProductTDO is empty!');

    const findProduct = await Products.findOne({ where: { id: getProdDTO.id } });
    if (!findProduct) throw new HTTPException(404, 'Product does not exist!');

    return findProduct;
  };

  findAll = async (): Promise<Products[]> => {
    const findProducts = await Products.find();

    return findProducts;
  };

  update = async (updateProdDTO: ProductDTO): Promise<Products> => {
    if (isEmpty(updateProdDTO)) throw new HTTPException(401, 'CreateProductTDO is empty!');

    const findProduct = await Products.findOne({ where: { id: updateProdDTO.id } });
    if (!findProduct) throw new HTTPException(404, 'Product does not exist!');

    const updatedProduct = Object.assign(new Products(), findProduct, updateProdDTO);
    const product = await updatedProduct.save();

    return product;
  };

  remove = async (getProdDTO: ProductDTO): Promise<void> => {
    const product = await this.findOne(getProdDTO);
    if (!product) throw new HTTPException(404, 'Product does not exist!');

    await product.remove();
  };
}

export default ProductService;
