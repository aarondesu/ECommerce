import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Carts from './cart.entity';
import Orders from './order.entity';

enum UserRole {
  ADMIN = 'admin',
  MOD = 'mod',
  USER = 'user',
}

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ unique: true })
    username: string;

  @Column()
    password: string;

  @Column({ unique: true })
    email: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;

  @Column({ nullable: true })
    img: string;

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
export { UserRole };
