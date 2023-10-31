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
  @Input() showDeleteModal!: boolean;
  @Output() deleteTodoItem = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter();
  @Output() pinTodoItem = new EventEmitter();
  @Output() markAsComplete = new EventEmitter<Todo>();
  @Output() clearcompletedItems = new EventEmitter<any>();
  todoIdToBeDeleted!: number | undefined;

  isLoading = false;
  pinnedTodos: Todo[] = [];
  unpinnedTodos: Todo[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';
  constructor(private todoService: WidgetsService) {}

  ngOnInit(): void {
    console.log('child todos', this.todos);
    this.fetchTodos();
  }

  fetchTodos() {
    const existingPinnedTodoIds = this.pinnedTodos
      ? this.pinnedTodos.map((todo) => todo.id)
      : [];
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response.map((todo) => ({
        ...todo,
        isLoading: true,
        pinned: existingPinnedTodoIds.includes(todo.id) ? true : false,
        editing: false,
        name: todo.name,
      }));
      this.isLoading = true;

      setTimeout(() => {
        this.todos.forEach((todo) => (todo.isLoading = false));
        this.isLoading = false; // Set isLoading to false once data is loaded
        // this.pinnedTodos = this.todos.filter((todo) => todo.pinned);
        this.unpinnedTodos = this.todos.filter((todo) => todo.pinned);
      }, 2000);
    });
  }
  startEditing(todo: Todo) {
    todo.editing = true;
  }

  save(todo: Todo) {
    todo.editing = false;
  }
  update(todo: Todo) {
    todo.editing = false;
    this.editTodo.emit(todo);
  }

  openDeleteQuestionConfirmationDialog(todoId: number) {
    this.todoIdToBeDeleted = todoId;
    this.showDeleteModal = true;
  }

  closeDeleteQuestionConfirmationDialog() {
    this.todoIdToBeDeleted = undefined;
    this.showDeleteModal = false;
  }
  deleteTodo(todoId: number | undefined) {
    this.deleteTodoItem.emit(todoId);
  }
  togglePin(todo: Todo) {
    this.pinTodoItem.emit(todo);
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
