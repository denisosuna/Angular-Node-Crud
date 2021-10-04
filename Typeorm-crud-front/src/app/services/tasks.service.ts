import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = 'http://localhost:3000/api';
  constructor(private http:HttpClient) { }

getTasks(){

  return this.http.get(this.url + "/tasks")

}
}
