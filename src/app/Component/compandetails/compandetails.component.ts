import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompandetailsService } from 'src/app/Service/compandetails.service';
import { CompaniesService } from 'src/app/Service/companies.service';
import { HomeserviceService } from 'src/app/Service/homeservice.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-compandetails',
  templateUrl: './compandetails.component.html',
  styleUrls: ['./compandetails.component.css']
})
export class CompandetailsComponent {

  id!: number;
  compData: any;
  constructor(private route: ActivatedRoute, private companiesService:CompandetailsService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("Received: ", this.id);
    this.getById()
  }

  getById(){
    return this.companiesService.getCompanById(this.id).subscribe(response=> {
      this.compData = response;
      console.log(this.compData);
      
    })
  }


}
