import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Carts from './cart.entity';
import Reviews from './review.entity';

@Entity()
class Products extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    desc: string;

  @Column()
    img: string;

  @Column({ nullable: true })
    categories: string;

  @Column({ nullable: true, type: 'json' })
    size: JSON;

  @Column({ nullable: true, type: 'json' })
    color: JSON;

  @Column({ default: false })
    isAvailable: boolean;

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

export default Products;
