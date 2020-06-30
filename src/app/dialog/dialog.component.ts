import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../tasks/tasks.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
  myForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      taskTitle: '',
      taskDate: '',
      taskStatus: 0,
      taskDescription: ''
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
