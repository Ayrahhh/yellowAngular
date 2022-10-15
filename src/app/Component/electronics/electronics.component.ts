import { Component, OnInit } from '@angular/core';
import { CompandetailsService } from 'src/app/Service/compandetails.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  data:any
electronCompan:any
  constructor(private compDetails:CompandetailsService) { }

  ngOnInit(): void {
    this.fetchelectronCategory()
  }
fetchelectronCategory(){
  return this.compDetails.electronCategory().subscribe(response =>{
    this.electronCompan = response;
    console.log(response);
  })
}

}

