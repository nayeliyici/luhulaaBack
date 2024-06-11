import { OrderEntity } from 'src/order/entities/order.entity';
import { TextileEntity } from 'src/textile/entities/textile.entity';
export declare class OrderTextileEntity {
    id: number;
    order: OrderEntity;
    textile: TextileEntity;
    quantity: number;
}
