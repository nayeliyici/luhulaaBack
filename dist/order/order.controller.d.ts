import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly ordersService;
    constructor(ordersService: OrderService);
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
