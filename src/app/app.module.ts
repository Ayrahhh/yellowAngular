import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Component/main/main.component';
import { HomeComponent } from './Component/home/home.component';
import { DashComponent } from './Component/dash/dash.component';
import { ConstructionComponent } from './Component/construction/construction.component';
import { ElectronicsComponent } from './Component/electronics/electronics.component';
import { FoodsComponent } from './Component/foods/foods.component';
import { MarinesComponent } from './Component/marines/marines.component';
import { ResultComponent } from './Component/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CompandetailsComponent } from './Component/compandetails/compandetails.component';
import { ProductComponent } from './Component/product/product.component';
import { CompaniesComponent } from './Component/companies/companies.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
// import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

// import { DragDirective } from './drag.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DashComponent,
    ConstructionComponent,
    ElectronicsComponent,
    FoodsComponent,
    MarinesComponent,
    CompandetailsComponent,
    ProductComponent,
    CompaniesComponent,
    ResultComponent
    
    
    // DragDirective,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressBarModule,
    MatToolbarModule
    
    
   
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
