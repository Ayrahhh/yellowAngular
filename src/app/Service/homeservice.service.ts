import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  data:any;
  apiPath = environment.URL
  constructor(private http:HttpClient){ }
  // getData(){
  //   return this.http.get('http://192.168.0.//')
  //   .pipe(
  //     map((response:any) => response.map((item: { [x: string]: any; }) => item['name']))
  //   )
  // }

  getcompan(){
    return this.http.get(this.apiPath+'/get');
  }

  getsearch(search: string){
    return this.http.get(`${this.apiPath}/${search}`)
  }
}
