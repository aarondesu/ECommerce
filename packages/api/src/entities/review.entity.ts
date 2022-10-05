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
} from 'typeorm';
import Products from './product.entity';
import Users from './user.entity';

@Entity()
export default class Reviews extends BaseEntity {
  @ObjectIdColumn()
    id: ObjectID;

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
