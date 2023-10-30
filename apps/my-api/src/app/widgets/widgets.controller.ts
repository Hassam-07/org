import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { WidgetsService } from './widgets.service';
// import { Widget } from '@org/api-interfaces';
import { Todo } from '@org/api-interfaces';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
// import { Todo } from 'libs/api-interfaces/src/lib/api-interfaces';

@Controller('todos')
export class WidgetsController {
  constructor(private readonly todosService: WidgetsService) {}

  @Post('')
  create(@Body() createTodoDto: CreateWidgetDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get('')
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateWidgetDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
