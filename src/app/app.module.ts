import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.apiUrl)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
