import { GetUserDTO } from 'src/dtos/users.dto';
import HTTPException from '../exceptions/HTTPException';
import Users from '../entities/user.entity';

class UserService {
  getUser = async (userDTO: GetUserDTO): Promise<Users> => {
    const findUser = await Users.findOne({ where: { id: userDTO.id } });
    if (!findUser) throw new HTTPException(404, 'User was not found');

    const { password, ...user } = findUser;

    return user as Users;
  };
}

export default UserService;
