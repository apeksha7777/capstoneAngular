import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 private routeSub: Subscription = new Subscription;

  constructor(private service:SharedService,private route: ActivatedRoute) { }
  
  product:any;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) 
      console.log(params['id']) 
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
