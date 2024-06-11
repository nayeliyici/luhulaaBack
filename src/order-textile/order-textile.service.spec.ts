import { Test, TestingModule } from '@nestjs/testing';
import { OrderTextileService } from './order-textile.service';

describe('OrderTextileService', () => {
  let service: OrderTextileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTextileService],
    }).compile();

    service = module.get<OrderTextileService>(OrderTextileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
