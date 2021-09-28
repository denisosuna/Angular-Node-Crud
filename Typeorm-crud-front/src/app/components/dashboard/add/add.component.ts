import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  add() {
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['/home']);
  }
}
