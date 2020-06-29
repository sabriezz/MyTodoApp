import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  @Input() task: TaskComponent;
  taskTitle: string;
  taskDate: string;
  taskStatus :number;
  taskDescription :string;

  constructor() {
  }

  ngOnInit() {
      //console.log(this.task);
  }

}
