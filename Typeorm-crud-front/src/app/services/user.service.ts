import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  //get Users
  getUsers() {
    return this.http.get(this.url + '/users');
  }

  getUser(id: number) {
    return this.http.get(this.url + '/user/' + id);
  }

  addUser(user: User) {
    return this.http.post(this.url + '/user', user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/user/' + id);
  }

  editUser(user: User,id: number) {
    return this.http.put(this.url + '/user/' + id, user);
  
  }
}

export interface User{
  id:number,
  firstname:string,
  lastname:string
}