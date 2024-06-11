import { CreateOrderTextileDto } from './dto/create-order-textile.dto';
import { UpdateOrderTextileDto } from './dto/update-order-textile.dto';
export declare class OrderTextileService {
    create(createOrderTextileDto: CreateOrderTextileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderTextileDto: UpdateOrderTextileDto): string;
    remove(id: number): string;
}
