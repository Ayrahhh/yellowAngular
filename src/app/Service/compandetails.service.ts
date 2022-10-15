import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompandetailsService {

  url = environment.URL;

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('');
  }

  getCompanById(id:any){
    return this.http.get(`${this.url}/get/${id}`);
  }
   updatedetails(){
    return this.http.put
   }

   deletedetails(id:any){
    return this.http.delete('');
   }
   newdetails(){
    return this.http.post
   }

   foodCategory(){
    return this.http.get(this.url+'/category/food&drinks')
   }

   constructorCategory(){
    return this.http.get(this.url+'/category/construction')
   }

   marineCategory(){
    return this.http.get(this.url+'/category/marine')
   }

   electronCategory(){
    return this.http.get(this.url+'/category/electronics')
   }
}
