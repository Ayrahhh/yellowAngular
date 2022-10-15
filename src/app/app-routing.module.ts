import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompandetailsComponent } from './Component/compandetails/compandetails.component';
import { CompaniesComponent } from './Component/companies/companies.component';
import { ConstructionComponent } from './Component/construction/construction.component';
import { DashComponent } from './Component/dash/dash.component';
import { ElectronicsComponent } from './Component/electronics/electronics.component';
import { FoodsComponent } from './Component/foods/foods.component';
import { HomeComponent } from './Component/home/home.component';
import { MainComponent } from './Component/main/main.component';
import { MarinesComponent } from './Component/marines/marines.component';
import { ProductComponent } from './Component/product/product.component';
import { ResultComponent } from './Component/result/result.component';

const routes: Routes = [
  {path:'',component:MainComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'construction',component:ConstructionComponent},
    {path:'foods',component:FoodsComponent},
    {path:'eletronics',component:ElectronicsComponent},
    {path:'marines',component:MarinesComponent},
    {path:'compandetails',component:CompandetailsComponent},
    {path:'result',component:ResultComponent}
  ]},
  {path:'dash',component:DashComponent},
  
  {path:'compan',component:CompaniesComponent},
  {path:'product',component:ProductComponent}
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
