import { isEmail, isEmpty } from 'class-validator';
import CryptoJS from 'crypto-js';

import { CreateUserDTO, LoginUserDto } from '../dtos/users.dto';
import { PASSWORD_SECRET_KEY } from '../config';
import HTTPException from '../exceptions/HTTPException';
import Users from '../entities/user.entity';

class AuthService {
  public register = async (userData: CreateUserDTO): Promise<Users> => {
    if (isEmpty(userData)) throw new HTTPException(400, 'userData is empty');

    const findUsername: Users = await Users.findOne({ where: { username: userData.username } });
    if (findUsername) throw new HTTPException(409, `Username "${userData.username}" aleady exists.`);

    if (!isEmail(userData.email)) throw new HTTPException(409, 'Email invalid');
    const findEmail: Users = await Users.findOne({ where: { email: userData.email } });
    if (findEmail) throw new HTTPException(409, `Email "${userData.email}" already exists.`);

    const hashedPassword = CryptoJS.AES.encrypt(userData.password, PASSWORD_SECRET_KEY).toString();
    const createUserData: Users = await Users.create({
      ...userData,
      password: hashedPassword,
    }).save();

    return createUserData;
  };

  public login = async (loginData: LoginUserDto): Promise<Users> => {
    if (isEmpty(loginData)) throw new HTTPException(400, 'loginData is empty!');

    const findUser: Users = await Users.findOne({ where: { username: loginData.username } });
    if (!findUser) throw new HTTPException(400, 'User does not exist!');

    const hashedPassword = CryptoJS.AES.decrypt(findUser.password, PASSWORD_SECRET_KEY);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== loginData.password) throw new HTTPException(400, 'Password is incorrect!');

    const { password, ...others } = findUser;

    return others as Users;
  };
}

export default AuthService;
