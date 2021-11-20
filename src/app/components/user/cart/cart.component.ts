import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service:SharedService,public router: Router) { }

  strikeCheckout:any = null;
  cartList:any={};
  cartTotal:any=0;

  ngOnInit(): void {
    this.getCartItems();
    this.stripePaymentGateway();
  }

  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jc8eoSChZXLAWtZQhX2hNNqhGXUNQK0udYqXBMmpayUdIdAXMJEVU8IkMs6hiXYltW8DXzJrZcnIc3CsARwJUvA00CL3YY96H',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          } 
        }); 
      } 
      window.document.body.appendChild(scr);
    }
  }


  getCartItems(){
    this.cartList=JSON.parse(sessionStorage.getItem("cart")||'null');
    this.calcBill();

   
  }

  calcBill(){
    this.cartList=JSON.parse(sessionStorage.getItem("cart")||'null');
    this.cartTotal=0;
    for(var i=0;i<this.cartList.length;i++)
    {
      this.cartTotal +=parseInt(this.cartList[i].price)*parseInt(this.cartList[i].quantity);
    }

  }
  
  checkout(amount:any,router:any) {
    
    const strikeCheckout =  (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jc8eoSChZXLAWtZQhX2hNNqhGXUNQK0udYqXBMmpayUdIdAXMJEVU8IkMs6hiXYltW8DXzJrZcnIc3CsARwJUvA00CL3YY96H',
      locale: 'auto',
      token(stripeToken: any){
        alert('Stripe token generated!');
        router.navigate(['/paymentSuccess'])
        }
     
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  removeItem(id:any){
    this.cartList=JSON.parse(sessionStorage.getItem("cart")||'null');
    this.cartList=this.cartList.filter((x:any)=>x.id!=id);
    console.log(this.cartList,"tttttttttt");
    sessionStorage.setItem("cart",JSON.stringify(this.cartList));
    if(this.cartList.length==0)
    this.cartTotal=0;
    else
    this.calcBill();
  }

}
