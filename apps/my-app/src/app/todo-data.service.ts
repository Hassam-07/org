import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  // constructor() {}
  private selectedTodo = new BehaviorSubject<Todo | null>(null);
  selectedTodo$ = this.selectedTodo.asObservable();

  setTodo(todo: any) {
    this.selectedTodo.next(todo);
  }

  clearTodo() {
    this.selectedTodo.next(null);
  }
}
