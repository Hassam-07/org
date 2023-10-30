import { Component, OnInit } from '@angular/core';
// import { environment } from '../../../../libs/core-data/src/lib/environments/environment';
import { Widget } from '@org/api-interfaces';
import { Todo } from '../app/models/Todo';
import { WidgetsService } from '@org/core-data';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: WidgetsService) {
    // console.log(environment.production);
  }

  allTodos!: Todo[];
  isLoading = false;

  ngOnInit(): void {
    console.log('warda', this.fetchTodos());
    this.todoService.getTodos().subscribe((todos) => {
      this.allTodos = todos;
    });
  }
  // constructor() {}

  addTodo(newTodo: any) {
    console.log('parent', newTodo);
    this.todoService.addTodo(newTodo).subscribe((response) => {
      this.allTodos.push(response);
      this.fetchTodos();
    });
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(() => {
      this.allTodos = this.allTodos.filter((todo) => todo.id !== todoId);
      this.fetchTodos();
    });
  }
  fetchTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.allTodos = todos;
    });
  }
  markCompleted(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService
      .markAsComplete(todo.id, todo.complete)
      .subscribe((response) => {
        console.log('Todo status updated successfully:', response);
      });
  }

  // clearCompleted() {
  //   const completedTodoIds = this.allTodos
  //     .filter((todo) => todo.complete && todo.id !== undefined)
  //     .map((todo) => todo.id as number);

  //   completedTodoIds.forEach((todoId) => {
  //     this.todoService.deleteTodo(todoId).subscribe(() => {
  //       this.allTodos = this.allTodos.filter((todo) => {
  //         return todo.id !== todoId;
  //       });
  //       this.fetchTodos();
  //     });
  //   });
  // }
  clearCompleted() {
    const completedTodos = this.allTodos.filter((todo) => todo.complete);
    completedTodos.forEach((todo) => {
      this.todoService.deleteTodo(todo.id).subscribe(() => {
        this.allTodos = this.allTodos.filter((t) => t.id !== todo.id);
      });
    });
  }
}
