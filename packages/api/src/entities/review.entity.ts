import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  OneToOne,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import Products from './product.entity';
import Users from './user.entity';

@Entity()
class Reviews extends BaseEntity {
  @ObjectIdColumn()
    _id: ObjectID;

  @PrimaryColumn('uuid')
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
