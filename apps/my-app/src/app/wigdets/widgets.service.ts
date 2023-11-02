import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  private apiUrl = environment.apiUrl;
  model = 'todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  deleteTodo(todoId: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.apiUrl}/${todoId}`);
  }
  // updateTodo(todo: any): Observable<any> {
  //   return this.http.patch<any>(`${this.apiUrl}/${todo}`, todo);
  // }
  // markAsComplete(todoId: number, status: boolean): Observable<any> {
  //   return this.http.patch<any>(`${this.apiUrl}/${todoId}`, {
  //     complete: status,
  //   });
  markAsComplete(todoId: number, status: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${todoId}`, {
      complete: status,
    });
  }

  pinTodo(todoId: number, status: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${todoId}`, {
      pin: status,
    });
  }
  updateTodo(id: number, updatedTodo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}`, updatedTodo);
  }
}
// BASE_URL = 'http://localhost:3000/api';
// model = 'todos';
// constructor(private http: HttpClient) {}

// getTodos() {
//   return this.http.get(`${this.BASE_URL}/${this.model}`);
// }
// createTodo(todo) {
//   return this.http.post(`${this.BASE_URL}/${this.model}`, todo);
// }
// deleteTodo(id) {
//   console.log(id);
//   return this.http.delete(`${this.BASE_URL}/${this.model}/${id}`);
// }
// markAsComplete(todo) {
//   return this.http.put(`${this.BASE_URL}/${this.model}/${todo.id}`, todo);
// }
// change(todo) {
//   return this.http.patch(`${this.BASE_URL}/${this.model}`, todo);
// }
