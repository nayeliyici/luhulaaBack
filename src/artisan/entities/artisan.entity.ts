// artisan.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { TextileEntity } from 'src/textile/entities/textile.entity';

@Entity('artisans')
export class ArtisanEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.artisan)
    @JoinColumn()
    user: UserEntity;

    @Column({ nullable: true })
    photo: string;

    @Column({ nullable: true })
    biography: string;

    @Column({ nullable: true })
    quote: string;

    @OneToMany(() => TextileEntity, textile => textile.creator)
    textiles: TextileEntity[];
}
