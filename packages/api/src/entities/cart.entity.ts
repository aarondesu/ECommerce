import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

import Products from './product.entity';
import Users from './user.entity';

@Entity()
class Carts extends BaseEntity {
  @ObjectIdColumn()
    _id: ObjectID;

  @PrimaryColumn('uuid')
    id: string;

  @Column()
    total: number;

  @Column()
    quantity: number;

  @ManyToOne(() => Products, (product) => product.id)
  @JoinColumn()
    products: Products;

  @ManyToOne(() => Users, (user) => user.username)
  @JoinColumn()
    user: Users;
}

export default Carts;
