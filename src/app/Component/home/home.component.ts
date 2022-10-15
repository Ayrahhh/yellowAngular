import { ReturnStatement } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/Service/Company';
import { HomeserviceService } from 'src/app/Service/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 comp$!:Observable<Company[]>;
 filtercomps$!:Observable<Company[]>;
  compan: any[] = [];
  compancount: any;
  orgCompans: any[] = [];
  search: any;
  filterForm!: FormGroup;
data: any;

 

  constructor(private homeservice: HomeserviceService, 
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  //  this.comp$ = this.homeservice.getcompan();
  //  this.filtercomps$ = this.comp$;
    this.fetchCompans()
    // this.activitiesFiltered();
    this.initForm();
  }
 
// onfilter(event:any){
//   const query = event.target.value.toLowerCase();
//   if (query.length < 3) return;

//   this.filtercomps$ = this.comp$.pipe(
//     map((xx) =>{
//       return xx.filter((xx) => {
//         if (xx.companyName?.toLowerCase()?.includes(query)) return true;
//         if (xx.companyLocation?.toLowerCase()?.includes(query)) return true;
//       })
//     })
//   )
// }

  initForm() {
    this.filterForm = this.fb.group({
      "comp": [""]
    })
    this.filterForm.get("comp")?.valueChanges.subscribe((response: any) => {
      // console.log("Form data: ", response);
      // this.fetchCompans()
      this.filterByName(response);
      if (response === "") {
        this.fetchCompans()
      }
    })
  }

  filterByName(enteredData: any) {
    this.compan = this.compan.filter((item) => {

    return item.companyName.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
      //console.log("Item: ", item.companyName);
      // this.compan = item;
     


      // this.compan = item;
      // return enteredData;

  })
  }
  



  fetchCompans() {
    this.homeservice.getcompan().subscribe((response: any) => {
      this.orgCompans = response;
      this.compan = response;
      // console.log(response)
    }, error => {
      console.log(error);

    })
  }

  goToCompan(id: any){
    // this.compan = d;
    // this.data = d;
    // console.log("data to be passed: ",this.data);
    
    this.router.navigate(['/compandetails',{id}])
  }

  goToResult(){
    this.router.navigate(['/result'])
  }
  goToSearch(search: any){
    this.router.navigate(['/home',{search}])
  }

  getsearch(){
    var q = (this.filterForm.get('comp')?.value);
    this.homeservice.getsearch(q).subscribe((response:any) =>{
      this.homeservice.data=response;
      this.goToResult()
    },(error) => {
      console.log(error);
      
    })
  }


}

