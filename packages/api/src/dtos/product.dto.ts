import { IsNumber, IsString } from 'class-validator';

class ProductDTO {
  @IsString()
    id: string;

  @IsString()
    name: string;

  @IsString()
    desc: string;

  @IsString()
    img: string;

  @IsNumber()
    price: number;
}

class ProductPageDTO {
  limit: number;

  page: number;
}

export { ProductDTO, ProductPageDTO };
