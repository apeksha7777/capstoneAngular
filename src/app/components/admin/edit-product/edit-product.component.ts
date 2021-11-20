import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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
      this.product=data;
    })
  }
  editProduct(formProduct:any)
  {
    console.log("edit caleeed")
      formProduct.Id=this.product.id;
      this.service.updateProduct(formProduct).subscribe(data=>{
      console.log("updated successfully");
      this.router.navigate(['/adminhome'])
      
    })
  }
}
