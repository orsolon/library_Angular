import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  private apiServer = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiServer + '/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiServer + `/users/${user.id}`, user);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiServer + '/users');
  }

  getByCPF(cpf: string): Observable<User> {
    return this.http.get<User>(this.apiServer + `/users?cpf=${cpf}`);
  }

  editUser(id: number, name: string, cpf: string, email: string, password: string): Observable<User> {
    const body = { name: name, cpf: cpf, email: email, password: password }
    return this.http.put<User>(this.apiServer + `/users/${id}`, body)
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiServer + `/users/${id}`);
  }

  saveUser (logged: string, cpf: string) {
    localStorage.setItem(logged, cpf);
  }

  getUser (logged: string) {
    return localStorage.getItem(logged);
  }

}
