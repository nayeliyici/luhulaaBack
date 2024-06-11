import { OrderTextileService } from './order-textile.service';
import { CreateOrderTextileDto } from './dto/create-order-textile.dto';
import { UpdateOrderTextileDto } from './dto/update-order-textile.dto';
export declare class OrderTextileController {
    private readonly orderTextileService;
    constructor(orderTextileService: OrderTextileService);
    create(createOrderTextileDto: CreateOrderTextileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderTextileDto: UpdateOrderTextileDto): string;
    remove(id: string): string;
}
