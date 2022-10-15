import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'

})
export class CompaniesService {
 


  apiPath = environment.URL

  constructor(private http:HttpClient) { }

 


  getcompan(){
    return this.http.get(this.apiPath+'/get');
  }
   updatecompan(id:any, data: any){
    return this.http.put(this.apiPath+`/put/${id}`, data)
   }

   deletecompan(id:number){
    return this.http.delete('');
   }
   newcompan(data: any){
    return this.http.post(this.apiPath+'/post', data)
   }

   getCompanById(id: number){
    return this.http.get(this.apiPath+ `/get/${id}`)
   }
  }
