import { Module } from '@nestjs/common';
import { OrderTextileService } from './order-textile.service';
import { OrderTextileController } from './order-textile.controller';

@Module({
  controllers: [OrderTextileController],
  providers: [OrderTextileService],
})
export class OrderTextileModule {}
