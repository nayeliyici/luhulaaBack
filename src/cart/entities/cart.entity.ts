// cart.entity.ts
import { TextileEntity } from 'src/textile/entities/textile.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carts')
export class CartEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.cartItems)
    user: UserEntity;

    @ManyToOne(() => TextileEntity, textile => textile.cartItems)
    textile: TextileEntity;

    @Column()
    quantity: number;
}
