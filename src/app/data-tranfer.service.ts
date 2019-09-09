import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataTranferService {

  rous = "http://localhost:3000/fData/Dynamic";
  constructor(private http:HttpClient ) { }

  onSubmitFormData(formData):Observable<any>{

    return this.http.post<any>(this.rous,formData)
  }
}
