import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiPath = environment.URL
  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get(this.apiPath+'/products');

  }

  deleteproduct(){
    return this.http.delete('');
  }

  updateproduct(){
    return this.http.put
    
  }

}
