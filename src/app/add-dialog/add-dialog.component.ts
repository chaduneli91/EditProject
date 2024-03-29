import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../services/main.service';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  
  public image : any;
  

  tagControl: FormControl = new FormControl('', [Validators.required] )

  constructor(public dialogRef:  MatDialogRef <AddDialogComponent>, 
    private _mainService: MainService,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any ){}

  ngOnInit(): void {

    if (this.data) this.tagControl.setValue(this.data.title);  //თუ ერთი ინფუთია setValue
    }

     

  submit(){
    
    if (!this.data) {
      this._mainService.addTag({title: this.tagControl.value }).subscribe(
        () => {
          this.dialogRef.close(true);
        }
      );
      return;
    } 
    if(this.data){
      this._mainService.editTag({ id: this.data.id, title: this.tagControl.value}).subscribe(
      () => {
        this.dialogRef.close(true);
      }
    ); }
  } 
  cancelForm(){
    this.dialogRef.close(false)
  }; 
   
}
