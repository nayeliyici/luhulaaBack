import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderTextileService } from './order-textile.service';
import { CreateOrderTextileDto } from './dto/create-order-textile.dto';
import { UpdateOrderTextileDto } from './dto/update-order-textile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order-textile')
@Controller('order-textile')
export class OrderTextileController {
  constructor(private readonly orderTextileService: OrderTextileService) {}

  @Post()
  create(@Body() createOrderTextileDto: CreateOrderTextileDto) {
    return this.orderTextileService.create(createOrderTextileDto);
  }

  @Get()
  findAll() {
    return this.orderTextileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderTextileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderTextileDto: UpdateOrderTextileDto) {
    return this.orderTextileService.update(+id, updateOrderTextileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderTextileService.remove(+id);
  }
}
