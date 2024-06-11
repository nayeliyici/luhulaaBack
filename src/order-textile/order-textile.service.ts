import { Injectable } from '@nestjs/common';
import { CreateOrderTextileDto } from './dto/create-order-textile.dto';
import { UpdateOrderTextileDto } from './dto/update-order-textile.dto';

@Injectable()
export class OrderTextileService {
  create(createOrderTextileDto: CreateOrderTextileDto) {
    return 'This action adds a new orderTextile';
  }

  findAll() {
    return `This action returns all orderTextile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderTextile`;
  }

  update(id: number, updateOrderTextileDto: UpdateOrderTextileDto) {
    return `This action updates a #${id} orderTextile`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderTextile`;
  }
}
