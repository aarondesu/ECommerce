import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Products from './product.entity';
import Users from './user.entity';

@Entity()
class Reviews extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    desc: string;

  @Column({ type: 'int' })
    rating: number;

  @CreateDateColumn()
    createdAt: string;

  @UpdateDateColumn()
    updatedAt: string;

  @OneToOne(() => Users, (user) => user.id)
  @JoinColumn()
    user: Users;

  @ManyToOne(() => Products, (product) => product.id)
  @JoinColumn()
    product: Products;
}

export default Reviews;
