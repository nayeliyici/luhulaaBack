import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderTextileDto } from './create-order-textile.dto';

export class UpdateOrderTextileDto extends PartialType(CreateOrderTextileDto) {}
