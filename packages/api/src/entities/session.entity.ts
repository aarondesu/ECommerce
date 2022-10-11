import { ISession } from 'connect-typeorm';
import {
  Entity, BaseEntity, Index, PrimaryColumn, Column, DeleteDateColumn,
} from 'typeorm';

@Entity()
class Sessions extends BaseEntity implements ISession {
  @Index()
  @Column('bigint')
    expiredAt: number;

  @PrimaryColumn('varchar', { length: 255 })
    id: string;

  @DeleteDateColumn()
    destroyedAt?: Date;

  @Column('text')
    json: string;
}

export default Sessions;
