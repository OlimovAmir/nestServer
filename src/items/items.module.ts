import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './item.entity';

@Module({
  providers: [ItemsService],
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
})
export class ItemsModule {}
