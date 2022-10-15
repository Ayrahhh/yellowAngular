import { Component, OnInit } from '@angular/core';
import { CompandetailsService } from 'src/app/Service/compandetails.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foodCompan: any;

  constructor(private compDetails: CompandetailsService) { }

  ngOnInit(): void {
    this.fetchFoodCategory()
  }

  fetchFoodCategory(){
    return this.compDetails.foodCategory().subscribe(response => {
      this.foodCompan = response;
      console.log(response);
      
    })
  }

}
