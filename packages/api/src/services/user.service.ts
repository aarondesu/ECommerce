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

  paginate = async (
    limit: number,
    page: number,
    key: string,
    sort: string,
    order: string,
  ): Promise<{
    users: Users[];
    pages: number;
  }> => {
    let qb = Users.createQueryBuilder();

    // Filter search using specified words
    if (key !== 'undefined' && key !== '') {
      qb = qb.where('Users.username LIKE :word OR Users.email LIKE :word', { word: `%${key}%` });
    }

    // Order by
    if (sort !== '' && order !== '') {
      let col = '';

      switch (sort) {
        case 'i':
          col = 'Users.id';
          break;
        case 'u':
          col = 'Users.username';
          break;
        case 'e':
          col = 'Users.email';
          break;
        default:
          col = 'Users.createdAt';
          break;
      }

      if (order === 'a') { qb.orderBy(col, 'ASC'); } else if (order === 'd') { qb.orderBy(col, 'DESC'); }
    }

    // Paginate
    const skip = limit * page - limit;
    qb = qb.skip(skip).take(limit);

    const [result, count] = await qb.getManyAndCount();
    const pages = Math.ceil(count / limit);

    const users = result.map((user) => {
      const { password, createdAt, ...extractedUser } = user;

      return extractedUser as Users;
    });

    return { users, pages };
  };
}

export default UserService;
