import { Test, TestingModule } from '@nestjs/testing';
import { ItemsnestController } from './itemsnest.controller';

describe('ItemsnestController', () => {
  let controller: ItemsnestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsnestController],
    }).compile();

    controller = module.get<ItemsnestController>(ItemsnestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
