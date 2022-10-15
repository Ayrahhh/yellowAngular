import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:any[]=[];
  orgProducts:any[]=[];
  filterForm:FormGroup=new FormGroup({
    search:new FormControl("",[Validators.required])
  });
  
  productForm:FormGroup=new FormGroup({
    id:new FormControl("0",[Validators.required]),
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl("",[Validators.required]),
    productsize:new FormControl("",[Validators.required]),
  
  });
  updateForm:FormGroup=new FormGroup({
    id:new FormControl("",[Validators.required]),
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl("",[Validators.required]),
    productsize:new FormControl("",[Validators.required]),
  });
  data: any;


  constructor( private productservice:ProductService) { }

  editProduct(product:any){
    this.updateForm=new FormGroup({
      id:new FormControl(product.id,[Validators.required]),
      productname:new FormControl(product.productname,[Validators.required]),
      productprice:new FormControl(product.productprice,[Validators.required]),
      productsize:new FormControl(product.dumpLocation,[Validators.required])
    });
  }
  
  ngOnInit(): void {
    this.fetchProducts()
  }
  filterProduct(){
    this.product=this.orgProducts.filter(res=>res.productname.includes(this.filterForm.controls["search"].value));
  }
  fetchProducts(){
    this.productservice.getproduct().subscribe((response: any) =>{
      // this.orgProducts=response;
      this.product = response;
      console.log(this.product)
    });
  }
  saveNewProduct(){
    this.productservice.getproduct().subscribe(_response=>{
      this.fetchProducts();
      alert("Compan has been saved");
      console.log(this.productForm.value)
    },error=>{
      console.log(error);
      
      alert("Fail to save new compan");
    })
   
  };
  // updateproduct(){
  //   // his.productservice.updateproduct(this.updateForm.controls["id"].value,this.updateForm.value).subscribe(response=>{
  //   this.productservice.updateproduct().subscribe(response=>{
  //     this.fetchProducts();
  //     alert("Compan has been update");
  //     console.log(this.productForm.value)
  //   },(_error: any)=>{
  //     alert("Fail to update new compan");
  //   })
  // };
  
  deleteproduct(_product:any){
    const d = this.updateForm.value;
    //ntakuja kuingiza id
    this.productservice.deleteproduct().subscribe(_response=>{
      this.fetchProducts();
      alert("Compan has been deleted");
    },_error=>{
      this.fetchProducts();
      alert("delete successfully");
    })
  }
  
  

}
  function deleteproduct(_product: any, _any: any) {
    throw new Error('Function not implemented.');
  }

