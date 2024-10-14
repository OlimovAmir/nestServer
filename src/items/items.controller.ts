import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('items') // Этот декоратор добавляет тег в документацию Swagger
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all items' }) // Описание метода для Swagger
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.itemsService.remove(id);
  }
}
