// user.entity.ts
import { ArtisanEntity } from 'src/artisan/entities/artisan.entity';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { FavoriteEntity } from 'src/favorite/entities/favorite.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { RoleEntity } from 'src/role/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    address_colony: string;

    @Column({ nullable: true })
    address_street: string;

    @Column({ nullable: true })
    address_number: string;

    @Column({ nullable: true })
    address_reference: string;

    @ManyToOne(() => RoleEntity, role => role.users)
    role: RoleEntity;

    @OneToOne(() => ArtisanEntity, artisan => artisan.user)
    artisan: ArtisanEntity;

    @OneToMany(() => OrderEntity, order => order.user)
    orders: OrderEntity[];

    @OneToMany(() => FavoriteEntity, favorite => favorite.user)
    favorites: FavoriteEntity[];

    @OneToMany(() => CartEntity, cart => cart.user)
    cartItems: CartEntity[];
}
