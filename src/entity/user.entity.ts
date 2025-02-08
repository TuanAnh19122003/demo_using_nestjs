
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;

  @Column()
  email: string;

  @Column('int')
  password: number;
}
