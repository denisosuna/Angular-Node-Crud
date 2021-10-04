import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserTypesI } from 'src/app/interfaces/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {

    mail: '',
    pass: '',
    name:"",
    id_tipouser:0
  };
  typeOfUser=0
  listUser: UserTypesI[] = [];
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    this.listUsersTypes();
  }

  listUsersTypes() {
    this.authService.getUserTypes().subscribe(
      (res) => {
        console.log(res);
        this.listUser = <any>res;
      },
      (err) => console.log(err)
    );
  }

  register() {
    console.log(this.typeOfUser);
    this.authService.register(this.user).subscribe(
      (res) => {
        console.log(res);
        sessionStorage.setItem("token",res.token);
        this.router.navigate(["/private"])
      },
      (err) => console.log(err)
    );
  }
}
