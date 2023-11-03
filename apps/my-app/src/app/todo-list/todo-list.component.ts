import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Todo } from '../models/Todo';
import { WidgetsService } from '../wigdets/widgets.service';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'org-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todos: Todo[];
  @Input() showDeleteModal!: boolean;
  @Input() selectedTodo: Todo | null = null;
  @Output() deleteTodoItem = new EventEmitter<number>();
  @Output() editTodoItem = new EventEmitter();
  @Output() pinTodoItem = new EventEmitter();
  @Output() markAsComplete = new EventEmitter<Todo>();
  @Output() clearcompletedItems = new EventEmitter<any>();
  todoIdToBeDeleted!: number | undefined;
  @Input() errorMessage = '';

  @Input() showLoader = true;
  pinnedTodos: Todo[] = [];
  unpinnedTodos: Todo[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';
  constructor(
    private todoService: WidgetsService,
    private todoDataService: TodoDataService
  ) {}

  // ngOnInit(): void {
  //   this.fetchTodos();
  // }
  ngOnInit(): void {
    this.showLoader = true;
  }
  ngOnChanges() {
    if ((this.todos && this.todos.length > 0) || this.todos.length === 0) {
      this.showLoader = false;
    }
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
  editTodo(todo: any) {
    this.todoDataService.setTodo(todo);
  }

  clearCompleted() {
    this.clearcompletedItems.emit();
  }

  getFilteredTodos(): Todo[] {
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
