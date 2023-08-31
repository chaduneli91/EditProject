import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MainService implements OnInit {

  readonly ROOT_URL =environment.apiUrl;
  
  constructor( private _http: HttpClient ) { }
  ngOnInit(): void {}


  getTags(): Observable<any[]> {
    return this._http.get<any[]>(`${this.ROOT_URL}/add`);
  }
  addTag(data: any) {
    return this._http.post(`${this.ROOT_URL}/add`, data );
  }

  deleteTag(tagId: string){
    return this._http.delete(`${this.ROOT_URL}/add/${tagId}`);
  }
 
  editTag(data: {id: string, title: string}){
    return this._http.put(`${this.ROOT_URL}/add/${data.id}`, data);
  }



  
  upload(file: File){
    let formData = new FormData();
    formData.append('img', file)
    return this._http.post(`${this.ROOT_URL}/add`, formData) // url მისმაართი არასწორადაა
  }
  submitImage(data : any){
    return this._http.post(`${this.ROOT_URL}/add`, data) // ეს არგუმენტები და მისმაართი არასწორადაა
  }
}
