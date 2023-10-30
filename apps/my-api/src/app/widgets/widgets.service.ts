import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
// import { Widget } from '@org/api-interfaces';
import { Todo } from '@org/api-interfaces';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
// import { Todo } from 'libs/api-interfaces/src/lib/api-interfaces';

@Injectable()
export class WidgetsService {
  private todos: Todo[] = [
    {
      id: 1,
      name: 'first',
      complete: false,
    },
    {
      id: 2,
      name: 'Second',
      complete: false,
    },
    {
      id: 3,
      name: 'third',
      complete: false,
    },
  ];
  create(createTodoDto: CreateWidgetDto) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      complete: false,
      ...createTodoDto,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateWidgetDto) {
    return `This action updates a todo`;
  }

  remove(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
