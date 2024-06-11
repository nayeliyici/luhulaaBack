// textile.entity.ts
import { ArtisanEntity } from 'src/artisan/entities/artisan.entity';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { FavoriteEntity } from 'src/favorite/entities/favorite.entity';
import { OrderTextileEntity } from 'src/order-textile/entities/order-textile.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity('textiles')
export class TextileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    category: string;

    @Column({ nullable: true })
    stock: number;

    @ManyToOne(() => ArtisanEntity, artisan => artisan.textiles)
    creator: ArtisanEntity;

    @Column({ nullable: true })
    madeIn: string;

    @Column({ nullable: true })
    technique: string;

    @Column({ nullable: true })
    materials: string;

    @OneToMany(() => OrderTextileEntity, ordersTextiles => ordersTextiles.textile)
    orderDetails: OrderTextileEntity[];

    @OneToMany(() => FavoriteEntity, favorite => favorite.textile)
    favorites: FavoriteEntity[];

    @OneToMany(() => CartEntity, cart => cart.textile)
    cartItems: CartEntity[];
}
