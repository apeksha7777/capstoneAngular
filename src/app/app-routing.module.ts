import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product/:id',component:DetailsComponent,pathMatch: 'full'},
  {path:'user/:id',component:HomeComponent,pathMatch: 'full'},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'admin/productDetails/:id',component:ProductDetailsComponent,pathMatch: 'full'},
  {path:'admin/edit/:id',component:EditProductComponent,pathMatch: 'full'},
  {path:'admin/delete/:id',component:DeleteProductComponent,pathMatch: 'full'},
  {path:'admin/addProduct',component:AddProductComponent,pathMatch: 'full'},
  {path:'cart',component:CartComponent},
  {path:'paymentSuccess',component:PaymentSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
