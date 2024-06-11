// favorite.entity.ts
import { TextileEntity } from 'src/textile/entities/textile.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, PrimaryColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorites')
export class FavoriteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.favorites)
    user: UserEntity;

    @ManyToOne(() => TextileEntity, textile => textile.favorites)
    textile: TextileEntity;
}
