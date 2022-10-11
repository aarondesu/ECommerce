import {
  BaseEntity, PrimaryGeneratedColumn, Column, Entity,
} from 'typeorm';

@Entity()
class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    img: string;
}

export default Categories;
