import { Component, OnInit } from '@angular/core';
import { CompandetailsService } from 'src/app/Service/compandetails.service';

@Component({
  selector: 'app-marines',
  templateUrl: './marines.component.html',
  styleUrls: ['./marines.component.css']
})
export class MarinesComponent implements OnInit {
  marineCompan:any
  data:any
  constructor(private compdetailsService:CompandetailsService) { }

  ngOnInit(): void {
   this. fetchmarineCategory()
  }
  fetchmarineCategory(){
    return this.compdetailsService.marineCategory().subscribe(response =>{
      this.marineCompan = response;
      console.log(response);
    })
  }

}
