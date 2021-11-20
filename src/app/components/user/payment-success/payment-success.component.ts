import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor() { }

  cartList:any;
  cartTotal:any=0;

  ngOnInit(): void {
    this.cartList=JSON.parse(sessionStorage.getItem("cart")||'null');
    for(var i=0;i<this.cartList.length;i++)
    {
      this.cartTotal +=parseInt(this.cartList[i].price)*parseInt(this.cartList[i].quantity);
    }
    sessionStorage.removeItem("cart");
  }

}
