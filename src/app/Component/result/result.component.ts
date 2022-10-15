import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/Service/homeservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result:any;
  constructor(private homeservice:HomeserviceService) { }

  ngOnInit(): void {
   this.result = this.homeservice.data;
   console.log("onresult",this.result);
  }


}
