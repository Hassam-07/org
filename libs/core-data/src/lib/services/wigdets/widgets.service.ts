import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${todoId}`);
  }

  markAsComplete(todoId: number, status: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${todoId}`, {
      complete: status,
    });
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
}
