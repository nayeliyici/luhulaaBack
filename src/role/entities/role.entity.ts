// role.entity.ts
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, ManyToOne } from 'typeorm';

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => UserEntity, user => user.role)
    users: UserEntity[];
}
