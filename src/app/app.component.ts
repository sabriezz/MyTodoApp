import { Component } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    TasksService
  ],
})
export class AppComponent {
  title = 'TODOAPP';
  todo : Array<TaskComponent> =[];
  doing : Array<TaskComponent> =[];
  done : Array<TaskComponent> =[];

  constructor(tasksService : TasksService) {
    this.todo = tasksService.getToDo();
    this.doing = tasksService.getDoing();
    this.done = tasksService.getDone();
  }

  getTask(event: TaskComponent){
    if(event.taskStatus==0){
      this.todo.push(event);
    }else if(event.taskStatus==1){
      this.doing.push(event);
    }else{
      this.done.push(event);
    }
  }
}
