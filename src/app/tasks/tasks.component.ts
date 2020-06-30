import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskComponent} from "../task/task.component";
import {TasksService} from "../tasks.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  flag = 0;
  change: FormGroup;


  update(){
    localStorage.setItem('todo', JSON.stringify(this.todo));
    localStorage.setItem('doing', JSON.stringify(this.doing));
    localStorage.setItem('done', JSON.stringify(this.done));
  }

  drop(event: CdkDragDrop<TaskComponent[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<TaskComponent>(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem<TaskComponent>(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.update();
  }

  delete(i: number,array:number){
    if(array===0){
        this.todo.splice(i, 1);
    }else if(array===1){
        this.doing.splice(i, 1);
    }else{
        this.done.splice(i,1);
    }
    this.update();
  }

}


