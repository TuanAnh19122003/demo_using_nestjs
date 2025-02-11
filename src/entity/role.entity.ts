import { User } from 'src/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name : 'roles'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
