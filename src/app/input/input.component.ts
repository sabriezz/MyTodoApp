import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskComponent} from "../task/task.component";
import {TasksService} from "../tasks.service";
import * as moment from 'moment';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  myForm: FormGroup;
  @Output() task = new EventEmitter<TaskComponent>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskTitle: '',
      taskDate: '',
      taskStatus: 0,
      taskDescription: ''
    });
  }
  reset(){
    this.myForm = this.fb.group({
      taskTitle: '',
      taskDate: '',
      taskStatus: 0,
      taskDescription: ''
    });
  }
  addTask(){
   //console.log(this.myForm.value);
   let task = new TaskComponent();
   task.taskTitle = this.myForm.getRawValue().taskTitle;
   let date = this.myForm.getRawValue().taskDate;
   if(date === ''){
     const momentDate = new Date();
     const formattedDate  = moment(momentDate).format("DD/MM/YYYY");
     task.taskDate= formattedDate;
   }else{
     const momentDate = new Date(date);
     const formattedDate  = moment(momentDate).format("DD/MM/YYYY");
     task.taskDate=formattedDate;
   }
   task.taskStatus = this.myForm.getRawValue().taskStatus;
   task.taskDescription = this.myForm.getRawValue().taskDescription;
   this.task.emit(task);
   this.reset();
   this.myForm.reset();
  }

}
