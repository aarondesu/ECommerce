import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import Products from './product.entity';
import Users from './user.entity';

@Entity()
class Orders extends BaseEntity {
  @ObjectIdColumn()
    id: ObjectID;

  @OneToMany(() => Products, (item) => item.id)
    items: Products[];

  @OneToOne(() => Users, (user) => user.username)
  @JoinColumn()
    user: Users;

  @Column()
    subTotal: number;

  @Column({ default: false })
    pending: boolean;
}

export default Orders;
