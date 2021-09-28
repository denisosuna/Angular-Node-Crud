import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
})
export class ModifyComponent implements OnInit {
  user: any = {
    id: 0,
    firstname: '',
    lastname: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = <number>this.activatedRoute.snapshot.params.id;

    if (id) {
      this.userService.getUser(id).subscribe(
        (res) => {
          console.log(res);
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  modify() {
    this.userService.editUser(this.user,this.user.id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['/home']);
  }
}
