import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class SharedService {
  readonly APIUrl="http://localhost:9290/api";


  constructor(private http:HttpClient,private router: Router) { }
  loginCorrect:boolean=true;
 

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User');
  }

  getProductList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/adminproducts');
  }

  getProductDetials(val:any){
    return this.http.get(this.APIUrl+'/product/'+val,val);
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/adminproducts/addProduct/',val);
  }

  updateProduct(val:any){
    console.log(val,"ee")
    return this.http.put(this.APIUrl+'/adminproducts/editProduct/'+val.id,val);
  }

  deleteProduct(val:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: val
    };

    return this.http.delete(this.APIUrl+'/adminproducts/deleteProduct/'+val.Id, options);
    
  }



  login(userList:any,loginData:any)
  {
    console.log(loginData,"loginnn");
    if(loginData.username=='admin'&&loginData.password=='admin')
    {
      this.loginCorrect=true;
      
      var currentUser={userId:1,userName:'admin'};
      sessionStorage.setItem('currentUser',JSON.stringify(currentUser));
      sessionStorage.setItem('userName',JSON.stringify(currentUser.userName));
     
      this.router.navigate(['/adminhome']);

    }
    else{
    var result  = userList.filter(function(o:any){return o.userName==loginData.username && o.password == loginData.password} );
    var user= result? result[0] : null;
   
    console.log(user,"user");
    if(user)
    {
      this.loginCorrect=true;
      
      currentUser={userId:user.id,userName:user.userName};
      sessionStorage.setItem('currentUser',JSON.stringify(currentUser));
      sessionStorage.setItem('userName',JSON.stringify(currentUser.userName));
     
      this.router.navigate(['/user/'+user.id]);
    }
    else{
      this.loginCorrect=false;
    }
  }

  }
  registerUser(val:any){
    return this.http.post(this.APIUrl+'/User/addUser',val);

  }
  logout(){
    sessionStorage.clear();
  }

  addToCart(val:any){
    if(sessionStorage.getItem("cart"))
    {
      var cart=this.getCartItems();
      var product=cart.find((x:any) => x.id == val.id);

      if(product)
      {
        for (var i = 0; i < cart.length; i++)
        {
            if (cart[i].id == product.id)
            {
              cart[i].quantity++;
              break;
            }
        }
      
     }
      else
      {
          val.quantity=1;
          cart.push(val);
      }

      sessionStorage.setItem("cart",JSON.stringify(cart));
        
    }
    else{
      val.quantity=1;
      var cartArray=[];
      cartArray.push(val);
      sessionStorage.setItem("cart",JSON.stringify(cartArray));

    }
  }

  getCartItems(){
    var cart=JSON.parse(sessionStorage.getItem("cart")||'null');
    return cart;
  }

}
