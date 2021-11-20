import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
 private routeSub: Subscription = new Subscription;

  constructor(private service:SharedService,private route: ActivatedRoute) { }
  product:any;
  
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.productDetails(params['id']);
    });
    
  }

  productDetails(id:any){
    this.service.getProductDetials(id).subscribe(data=>{
      console.log("the data recieved",data);
      this.product=data;
    })
  }

}
