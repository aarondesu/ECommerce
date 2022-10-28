/* eslint-disable import/prefer-default-export */
import { IsNumber, IsString } from 'class-validator';

class Filter {
  @IsNumber()
    limit: number;

  @IsString()
    key: string;

  @IsString()
    order:string;

  @IsString()
    sort:string;
}

export default Filter;
