import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  myForm: FormGroup;

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
   console.log(this.myForm.value);

  }

}
