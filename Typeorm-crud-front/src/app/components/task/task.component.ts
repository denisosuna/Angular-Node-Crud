import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import {tasksI} from "src/app/interfaces/tasks"
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private tasksService: TasksService) { }
userTasks : tasksI[] =[];
  ngOnInit(): void {
    this.listTasks();
  }


  listTasks() {
    this.tasksService.getTasks().subscribe(
      (res) => {
  
        this.userTasks = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
