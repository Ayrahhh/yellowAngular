import { Component, OnInit } from '@angular/core';
import { CompandetailsService } from 'src/app/Service/compandetails.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
 constructCompan:any;
data: any;
  constructor(private compDetails:CompandetailsService) { }

  ngOnInit(): void {
    this.fetchconstructCategory()
  }

  fetchconstructCategory(){
    return this.compDetails.constructorCategory().subscribe(response =>{
      this.constructCompan = response;
      console.log(response);
    })
  }
}

// fetchFoodCategory(){
//   return this.compDetails.foodCategory().subscribe(response => {
//     this.foodCompan = response;
//     console.log(response);
    
//   })
// }

