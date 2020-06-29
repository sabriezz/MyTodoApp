import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskComponent} from "../task/task.component";
import {TasksService} from "../tasks.service";

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

    //this.myForm.valueChanges.subscribe(console.log);
  }

  printLog(){
   //console.log(this.myForm.value);
   let task = new TaskComponent();
   task.taskTitle = this.myForm.getRawValue().taskTitle;
   task.taskDate = this.myForm.getRawValue().taskDate;
   task.taskStatus = this.myForm.getRawValue().taskStatus;
   task.taskDescription = this.myForm.getRawValue().taskDescription;
   this.task.emit(task);
  }

}
