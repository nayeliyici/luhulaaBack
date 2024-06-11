import { OrderTextileEntity } from 'src/order-textile/entities/order-textile.entity';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class OrderEntity {
    id: number;
    user: UserEntity;
    total: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    orderDetails: OrderTextileEntity[];
}
