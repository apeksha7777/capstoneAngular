import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/user/details/details.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ProductDetailsComponent } from './components/admin/product-details/product-details.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/admin/delete-product/delete-product.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { CartComponent } from './components/user/cart/cart.component';
import { PaymentSuccessComponent } from './components/user/payment-success/payment-success.component';
import { Pipe, PipeTransform } from '@angular/core'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    AdminHomeComponent,
    ProductDetailsComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    CartComponent,
    PaymentSuccessComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
