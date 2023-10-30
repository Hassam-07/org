import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Todo } from '../models/Todo';
import { WidgetsService } from '@org/core-data';

@Component({
  selector: 'org-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() deleteTodoItem = new EventEmitter<number>();
  @Output() markAsComplete = new EventEmitter<Todo>();
  @Output() clearcompletedItems = new EventEmitter<any>();

  isLoading = false;
  filter: 'all' | 'active' | 'completed' = 'all';
  constructor(private todoService: WidgetsService) {}

  ngOnInit(): void {
    console.log('child todos', this.todos);
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response.map((todo) => ({ ...todo, isLoading: true }));
      this.isLoading = true;

      setTimeout(() => {
        this.todos.forEach((todo) => (todo.isLoading = false));
        this.isLoading = false; // Set isLoading to false once data is loaded
      }, 2000);
    });
  }

  deleteTodo(todoId: number | undefined) {
    this.deleteTodoItem.emit(todoId);
  }

  markCompleted(todo: Todo) {
    this.markAsComplete.emit(todo);
  }

  clearCompleted() {
    this.clearcompletedItems.emit();
  }

  getFilteredTodos(): any[] {
    if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.complete);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.complete);
    } else {
      return this.todos;
    }
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.filter = filter;
  }
}
