import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }


  getData(){
    return this.http.get('');
  }
   updatefood(id:any){
    return this.http.put
   }

   deletefood(){
    return this.http.delete('');
   }
   newfood(){
    return this.http.post
   }
}
