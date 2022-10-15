import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get('');
  }
   updateelectric(id:any){
    return this.http.put
   }

   deleteelectric(){
    return this.http.delete('');
   }
   newelectric(){
    return this.http.post
   }
}
