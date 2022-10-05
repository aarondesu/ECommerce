import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

import Carts from './cart.entity';
import Reviews from './review.entity';

@Entity()
export default class Products extends BaseEntity {
  @ObjectIdColumn()
    id: ObjectID;

  @Column()
    name: string;

  @Column()
    desc: string;

  @Column()
    img: string;

  @Column()
    quantity: number;

  @Column()
    categories: string;

  @Column()
    size: string;

  @Column()
    color: string;

  @Column()
    price: number;

  @CreateDateColumn()
    createdAt: string;

  @UpdateDateColumn()
    updatedAt: string;

  @OneToMany(() => Carts, (cart) => cart.id)
  @JoinColumn()
    cart: Carts[];

  @OneToMany(() => Reviews, (review) => review.id)
  @JoinColumn()
    reviews: Reviews[];
}
