import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  listUser: User[] = [];

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        console.log(res);
        this.listUser = <any>res;
      },
      (err) => console.log(err)
    );
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      (res) => {
        console.log("deleted");
        this.listUsers();
      },
      (err) => console.log(err)
    );
  }

  modifyUser(id:number){

    this.router.navigate(["modify/"+id])
    
  }
}
