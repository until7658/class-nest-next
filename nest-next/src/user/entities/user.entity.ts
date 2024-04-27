import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('user_uniq_01', ['userId'])
@Index('user_uniq_02', ['userEmail'])
@Entity('tb_user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    name: 'user_id',
    type: 'varchar',
    nullable: false,
  })
  userId: string;

  @Column({
    name: 'user_email',
    type: 'varchar',
    nullable: false,
  })
  userEmail: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    nullable: false,
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    nullable: false,
  })
  updatedAt: string;
}
