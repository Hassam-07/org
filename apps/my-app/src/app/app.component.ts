import { Component, OnInit } from '@angular/core';
// import { environment } from '../../../../libs/core-data/src/lib/environments/environment';
import { Widget } from '@org/api-interfaces';
import { Todo } from '../app/models/Todo';
import { WidgetsService } from '../app/wigdets/widgets.service';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private todoService: WidgetsService,
    private todoDataService: TodoDataService
  ) {
    // console.log(environment.production);
  }
  showDeleteModal = false;
  selectedTodo: Todo | null = null;
  allTodos: Todo[] = [];
  isLoading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos) => {
        this.allTodos = todos;
        console.log('hassam', todos);
      },
      (error) => {
        this.handleFetchTodosError(error);
      }
    );
  }

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
    this.showDeleteModal = false;
  }
  editTodo(todo: Todo) {
    this.selectedTodo = todo;
  }
  pinTodo(todo: Todo) {
    todo.pinned = !todo.pinned;

    // Sort the todos array to place pinned items at the top
    this.allTodos = this.allTodos.sort((a, b) => {
      if (a.pinned && !b.pinned) {
        return -1;
      } else if (!a.pinned && b.pinned) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  fetchTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.allTodos = todos;
    });
  }
  handleFetchTodosError(error: any) {
    this.errorMessage = 'Failed to fetch todos. Please try again later.';
    console.log(this.errorMessage);
  }
  markCompleted(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService
      .markAsComplete(todo.id, todo.complete)
      .subscribe((response) => {
        console.log('Todo status updated successfully:', response);
      });
  }
  // markCompleted(todo: Todo) {
  //   if (todo.id !== undefined) {
  //     this.todoService.markAsComplete(todo.id, !todo.complete).subscribe(() => {
  //       todo.complete = !todo.complete;
  //     });
  //   }
  // }
  // editing(todo) {
  //   todo.editing = false;
  // }
  handleUpdatedTodo(updatedTodo: Todo) {
    // Find the index of the updated todo in the array and replace it
    const index = this.allTodos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.allTodos[index] = updatedTodo;
    }
  }
  // clearCompleted() {
  //   const completedTodos = this.allTodos.filter((todo) => todo.complete);
  //   completedTodos.forEach((todo) => {
  //     this.todoService.deleteTodo(todo.id).subscribe(() => {
  //       this.allTodos = this.allTodos.filter((t) => t.id !== todo.id);
  //     });
  //   });
  // }
  clearCompleted() {
    const completedTodoIds = this.allTodos
      .filter((todo) => todo.complete && todo.id !== undefined)
      .map((todo) => todo.id as number);

    completedTodoIds.forEach((todoId) => {
      this.todoService.deleteTodo(todoId).subscribe(() => {
        this.allTodos = this.allTodos.filter((todo) => {
          return todo.id !== todoId;
        });
        this.fetchTodos();
      });
    });
  }
}
