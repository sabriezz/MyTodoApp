import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: TaskComponent;
  taskTitle: string;
  taskDate: string;
  taskStatus :number;
  taskDescription :string;

  constructor() {
  }
  aconstructor(taskTitle ?: string, taskDate ?: string, taskStatus ?: number, taskDescription?:string){
    this.taskTitle = taskTitle;
    this.taskDate = taskDate;
    this.taskStatus = taskStatus;
    this.taskDescription = taskDescription;
  }
}
