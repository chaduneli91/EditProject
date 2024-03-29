import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private _dialogRef:  MatDialogRef <DeleteDialogComponent>){}
  ngOnInit(): void {  }

  yesForm(){
    this._dialogRef.close(true);
  }
  cancelForm(){
    this._dialogRef.close(false)
  };
  
}
