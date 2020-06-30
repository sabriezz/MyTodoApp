import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskComponent} from "../task/task.component";
import {TasksService} from "../tasks.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import * as moment from "moment";

export interface DialogData {
  taskTitle: string;
  taskDate: string;
  taskDescription: string;
}

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
  i = -1;
  array = -1;

  change: FormGroup;

  constructor(public dialog: MatDialog) {}

  openDialog(i:number, array:number): void {
    this.i = i;
    this.array = array;
    var arr: Array<TaskComponent>;
    if(array===0){
      arr = this.todo;
    }else if(array===1){
      arr = this.doing;
    }else{
      arr = this.done;
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {taskTitle :arr[i].taskTitle,
            taskDate: arr[i].taskDate,
            taskDescription: arr[i].taskDescription}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result ==undefined){
        this.i = -1;
        this.array = -1;
      }else{
        var date;
        if(result.taskDate.length>0){
          date = result.taskDate;
        }else{
          const momentDate = new Date(result.taskDate);
          const formattedDate  = moment(momentDate).format("DD/MM/YYYY");
          date =formattedDate;
        }

        if(this.array===0){
          this.todo[i].taskTitle=result.taskTitle;
          this.todo[i].taskDescription=result.taskDescription;
          this.todo[i].taskDate=date;
        }else if(this.array===1){
          this.doing[i].taskTitle=result.taskTitle;
          this.doing[i].taskDescription=result.taskDescription;
          this.doing[i].taskDate=date;
        }else{
          this.done[i].taskTitle=result.taskTitle;
          this.done[i].taskDescription=result.taskDescription;
          this.done[i].taskDate=date;
        }
        this.update();
      }
    });
  }

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


