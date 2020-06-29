import {Component, Input, OnInit} from '@angular/core';
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
  @Input() todo : Array<TaskComponent> =[];
  @Input() doing : Array<TaskComponent> =[];
  @Input() done : Array<TaskComponent> =[];

  drop(event: CdkDragDrop<TaskComponent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<TaskComponent>(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem<TaskComponent>(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}


