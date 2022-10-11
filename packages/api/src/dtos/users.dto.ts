import { IsEmail, IsString, IsBoolean } from 'class-validator';

// eslint-disable-next-line import/prefer-default-export
export class CreateUserDTO {
  @IsString()
    username: string;

  @IsEmail()
    email: string;

  @IsString()
    password: string;

  @IsBoolean()
    isAdmin: boolean;

  @IsString()
    firstName: string;

  @IsString()
    lastName: string;
}

export class LoginUserDto {
  @IsString()
    username: string;

  @IsEmail()
    email: string;

  @IsString()
    password: string;
}

export class GetUserDTO {
  @IsString()
    id: string;
}
