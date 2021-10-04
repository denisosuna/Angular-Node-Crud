import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginI,UserRegisterI } from '../interfaces/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000/api/';
  constructor(private http: HttpClient, private router:Router) {}

  login(user: UserLoginI) {
    console.log(user);
    return this.http.post<any>(this.URL + "login", user);
  }

  register(user: UserRegisterI) {
    console.log(user);
    return this.http.post<any>(this.URL + "register", user);
  }

  getUserTypes(){
    return this.http.get<any>(this.URL + "userTypes");
  }

  loggedIn():boolean{
    return !!sessionStorage.getItem("token");
  }

  logout(){
    sessionStorage.removeItem("token")
    this.router.navigate(["/tasks"])
  }

}
