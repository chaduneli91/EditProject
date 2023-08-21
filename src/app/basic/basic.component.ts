
import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  
  tags$!: Observable<any[]>;
  

  constructor(private _mainService: MainService, private _matDialog : MatDialog){}

  ngOnInit(): void { 
    this._getTags();
  }
  private _getTags(){
    this.tags$ =this._mainService.getTags();
  }
  
  add( tag? : any) {
    const dialog  = this._matDialog.open(AddDialogComponent,{
      data: tag
    } );
    dialog.afterClosed().subscribe(
      res => {
        if (res) {
          this._getTags();
        }
      }
    )
    
  }

  delete(tagId: any){
    const dialog  = this._matDialog.open(DeleteDialogComponent,{} )

    dialog.afterClosed().subscribe(
      res => {
        if (res) {
          this._mainService.deleteTag(tagId).subscribe(
            () => {
              this._getTags();
            }
          )
        }
        console.log(res);
      }
    )
  }
  

  
}
