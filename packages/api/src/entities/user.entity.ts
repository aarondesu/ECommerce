import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
  ObjectID,
  PrimaryColumn,
} from 'typeorm';

import Carts from './cart.entity';
import Orders from './order.entity';

@Entity()
class Users extends BaseEntity {
  @ObjectIdColumn()
    _id: ObjectID;

  @PrimaryColumn('uuid')
    id: string;

  @Column({ unique: true })
    username: string;

  @Column()
    password: string;

  @Column({ unique: true })
    email: string;

  @Column({ default: false })
    isAdmin: boolean;

  @Column()
    imgUrl: string;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @CreateDateColumn()
    createdAt: string;

  @UpdateDateColumn()
    lastUpdated: string;

  @OneToMany(() => Carts, (cart) => cart.id)
  @JoinColumn()
    cart: Carts[];

  @OneToOne(() => Orders, (order) => order.id)
  @JoinColumn()
    order: Orders;
}

export default Users;
