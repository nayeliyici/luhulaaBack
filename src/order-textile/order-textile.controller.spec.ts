import { Test, TestingModule } from '@nestjs/testing';
import { OrderTextileController } from './order-textile.controller';
import { OrderTextileService } from './order-textile.service';

describe('OrderTextileController', () => {
  let controller: OrderTextileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTextileController],
      providers: [OrderTextileService],
    }).compile();

    controller = module.get<OrderTextileController>(OrderTextileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
