import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
// apiPath = environment URL;
  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get('');
  }
   updateconstruct(id:any){
    return this.http.put
   }

   deleteconstruct(){
    return this.http.delete('');
   }
   newconstruct(){
    return this.http.post
   }
  //  getConstructById(id:number){
  //     return this.http.get(this.apiPath+ `/get/${id}` )
  //  }
}

