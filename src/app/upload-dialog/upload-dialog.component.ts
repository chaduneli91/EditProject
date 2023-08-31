import { Component, Inject, OnInit, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  public form!: FormGroup;
  public selectedImage!: File;
  constructor(private _fb: FormBuilder,  private _mainService: MainService,
    @Inject(MAT_DIALOG_DATA) public data: any  ){}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: [''],
      lastName: [''],
      gender: [''],
      age: [''],
      img: ['']
    });
    
  }

  /* select image */
  
  selectImage(event: any){
    if(event.target.files.length > 0){
    const file = this.selectedImage = event.target.files[0];
    this.selectedImage=file;
   }
  }

  submit(){
    this._mainService.upload(this.selectedImage).pipe(
      switchMap((res: any) => {
          this.form.controls['img'].setValue(res['path']);
          return this._mainService.submitImage(this.form.value)
        }
      )
    ).subscribe(
      res => {

      }
    )

    this._mainService.submitImage(this.form.value).subscribe(
      res => {

      }
    )
  }

}
