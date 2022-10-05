import { GetUserDTO } from 'src/dtos/users.dto';
import { isEmpty } from 'class-validator';

import HTTPException from '../exceptions/HTTPException';
import Users from '../entities/user.entity';

class UserService {
  getUser = async (userDTO: GetUserDTO): Promise<Users> => {
    if (isEmpty(userDTO)) throw new HTTPException(401, 'UserDTO is empty!');

    const findUser = await Users.findOne({ where: { id: userDTO.id } });
    if (!findUser) throw new HTTPException(404, 'User was not found');

    const { password, ...user } = findUser;

    return user as Users;
  };
}

export default UserService;
