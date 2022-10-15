import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CompaniesService } from 'src/app/Service/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']

})

export class CompaniesComponent implements OnInit {
  
   compan: any[] = [];
  orgCompans: any[] = [];
  filterForm: FormGroup = new FormGroup({
    search: new FormControl("", [Validators.required])
  });

  companForm: FormGroup = new FormGroup({
    id: new FormControl("0", [Validators.required]),
    companyName: new FormControl("", [Validators.required]),
    companyLocation: new FormControl("", [Validators.required]),
    companyEmail: new FormControl("", [Validators.required]),
    companyPhonenumber: new FormControl("", [Validators.required]),
    url: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),

  });

  updateForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    companyName: new FormControl(null, [Validators.required]),
    companyLocation: new FormControl(null, [Validators.required]),
    companyEmail: new FormControl(null, [Validators.required]),
    companyPhonenumber: new FormControl(null, [Validators.required]),
    url: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
  });
  data: any;

  constructor(private companiesService: CompaniesService) { }


  ngOnInit(): void {
  this.fetchCompan()

  } 

  filterCompan() {
    this.compan = this.orgCompans.filter(res => res.companName.includes(this.filterForm.controls["search"].value));
  }
  
  fetchCompan(){
     this.companiesService.getcompan().subscribe((response:any)=>{
      // this.orgCompans=response;
      this.compan=response;
      // console.log(this.compan)
     })
  }

  editCompan(c: any) {

    console.log(c);
    

    this.updateForm = new FormGroup({
      id: new FormControl(c.companyId, [Validators.required]),
      companyName: new FormControl(c.companyName, [Validators.required]),
      companyLocation: new FormControl(c.companyLocation, [Validators.required]),
      companyEmail: new FormControl(c.companyEmail, [Validators.required]),
      companyPhonenumber: new FormControl(c.companyPhonenumber, [Validators.required]),
      url: new FormControl(c.url, [Validators.required]),
      category: new FormControl(c.category, [Validators.required]),
    });

    // console.log(this.updateForm.value);
    
  }
 
 

  saveNewCompan() {
    this.companiesService.newcompan(this.companForm.value).subscribe(response => {
      this.fetchCompan();
      alert("Compan has been saved");
      console.log(this.companForm.value)
    }, error => {
      console.log(error);

      alert("Fail to save new compan");
    })

  };
  updatecompan() {
    this.companiesService.updatecompan(1, this.updateForm.value).subscribe(response => {
      this.fetchCompan();
      alert("Compan has been update");
    }, error => {
      alert("Fail to update new compan");
    })
  };

  deletecompan(compan:any){
    const d = this.updateForm.value;
    this.companiesService.deletecompan(d.id).subscribe(response=>{
      this.fetchCompan();
      alert("Compan has been deleted");
    },error=>{
      this.fetchCompan();
      alert("delete successfully");
    })
  }
}

