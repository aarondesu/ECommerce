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

  findOne = async (id: string): Promise<Products> => {
    const findProduct = await Products.findOneBy({ id });
    if (!findProduct) throw new HTTPException(404, 'Product does not exist!');

    return findProduct;
  };

  findByPaginate = async (
    limit: number,
    page: number,
    key: string,
    sort: string,
    order: string,
  ): Promise<{
    products: Products[];
    pages: number;
  }> => {
    let qb = Products.createQueryBuilder();

    // Filter search using specified words
    if (key !== 'undefined' && key !== '') {
      qb = qb.where('Products.name ILIKE :word OR Products.desc ILIKE :word', { word: `%${key}%` });
    }

    // Order by
    if (sort !== '' && order !== '') {
      let col = '';

      switch (sort) {
        case 'i':
          col = 'Products.id';
          break;
        case 'n':
          col = 'Products.name';
          break;
        case 'p':
          col = 'Products.price';
          break;
        default:
          col = 'Products.createdAt';
          break;
      }

      if (order === 'a') {
        qb.orderBy(col, 'ASC');
      } else if (order === 'd') {
        qb.orderBy(col, 'DESC');
      }
    }

    // Paginate
    const skip = limit * page - limit;
    qb = qb.skip(skip).take(limit);

    const [result, count] = await qb.getManyAndCount();
    const pages = Math.ceil(count / limit);

    const products = result.map((product) => {
      const {
        createdAt, desc, size, color, categories, ...extractedProduc
      } = product;

      return extractedProduc as Products;
    });

    return { products, pages };
  };

  update = async (updateProdDTO: ProductDTO): Promise<Products> => {
    if (isEmpty(updateProdDTO)) throw new HTTPException(401, 'CreateProductTDO is empty!');

    const findProduct = await Products.findOne({ where: { id: updateProdDTO.id } });
    if (!findProduct) throw new HTTPException(404, 'Product does not exist!');

    const updatedProduct = Object.assign(new Products(), findProduct, updateProdDTO);
    const product = await updatedProduct.save();

    return product;
  };

  remove = async (id: string): Promise<void> => {
    const product = await this.findOne(id);
    if (!product) throw new HTTPException(404, 'Product does not exist!');

    await product.remove();
  };
}

export default ProductService;
