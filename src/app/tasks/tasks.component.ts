import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskComponent} from "../task/task.component";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [
    TasksService
  ],
})
export class TasksComponent {
  todo : Array<TaskComponent> =[];
  doing : Array<TaskComponent> =[];
  done : Array<TaskComponent> =[];

  constructor(tasksService : TasksService) {
    this.todo = tasksService.getToDo();
    this.doing = tasksService.getDoing();
    this.done = tasksService.getDone();
  }

  drop(event: CdkDragDrop<TaskComponent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<TaskComponent>(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem<TaskComponent>(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}


