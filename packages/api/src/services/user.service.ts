import HTTPException from '../exceptions/HTTPException';
import Users from '../entities/user.entity';

class UserService {
  getUser = async (id: string): Promise<Users> => {
    const findUser = await Users.findOne({
      where: {
        id,
      },
    });
    if (!findUser) throw new HTTPException(404, 'User was not found');

    const { password, ...user } = findUser;

    return user as Users;
  };

  getAll = async (limit: number, page: number) : Promise<{
    users: Users[];
    pages: number;
  }> => {
    let qb = Users.createQueryBuilder();

    const skip = limit * page - limit;
    qb = qb.skip(skip).take(limit);
    const { entities } = await qb.getRawAndEntities();
    const [, count] = await Users.findAndCount();
    const pages = Math.ceil(count / limit);

    const users = entities.map((user) => {
      const { password, ...extractedUser } = user;

      return extractedUser as Users;
    });

    return { users, pages };
  };
}

export default UserService;
