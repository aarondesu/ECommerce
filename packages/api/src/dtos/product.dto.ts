import { IsNumber, IsString } from 'class-validator';
import { ObjectID } from 'typeorm';

class ProductDTO {
  @IsString()
    name: string;

  @IsString()
    desc: string;

  @IsString()
    img: string;

  @IsNumber()
    price: number;
}

class GetProductDTO {
  @IsString()
    id: ObjectID;
}

class UpdateProductDTO extends ProductDTO {
  @IsString()
    id: ObjectID;
}

export { ProductDTO, GetProductDTO, UpdateProductDTO };
