// order.entity.ts
import { OrderTextileEntity } from 'src/order-textile/entities/order-textile.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.orders)
    user: UserEntity;

    @Column('decimal')
    total: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => OrderTextileEntity, ordersTextiles => ordersTextiles.order)
    orderDetails: OrderTextileEntity[];
}
