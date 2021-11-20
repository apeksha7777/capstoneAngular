import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  private routeSub: Subscription = new Subscription;

  constructor(private service:SharedService,private route: ActivatedRoute,private router: Router) { }
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
  delete(product:any){
    
      this.service.deleteProduct(this.product).subscribe(data=>{
      console.log("deleted successfully")
      this.router.navigate(['/adminhome'])
      
    })

  }

}
