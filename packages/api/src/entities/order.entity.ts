import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import Products from './product.entity';
import Users from './user.entity';

@Entity()
class Orders extends BaseEntity {
  @ObjectIdColumn()
    _id: ObjectID;

  @PrimaryColumn('uuid')
    id: string;

  @OneToMany(() => Products, (item) => item.id)
    items: Products[];

  @OneToOne(() => Users, (user) => user.id)
  @JoinColumn()
    user: Users;

  @Column()
    subTotal: number;

  @Column({ default: false })
    pending: boolean;
}

export default Orders;
