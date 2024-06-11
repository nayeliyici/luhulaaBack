// order-textile.entity.ts
import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from 'src/order/entities/order.entity';
import { TextileEntity } from 'src/textile/entities/textile.entity';

@Entity('order_textiles')
export class OrderTextileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => OrderEntity, order => order.orderDetails)
    order: OrderEntity;

    @ManyToOne(() => TextileEntity, textile => textile.orderDetails)
    textile: TextileEntity;

    @Column()
    quantity: number;
}
